new Vue({
  el: "#app",
  data: {
    offer_title: "Special Offers Just for You!",
    fetchedData: [],
    fetchedFilferdData: [],
    SEARCH_QUERY: "",
    folderNames: [],
    selectedFolderName: "",
    pageVisibilityLock: true,
  },
  created() {
    setTimeout(() => {
      this.loadFolders();
    }, 1000);
  },
  methods: {
    loadFolders() {
      this.pageVisibilityLock = false;
      this.folderNames = STATIC_FOLDERS;
      this.selectedFolderName = STATIC_FOLDERS[0].name;
      this.getProducts();
    },
    onSearchInput() {
      this.getProducts();
    },
    getProducts() {
      const query = this.SEARCH_QUERY.toLowerCase();
      const results = query === ""
        ? STATIC_PRODUCTS
        : STATIC_PRODUCTS.filter(p =>
            (p.asset_folder + " " + p.description + " " + p.name).toLowerCase().includes(query)
          );
      this.pageVisibilityLock = false;
      this.fetchedData = results;
      this.fetchedFilferdData = results;
      this.selectUserFolder();
    },
    selectUserFolder() {
      if (this.SEARCH_QUERY == "") {
        this.selectFolder(this.folderNames[0].name);
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
      // let productCount = this.fetchedData.filter(product => product.asset_folder == name).length;
      // return this.SEARCH_QUERY == "" ? "" : productCount;
    },
    GoTo(navigate, asset_id) {
      if (navigate == "PRODUCT") {
        window.location.href = `product.html?asset_id=${asset_id}`;
      }
    },
  },
});
