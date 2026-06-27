<?php

session_start();
include "config.php";

if(!isset($_SESSION["user_id"])){

    echo "login_required";
    exit();

}

$user_id = $_SESSION["user_id"];

$product_name = $_POST["name"];
$price = $_POST["price"];
$image = $_POST["image"];

$check = mysqli_query(
$conn,
"SELECT * FROM wishlist
WHERE user_id='$user_id'
AND product_name='$product_name'"
);

if(mysqli_num_rows($check) == 0){

    mysqli_query(
    $conn,
    "INSERT INTO wishlist
    (user_id,product_name,price,image)

    VALUES

    ('$user_id',
     '$product_name',
     '$price',
     '$image')"
    );

}

echo "success";

?>