const loginForm =
document.getElementById("login-form");

loginForm.addEventListener("submit",(e)=>{

    e.preventDefault();

    const savedUser =
    JSON.parse(
        localStorage.getItem("user")
    );

    const email =
    document.getElementById("login-email")
    .value;

    const password =
    document.getElementById("login-password")
    .value;

    if(

        savedUser &&
        savedUser.email === email &&
        savedUser.password === password

    ){

        alert("Login Successful!");

        localStorage.setItem(
            "loggedIn",
            "true"
        );

        window.location.href =
        "index.html";

    }else{

        alert("Invalid Credentials");

    }

});