<?php
// Replace these values with your actual Cloudinary credentials


if ($_GET['COMMAND'] == 'GET_PRODUCTS') {

    header('Content-Type: application/json');

    $cloudinaryKey = "933634414754845";
    $cloudinarySecret = "DunCWR1RWwNFH_hgfMaaPwl8rOs";
    $cloudinaryName = "dic13326d";
    $assetFolder = $_GET['FOLDER_NAME'];
    // $assetFolder = "Light Numbers";
    $encodedAssetFolder = urlencode($assetFolder);
    $max_results = "50";


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


    $SEARCH = 'expression=metadata.name:' . $_GET['QUERY'] . '*&with_field=metadata';

    curl_setopt_array($ch, array(
        CURLOPT_URL => 'https://api.cloudinary.com/v1_1/dic13326d/resources/search?' . $SEARCH,
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

    if (curl_errno($ch)) {
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



    $assetId = $_GET['ASSET_ID'];

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

    if (curl_errno($ch)) {
        echo 'cURL Error: ' . curl_error($ch);
    } else {

        $result = json_decode($response, true); // Parse the response as JSON

        $jsonResult = json_encode($result['resources'][0], JSON_PRETTY_PRINT);

        print_r($jsonResult); // Output the Cloudinary data
    }

    curl_close($ch);
}







if ($_GET['COMMAND'] == 'DB_PRODUCT_SEARCH') {

    $QUERY = $_GET['QUERY'];

    // $querySet = 'where';
    $table_data = searchProduct($QUERY);

    // Use usort() to sort the array by 'match_count'
    usort($table_data, function ($a, $b) {
        // Compare the 'match_count' values and sort in descending order
        return (float) $b['match_count'] - (float) $a['match_count'];
    });

    print_r($table_data);
    header('Content-Type: application/json');
    // Output or further process the sorted data
    ob_start();
echo json_encode($table_data);
ob_end_flush();
}


if ($_GET['COMMAND'] == 'TEST') {

    $QUERY = $_GET['QUERY'];

    // $querySet = 'where';
    $table_data = searchProduct($QUERY);

    // Use usort() to sort the array by 'match_count'
    usort($table_data, function ($a, $b) {
        // Compare the 'match_count' values and sort in descending order
        return (float) $b['match_count'] - (float) $a['match_count'];
    });

    // Output or further process the sorted data
    echo json_encode($table_data);


}


function searchProduct($QUERY)
{
    require '../config/db.php';

    // Now you can run queries
    if($QUERY == ""){
        $sql = "SELECT *, CONCAT(asset_folder, ' ', description, ' ', name) AS searchText, (LENGTH(CONCAT(asset_folder, ' ', description, ' ', name)) - LENGTH(REPLACE(CONCAT(asset_folder, ' ', description, ' ', name), '" . $QUERY . "', ''))) / LENGTH('" . $QUERY . "') AS match_count FROM m_products"; // Example query
    }else{
        $sql = "SELECT *, CONCAT(asset_folder, ' ', description, ' ', name) AS searchText, (LENGTH(CONCAT(asset_folder, ' ', description, ' ', name)) - LENGTH(REPLACE(CONCAT(asset_folder, ' ', description, ' ', name), '" . $QUERY . "', ''))) / LENGTH('" . $QUERY . "') AS match_count FROM m_products WHERE CONCAT(asset_folder, ' ', description, ' ', name) LIKE '%" . $QUERY . "%'"; // Example query
    }


    $result = $conn->query($sql);

    $data = []; // Initialize an array to hold the rows

    if ($result->num_rows > 0) {
        // Fetch and store data of each row into the array
        while ($row = $result->fetch_assoc()) {
            $data[] = $row;
        }
    } else {
        $data = []; // Send a message if no data is found
    }

    $conn->close(); // Close connection when done

    // Set the header to indicate a JSON response
    header('Content-Type: application/json');
    // Return the data in JSON format
    // return json_encode($data);
    return $data;
}



function get_table_data($table_name)
{
    require '../config/db.php';

    // Now you can run queries
    $sql = "SELECT * FROM " . $table_name; // Example query
    $result = $conn->query($sql);

    $data = []; // Initialize an array to hold the rows

    if ($result->num_rows > 0) {
        // Fetch and store data of each row into the array
        while ($row = $result->fetch_assoc()) {
            $data[] = $row;
        }
    } else {
        $data = ["message" => "0 results"]; // Send a message if no data is found
    }

    $conn->close(); // Close connection when done

    // Set the header to indicate a JSON response
    header('Content-Type: application/json');
    // Return the data in JSON format
    // return json_encode($data);
    return json_encode($data);
}




?>