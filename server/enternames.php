<?php


// $getUserIP = getUserIP();

// $sql = "INSERT INTO w_visitors (visitor_ip_address,visitor_lat,visitor_lng) VALUES ('$getUserIP', '','')";


// // Execute the query and check if it's successful
// if ($conn->query($sql) === TRUE) {
//     echo "New record created successfully";
// } else {
//     echo "Error: " . $sql . "<br>" . $conn->error;
// }





getUnSetProducts();

function getUnSetProducts()
{
    require '../config/db.php';

    // Now you can run queries
    $sql = "SELECT asset_folder as Category, description as Description, name as Name FROM m_products where name = '' or name = 'Product' or name = 'no' or description = '' or description = 'Product' or description = 'no'"; // Example query

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


    $data = utf8ize($data);

    header('Content-Type: application/json');
    echo json_encode($data);
}

function utf8ize($data)
{
    if (is_array($data)) {
        foreach ($data as $key => $value) {
            $data[$key] = utf8ize($value);
        }
    } else if (is_string($data)) {
        return mb_convert_encoding($data, 'UTF-8', 'UTF-8');
    }
    return $data;
}

?>