// Folders excluded from the customer-facing shop UI.
// "My Brand" contains internal branding assets — not for public browsing.
// The Cloudinary folder itself is not modified; this is a UI-only filter.
const SHOP_EXCLUDED_FOLDERS = ['My Brand'];

new Vue({
  el: "#app",
  data: {
    fetchedData: [],
    fetchedFilferdData: [],
    SEARCH_QUERY: "",
    folderNames: [],
    selectedFolderName: "",
    pageVisibilityLock: true,
  },
  async created() {
    await this.loadFolders();
  },
  methods: {
    async loadFolders() {
      const allFolders = await fetchFolders();
      // Exclude internal/brand folders from customer-facing navigation
      const publicFolders = allFolders.filter(f => !SHOP_EXCLUDED_FOLDERS.includes(f.name));
      this.folderNames = publicFolders;
      this.selectedFolderName = publicFolders.length > 0 ? publicFolders[0].name : '';
      const products = await fetchAllProducts(publicFolders);
      this.fetchedData = products;
      this.fetchedFilferdData = products;
      this.pageVisibilityLock = false;
      this.selectUserFolder();
    },
    onSearchInput() {
      this.getProducts();
    },
    getProducts() {
      if (this.SEARCH_QUERY === '') {
        this.fetchedFilferdData = this.fetchedData;
      } else {
        const q = this.SEARCH_QUERY.toLowerCase();
        this.fetchedFilferdData = this.fetchedData.filter(p =>
          (p.asset_folder + ' ' + p.description + ' ' + p.name).toLowerCase().includes(q)
        );
      }
      this.selectUserFolder();
    },
    selectUserFolder() {
      if (this.SEARCH_QUERY === '') {
        if (this.folderNames.length > 0) this.selectFolder(this.folderNames[0].name);
      } else {
        let found = 0;
        const result = Object.groupBy(this.fetchedFilferdData, ({ asset_folder }) => asset_folder);
        this.folderNames.forEach(folder => {
          if (result[folder.name] !== undefined && result[folder.name].length > 0 && found === 0) {
            this.selectFolder(folder.name);
            found = 1;
          }
        });
      }
    },
    selectFolder(name) {
      this.selectedFolderName = name;
    },
    getProductCountByFolder(name) {
      return this.fetchedFilferdData.filter(p => p.asset_folder === name).length;
    },
    GoTo(navigate, asset_id) {
      if (navigate === "PRODUCT") {
        window.location.href = `product.html?asset_id=${asset_id}`;
      }
    },
  },
});
