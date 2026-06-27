<?php

session_start();
include "config.php";

$user_id = $_SESSION["user_id"];

$id = $_GET["id"];

mysqli_query(
$conn,
"DELETE FROM wishlist
WHERE id='$id'
AND user_id='$user_id'"
);

header("Location: wishlist.php");
exit();

?>