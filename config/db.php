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
print_r($conn);
// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}
echo "Connected successfully\n";
?>