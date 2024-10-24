<?php
$servername = "localhost"; // Your database server
$username = "root"; // Database username
$password = "root"; // Database password
$dbname = "party_theme_db";   // Database name

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}
// echo "Connected successfully\n";
?>