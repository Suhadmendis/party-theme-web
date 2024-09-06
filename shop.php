<?php include 'header.html'; ?>
<!-- Promotion Section -->
<div id="app">
  <section class="promotion-section py-5 text-center">


    <div class="container">





      <!-- Search Bar -->
      <form class="form-inline">
        <input id="search-bar-product" v-model="SEARCH_QUERY" @input="onSearchInput()"  class="form-control" type="search" placeholder="Search" aria-label="Search" />
      </form>

      <div v-if="fetchedData.length" class="row">
        <div v-for="(product, index) in fetchedData" :key="product.asset_id" class="col-md-3">
          <div class="card border-0 shadow" id="productCard">
            <img :src="product.url" class="card-img-top" alt="Offer 1" />
            <div class="card-body">
              <h5 class="card-title" v-if="product.metadata">{{ product.metadata.name }}</h5>
              <h5 class="card-title" v-else>no</h5>
              <p class="card-text">On selected party decor items.</p>

              <!-- <div class="colorArea">
                <div class="colorPlot" :style="{ backgroundColor: 'blue' }"></div>
              </div> -->


              <div class="product-view-button-area">
              <button class="product-view-button" @click="GoTo('PRODUCT')"><i class="fa-solid fa-eye" id="product-view-button-icon"></i></button>
              </div>
            </div>
          </div>
        </div>

      </div>











    </div>
  </section>

</div>





<script src="_js/script.js"></script>
<?php include 'footer.html'; ?>