<?php



deleteProducts();


$folders = getFolders();
$products = array();



for ($i = 0; $i < sizeof($folders); $i++) {
    $productsSet = getFolderProducts($folders[$i]);


    for ($j = 0; $j < sizeof($productsSet); $j++) {

        insertAsset($productsSet[$j]);
        // array_push($products, $productsSet[$j]);
    }

}
// print_r($products[0]);
// echo sizeof($products);
// Now $foldersArray contains the folders in array format
// print_r($folders);


function deleteProducts(){
    require '../config/db.php';
    $sql = "DELETE FROM m_products";

    // Prepare and bind
    $stmt = $conn->prepare($sql);


    // Execute the statement
    if ($stmt->execute()) {
        echo "Asset deleted successfully!\n";
    } else {
        echo "Error: " . $stmt->error;
    }

    $conn->close();
}

function insertAsset($assetData)
{
    $description = isset($assetData->metadata->description) ? $assetData->metadata->description : null;
    $name = isset($assetData->metadata->name) ? $assetData->metadata->name : null;
    $availability = isset($assetData->metadata->availability) ? (int) $assetData->metadata->availability : 1;


    require '../config/db.php';
    // $sql = "INSERT INTO m_products (asset_id, public_id, bytes, width, height, asset_folder, display_name, url, secure_url, description, name, availability)
    // VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";


// $sql = "INSERT INTO m_products (asset_id, public_id, bytes, width, height, asset_folder, display_name, url, secure_url)
// VALUES (".$assetData->asset_id.", '.$assetData->public_id.', '.$assetData->bytes.', '.$assetData->width.', '.$assetData->height.', '.$assetData->asset_folder.', '.$assetData->display_name.', ".$assetData->url.", ".$assetData->secure_url.")";

$sql = "INSERT INTO m_products (asset_id, public_id, bytes, width, height, asset_folder, display_name, url, secure_url, description, name, availability)
VALUES ('$assetData->asset_id', '$assetData->public_id', '$assetData->bytes', '$assetData->width', '$assetData->height', '$assetData->asset_folder', '$assetData->display_name', '$assetData->url', '$assetData->secure_url', '$description', '$name', '$availability')";

// Execute the query and check if it's successful
if ($conn->query($sql) === TRUE) {
    echo "New record created successfully\n";
} else {
    echo "Error: " . $sql . "<br>" . $conn->error;
}



}


function getFolders()
{

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

        $response = json_decode($response);

        // Check if $folders is an object and convert it to an array if necessary
        if (is_object($response)) {
            $responseArray = (array) $response->folders;
        } else {
            // If it's already an array, you can use it directly
            $responseArray = $response;
        }

        return $responseArray;
        // $result = json_decode($response, true); // Parse the response as JSON
        // $jsonResult = json_encode($result['resources'], JSON_PRETTY_PRINT);
        // print_r($jsonResult); // Output the Cloudinary data

    }

    // Close the cURL session
    curl_close($ch);
}


function getFolderProducts($folder)
{

    header('Content-Type: application/json');

    $cloudinaryKey = "933634414754845";
    $cloudinarySecret = "DunCWR1RWwNFH_hgfMaaPwl8rOs";
    $cloudinaryName = "dic13326d";
    $assetFolder = $folder->name;
    // $assetFolder = "Light Numbers";
    $encodedAssetFolder = urlencode($assetFolder);
    $max_results = "500";


    // Create the authentication string
    $auth = base64_encode("$cloudinaryKey:$cloudinarySecret");

    // Initialize cURL session
    $ch = curl_init();

    // Set the cURL options
    curl_setopt($ch, CURLOPT_URL, "https://api.cloudinary.com/v1_1/$cloudinaryName/resources/by_asset_folder?asset_folder=$encodedAssetFolder&max_results=$max_results");
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
        $result = json_decode($response); // Parse the response as JSON
        // $jsonResult = json_encode($result['resources'], JSON_PRETTY_PRINT);
        return $result->resources; // Output the Cloudinary data

    }

    // Close the cURL session
    curl_close($ch);
}


?>