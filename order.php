
<?php


session_start();
include "config.php";

$user_id = $_SESSION["user_id"];

$fullname = $_POST["fullname"];
$email    = $_POST["email"];
$phone    = $_POST["phone"];

$address =
$_POST["address"] . ", " .
$_POST["city"] . ", " .
$_POST["state"];

$total = 0;


if(!empty($_POST["buyNowPrice"])){

    $total = (int) str_replace(
        ["₹", ","],
        "",
        $_POST["buyNowPrice"]
    );

}
else{


$result = mysqli_query(
$conn,
"SELECT * FROM cart WHERE user_id='$user_id'"
);


while($row = mysqli_fetch_assoc($result)){

    $price = (int) str_replace(
        ["₹", ","],
        "",
        $row["price"]
    );

$total += $price * $row["quantity"];}

}
$sql = "INSERT INTO orders
(user_id,fullname,email,phone,address,total_amount)

VALUES

('$user_id',
 '$fullname',
 '$email',
 '$phone',
 '$address',
 '$total')";

if(mysqli_query($conn,$sql)){
    $order_id = mysqli_insert_id($conn);

if(empty($_POST["buyNowPrice"])){

    $items = mysqli_query(
    $conn,
    "SELECT * FROM cart WHERE user_id='$user_id'"
    );

    while($item = mysqli_fetch_assoc($items)){

        mysqli_query(
        $conn,

        "INSERT INTO order_items
        (order_id,product_id,product_name,price,quantity,image)

        VALUES(

        '$order_id',

        '".$item["product_id"]."',

        '".$item["product_name"]."',

        '".$item["price"]."',

        '".$item["quantity"]."',

        '".$item["image"]."'

        )"

        );

    }

}   


else{

    mysqli_query(
    $conn,

    "INSERT INTO order_items
    (order_id,product_id,product_name,price,quantity,image)

    VALUES(

    '$order_id',

    '".$_POST["buyNowId"]."',

    '".$_POST["buyNowName"]."',

    '".$_POST["buyNowPrice"]."',

    '1',

    '".$_POST["buyNowImage"]."'

    )"

    );

}

   

?>

<!DOCTYPE html>
<html>
<head>

<title>Order Success</title>

<style>

body{

    font-family: Arial, sans-serif;
    background:#f5f7fb;
    display:flex;
    justify-content:center;
    align-items:center;
    height:100vh;

}


.success-box{

    background:white;
    padding:40px;
    width:350px;
    text-align:center;
    border-radius:20px;
    box-shadow:0 10px 30px rgba(0,0,0,0.1);

}


.check{

    font-size:60px;
    color:#22c55e;

}


h2{

    color:#16a34a;

}


.amount{

    font-size:22px;
    font-weight:bold;

}


.btn{

    display:inline-block;
    margin-top:25px;
    padding:12px 25px;
    background:#16a34a;
    color:white;
    text-decoration:none;
    border-radius:10px;

}


.btn:hover{

    background:#15803d;

}


</style>


</head>


<body>


<div class="success-box">


<div class="check">

✓

</div>


<h2>
Order Successful!
</h2>


<p>
Thank you for shopping with NexCart ❤️
</p>


<p>
Order ID:
<b>
#<?php echo $order_id; ?>
</b>
</p>


<p class="amount">

Total:
₹<?php echo number_format($total); ?>

</p>



<a class="btn" href="index.php">

Back To Shopping

</a>


</div>


</body>

</html>


<?php


}else{

echo mysqli_error($conn);

}

?>