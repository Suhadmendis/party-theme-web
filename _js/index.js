new Vue({
  el: "#app",
  data: {
    offer_title: "Special Offers Just for You!",
    fetchedData: [], // This will hold the data fetched from the API
    fetchedFilferdData: [], // This will hold the data fetched from the API
    cloudinaryData: null, // This will hold the Cloudinary data
    SEARCH_QUERY: "",
    folderNames: [],
    selectedFolderId: "",
    pageVisibilityLock: true,
  },
  created() {
    this.fetchCloudinaryData("GET_PRODUCTS");
  },
  methods: {
    fetchCloudinaryData(FLAG) {
      if (FLAG == "GET_PRODUCTS") {

        const selectFolder = "Animals";

        axios
          .get(
            `server/PRODUCTS.php?COMMAND=${FLAG}&FOLDER_NAME=${selectFolder}`
          )
          .then((response) => {
            this.fetchedData = response.data; // Set fetched data
            this.fetchedFilferdData = response.data; // Set fetched data
          })
          .catch((error) => {
            console.error("There was an error fetching the data:", error);
          });
      }


    },

    // localFilter() {
    //   // this.fetchedData.filter
    // },
    // onSearchInput() {
    //   this.fetchCloudinaryDataSearch();
    // },
    // selectFolder(external_id) {
    //   this.selectedFolderId = external_id;
    //   // setTimeout(() => {
    //   this.fetchCloudinaryData("GET_PRODUCTS");
    //   // }, 400);
    // },

    GoTo(navigate, asset_id) {
      if (navigate == "PRODUCT") {
        window.location.href = `product.php?asset_id=${asset_id}`;
      }
    },
  },
});
