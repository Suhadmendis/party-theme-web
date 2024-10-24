<?php


// $getUserIP = getUserIP();

// $sql = "INSERT INTO w_visitors (visitor_ip_address,visitor_lat,visitor_lng) VALUES ('$getUserIP', '','')";


// // Execute the query and check if it's successful
// if ($conn->query($sql) === TRUE) {
//     echo "New record created successfully";
// } else {
//     echo "Error: " . $sql . "<br>" . $conn->error;
// }








function getUserIP()
{
    if (!empty($_SERVER['HTTP_CLIENT_IP'])) {
        // Check if IP is from shared internet
        $ip = $_SERVER['HTTP_CLIENT_IP'];
    } elseif (!empty($_SERVER['HTTP_X_FORWARDED_FOR'])) {
        // Check if IP is passed from proxy
        $ip = $_SERVER['HTTP_X_FORWARDED_FOR'];
    } else {
        // Default fallback: remote address
        $ip = $_SERVER['REMOTE_ADDR'];
    }
    return $ip;
}


?>