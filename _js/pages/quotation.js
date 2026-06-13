new Vue({
  el: '#quotation-section',
  data: {
    pageMode: 'new', // 'new' | 'view'

    // New quotation — product search
    SEARCH_QUERY: '',
    QUOTATION_ITEMS: [],
    filteredResults: [],
    customerName: '',
    customerEmail: '',
    saving: false,
    saveSuccess: false,
    saveError: null,
    savedReference: null,
    isClone: false,
    clonedFromReference: null,

    // Quotation search (find existing)
    qtSearchQuery: '',
    qtSearchResults: [],
    qtSearching: false,
    showQtResults: false,

    // Viewed quotation (read-only)
    viewedQuotation: null,
    viewedItems: [],
    loadingQuotation: false,
    emailHistory: [],

    // Email sending
    sendingEmail: false,
    emailSuccess: false,
    emailError: null,
  },

  computed: {
    itemCount: function () {
      return this.QUOTATION_ITEMS.length;
    },
    subtotal: function () {
      return this.QUOTATION_ITEMS.reduce(function (sum, item) {
        return sum + (parseFloat(item.subtotal) || 0);
      }, 0);
    },
    grandTotal: function () {
      return this.subtotal;
    },
  },

  methods: {
    // ── Product search (new quotation) ─────────────────────────────────────
    onSearchInput: function () {
      if (this.SEARCH_QUERY === '') { this.filteredResults = []; return; }
      this.fetchDBDataSearch();
    },
    fetchDBDataSearch: async function () {
      const results = await searchProducts(this.SEARCH_QUERY);
      this.filteredResults = results;
    },
    getTruncatedDescription: function (description) {
      if (!description) return '';
      return description.length > 50 ? description.slice(0, 50) + '…' : description;
    },
    resetSearch: function () {
      this.SEARCH_QUERY = '';
      this.filteredResults = [];
    },
    isDuplicated: function (asset_id) {
      return this.QUOTATION_ITEMS.some(function (item) { return item.asset_id === asset_id; });
    },
    pickItem: function (item) {
      if (this.isDuplicated(item.asset_id)) return;
      this.resetSearch();
      const price      = parseFloat(item.amount) || 0;
      const sourceName = item.name || item.display_name || 'Unnamed Item';
      this.QUOTATION_ITEMS.push({
        asset_id:            item.asset_id || null,
        item_name:           sourceName, // seller-editable display name
        original_item_name:  sourceName, // preserved source name (read-only)
        quantity:    1,
        unit_price:  price,
        subtotal:    price,
      });
    },
    addManualItem: function () {
      this.QUOTATION_ITEMS.push({
        asset_id:           null,
        item_name:          '',
        original_item_name: null,
        quantity:    1,
        unit_price:  0,
        subtotal:    0,
      });
    },
    removeItem: function (index) {
      this.QUOTATION_ITEMS.splice(index, 1);
      this.saveSuccess = false;
    },
    updateSubtotal: function (item) {
      item.subtotal = (parseFloat(item.quantity) || 0) * (parseFloat(item.unit_price) || 0);
    },

    // ── Formatting helpers ──────────────────────────────────────────────────
    formatAmount: function (val) {
      const num = parseFloat(val) || 0;
      return num.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
    },
    formatDate: function (dateStr) {
      if (!dateStr) return '—';
      return new Date(dateStr).toLocaleDateString('en-US', {
        year: 'numeric', month: 'short', day: 'numeric',
      });
    },

    // ── Save new quotation ──────────────────────────────────────────────────
    saveQuotation: async function () {
      if (this.QUOTATION_ITEMS.length === 0) return;
      this.saving = true;
      this.saveError = null;
      this.saveSuccess = false;
      this.savedReference = null;

      try {
        const session = await getSellerSession();
        if (!session) { this.saveError = 'You must be logged in to save a quotation.'; return; }

        const { data: reference, error: refErr } = await _supabase.rpc('next_quotation_reference');
        if (refErr) throw new Error('Could not generate quotation reference: ' + refErr.message);

        const insertData = {
          seller_id: session.user.id,
          reference: reference,
          customer_name: this.customerName || null,
          customer_email: this.customerEmail || null,
          item_count: this.itemCount,
          subtotal: this.subtotal,
          grand_total: this.grandTotal,
          status: 'saved',
        };
        if (this.isClone && this.clonedFromReference) {
          insertData.cloned_from = this.clonedFromReference;
        }

        const { data: quot, error: quotErr } = await _supabase
          .from('quotations')
          .insert(insertData)
          .select()
          .single();
        if (quotErr) throw new Error(quotErr.message);

        const itemRows = this.QUOTATION_ITEMS.map(function (item, idx) {
          return {
            quotation_id:       quot.id,
            asset_id:           item.asset_id || null,
            item_name:          item.item_name || 'Unnamed Item',
            original_item_name: item.original_item_name || null,
            quantity:   parseFloat(item.quantity)   || 1,
            unit_price: parseFloat(item.unit_price) || 0,
            subtotal:   parseFloat(item.subtotal)   || 0,
            sort_order: idx,
          };
        });

        const { error: itemsErr } = await _supabase.from('quotation_items').insert(itemRows);
        if (itemsErr) throw new Error(itemsErr.message);

        this.savedReference = reference;
        this.saveSuccess = true;
        this.QUOTATION_ITEMS = [];
        this.customerName = '';
        this.customerEmail = '';
        this.isClone = false;
        this.clonedFromReference = null;
      } catch (e) {
        this.saveError = e.message || 'An unexpected error occurred.';
      } finally {
        this.saving = false;
      }
    },
    dismissSuccess: function () {
      this.saveSuccess = false;
      this.savedReference = null;
      this.isClone = false;
      this.clonedFromReference = null;
    },

    // ── Quotation search ────────────────────────────────────────────────────
    onQtSearchInput: function () {
      if (this.qtSearchQuery.trim().length < 2) {
        this.qtSearchResults = [];
        this.showQtResults = false;
        return;
      }
      this.searchQuotations();
    },
    searchQuotations: async function () {
      this.qtSearching = true;
      try {
        const q = this.qtSearchQuery.trim();
        const { data, error } = await _supabase
          .from('quotations')
          .select('id, reference, customer_name, customer_email, grand_total, created_at, status, last_sent_at, last_sent_to')
          .or('reference.ilike.%' + q + '%,customer_name.ilike.%' + q + '%,customer_email.ilike.%' + q + '%,created_at::text.ilike.%' + q + '%')
          .order('created_at', { ascending: false })
          .limit(10);
        if (error) throw error;
        this.qtSearchResults = data || [];
        this.showQtResults = this.qtSearchResults.length > 0;
      } catch (e) {
        this.qtSearchResults = [];
        this.showQtResults = false;
      } finally {
        this.qtSearching = false;
      }
    },
    hideQtResultsDelayed: function () {
      setTimeout(() => { this.showQtResults = false; }, 200);
    },
    selectQuotation: async function (result) {
      this.showQtResults = false;
      this.qtSearchQuery = result.reference;
      await this.loadQuotation(result.id);
    },

    // ── View mode ───────────────────────────────────────────────────────────
    loadQuotation: async function (id) {
      this.loadingQuotation = true;
      this.pageMode = 'view';
      this.viewedQuotation = null;
      this.viewedItems = [];
      this.emailHistory = [];
      this.emailSuccess = false;
      this.emailError = null;

      try {
        const [quotRes, itemsRes, emailsRes] = await Promise.all([
          _supabase.from('quotations').select('*').eq('id', id).single(),
          _supabase.from('quotation_items').select('*').eq('quotation_id', id).order('sort_order'),
          _supabase.from('quotation_emails').select('*').eq('quotation_id', id).order('sent_at', { ascending: false }),
        ]);
        if (quotRes.error) throw new Error(quotRes.error.message);
        this.viewedQuotation = quotRes.data;
        this.viewedItems = itemsRes.data || [];
        this.emailHistory = emailsRes.data || [];
      } catch (e) {
        this.viewedQuotation = null;
        this.pageMode = 'new';
      } finally {
        this.loadingQuotation = false;
      }
    },
    backToNew: function () {
      this.pageMode = 'new';
      this.viewedQuotation = null;
      this.viewedItems = [];
      this.emailHistory = [];
      this.emailSuccess = false;
      this.emailError = null;
      // QUOTATION_ITEMS, customerName, customerEmail, isClone, clonedFromReference
      // are intentionally preserved so in-progress work survives a view round-trip
    },

    // ── Email ───────────────────────────────────────────────────────────────
    sendQuotation: async function () {
      if (!this.viewedQuotation || !this.viewedQuotation.customer_email) return;
      this.sendingEmail = true;
      this.emailError = null;
      this.emailSuccess = false;

      try {
        const { data, error } = await _supabase.functions.invoke('send-quotation', {
          body: { quotation_id: this.viewedQuotation.id },
        });
        if (error) throw new Error(error.message);
        if (data && data.error) throw new Error(data.error);

        this.emailSuccess = true;
        this.viewedQuotation.last_sent_at = new Date().toISOString();
        this.viewedQuotation.last_sent_to = this.viewedQuotation.customer_email;
        await this.loadEmailHistory(this.viewedQuotation.id);
      } catch (e) {
        this.emailError = e.message || 'Email delivery failed. Ensure RESEND_API_KEY is configured in Supabase.';
      } finally {
        this.sendingEmail = false;
      }
    },
    loadEmailHistory: async function (quotation_id) {
      const { data } = await _supabase
        .from('quotation_emails')
        .select('*')
        .eq('quotation_id', quotation_id)
        .order('sent_at', { ascending: false });
      this.emailHistory = data || [];
    },

    // ── Clone ───────────────────────────────────────────────────────────────
    cloneQuotation: function () {
      if (!this.viewedQuotation) return;

      // Pre-fill new quotation form from the viewed quotation
      this.customerName  = this.viewedQuotation.customer_name  || '';
      this.customerEmail = this.viewedQuotation.customer_email || '';
      this.QUOTATION_ITEMS = this.viewedItems.map(function (item) {
        return {
          asset_id:           item.asset_id || null,
          item_name:          item.item_name, // inherit saved display name
          original_item_name: item.original_item_name || item.item_name,
          quantity:   parseFloat(item.quantity)   || 1,
          unit_price: parseFloat(item.unit_price) || 0,
          subtotal:   parseFloat(item.subtotal)   || 0,
        };
      });

      this.isClone = true;
      this.clonedFromReference = this.viewedQuotation.reference;

      // Clear view-mode state and switch to new mode
      this.pageMode        = 'new';
      this.viewedQuotation = null;
      this.viewedItems     = [];
      this.emailHistory    = [];
      this.emailSuccess    = false;
      this.emailError      = null;
      this.saveSuccess     = false;
      this.saveError       = null;
      this.savedReference  = null;

      window.scrollTo({ top: 0, behavior: 'smooth' });
    },
  },
});
