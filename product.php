


<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/flatpickr/dist/flatpickr.min.css">

<!-- Include Flatpickr JS -->
<script src="https://cdn.jsdelivr.net/npm/flatpickr"></script>


<?php include 'header.html'; ?>
<!-- Promotion Section -->

<div id="product">

    <br>
    <br>
    <br>
    <div id="product-area" v-if="PRODUCT">
        <div class="container">
            <div class="row" >
                <div class="col-md-5">
                    <div id="left">
                        <div id="left-inner">
                            <img :src="PRODUCT.image_url" class="product-img" alt="Offer 1" />
                        </div>
                    </div>
                </div>
                <div class="col-md-7">
                    <div id="right">
                        <div class="container-box">
                            <div class="info-pallet-box">
                                <h6 class="category-text">{{ PRODUCT.categoryName }}</h6>
                                <h2 class="title-text">{{ PRODUCT.data.name }}</h2>

                                <br>
                                <!-- <div class="rating">
                                    <span class="star">★</span>
                                    <span>8/10 - 15 Reviews</span>
                                </div> -->

                                <!-- <div class="colors">
                                    <div class="color pink"></div>
                                    <div class="color blue"></div>
                                </div> -->





                                <p>{{ PRODUCT.data.description }}</p>

                                <input type="text" id="calendar" v-model="selectedDate" placeholder="Select Date" hidden>

                                <!-- <div class="dimensions">
                                    <span>Height: 52cm</span>
                                    <span>Width: 43cm</span>
                                </div> -->

                                <div class="price" v-if="PRODUCT.data.amount">LKR {{ PRODUCT.data.amount }}.00
                                </div>

                                <!-- <div class="quantity">
                                    <button onclick="decreaseQuantity()">-</button>
                                    <input type="number" id="quantity" value="1" min="1">
                                    <button onclick="increaseQuantity()">+</button>
                                </div> -->

                                <div class="actions">
                                    <!-- <button class="add-to-cart">Add to Cart</button> -->
                                    <a :href="`https://wa.me/+94778182596?text=Need%20this%20product%20${PRODUCT.image_secure_url}`">

                                        <button class="buy-now">Book Now <i class="fa-brands fa-whatsapp fa-lg"></i></button>
                                    </a>

                                </div>
                            </div>


                        </div>



                    </div>
                    <div class="info-product-bottom">
                        <p class="info-product-bottom-text" v-if="routeDetails" >Located {{ routeDetails.distance.text }} away from you, estimated arrival in {{ routeDetails.duration.text }}.</p>
                    </div>

                </div>
            </div>
        </div>
    </div>




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



    <div class="container" v-show="false">
        <h1 v-if="routeDetails">Distance {{ routeDetails.distance.text }}</h1>
        <h1 v-if="routeDetails">Duration {{ routeDetails.duration.text }}</h1>
        <h1 @click="initMap()">My Google Map</h1>

        <div id="map"></div>

    </div>


    <br><br><br><br><br>


</div>




<script src="_js/product.js"></script>


]


<script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyClBKRU9iKfSLnXVTvdv11RvKwpCrfdoQI&callback=initMap" async
    defer></script>

<?php include 'footer.html'; ?>