new Vue({
  el: '#seller-login-app',
  data: {
    email: '',
    password: '',
    loading: false,
    error: null
  },
  async created() {
    // Already logged in — redirect away from login page
    const session = await getSellerSession();
    if (session) {
      window.location.href = this.redirectTarget();
    }
  },
  methods: {
    redirectTarget() {
      var params = new URLSearchParams(window.location.search);
      return params.get('redirect') || 'index.html';
    },
    async login() {
      this.error = null;
      if (!this.email || !this.password) {
        this.error = 'Please enter your email and password.';
        return;
      }
      this.loading = true;
      try {
        await signInSeller(this.email.trim(), this.password);

        // Update last_login_at in sellers table
        const user = await getSellerUser();
        if (user) {
          await _supabase
            .from('sellers')
            .update({ last_login_at: new Date().toISOString() })
            .eq('id', user.id);
        }

        window.location.href = this.redirectTarget();
      } catch (e) {
        if (e.message && e.message.toLowerCase().includes('invalid')) {
          this.error = 'Invalid email or password. Please try again.';
        } else {
          this.error = 'Login failed. Please try again later.';
        }
      } finally {
        this.loading = false;
      }
    }
  }
});
