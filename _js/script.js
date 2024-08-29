new Vue({
    el: "#app",
    data: {
      offer_title: "Special Offers Just for You!",
      fetchedData: null, // This will hold the data fetched from the API
      cloudinaryData: null // This will hold the Cloudinary data
    },
    created() {
      this.fetchData(); // Call the fetchData method when the instance is created
      this.fetchCloudinaryData(); // Fetch Cloudinary data
    },
    methods: {
      fetchData() {
        axios
          .get("https://jsonplaceholder.typicode.com/posts/1") // Replace with your API endpoint
          .then((response) => {
            console.log(response.data);
            this.fetchedData = response.data; // Set fetched data
            console.log(this.fetchedData.title);
          })
          .catch((error) => {
            console.error("There was an error fetching the data:", error);
          });
      },
      fetchCloudinaryData() {
        const myHeaders = new Headers();
        // Replace these values with your actual Cloudinary credentials
        const cloudinaryKey = "933634414754845";
        const cloudinarySecret = "DunCWR1RWwNFH_hgfMaaPwl8rOs";
        const cloudinaryName = "dic13326d";

        const auth = btoa(`${cloudinaryKey}:${cloudinarySecret}`);

        console.log(auth);

        myHeaders.append("Authorization", `Basic XUjFSV3dORkhfaGdmTWFhUHdsOHJPcw==`);
        myHeaders.append("X-Requested-With", `XMLHttpRequest`);

        const requestOptions = {
          method: "GET",
          headers: myHeaders,
          redirect: "follow",
        };

        fetch(
          `https://api.cloudinary.com/v1_1/${cloudinaryName}/resources/by_asset_folder?asset_folder=folder1`,
          requestOptions
        )
          .then((response) => response.json()) // Parse the response as JSON
          .then((result) => {
            this.cloudinaryData = result; // Store the fetched Cloudinary data
            console.log("Cloudinary Data:", this.cloudinaryData); // Log the Cloudinary data
          })
          .catch((error) => {
            console.error("There was an error fetching Cloudinary data:", error);
          });
      },
    },
  });