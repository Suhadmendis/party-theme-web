

new Vue({
  el: "#quotation-section",
  data: {
    // PACKAGES: rentalPackages,
    SEARCH_QUERY: "",
    QUOTATION_ITEMS: [], // This will hold the data fetched from the API
    filteredResults: [], // This will hold the data fetched from the API
    pageVisibilityLock: true,
  },
  created() {

  },
  methods: {
    onSearchInput() {
      if (this.SEARCH_QUERY == '') {
        this.filteredResults = [];
        return;
      }

      this.getProducts();
    },
    fetchCloudinaryData(FLAG) { },
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

      axios
        .get(
          `server/PRODUCTS.php?COMMAND=DB_PRODUCT_SEARCH&OPERATION=QUOTATION&QUERY=${this.SEARCH_QUERY}`
        ) // Replace with your API endpoint
        .then((response) => {
          console.log(response.data);
          this.pageVisibilityLock = false;
          this.filteredResults = response.data; // Set fetched data
        })
        .catch((error) => {
          console.error("There was an error fetching the data:", error);
        });
    },
    getTruncatedDescription(description) {
      return description.length > 50 ? description.slice(0, 50) + '...' : description;
    },
    resetSearch(){
      this.SEARCH_QUERY = '';
      this.filteredResults = [];
    },
    isDuplicated(asset_id){
      let isDuplicated = this.QUOTATION_ITEMS.filter(item => item.asset_id == asset_id);
      console.log(isDuplicated);
      
      return isDuplicated.length == 0 ? false : true;
    },
    pickItem(item) {
console.log(item.asset_id);

if (this.isDuplicated(item.asset_id)) {
  alert('Already Added');
  return;
}

      this.resetSearch();

      let array = this.QUOTATION_ITEMS;
      array.push(item);
      this.QUOTATION_ITEMS = array;
    },
  },
});



