new Vue({
  el: "#product",
  data: {
    offer_title: "Special Offers Just for You!",
    fetchedData: [], // This will hold the data fetched from the API
    cloudinaryData: null, // This will hold the Cloudinary data
    userLocation: { lat: null, lng: null }, // Store user's location
    storeLocation: { lat: 6.876635730986699, lng: 79.86972051132167 },
    map: null,
    PRODUCT: null,
    routeDetails: null, // Store route details like distance and duration
    selectedDate: "",
    asset_id: "",
  },
  created() {
    // this.fetchCloudinaryData(); // Call the fetchData method when the instance is created

    this.getAsset_id();


  },
  mounted() {
    this.getUserLocation();
  },
  methods: {
    initCalendar() {
      flatpickr("#calendar", {
        inline: true, // Optional: keep the calendar open
        dateFormat: "Y-m-d", // Customize date format
      });
    },
    getAsset_id() {
      const url = window.location.href;
      const urlObj = new URL(url);
      const assetId = urlObj.searchParams.get("asset_id");
      this.asset_id = assetId;
      setTimeout(() => {
      this.fetchCloudinaryData(); // Fetch Cloudinary data
    }, 400);
    },
    fetchCloudinaryData() {
      axios
        .get(`server/PRODUCTS.php?COMMAND=GET_PRODUCT&ASSET_ID=${this.asset_id}`) // Replace with your API endpoint
        .then((response) => {
          this.PRODUCT = this.refactorProduct(response.data); // Set fetched data
          setTimeout(() => {
            this.initCalendar();
          }, 400);
        })
        .catch((error) => {
          console.error("There was an error fetching the data:", error);
        });
    },
    refactorProduct(product) {
      let refactoredProduct = {
        asset_id: product.asset_id,
        categoryName: product.asset_folder.replace(/_/g, " "),
        last_updated: product.last_updated.update_at,
        data: product.metadata,
        created_at: product.created_at,
        image_secure_url: product.secure_url,
        image_url: product.url,
      };

      return refactoredProduct;
    },
    GoTo(navigate) {
      if (navigate == "PRODUCT") {
        window.location.href = "product.php";
      }
    },
    initMap() {
      if (this.userLocation.lat && this.userLocation.lng) {
        // Initialize the map centered at the user's location
        this.map = new google.maps.Map(document.getElementById("map"), {
          zoom: 15, // Zoom level for viewing both points
          center: this.userLocation, // Center of the map
        });

        // Marker at the user's location
        const userMarker = new google.maps.Marker({
          position: this.userLocation,
          map: this.map,
          title: "Your Location",
        });

        // Marker at the destination location
        const destinationMarker = new google.maps.Marker({
          position: this.storeLocation,
          map: this.map,
          title: "Destination",
        });

        // Call function to calculate and display route
        this.calculateAndDisplayRoute();
      } else {
        console.error("User location is not available");
      }
    },
    calculateAndDisplayRoute() {
      // Initialize the DirectionsService and DirectionsRenderer
      const directionsService = new google.maps.DirectionsService();
      const directionsRenderer = new google.maps.DirectionsRenderer();

      directionsRenderer.setMap(this.map); // Bind the DirectionsRenderer to the map

      const request = {
        origin: this.userLocation, // Start point
        destination: this.storeLocation, // End point
        travelMode: google.maps.TravelMode.DRIVING, // Mode of travel
      };

      // Request the route from the DirectionsService
      directionsService.route(request, (result, status) => {
        console.log(result);

        if (status === google.maps.DirectionsStatus.OK) {
          directionsRenderer.setDirections(result); // Display the route on the map
          const route = result.routes[0].legs[0];
          this.routeDetails = {
            distance: route.distance,
            duration: route.duration,
          };
        } else {
          console.error("Directions request failed due to " + status);
        }
      });
    },
    initMap1() {
      // The location you want to show on the map (latitude, longitude)
      const location = {
        lat: this.userLocation.lat,
        lng: this.userLocation.lng,
      }; // Example: San Francisco, CA
      const location1 = {
        lat: this.storeLocation.lat,
        lng: this.storeLocation.lng,
      }; // Example: San Francisco, CA

      // The map, centered at the specified location
      const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 12, // Zoom level
        center: location1, // Center of the map
      });

      // A marker positioned at the location
      const marker = new google.maps.Marker({
        position: location,
        map: map,
      });

      const marker1 = new google.maps.Marker({
        position: location1,
        map: map,
      });

      const lineCoordinates = [location, location1];

      // Create the polyline and add it to the map
      const polyline = new google.maps.Polyline({
        path: lineCoordinates,
        geodesic: true, // The path follows the curvature of the earth
        strokeColor: "#FF0000", // Line color
        strokeOpacity: 1.0, // Line opacity
        strokeWeight: 2, // Line thickness
      });

      polyline.setMap(map); // Add the polyline to the map
    },
    getUserLocation() {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            console.log(position.coords.latitude);
            console.log(position.coords.longitude);

            this.userLocation.lat = position.coords.latitude;
            this.userLocation.lng = position.coords.longitude;
            // Initialize the map after getting the location
            setTimeout(() => {
              this.initMap();
            }, 1000); // Adjust the delay time (in milliseconds) as needed
          },
          (error) => {
            console.error("Error getting user location:", error);
          }
        );
      } else {
        console.error("Geolocation is not supported by this browser.");
      }
    },
  },
});
