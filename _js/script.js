new Vue({
  el: "#app",
  data: {
    offer_title: "Special Offers Just for You!",
    fetchedData: [], // This will hold the data fetched from the API
    fetchedFilferdData: [], // This will hold the data fetched from the API
    cloudinaryData: null, // This will hold the Cloudinary data
    SEARCH_QUERY: '',
    folderNames: [],
    selectedFolderId: '',
    pageVisibilityLock: true

  },
  created() {

setTimeout(() => {
  this.fetchCloudinaryData('ALL_FOLDERS');
  }, 10);




    // this.fetchCloudinaryData(); // Fetch Cloudinary data
  },
  methods: {

    fetchCloudinaryData(FLAG) {


      if (FLAG == 'GET_PRODUCTS') {

        if (this.folderNames.length == 0) {
          alert('No Folder');
          return;
        }

        const selectFolder = this.folderNames.filter(folderName => folderName.external_id == this.selectedFolderId);




        axios
        .get(`server/PRODUCTS.php?COMMAND=${FLAG}&FOLDER_NAME=${selectFolder[0].name}`)
        .then((response) => {

          this.fetchedData = response.data; // Set fetched data
          this.fetchedFilferdData = response.data; // Set fetched data
        })
        .catch((error) => {
          console.error("There was an error fetching the data:", error);
        });
      }

      if (FLAG == 'ALL_FOLDERS') {

        axios
        .get(`server/GENERAL.php?COMMAND=${FLAG}`)
        .then((response) => {
          this.pageVisibilityLock = false;
          this.folderNames = response.data.folders; // Set fetched data
          this.selectedFolderId = response.data.folders[0].external_id;


          this.fetchCloudinaryData('GET_PRODUCTS');

        })
        .catch((error) => {
          console.error("There was an error fetching the data:", error);
        });
      }



    },
    fetchCloudinaryDataSearch() {
      if (this.SEARCH_QUERY == '') {
        this.fetchCloudinaryData();
      }else{
        axios
        .get(`server/PRODUCTS.php?COMMAND=PRODUCT_SEARCH&QUERY=${this.SEARCH_QUERY}`) // Replace with your API endpoint
        .then((response) => {
          this.fetchedData = response.data; // Set fetched data
          this.fetchedFilferdData = response.data; // Set fetched data
        })
        .catch((error) => {
          console.error("There was an error fetching the data:", error);
        });
      }

    },
    fetchCloudinaryDataSearch() {
      if (this.SEARCH_QUERY == '') {
        this.fetchedFilferdData = this.fetchedData;
        // this.fetchCloudinaryData();
      }else{
        this.localFilter();
      }

    },
    localFilter(){
      // this.fetchedData.filter
    },
    onSearchInput() {
      this.fetchCloudinaryDataSearch()
    },
    selectFolder(external_id) {
      this.selectedFolderId = external_id;
      // setTimeout(() => {
        this.fetchCloudinaryData('GET_PRODUCTS');
      // }, 400);
    },

    GoTo(navigate, asset_id) {


      if (navigate == "PRODUCT") {
        window.location.href = `product.php?asset_id=${asset_id}`;
      }
    },
  },
});
