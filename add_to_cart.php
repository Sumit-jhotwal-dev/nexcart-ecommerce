<?php

session_start();

include "config.php";


if(!isset($_SESSION["user_id"])){

    echo "login_required";
    exit();

}


$user_id = $_SESSION["user_id"];


$product_id = $_POST["id"] ?? "";
$name = $_POST["name"] ?? "";
$price = $_POST["price"] ?? "";
$image = $_POST["image"] ?? "";

$check = mysqli_query(
$conn,
"SELECT * FROM cart
WHERE user_id='$user_id'
AND product_id='$product_id'"
);

if(mysqli_num_rows($check) > 0){

    mysqli_query(
    $conn,
    "UPDATE cart
    SET quantity = quantity + 1
    WHERE user_id='$user_id'
    AND product_id='$product_id'"
    );

    echo "added";

}else{

    $sql = "INSERT INTO cart
    (user_id, product_id, product_name, price, image, quantity)

    VALUES

    ('$user_id','$product_id','$name','$price','$image','1')";

    if(mysqli_query($conn,$sql)){

        echo "added";

    }else{

        echo "error";

    }

}

?>