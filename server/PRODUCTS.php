<?php
// Replace these values with your actual Cloudinary credentials


if ($_GET['COMMAND'] == 'GET_PRODUCTS') {

    header('Content-Type: application/json');

    $cloudinaryKey = "933634414754845";
    $cloudinarySecret = "DunCWR1RWwNFH_hgfMaaPwl8rOs";
    $cloudinaryName = "dic13326d";
    $assetFolder = "Arch_Backdrops";

    // Create the authentication string
    $auth = base64_encode("$cloudinaryKey:$cloudinarySecret");

    // Initialize cURL session
    $ch = curl_init();

    // Set the cURL options
    curl_setopt($ch, CURLOPT_URL, "https://api.cloudinary.com/v1_1/$cloudinaryName/resources/by_asset_folder?asset_folder=$assetFolder");
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
    curl_setopt($ch, CURLOPT_HTTPHEADER, [
        "Authorization: Basic $auth",
        "X-Requested-With: XMLHttpRequest",
        "Access-Control-Allow-Origin: *"
    ]);

    // Execute the request
    $response = curl_exec($ch);

    // Check if the request was successful
    if (curl_errno($ch)) {
        echo "cURL Error: " . curl_error($ch);
    } else {
        $result = json_decode($response, true); // Parse the response as JSON
        $jsonResult = json_encode($result['resources'], JSON_PRETTY_PRINT);
        print_r($jsonResult); // Output the Cloudinary data

    }

    // Close the cURL session
    curl_close($ch);
}



if ($_GET['COMMAND'] == 'PRODUCT_SEARCH') {


    header('Content-Type: application/json');

    $cloudinaryKey = "933634414754845";
    $cloudinarySecret = "DunCWR1RWwNFH_hgfMaaPwl8rOs";
    $cloudinaryName = "dic13326d";
    $assetFolder = "Arch_Backdrops";

    // Create the authentication string
    $auth = base64_encode("$cloudinaryKey:$cloudinarySecret");

    // Initialize cURL session
    $ch = curl_init();


    $SEARCH = 'expression=metadata.name:'.$_GET['QUERY'].'*&with_field=metadata';

    curl_setopt_array($ch, array(
        CURLOPT_URL => 'https://api.cloudinary.com/v1_1/dic13326d/resources/search?'.$SEARCH,
        CURLOPT_RETURNTRANSFER => true,
        CURLOPT_ENCODING => '',
        CURLOPT_MAXREDIRS => 10,
        CURLOPT_TIMEOUT => 0,
        CURLOPT_FOLLOWLOCATION => true,
        CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
        CURLOPT_CUSTOMREQUEST => 'GET',
        CURLOPT_HTTPHEADER => array(
          'Content-Type: application/json',
          "Authorization: Basic $auth",
          "Access-Control-Allow-Origin: *"
        ),
      ));

    // Set the cURL options
    // curl_setopt($ch, CURLOPT_URL, "https://api.cloudinary.com/v1_1/$cloudinaryName/resources/search");
    // curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
    // curl_setopt($ch, CURLOPT_HTTPHEADER, [
    //     "Authorization: Basic $auth",
    //     "X-Requested-With: XMLHttpRequest",
    //     "Access-Control-Allow-Origin: *"
    // ]);
    // curl_setopt($ch, CURLOPT_POSTFIELDS, '{ "expression"=> "metadata.color:pink" }');


    $response = curl_exec($ch);

    if(curl_errno($ch)) {
        echo 'cURL Error: ' . curl_error($ch);
    } else {
        $result = json_decode($response, true); // Parse the response as JSON
        $jsonResult = json_encode($result['resources'], JSON_PRETTY_PRINT);
        print_r($jsonResult); // Output the Cloudinary data
    }

    curl_close($ch);
}





if ($_GET['COMMAND'] == 'GET_PRODUCT') {


    header('Content-Type: application/json');

    $cloudinaryKey = "933634414754845";
    $cloudinarySecret = "DunCWR1RWwNFH_hgfMaaPwl8rOs";
    $cloudinaryName = "dic13326d";
    $assetFolder = "Arch_Backdrops";

    // Create the authentication string
    $auth = base64_encode("$cloudinaryKey:$cloudinarySecret");

    // Initialize cURL session
    $ch = curl_init();



    $assetId = 'aba4318d8395172c3607b4685d3be616';

    curl_setopt_array($ch, array(
        CURLOPT_URL => 'https://api.cloudinary.com/v1_1/dic13326d/resources/by_asset_ids',
        CURLOPT_RETURNTRANSFER => true,
        CURLOPT_ENCODING => '',
        CURLOPT_MAXREDIRS => 10,
        CURLOPT_TIMEOUT => 0,
        CURLOPT_FOLLOWLOCATION => true,
        CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
        CURLOPT_CUSTOMREQUEST => 'GET',
        CURLOPT_HTTPHEADER => array(
          'Content-Type: application/json',
          "Authorization: Basic $auth",
          "Access-Control-Allow-Origin: *"
        ),
        CURLOPT_POSTFIELDS => json_encode(array('asset_ids' => array($assetId))),
      ));

    // Set the cURL options
    // curl_setopt($ch, CURLOPT_URL, "https://api.cloudinary.com/v1_1/$cloudinaryName/resources/search");
    // curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
    // curl_setopt($ch, CURLOPT_HTTPHEADER, [
    //     "Authorization: Basic $auth",
    //     "X-Requested-With: XMLHttpRequest",
    //     "Access-Control-Allow-Origin: *"
    // ]);
    // curl_setopt($ch, CURLOPT_POSTFIELDS, '{ "expression"=> "metadata.color:pink" }');


    $response = curl_exec($ch);

    if(curl_errno($ch)) {
        echo 'cURL Error: ' . curl_error($ch);
    } else {

        $result = json_decode($response, true); // Parse the response as JSON

        $jsonResult = json_encode($result['resources'][0], JSON_PRETTY_PRINT);

        print_r($jsonResult); // Output the Cloudinary data
    }

    curl_close($ch);
}



?>