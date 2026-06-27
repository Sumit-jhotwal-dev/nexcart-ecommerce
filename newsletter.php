<?php

include "config.php";

$email = mysqli_real_escape_string($conn,$_POST['email']);

$sql = "INSERT IGNORE INTO newsletter(email)
VALUES('$email')";

if(mysqli_query($conn,$sql)){

    echo "<script>
    alert('Thank you for subscribing!');
    window.location='index.php';
    </script>";

}
else{

    echo "<script>
    alert('Something went wrong!');
    history.back();
    </script>";

}

?>