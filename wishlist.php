<?php

session_start();
include "config.php";

if(!isset($_SESSION["user_id"])){

    die("Please Login First");

}

$user_id = $_SESSION["user_id"];

$result = mysqli_query(
$conn,
"SELECT * FROM wishlist
 WHERE user_id='$user_id'"
);

?>

<!DOCTYPE html>
<html lang="en">

<head>

<meta charset="UTF-8">

<meta name="viewport"
content="width=device-width, initial-scale=1.0">

<title>Wishlist</title>

<link rel="stylesheet"
href="css/style.css">

</head>

<body>

<h1 style="text-align:center;">
    My Wishlist ❤️
</h1>

<div id="wishlist-container">

<?php

if(mysqli_num_rows($result) == 0){

    echo "<h2>No Products In Wishlist</h2>";

}else{

while($row = mysqli_fetch_assoc($result)){

?>

<div class="product-card">

<h3>
<?php echo $row["product_name"]; ?>
</h3>

<p class="price">
<?php echo $row["price"]; ?>
</p>

<img
src="<?php
echo (strpos($row["image"], "images/") === 0)
? $row["image"]
: "images/" . $row["image"];
?>"
width="150">

<br><br>

<a
href="remove_wishlist.php?id=<?php echo $row['id']; ?>"
class="remove-btn">

Remove

</a>

</div>

<?php

}

}
echo mysqli_error($conn);
?>

</div>

</body>

</html>