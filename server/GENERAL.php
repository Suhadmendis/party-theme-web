<?php
// Replace these values with your actual Cloudinary credentials


if ($_GET['COMMAND'] == 'ALL_FOLDERS') {

    header('Content-Type: application/json');

    $cloudinaryKey = "933634414754845";
    $cloudinarySecret = "DunCWR1RWwNFH_hgfMaaPwl8rOs";
    $cloudinaryName = "dic13326d";



    // Create the authentication string
    $auth = base64_encode("$cloudinaryKey:$cloudinarySecret");

    // Initialize cURL session
    $ch = curl_init();

    // Set the cURL options
    curl_setopt($ch, CURLOPT_URL, "https://api.cloudinary.com/v1_1/$cloudinaryName/folders");
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
        print_r($response);
        // $result = json_decode($response, true); // Parse the response as JSON
        // $jsonResult = json_encode($result['resources'], JSON_PRETTY_PRINT);
        // print_r($jsonResult); // Output the Cloudinary data

    }

    // Close the cURL session
    curl_close($ch);
}



?>