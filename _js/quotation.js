

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
        window.location.href = `product.html?asset_id=${asset_id}`;
      }
      if (navigate == "SHOP") {
        window.location.href = `shop.html`;
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
      const query = this.SEARCH_QUERY.toLowerCase();
      const results = STATIC_PRODUCTS.filter(p =>
        (p.asset_folder + " " + p.description + " " + p.name).toLowerCase().includes(query)
      ).slice(0, 10);
      this.pageVisibilityLock = false;
      this.filteredResults = results;
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



