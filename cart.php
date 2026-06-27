<?php

session_start();

include "config.php";

if(!isset($_SESSION["user_id"])){

    header("Location: login.html");
    exit();

}

$user_id = $_SESSION["user_id"];

?>


<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Cart - NexCart</title>

    <link rel="stylesheet" href="css/style.css">
</head>
<body>

    <header>

        <nav>

            <div class="logo">
                NexCart
            </div>

            <a href="index.php#products">
                Back To Shop
            </a>

        </nav>

    </header>

    <section id="cart-page">

        <h2>Your Shopping Cart</h2>

<div id="cart-items">

<?php

$total = 0;

$result = mysqli_query(
$conn,
"SELECT * FROM cart WHERE user_id='$user_id'"
);

while($row = mysqli_fetch_assoc($result)){

    $price = (int) str_replace(
        ["₹",","],
        "",
        $row["price"]
    );

    $subtotal = $price * $row["quantity"];

$total += $subtotal;

?>
<div class="cart-card">

    <h3>
        <?php echo $row["product_name"]; ?>
    </h3>

    <p class="cart-price">
        <?php echo $row["price"]; ?>
    </p>

       <p>
Quantity:
<?php echo $row["quantity"]; ?>
</p>

<a href="update_quantity.php?id=<?php echo $row['id']; ?>&action=minus">➖</a>

<strong>
<?php echo $row["quantity"]; ?>
</strong>

<a href="update_quantity.php?id=<?php echo $row['id']; ?>&action=plus">➕</a>

<p>
Subtotal:
₹<?php echo number_format($subtotal); ?>
</p>

    <a href="remove_cart.php?id=<?php echo $row['id']; ?>"
style="
display:inline-block;
margin-top:15px;
padding:10px 20px;
background:#dc2626;
color:white;
text-decoration:none;
border-radius:10px;
">

Remove

</a>

</div>

<?php

}

?>

</div>

<div class="cart-total">

    <h2>
        Total:
        ₹<?php echo number_format($total); ?>
    </h2>

</div>
<?php



?>

 <a href="checkout.php"
id="checkout-btn"
onclick="localStorage.removeItem('buyNowProduct')">

    Proceed To Checkout

</a>

    </section>

    <!---<script src="js/cart.js"></script>-->

</body>
</html>