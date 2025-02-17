<?php include 'header.php'; ?>

<link rel="stylesheet" href="_css/hero.css" />

<link rel="stylesheet" href="product.css" />
<link rel="stylesheet" href="_css/about.css" />
<link rel="stylesheet" href="_css/stripe-information.css" />
<link rel="stylesheet" href="_css/parallax.css" />
<link rel="stylesheet" href="_css/testimonial.css" />
<link rel="stylesheet" href="_css/snowflakes.css" />
<link rel="stylesheet" href="_css/explore-options.css" />

<!-- <img
        src="your-image-url.jpg"
        alt="Description of image"
        class="float-image"
      /> -->
<div class="snowflakes" aria-hidden="true">
  <div class="snowflake">❄</div>
  <div class="snowflake">❅</div>
  <div class="snowflake">❆</div>
  <div class="snowflake">❄</div>
  <div class="snowflake">❅</div>
  <div class="snowflake">❆</div>
</div>

<div id="app">


  <!-- Hero Section -->
  <section class="hero-section text-center hero-section">

    <div class="container">
      <!-- <h1 class="display-4">Welcome to Party Theme</h1> -->
      <!-- <p class="lead">Your one-stop shop for all your party decor needs!</p> -->
      <!-- <a href="#" class="btn btn-primary btn-lg">Shop Now</a> -->
    </div>

  </section>


  <!--
<model-viewer src="3dmodel/Bottle/model.glb" alt="Big Bird Decor" auto-rotate camera-controls style="background-color: black; width: 100%; height: 500px;"></model-viewer>
<model-viewer src="3dmodel/Elmo4/model-2.glb" alt="Big Bird Decor" auto-rotate camera-controls style="background-color: black; width: 100%; height: 500px;"></model-viewer> -->






  <!-- Promotion Section -->
  <!-- <section class="promotion-section py-5 text-center" style="background-color: #f8f9fa">
  <div class="container">
    <h2 class="mb-4">{{ offer_title }}</h2>
    <div class="row">
      <div class="col-md-4">
        <div class="card border-0 shadow">
          <img src="party/party3.jpg" class="card-img-top" alt="Offer 1" />
          <div class="card-body">
            <h5 class="card-title">Buy 1 Get 1 Free</h5>
            <p class="card-text">On selected party decor items.</p>
            <a href="#" class="btn btn-outline-primary">Shop Now</a>
          </div>
        </div>
      </div>
      <div class="col-md-4">
        <div class="card border-0 shadow">
          <img src="party/party2.jpg" class="card-img-top" alt="Offer 2" />
          <div class="card-body">
            <h5 class="card-title">20% Off on Balloons</h5>
            <p class="card-text">
              Brighten up your party with our colorful balloons.
            </p>
            <a href="#" class="btn btn-outline-primary">Shop Now</a>
          </div>
        </div>
      </div>
      <div class="col-md-4">
        <div class="card border-0 shadow">
          <img src="party/party4.jpeg" class="card-img-top" alt="Offer 3" />
          <div class="card-body">
            <h5 class="card-title">Free Shipping</h5>
            <p class="card-text">On orders over $50.</p>
            <a href="#" class="btn btn-outline-primary">Shop Now</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</section> -->

  <br><br><br><br><br><br>
  
  <section id="explore-options" class="container my-5">
    <div class="row">
        <!-- Event Packages Card -->
        <div class="col-md-6">
            <div class="card">
                <img src="./images/image-decor.jpg" class="service-card-img-top" alt="Event Packages">
                <div class="card-body text-center">
                    <h5 class="card-title">Event Decor Packages</h5>
                    <p class="card-text">Choose from a variety of tailored packages to make your event planning easy and memorable.</p>
                    <a href="packages.html" class="btn btn-primary">View Event Packages</a>
                </div>
            </div>
        </div>

        <!-- Decor Rentals Card -->
        <div class="col-md-6">
            <div class="card">
                <img src="./images/image-rentals.webp" class="service-card-img-top" alt="Decor Rentals">
                <div class="card-body text-center">
                    <h5 class="card-title">Decor Rentals</h5>
                    <p class="card-text">Browse our collection of party decor items available for rent, perfect for any occasion.</p>
                    <a href="products.html" class="btn btn-primary">View Products</a>
                </div>
            </div>
        </div>
    </div>
</section>



  <br><br><br><br><br><br><br>

  <!-- About Us Section -->
  <section class="stripe-information-section py-5 text-center">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-md-8">
          <h2 class="mb-4" style="font-weight: 900; font-size: 2.5rem">
            Transform Your Event with Our Products
          </h2>
          <p class="lead" style="font-size: 1.2rem; line-height: 1.6rem">
            Whether you're planning a wedding, birthday, corporate event, or any special occasion, our wide range of
            party decor rentals will bring your vision to life. Browse our collection to find everything from elegant
            centerpieces to vibrant themes, tailored to make your event unforgettable.
          </p>
          <a href="#" class="btn btn-light btn-lg mt-4" style="font-weight: 700">Explore Our Products</a>
        </div>
      </div>
    </div>
  </section>



  <br><br>

  <!-- About Us Section -->
  <section class="stripe-information-section py-5 text-center">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-md-8">
          <h2 class="mb-4" style="font-weight: 900; font-size: 2.5rem">
            Discover the Magic
          </h2>
          <p class="lead" style="font-size: 1.2rem; line-height: 1.6rem">
            Transform every celebration into a captivating experience with
            Party Theme’s exquisite decor.
          </p>
          <a href="#" class="btn btn-light btn-lg mt-4" style="font-weight: 700">Explore Our Story</a>
        </div>
      </div>
    </div>
  </section>


  <br><br><br><br><br>


  <section class="testimonial-section">
    <div class="testimonial-area">
      <h2>Kind Words From Clients</h2>

      <div class="stars">

        <span v-for="star in SELECTED_TESTIMONIALS.rating">&#9733;</span>

      </div>
      <p class="testimonial-text">
        "{{ SELECTED_TESTIMONIALS.testimonial }}"
      </p>
      <p class="client-name">- {{ SELECTED_TESTIMONIALS.name }}</p>
      <div class="arrow-area">
        <div class="arrow" @click="navigate_testimonial('P', SELECTED_TESTIMONIALS.id)"
          v-if="SELECTED_TESTIMONIALS.id != 1">
          &#8592;
        </div>
        <div class="arrow" @click="navigate_testimonial('N', SELECTED_TESTIMONIALS.id)"
          v-if="SELECTED_TESTIMONIALS.id != 5">
          &#8594;
        </div>
      </div>
    </div>
  </section>

  <br><br><br><br><br>

  <div class="parallax">
    <div class="container content">
      <h1 class="parallax-head-text">LET'S WORK TOGETHER</h1>
      <p class="parallax-sub-text">Ready For A Website Worth Celebrating?</p>

      <div class="parallax-button">
        <p class="parallax-button-text">Inquire Now</p>
      </div>
    </div>


  </div>









  <!-- Full-Width Horizontal Scrolling Photo Slider -->
  <!-- <section class="scrolling-photo-slider py-4">
  <div class="slider-wrapper">
    <div class="slider">
      <img src="party/party1.jpg" alt="Photo 1" />
      <img src="party/party2.jpg" alt="Photo 2" />
      <img src="party/party3.jpg" alt="Photo 3" />
      <img src="party/party4.jpeg" alt="Photo 4" />
      <img src="party/party5.jpg" alt="Photo 5" />
      <img src="party/party6.jpg" alt="Photo 6" />
      <img src="party/party7.jpg" alt="Photo 7" />
      <img src="party/party1.jpg" alt="Photo 8" />
      <img src="party/party2.jpg" alt="Photo 9" />
      <img src="party/party3.jpg" alt="Photo 10" />
      <img src="party/party4.jpeg" alt="Photo 11" />
      <img src="party/party5.jpg" alt="Photo 12" />
      <img src="party/party6.jpg" alt="Photo 13" />
      <img src="party/party7.jpg" alt="Photo 14" />
    </div>
  </div>
</section> -->


  <br>




  <!-- Promotion Section -->

  <section class="promotion-section py-5 text-center" style="background-color: #f8f9fa">
    <div class="container">
      <h2 class="mb-4">{{ offer_title }}</h2>





      <div v-if="fetchedData.length" class="row">
        <div v-for="(product, index) in fetchedData" :key="product.asset_id" class="col-md-4">
          <div class="card border-0 shadow" id="productCard">
            <img :src="product.url" class="card-img-top" alt="Offer 1" />
            <div class="card-body">
              <h5 class="card-title" v-if="product.metadata">{{ product.metadata.name }}</h5>
              <h5 class="card-title" v-else>no</h5>
              <p class="card-text" v-if="product.metadata">
                {{ product.metadata.description.substring(0, 40) }}{{ product.metadata.description.length > 40 ? '...' :
                '' }}
              </p>
              <p class="card-text" v-else>On selected party decor items.</p>

              <!-- <div class="colorArea">
                <div class="colorPlot" :style="{ backgroundColor: 'blue' }"></div>
              </div> -->


              <div class="product-view-button-area">
                <button class="product-view-button" @click="GoTo('PRODUCT', product.asset_id)"><i
                    class="fa-solid fa-eye" id="product-view-button-icon"></i></button>
              </div>
            </div>
          </div>
        </div>

      </div>

    </div>
  </section>




  <br>

  <div class="about-section">
    <h2>MAKE YOUR PARTIES POP!</h2>
    <h1>ABOUT CHASING DREAMS EVENTS</h1>
    <div class="underline"></div>
    <p>
      Chasing Dreams is a balloon decor specialist based in Ardsley, New
      York (Westchester County). We use high-quality, 100% biodegradable,
      natural latex balloons to construct beautiful garlands. Whether you
      are looking for full decor for your next big event or a garland you
      can hang yourself for your child’s birthday, we are here to fulfill
      all of your balloon needs.
    </p>
  </div>


  <br><br><br>


</div>
<script src="_js/index.js"></script>
<?php include 'footer.php'; ?>