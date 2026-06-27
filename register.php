<?php

include "config.php";

include "config.php";

if($_SERVER["REQUEST_METHOD"] == "POST"){

    $fullname = $_POST["fullname"];
    $email = $_POST["email"];
    $password = $_POST["password"];

    $password = password_hash(
        $password,
        PASSWORD_DEFAULT
    );
    $check = "SELECT * FROM users
          WHERE email='$email'";

$result = mysqli_query(
    $conn,
    $check
);

if(mysqli_num_rows($result) > 0){

    die("Email Already Registered");

}

    $sql = "INSERT INTO users
    (fullname,email,password)

    VALUES

    ('$fullname','$email','$password')";

    if(mysqli_query($conn,$sql)){

    header("Location: login.html");
exit();

    }else{

    echo mysqli_error($conn);

}

}

?>
