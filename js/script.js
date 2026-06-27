
let cartItems =
JSON.parse(localStorage.getItem("cartItems")) || [];

const cartButtons =
document.querySelectorAll(".add-cart");


cartButtons.forEach(button=>{

    button.addEventListener("click",()=>{


        const productCard =
        button.closest(".product-card");


        const productId =
        productCard.dataset.id;


        const productName =
        productCard.dataset.name;


        const productPrice =
        productCard.dataset.price;


        const productImage =
        productCard.dataset.image;


        fetch("add_to_cart.php",{

            method:"POST",

            headers:{
                "Content-Type":
                "application/x-www-form-urlencoded"
            },


            body:

            `id=${productId}&name=${productName}&price=${productPrice}&image=${productImage}`

        })

        .then(response=>response.text())

        .then(data=>{


            if(data=="login_required"){

                window.location.href =
                "login.html";

            }


            else if(data=="added"){

                alert("Added to Cart");

            }


            else{

                alert(data);

            }


        });


    });
});


const wishlistButtons =
document.querySelectorAll(".wishlist-btn");

wishlistButtons.forEach(button=>{

 button.addEventListener("click",()=>{

        const productCard =
        button.closest(".product-card");

     const product = {

    id: productCard.dataset.id,

    name: productCard.dataset.name,

    price: productCard.dataset.price,

    image: productCard.dataset.image

};

        fetch("add_wishlist.php",{

            method:"POST",

            headers:{
                "Content-Type":
                "application/x-www-form-urlencoded"
            },

            body:
            `name=${encodeURIComponent(product.name)}&price=${encodeURIComponent(product.price)}&image=${encodeURIComponent(product.image)}`

        })

        .then(res=>res.text())

        .then(data=>{

            if(data === "login_required"){

                alert("Please Login First");

            }else{

                alert("Added To Wishlist ❤️");

            }

        });

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

detailButtons.forEach(button => {

    button.addEventListener("click", () => {

        const productCard =
        button.closest(".product-card");

        const product = {

            name: productCard.dataset.name,
            price: productCard.dataset.price,
            image: productCard.dataset.image,
            rating: productCard.dataset.rating,
            stock: productCard.dataset.stock,
            description: productCard.dataset.description

        };

        localStorage.setItem(
            "selectedProduct",
            JSON.stringify(product)
        );

        window.location.href =
        "product.html";

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
const themeBtn =
document.getElementById("theme-toggle");

if(localStorage.getItem("theme") === "dark"){

    document.body.classList.add("dark");

    themeBtn.innerText =
    "☀️ Light Mode";
}

themeBtn.addEventListener("click",()=>{

    document.body.classList.toggle("dark");

    if(
        document.body.classList.contains("dark")
    ){

        localStorage.setItem(
            "theme",
            "dark"
        );

        themeBtn.innerText =
        "☀️ Light Mode";

    }else{

        localStorage.setItem(
            "theme",
            "light"
        );

        themeBtn.innerText =
        "🌙 Dark Mode";

}
});


const categoryCards =
document.querySelectorAll(".category-card");

const products =
document.querySelectorAll(".product-card");

let activeCategory = null;

categoryCards.forEach(card => {

    card.addEventListener("click", () => {

        const selectedCategory =
        card.dataset.category;

        // Same category par dobara click
        if(activeCategory === selectedCategory){

            products.forEach(product => {

                product.style.display = "block";

            });

            activeCategory = null;

            categoryCards.forEach(c =>
                c.classList.remove("active")
            );

            return;
        }

        activeCategory = selectedCategory;

        categoryCards.forEach(c =>
            c.classList.remove("active")
        );

        card.classList.add("active");

        products.forEach(product => {

            if(
                product.dataset.category ===
                selectedCategory
            ){

                product.style.display = "block";

            }else{

                product.style.display = "none";

            }

        });

        document
        .getElementById("featured-products")
        .scrollIntoView({
            behavior: "smooth"
        });

    });

});
const menuToggle =
document.querySelector(".menu-toggle");

const navLinks =
document.querySelector(".nav-links");

const navIcons =
document.querySelector(".nav-icons");

menuToggle.addEventListener("click",()=>{

    navLinks.classList.toggle("active");

    navIcons.classList.toggle("active");

});

console.log("BUY NOW CODE START");
const buyNowButtons =
document.querySelectorAll(".buy-now");

buyNowButtons.forEach(button=>{

    button.addEventListener("click",()=>{

        const productCard =
        button.closest(".product-card");

        const product = {

            name:
            productCard.dataset.name,

            price:
            productCard.dataset.price,

            image:
            productCard.dataset.image

        };

        localStorage.setItem(
            "buyNowProduct",
            JSON.stringify(product)
        );

        window.location.href =
        "checkout.php?buynow=1";

    });

});


