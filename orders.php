

<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>My Orders</title>

<link rel="stylesheet" href="css/style.css">
</head>

<body>

<section id="orders">

    <h2>My Orders</h2>

    <div id="orders-container">

    </div>


<?php
session_start();
include "config.php";

$user_id = $_SESSION["user_id"];

$sql = "SELECT * FROM orders
        WHERE user_id='$user_id'
        ORDER BY id DESC";

$result = mysqli_query($conn,$sql);

while($row = mysqli_fetch_assoc($result)){
?>
<?php

$order_id = $row["id"];

$items = mysqli_query(

$conn,

"SELECT * FROM order_items
WHERE order_id='$order_id'"

);

?>

<div class="cart-card">

    <h3>Order #<?php echo $row["id"]; ?></h3>

    <p>
        Total:
        ₹<?php echo number_format($row["total_amount"]); ?>
    </p>

    <p>

Payment Method : Cash on Delivery (COD)

<strong>

<?php echo $row["payment_method"]; ?>

</strong>

</p>

<p>

Payment Status : Pending

<strong style="color:orange;">

<?php echo $row["payment_status"]; ?>

</strong>

</p>

<p>

Order Status : Processing

<strong style="color:green;">

<?php echo $row["order_status"]; ?>

</strong>

</p>

    <p>
        Name:
        <?php echo $row["fullname"]; ?>
    </p>

    <p>
        Phone:
        <?php echo $row["phone"]; ?>
    </p>
    <h4>Products</h4>

<?php

while($item = mysqli_fetch_assoc($items)){

?>

<div style="

display:flex;

align-items:center;

gap:15px;

margin:15px 0;

padding:10px;

border:1px solid #ddd;

border-radius:10px;

">

<img

src="<?php echo (strpos($item["image"], "images/") === 0) ? $item["image"] : "images/".$item["image"]; ?>"

width="80"

height="80"

style="object-fit:cover; border-radius:8px;">

<div>

<strong>

<?php echo $item["product_name"]; ?>

</strong>

<br>

Price :

<?php echo $item["price"]; ?>

<br>

Quantity :

<?php echo $item["quantity"]; ?>

</div>

</div>

<?php

}

?>

    <p>
        Address:
        <?php echo $row["address"]; ?>
    </p>

</div>

<?php
}
?>
</section>

<!--<script src="js/orders.js"></script>--->

</body>
</html>