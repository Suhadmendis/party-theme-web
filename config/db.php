<?php
$servername = ""; // Your database server
$username = ""; // Database username
$password = ""; // Database password
$dbname = "";   // Database name

if ($_SERVER['HTTP_HOST'] == 'localhost:8888') {
    $servername = "localhost"; // Your database server
    $username = "root"; // Database username
    $password = "root"; // Database password
    $dbname = "party_theme_db";   // Database name
}
if ($_SERVER['HTTP_HOST'] == 'partytheme.lk') {
    $servername = "170.249.212.10"; // Your database server
    $username = "partythe_akila"; // Database username
    $password = "SaGaRa4000"; // Database password
    $dbname = "partythe_me_db";   // Database name
}


// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}
echo "Connected successfully\n";

// Now you can run queries
$sql = "SELECT * FROM m_products"; // Example query
$result = $conn->query($sql);

print_r($result);
$data = []; // Initialize an array to hold the rows

if ($result->num_rows > 0) {
    // Fetch and store data of each row into the array
    while ($row = $result->fetch_assoc()) {
        $data[] = $row;
    }
} else {
    $data = ["message" => "0 results"]; // Send a message if no data is found
}

print_r($data);
$conn->close(); // Close connection when done


?>