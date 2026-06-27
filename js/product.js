console.log("JS FILE RUNNING");

document.addEventListener("DOMContentLoaded", ()=>{


const productData = localStorage.getItem("selectedProduct");


if(!productData){

    console.log("Product not found");

    return;

}


const product = JSON.parse(productData);


const productInfo =
document.getElementById("product-info");


productInfo.innerHTML = `


<div class="product-card">


<div class="product-image">

<img src="${product.image.includes("images/") ? product.image : "images/"+product.image}">

</div>


<h2>${product.name}</h2>


<p class="price">
${product.price}
</p>


<button id="detail-cart">
Add To Cart
</button>


<button id="detail-buy">
Buy Now
</button>


</div>

`;
document.getElementById("detail-cart")
.addEventListener("click", () => {

    fetch("add_to_cart.php", {

        method: "POST",

        headers: {
            "Content-Type": "application/x-www-form-urlencoded"
        },

        body:
        `id=${encodeURIComponent(product.id)}&name=${encodeURIComponent(product.name)}&price=${encodeURIComponent(product.price)}&image=${encodeURIComponent(product.image)}`

    })

    .then(response => response.text())

    .then(data => {

        if(data == "login_required"){

            window.location.href = "login.html";

        }

        else if(data == "added"){

            alert("Added To Cart 🛒");

        }

        else{

            alert(data);

        }

    });

});


document.getElementById("detail-buy")
.addEventListener("click",()=>{

localStorage.setItem(
"buyNowProduct",
JSON.stringify(product)
);


window.location.href =
"checkout.php?buynow=1";


});
});