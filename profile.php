<?php

session_start();

if(!isset($_SESSION["user_id"])){

    header("Location: login.html");
    exit();

}

?>

<!DOCTYPE html>
<html>
<head>

<title>My Profile</title>

<style>

*{
    margin:0;
    padding:0;
    box-sizing:border-box;
    font-family:Arial, sans-serif;
}


body{

    background:#f5f5f5;

}


/* profile main */

.profile-container{

    width:100%;
    min-height:100vh;
    display:flex;
    justify-content:center;
    align-items:center;

}



.profile-card{

    background:white;
    width:400px;
    padding:35px;
    border-radius:15px;
    text-align:center;
    box-shadow:0 5px 20px rgba(0,0,0,0.1);

}



.profile-icon{

    width:90px;
    height:90px;
    background:#222;
    color:white;
    border-radius:50%;
    display:flex;
    justify-content:center;
    align-items:center;
    font-size:45px;
    margin:auto;
}



h1{

    margin-top:20px;
    color:#222;

}



.username{

    font-size:20px;
    margin:15px 0;
    color:#555;

}



/* options */


.profile-options{

    margin-top:25px;

}


.option{

    background:#f8f8f8;
    padding:15px;
    margin:12px 0;
    border-radius:10px;
    cursor:pointer;

}



.option:hover{

    background:#eee;

}



.option h3{

    margin-bottom:5px;

}




.home-btn{

    display:inline-block;
    margin-top:20px;
    padding:12px 25px;
    background:#111;
    color:white;
    text-decoration:none;
    border-radius:8px;

}



.home-btn:hover{

    background:#333;

}

.option{

    display:block;
    text-decoration:none;
    color:#222;

}



</style>


</head>


<body>


<div class="profile-container">


<div class="profile-card">


<div class="profile-icon">

👤

</div>



<h1>My Profile</h1>


<p class="username">

Welcome, 
<?php echo $_SESSION["user_name"]; ?>

</p>



<div class="profile-options">


<div class="profile-options">


<a href="orders.php" class="option">

<h3>📦 My Orders</h3>

<p>View your order history</p>

</a>



<a href="wishlist.php" class="option">

<h3>❤️ Wishlist</h3>

<p>Your saved products</p>

</a>



<a href="cart.php" class="option">

<h3>🛒 My Cart</h3>

<p>Manage your cart items</p>

</a>


</div>


</div>




<a class="home-btn" href="index.php">

Back To Home

</a>



</div>


</div>


</body>

</html>