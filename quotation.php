<?php include 'header.php'; ?>

<link rel="stylesheet" href="_css/quotation.css?v=00000000001" />

<div id="quotation-section">
    <br><br><br><br><br><br>
    <div class="container">
        <div class="row">
            <div class="col-md-12">
                <!-- Search Bar -->
                <form class="form-inline">
                    <input id="search-bar-product" v-model="SEARCH_QUERY" @input="onSearchInput()" class="form-control"
                        type="search" placeholder="Search" aria-label="Search" />

                </form>

                <div class="custom-dropdown" v-if="filteredResults.length">
                    <div class="custom-dropdown-item" v-for="item in filteredResults"  @click="pickItem(item)">
                        <div class="custom-dropdown-item-image-box">
                            <img :src="item.secure_url" class="product-img" alt="Offer 1" />
                        </div>
                        <div class="custom-dropdown-item-info">
                        
                            <p class="custom-dropdown-item-info-name">{{ item.name }}</p>
                            <p class="custom-dropdown-item-info-description">{{ getTruncatedDescription(item.description) }}</p>
                            <p class="custom-dropdown-item-info-asset_folder">{{ item.asset_folder }}</p>
                            
                        </div>
                    </div>
                </div>
                <div class="quotation-table" v-show="true">
                    <div class="item-box" v-for="item in QUOTATION_ITEMS">
                        <div class="row">

                            <!-- First Box: Full Image -->
                            <div class="col-md-3 box">
                                <img src="your-image-url-here.jpg" alt="Full Image" class="full-image">
                            </div>

                            <!-- Second Box: Name and Description -->
                            <div class="col-md-3 box info-box">
                                <h3 class="item-name">Product Name</h3>
                                <p class="item-description">This is the product description. It provides details about
                                    the product.</p>
                            </div>

                            <!-- Third Box: Input, Label, and Close Button -->
                            <div class="col-md-5 box input-box">
                                <label for="quantity" class="qty-label">Quantity:</label>
                                <input type="number" id="quantity" class="qty-input" min="1" max="10" value="1">
                                <button class="close-btn">X</button>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <br><br><br><br><br><br>


</div>


<script src="_js/quotation.js?v=00000000001"></script>
<?php include 'footer.php'; ?>