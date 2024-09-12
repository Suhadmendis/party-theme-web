<?php include 'header.php'; ?>

<link rel="stylesheet" href="package.css" />

<div id="package-section">

    <div class="container text-white" v-for="package in PACKAGES">
    <br><br>
        <div class="premium-title">{{ package.packageName }}</div>

        <div class="row">
            <div class="col-lg-7 order-lg-1 order-2">
                <ul class="product-details list-unstyled">
                    <li><strong>Design:</strong> Features a vibrant, enchanted garden scene with flowers, butterflies,
                        and fairy lights</li>
                    <li><strong>Material:</strong> {{ package.material }}</li>

                    <li><strong>Dimensions:</strong> 7 feet by 5 feet</li>


                    <li><strong>Available AddOns:</strong> </li>
                    <li style="margin-left: 20px; margin-bottom: 2px" v-for="addOn in package.availableAddOns">{{ addOn
                        }}</li>
                </ul>
                <p>{{ package.description }}</p>
            </div>
            <div class="offset-lg-1 col-lg-4 order-lg-2 order-1 position-relative">
                <div class="balloon-arch">
                    <img id="package-image" :src="package.imageUrl" alt="Balloon Arch">
                </div>
            </div>
        </div>
        <div class="product-price">LKR {{ package.amount }}.00</div>
        <br>
    </div>



</div>


<script src="_js/package.js"></script>
<?php include 'footer.php'; ?>