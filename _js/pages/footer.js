new Vue({
  el: '#footer-app',
  data: {
    company: { ...COMPANY_FALLBACK }
  },
  async created() {
    this.company = await fetchCompanyInfo();
  },
  computed: {
    displayAddress() {
      const c = this.company;
      if (!c) return '';
      return [c.address_line1, c.city, c.state].filter(Boolean).join(', ');
    }
  }
});
