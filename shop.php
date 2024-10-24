<?php include 'header.php'; ?>
<link rel="stylesheet" href="product.css" />

<!-- Promotion Section -->
<div id="app">
  <section class="promotion-section py-5 text-center">


    <div class="fullscreen-div" id="fullscreenDiv" v-show="pageVisibilityLock">
      <!-- Centered Logo-spalsh -->
      <img id="logo-spalsh" src="logo_result.webp" alt="Party Theme Logo" />
    </div>


    <div class="container">

      <!-- Search Bar -->
      <form class="form-inline">
        <input id="search-bar-product" v-model="SEARCH_QUERY" @input="onSearchInput()" class="form-control"
          type="search" placeholder="Search" aria-label="Search" />
      </form>


      <div class="folder-name-area">

        <div v-for="name in folderNames"
          v-if="getProductCountByFolder(name.name) !== 0"
          :class="selectedFolderName == name.name ? 'folder-name folder-name-active' : 'folder-name'"
          @click="selectFolder(name.name)">
          <p
            :class="selectedFolderName == name.name ? 'folder-name-text folder-name-text-active' : 'folder-name-text'">
            {{ name.name }} {{ getProductCountByFolder(name.name) }}</p>
        </div>
      </div>

      <br>

      <div v-if="fetchedFilferdData.length" class="row">
        <div v-for="(product, index) in fetchedFilferdData" :key="product.asset_id" class="col-md-3" v-if="product.asset_folder == selectedFolderName">
          <div class="card border-0 shadow" id="productCard">
            <img :src="product.url" class="card-img-top" alt="Offer 1" />
            <div class="card-body">
              <h5 class="card-title" v-if="product.name">{{ product.name }}</h5>
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

</div>





<script src="_js/script.js"></script>
<?php include 'footer.php'; ?>