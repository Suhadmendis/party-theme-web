new Vue({
  el: "#app",
  data: {
    offer_title: "Special Offers Just for You!",
    fetchedData: [],
    SELECTED_TESTIMONIALS: null,
    TESTIMONIALS: [
      {
        id: 1,
        rating: 5,
        testimonial: "Chasing Dreams made our daughter's birthday unforgettable! The balloon arch was stunning and exactly what we envisioned. Setup was seamless and the team was so professional.",
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
    ],
    faqItems: [
      {
        id: 1,
        question: "What areas do you serve for balloon decor and party rentals?",
        answer: "We are based in Ardsley, NY and serve Westchester County and surrounding areas. Contact us to confirm availability for your specific location.",
        open: true
      },
      {
        id: 2,
        question: "What types of events do you provide decor for?",
        answer: "We provide balloon decor and party rentals for birthdays, bridal showers, baby showers, gender reveals, weddings, corporate events, and more.",
        open: false
      },
      {
        id: 3,
        question: "How do I book a balloon arch or event decor package?",
        answer: "Browse our <a href=\"shop.html\">Shop</a> or <a href=\"packages.html\">Packages</a> page, select the items you want, and contact us via WhatsApp or our <a href=\"quotation.html\">Quotation</a> page to confirm your booking.",
        open: false
      },
      {
        id: 4,
        question: "Are your balloons eco-friendly?",
        answer: "Yes! We use 100% biodegradable, natural latex balloons to construct all our balloon garlands and arches.",
        open: false
      }
    ]
  },
  created() {
    this.fetchCloudinaryData();
    this.select_testimonial(1);
  },
  methods: {
    select_testimonial(id) {
      this.SELECTED_TESTIMONIALS = this.TESTIMONIALS.find(t => t.id === id);
    },
    navigate_testimonial(direction, id) {
      if (direction === "P") this.select_testimonial(id - 1);
      if (direction === "N") this.select_testimonial(id + 1);
    },
    toggleFaq(id) {
      this.faqItems.forEach(item => {
        if (item.id === id) item.open = !item.open;
        else item.open = false;
      });
    },
    async fetchCloudinaryData() {
      const folders = await fetchFolders();
      const products = await fetchAllProducts(folders);
      this.fetchedData = products.slice(0, 6);
    },
    GoTo(navigate, asset_id) {
      if (navigate === "PRODUCT") {
        window.location.href = `product.html?asset_id=${asset_id}`;
      }
    }
  }
});
