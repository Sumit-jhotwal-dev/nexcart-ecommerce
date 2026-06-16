const product =
JSON.parse(
    localStorage.getItem(
        "selectedProduct"
    )
);

const productInfo =
document.getElementById(
    "product-info"
);

productInfo.innerHTML = `
<div class="product-card">

    <div class="product-image">
        ${product.image}
    </div>

    <h2>${product.name}</h2>

    <p>⭐⭐⭐⭐⭐ ${product.rating || "4.9"}</p>

    <p class="price">₹${product.price}</p>

    <p>✔ ${product.stock || "In Stock"}</p>

    <p>✔ Free Delivery</p>

    <p>✔ 1 Year Warranty</p>

    <p>
        ${product.description || "Premium product available on NexCart."}
    </p>

    <button id="detail-cart">
        Add To Cart
    </button>

    <button id="detail-buy">
        Buy Now
    </button>

</div>
`;
        document.getElementById("detail-buy")
.addEventListener("click",()=>{

    localStorage.setItem(

        "buyNowProduct",

        JSON.stringify({

            name: product.name,

            price: product.price

        })

    );

    window.location.href =
    "checkout.html";

});

    


document.getElementById("detail-cart")
.addEventListener("click",()=>{

    let cartItems =
    JSON.parse(
        localStorage.getItem("cartItems")
    ) || [];

    const existingProduct =
    cartItems.find(
        item => item.name === product.name
    );

    if(existingProduct){

        existingProduct.quantity += 1;

    }else{

        cartItems.push({

            name: product.name,

            price: product.price,

            quantity: 1

        });

    }

    localStorage.setItem(
        "cartItems",
        JSON.stringify(cartItems)
    );

    alert("Added To Cart");

});

