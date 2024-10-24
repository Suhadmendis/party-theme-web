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
    SELECTED_TESTIMONIALS: null,
    TESTIMONIALS: [
      {
        id: 1,
        rating: 5,
        testimonial: "Jelly-o gummi bears wafer. Oat cake cupcake bonbon toffee. Jelly tiramisu gummi bears jelly beans dragée dragée cupcake fruitcake. Jelly beans pastry toffee halvah caramels. Jujubes chocolate cake croissant powder marshmallow lemon drops jujubes gingerbread gingerbread. Gummi bears macaroon ice cream jujubes gingerbread sesame snaps sweet tootsie roll.",
        name: "Client One"
      },
      {
        id: 2,
        rating: 5,
        testimonial: "The service was exceptional! Every interaction was delightful, and the products exceeded my expectations. I can't recommend this enough!",
        name: "Client Two"
      },
      {
        id: 3,
        rating: 4,
        testimonial: "Great quality and fast shipping! The team was very helpful in answering my questions. Will definitely order again.",
        name: "Client Three"
      },
      {
        id: 4,
        rating: 5,
        testimonial: "Absolutely love the variety of options available! Each item is crafted with care, making every purchase a joy.",
        name: "Client Four"
      },
      {
        id: 5,
        rating: 5,
        testimonial: "A fantastic experience from start to finish. The attention to detail is remarkable, and I appreciate the personalized service.",
        name: "Client Five"
      }
    ]
  },
  created() {
    this.GoTo('SHOP');

    this.fetchCloudinaryData("GET_PRODUCTS");
    this.select_testimonial(1);
  },
  methods: {
    select_testimonial(id) {
      const testimonial = this.TESTIMONIALS.filter(element => element.id == id);
      console.log(testimonial);

      this.SELECTED_TESTIMONIALS = testimonial[0];
    },
    navigate_testimonial(direction, id) {
      if (direction == "P") {
        --id;
        this.select_testimonial(id);
      }

      if (direction == "N") {
        ++id;
        this.select_testimonial(id);
      }

    },
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
      if (navigate == "SHOP") {
        window.location.href = `shop.php`;
      }
    },
  },
});
