<?php include 'header.html'; ?>
<!-- <img
        src="your-image-url.jpg"
        alt="Description of image"
        class="float-image"
      /> -->

<!-- Hero Section -->
<section class="hero-section text-center" style="
          background-image: url('hero-bg.jpg');
          background-size: cover;
          background-position: center;
          padding: 100px 0;
          color: white;
        ">
  <br />
  <br />
  <br />
  <br />
  <br />
  <div class="container">
    <h1 class="display-4">Welcome to Party Theme</h1>
    <p class="lead">Your one-stop shop for all your party decor needs!</p>
    <a href="#" class="btn btn-primary btn-lg">Shop Now</a>
  </div>
  <br />
  <br />
  <br />
  <br />
  <br />
</section>

<!-- Promotion Section -->
<div id="app">
  <section class="promotion-section py-5 text-center" style="background-color: #f8f9fa">
    <div class="container">
      <h2 class="mb-4">{{ offer_title }}</h2>


      <div v-if="fetchedData.length" class="row">
        <div v-for="(product, index) in fetchedData" :key="product.asset_id" class="col-md-4">
          <div class="card border-0 shadow">
            <img :src="product.url" class="card-img-top" alt="Offer 1" />
            <div class="card-body">
              <h5 class="card-title" v-if="product.metadata">{{ product.metadata.name }}</h5>
              <p class="card-text">On selected party decor items.</p>
              <a href="#" class="btn btn-outline-primary">Shop Now</a>
            </div>
          </div>
        </div>

      </div>











    </div>
  </section>
</div>



<!-- Promotion Section -->
<section class="promotion-section py-5 text-center" style="background-color: #f8f9fa">
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
</section>



<!-- About Us Section -->
<section class="about-us-section py-5 text-center" style="
          background: linear-gradient(135deg, #ff6f61, #de6262);
          color: white;
        ">
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

<!-- Full-Width Horizontal Scrolling Photo Slider -->
<section class="scrolling-photo-slider py-4">
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
</section>

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



<script src="_js/script.js"></script>
<?php include 'footer.html'; ?>