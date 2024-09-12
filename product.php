<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/flatpickr/dist/flatpickr.min.css">

<!-- Include Flatpickr JS -->
<script src="https://cdn.jsdelivr.net/npm/flatpickr"></script>

<link rel="stylesheet" href="product.css" />
<?php include 'header.php'; ?>
<!-- Promotion Section -->

<div id="product">

    <div class="fullscreen-div" id="fullscreenDiv" v-show="!PRODUCT">
        <!-- Centered Logo-spalsh -->
        <img id="logo-spalsh" src="logo_result.webp" alt="Party Theme Logo" />
    </div>
    <br>
    <br>
    <br>
    <div id="product-area" v-if="PRODUCT">
        <div class="container">
            <div class="row">
                <div class="col-md-5">
                    <div id="left">
                        <div id="left-inner">
                            <img :src="PRODUCT.image_url" class="product-img" alt="Offer 1" />
                        </div>
                    </div>
                </div>
                <div class="col-md-7">
                    <div id="right">
                        <div class="info-pallet-box">
                            <div class="container-box">

                                <!-- <div class="availability-area">
                                    <p>In Stock</p><i class="fa-solid fa-check availability-icon"></i>
                                </div> -->

                                <h6 class="category-text">{{ PRODUCT.categoryName }}</h6>
                                <h2 class="title-text">{{ PRODUCT.data.name }}</h2>


                                <!-- <div class="rating">
                                    <span class="star">★</span>
                                    <span>8/10 - 15 Reviews</span>
                                </div> -->

                                <!-- <div class="colors">
                                    <div class="color pink"></div>
                                    <div class="color blue"></div>
                                </div> -->





                                <p class="description-text">{{ PRODUCT.data.description }}</p>

                                <br>

                                <p class="date-text">Event Date</p>

                                <input type="text" id="calendar" v-model="selectedDate" placeholder="Select Date"
                                    hidden>

                                <br>
                                <!-- <div class="dimensions">
                                    <span>Height: 52cm</span>
                                    <span>Width: 43cm</span>
                                </div> -->

                                <div class="price" v-if="PRODUCT.data.amount">LKR {{ PRODUCT.data.amount }}.00</div>
                                <p class="delivery-fee-text" v-if="routeDetails">Approximate truck delivery fee {{ calculateDeliveryFee() }}.  Final charges may vary.</p>

                                <!-- <i class="fas fa-shipping-fast"></i> -->

                                <!-- <div class="quantity">
                                    <button onclick="decreaseQuantity()">-</button>
                                    <input type="number" id="quantity" value="1" min="1">
                                    <button onclick="increaseQuantity()">+</button>
                                </div> -->

                                <div class="actions">
                                    <!-- <button class="add-to-cart">Add to Cart</button> -->
                                    <a v-if="selectedDate != ''" :href="`https://wa.me/+94778182596?text=Need%20this%20product%20${PRODUCT.image_secure_url}%20on%20*${selectedDate}*`" target="_blank">
                                        <button class="buy-now">Book Now <i class="fa-brands fa-whatsapp fa-lg"></i></button>
                                    </a>
                                    <a v-else :href="`https://wa.me/+94778182596?text=Need%20this%20product%20${PRODUCT.image_secure_url}`" target="_blank">
                                        <button class="buy-now">Book Now <i class="fa-brands fa-whatsapp fa-lg"></i></button>
                                    </a>

                                </div>
                            </div>


                        </div>



                    </div>
                    <div class="info-product-bottom">
                        <p class="info-product-bottom-text" v-if="routeDetails">Located {{ routeDetails.distance.text }}
                            away from you, estimated arrival in {{ routeDetails.duration.text }}.</p>
                    </div>

                </div>
            </div>
        </div>
    </div>

    <br><br>


    <!-- Full-Width Horizontal Scrolling Photo Slider -->
    <section class="scrolling-photo-slider py-4" v-if="relatedProducts.length != 0">
        <div class="slider-wrapper">
            <div class="slider">
                <div class="slider-image-wrapper" v-for="element in relatedProducts"
                    @click="GoTo('PRODUCT', element.asset_id)"><img :src="element.secure_url" alt="Photo 1" /></div>

            </div>
        </div>
    </section>



    <!-- <br><br><br><br><br>
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
    <br><br><br><br><br> -->



    <!-- <div class="container" v-show="false">
        <h1 v-if="routeDetails">Distance {{ routeDetails.distance.text }}</h1>
        <h1 v-if="routeDetails">Duration {{ routeDetails.duration.text }}</h1>
        <h1 @click="initMap()">My Google Map</h1>

        <div id="map"></div>

    </div> -->

    <br><br>



</div>




<script src="_js/product.js"></script>


]


<script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyClBKRU9iKfSLnXVTvdv11RvKwpCrfdoQI&callback=initMap" async
    defer></script>

<?php include 'footer.php'; ?>