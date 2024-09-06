<script src="https://cdn.jsdelivr.net/npm/vue@2.6.14/dist/vue.js"></script>
<?php include 'header.html'; ?>
<!-- Promotion Section -->
<div id="product">

    <br>
    <br>
    <br>
    <div id="product-area">
        <div class="container">
            <div class="row">
                <div class="col-md-6">
                    <div id="left">
                        <div id="left-inner">

                        </div>
                    </div>
                </div>
                <div class="col-md-6">
                    <div id="right">
                        <div class="container-box">
                           <div class="info-pallet-box">
                           <h6 class="category-text">Cushion chair</h6>
                           <h2 class="title-text">Drop type cushion chair</h2>
                            <div class="rating">
                                <span class="star">★</span>
                                <span>8/10 - 15 Reviews</span>
                            </div>

                            <div class="colors">
                                <div class="color white"></div>
                                <div class="color blue"></div>
                            </div>

                            <p>Premium & comfortable memory foam with a strong structure built with teakwood, it feels
                                amazing.</p>

                            <div class="dimensions">
                                <span>Height: 52cm</span>
                                <span>Width: 43cm</span>
                            </div>

                            <div class="price">$265.50</div>

                            <div class="quantity">
                                <button onclick="decreaseQuantity()">-</button>
                                <input type="number" id="quantity" value="1" min="1">
                                <button onclick="increaseQuantity()">+</button>
                            </div>

                            <div class="actions">
                                <button class="add-to-cart">Add to Cart</button>
                                <a href="https://wa.me/+94778182596" target="_blank">

                                <button class="buy-now">Book Now <i class="fa-brands fa-whatsapp"></i></button>
    </a>

                            </div>
                           </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>





    <br><br><br><br><br>
    <br><br><br><br><br>
    <br><br><br><br><br>
    <br><br><br><br><br>
    <br><br><br><br><br>
    <br><br><br><br><br>
    <br><br><br><br><br>
    <br><br><br><br><br>
    <br><br><br><br><br>
    <br><br><br><br><br>
    <br><br><br><br><br>
    <br><br><br><br><br>
    <br><br><br><br><br>
    <br><br><br><br><br>
    <br><br><br><br><br>
    <br><br><br><br><br>
    <br><br><br><br><br>
    <br><br><br><br><br>



    <div class="container">
        <h1 v-if="routeDetails">Distance {{ routeDetails.distance.text }}</h1>
        <h1 v-if="routeDetails">Duration {{ routeDetails.duration.text }}</h1>
        <h1 @click="initMap()">My Google Map</h1>
        <!-- The map container -->
        <div id="map"></div>

    </div>


    <br><br><br><br><br>


</div>



<script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyClBKRU9iKfSLnXVTvdv11RvKwpCrfdoQI&callback=initMap" async
    defer></script>


<script src="_js/product.js"></script>

<?php include 'footer.html'; ?>