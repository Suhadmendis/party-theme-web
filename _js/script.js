new Vue({
  el: "#app",
  data: {
    offer_title: "Special Offers Just for You!",
    fetchedData: [], // This will hold the data fetched from the API
    cloudinaryData: null, // This will hold the Cloudinary data
    SEARCH_QUERY: ''
  },
  created() {
    setTimeout(() => {
      this.fetchCloudinaryData(); // Call the fetchData method when the instance is created
    }, 1000);

    // this.fetchCloudinaryData(); // Fetch Cloudinary data
  },
  methods: {
    fetchCloudinaryData() {
      console.log("fetching");

      axios
        .get("server/PRODUCTS.php?COMMAND=GET_PRODUCTS") // Replace with your API endpoint
        .then((response) => {
          console.log(response.data);
          this.fetchedData = response.data; // Set fetched data
          console.log(this.fetchedData);
        })
        .catch((error) => {
          console.error("There was an error fetching the data:", error);
        });
    },
    fetchCloudinaryDataSearch() {
      if (this.SEARCH_QUERY == '') {
        this.fetchCloudinaryData();
      }else{
        axios
        .get(`server/PRODUCTS.php?COMMAND=PRODUCT_SEARCH&QUERY=${this.SEARCH_QUERY}`) // Replace with your API endpoint
        .then((response) => {
          this.fetchedData = response.data; // Set fetched data
        })
        .catch((error) => {
          console.error("There was an error fetching the data:", error);
        });
      }

    },
    onSearchInput() {
      this.fetchCloudinaryDataSearch()

    },
    GoTo(navigate) {
      if (navigate == "PRODUCT") {
        window.location.href = "product.php";
      }
    },
  },
});
