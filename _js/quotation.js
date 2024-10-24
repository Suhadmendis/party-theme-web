

new Vue({
  el: "#quotation-section",
  data: {
    // PACKAGES: rentalPackages,
    SEARCH_QUERY: "",
    fetchedData: [], // This will hold the data fetched from the API
    fetchedFilferdData: [], // This will hold the data fetched from the API
    pageVisibilityLock: true,
  },
  created() {
    
  },
  methods: {
    onSearchInput() {
      this.getProducts();
    },
    fetchCloudinaryData(FLAG) {},
    GoTo(navigate, asset_id) {
      if (navigate == "PRODUCT") {
        window.location.href = `product.php?asset_id=${asset_id}`;
      }
      if (navigate == "SHOP") {
        window.location.href = `shop.php`;
      }
    },
    getProducts() {
      let resType = "DB";
      if (resType == "DB") {
        this.fetchDBDataSearch();
      } else {
        this.fetchCloudinaryDataSearch();
      }
    },
    fetchDBDataSearch() {
      console.log('fds');
      
      axios
        .get(
          `server/PRODUCTS.php?COMMAND=DB_PRODUCT_SEARCH&OPERATION=QUOTATION&QUERY=${this.SEARCH_QUERY}`
        ) // Replace with your API endpoint
        .then((response) => {
          this.pageVisibilityLock = false;
          this.fetchedData = response.data; // Set fetched data
          this.fetchedFilferdData = response.data; // Set fetched data
        })
        .catch((error) => {
          console.error("There was an error fetching the data:", error);
        });
    },
  },
});



