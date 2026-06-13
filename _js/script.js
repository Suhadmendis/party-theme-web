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
      const folders = await fetchFolders();
      this.folderNames = folders;
      this.selectedFolderName = folders.length > 0 ? folders[0].name : '';
      const products = await fetchAllProducts(folders);
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
      if (this.SEARCH_QUERY == "") {
        if (this.folderNames.length > 0) this.selectFolder(this.folderNames[0].name);
      } else {
        let found = 0;
        const result = Object.groupBy(this.fetchedFilferdData, ({ asset_folder }) => asset_folder);
        this.folderNames.map(name => {
          if (result[name.name] !== undefined && result[name.name].length > 0 && found == 0) {
            this.selectFolder(name.name);
            found = 1;
          }
        });
      }
    },
    selectFolder(name) {
      this.selectedFolderName = name;
    },
    getProductCountByFolder(name) {
    },
    GoTo(navigate, asset_id) {
      if (navigate == "PRODUCT") {
        window.location.href = `product.html?asset_id=${asset_id}`;
      }
    },
  },
});
