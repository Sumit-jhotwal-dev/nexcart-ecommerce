let cartItems =
JSON.parse(localStorage.getItem("cartItems")) || [];

const cartButtons =
document.querySelectorAll(".add-cart");

cartButtons.forEach(button=>{

    button.addEventListener("click",()=>{

        const productCard =
        button.closest(".product-card");

        const productName =
        productCard.querySelector("h3").innerText;

        const productPrice =
        productCard.querySelector(".price").innerText;

        cartItems.push({

            name: productName,

            price: productPrice

        });

        localStorage.setItem(
            "cartItems",
            JSON.stringify(cartItems)
        );

        document.getElementById("cart-count")
        .innerText =
        `🛒 Cart (${cartItems.length})`;

    });

});

const buyNowButtons =
document.querySelectorAll(".buy-now");

buyNowButtons.forEach(button=>{

    button.addEventListener("click",()=>{

        const productCard =
        button.closest(".product-card");

        const productName =
        productCard.querySelector("h3").innerText;

        const productPrice =
        productCard.querySelector(".price").innerText;

        const buyNowProduct = {

            name: productName,

            price: productPrice

        };

        localStorage.setItem(
            "buyNowProduct",
            JSON.stringify(buyNowProduct)
        );

        window.location.href =
        "checkout.html";

    });

});
let wishlistCount =
localStorage.getItem("wishlistCount") || 0;

document.getElementById("wishlist-count")
.innerText =
`❤️ Wishlist (${wishlistCount})`;

const wishlistButtons =
document.querySelectorAll(".wishlist-btn");

wishlistButtons.forEach(button=>{

    button.addEventListener("click",()=>{

        wishlistCount++;

        localStorage.setItem(
            "wishlistCount",
            wishlistCount
        );

        document.getElementById("wishlist-count")
        .innerText =
        `❤️ Wishlist (${wishlistCount})`;

    });

});
const searchBtn =
document.getElementById("search-btn");

searchBtn.addEventListener("click",()=>{

    const searchValue =
    document.getElementById("search-input")
    .value
    .toLowerCase();

    const products =
    document.querySelectorAll(".product-card");

    products.forEach(product=>{

        const productName =
        product.querySelector("h3")
        .innerText
        .toLowerCase();

        if(productName.includes(searchValue)){

            product.style.display = "block";

        }else{

            product.style.display = "none";
        }

    });

});
const searchInput =
document.getElementById("search-input");

searchInput.addEventListener("input",()=>{

    const searchValue =
    searchInput.value.toLowerCase();

    const products =
    document.querySelectorAll(".product-card");

    products.forEach(product=>{

        const productName =
        product.querySelector("h3")
        .innerText
        .toLowerCase();

        if(productName.includes(searchValue)){

            product.style.display = "block";

        }else{

            product.style.display = "none";
        }

    });

});
document
.getElementById("search-input")
.addEventListener("keypress", function(event){

    if(event.key === "Enter"){

        document
        .getElementById("search-btn")
        .click();

    }

});
const detailButtons =
document.querySelectorAll(".details-btn");

const modal =
document.getElementById("product-modal");

const modalTitle =
document.getElementById("modal-product-title");

const modalDescription =
document.getElementById("modal-product-description");

const closeModal =
document.querySelector(".close-modal");

detailButtons.forEach(button=>{

    button.addEventListener("click",()=>{

        const productCard =
        button.closest(".product-card");

        const title =
        productCard.querySelector("h3").innerText;

        modalTitle.innerText = title;

        modalDescription.innerText =
        `${title} is one of our premium products available on NexCart.`;

        modal.style.display = "flex";

    });

});

closeModal.addEventListener("click",()=>{

    modal.style.display = "none";

});
const userSection =
document.getElementById("user-section");

const user =
JSON.parse(localStorage.getItem("user"));

const loggedIn =
localStorage.getItem("loggedIn");

if(user && loggedIn === "true"){

    userSection.innerHTML = `

    <a href="profile.html"
    id="profile-link">

        👤 Profile

    </a>

    <button id="logout-btn">

        Logout

    </button>

`;

    document
    .getElementById("logout-btn")
    .addEventListener("click",()=>{

        localStorage.removeItem(
            "loggedIn"
        );

        location.reload();

    });

}