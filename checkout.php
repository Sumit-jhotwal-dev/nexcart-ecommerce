

<?php

session_start();
include "config.php";

$user_id = $_SESSION["user_id"];
$isBuyNow = isset($_GET["buynow"]);

$total = 0;

$buyNow = null;

if(isset($_SESSION["buyNow"])){

    $buyNow = $_SESSION["buyNow"];

}

$result = mysqli_query(
$conn,
"SELECT * FROM cart WHERE user_id='$user_id'"
);

?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Checkout - NexCart</title>

    <link rel="stylesheet" href="css/style.css">
</head>
<body>

<header>

    <nav>

        <div class="logo">NexCart</div>

        <?php if($isBuyNow){ ?>

<a href="javascript:history.back()">
    Back To Product
</a>

<?php } else { ?>

<a href="index.php#products">
    Back To shop
</a>

<?php } ?>
    </nav>

</header>

<section id="checkout">

    <h2>Checkout</h2>
    <div id="order-summary">

    <h3>Your Order</h3>

 




<?php

?>

</div>
<?php if(!$isBuyNow){ ?>
<div id="summary-items">

<?php

while($row = mysqli_fetch_assoc($result)){

    $price = (int) str_replace(
        ["₹",","],
        "",
        $row["price"]
    );


    $quantity = $row["quantity"];


    $subtotal = $price * $quantity;


    $total += $subtotal;



?>


<div class="cart-card">

<h4>
<?php echo $row["product_name"]; ?>
</h4>

<p>
<?php echo $row["price"]; ?>
</p>
<p>
Quantity:
<?php echo $row["quantity"]; ?>
</p>

<p>
Subtotal:
₹<?php echo number_format($subtotal); ?>
</p>

</div>


<?php }  ?>

<?php } ?>

</div>
</div>
<div id="buy-now-product"></div>
    
<form id="checkout-form"
      action="order.php"
      method="POST">

    <input type="text"
           name="fullname"
           placeholder="Full Name"
           required>

    <input type="email"
           name="email"
           placeholder="Email Address"
           required>

    <input type="tel"
           name="phone"
           placeholder="Phone Number"
           required>

    <textarea
        name="address"
        placeholder="Delivery Address"
        rows="4"
        required></textarea>

    <input type="text"
           name="city"
           placeholder="City"
           required>

    <input type="text"
           name="state"
           placeholder="State"
           required> 

    <input type="hidden" name="buyNowId" id="buyNowId">
<input type="hidden" name="buyNowName" id="buyNowName">
<input type="hidden" name="buyNowImage" id="buyNowImage">


    <input type="hidden" 
            name="buyNowPrice" 
            id="buyNowPrice"
            value="">

    <button type="submit">
        Place Order
    </button>

</form>
    <div id="order-message"></div>

</section>
<script>
const buyNowProduct =
JSON.parse(localStorage.getItem("buyNowProduct"));

//alert("Buy Price = " + buyNowProduct.price);

if(buyNowProduct){

    document.getElementById("buy-now-product").innerHTML = `
    <div class="cart-card">
        <h4>${buyNowProduct.name}</h4>
        <p>₹${buyNowProduct.price}</p>
    </div>
    `;

   // document.getElementById("summary-items").style.display = "none";
}

let buyProduct = JSON.parse(localStorage.getItem("buyNowProduct"));

console.log("BUY PRODUCT:", buyProduct);


if(buyProduct){

    document.getElementById("buyNowPrice").value = buyProduct.price;
    document.getElementById("buyNowId").value = buyProduct.id;
    document.getElementById("buyNowName").value = buyProduct.name;
    document.getElementById("buyNowImage").value = buyProduct.image;

}
</script>


</body>
</html>