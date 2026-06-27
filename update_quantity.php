<?php

session_start();
include "config.php";

if(!isset($_SESSION["user_id"])){

    header("Location: login.html");
    exit();

}

$id = $_GET["id"];
$action = $_GET["action"];

$result = mysqli_query(
$conn,
"SELECT quantity FROM cart WHERE id='$id'"
);

$row = mysqli_fetch_assoc($result);

$quantity = $row["quantity"];

if($action == "plus"){

    $quantity++;

}

if($action == "minus" && $quantity > 1){

    $quantity--;

}

mysqli_query(
$conn,
"UPDATE cart
SET quantity='$quantity'
WHERE id='$id'"
);

header("Location: cart.php");
exit();

?>