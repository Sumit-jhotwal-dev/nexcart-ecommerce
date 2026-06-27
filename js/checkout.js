let total = 0;

const summaryItems =
document.getElementById("summary-items");

const buyNowProduct =
JSON.parse(
    localStorage.getItem("buyNowProduct")
);

if(buyNowProduct){

    summaryItems.innerHTML = `

        <div class="cart-card">

            <h4>${buyNowProduct.name}</h4>

            <p>${buyNowProduct.price}</p>

        </div>

    `;

    total = Number(
        buyNowProduct.price
        .replace("₹","")
        .replaceAll(",","")
    );

}else{

    const cartItems =
    JSON.parse(localStorage.getItem("cartItems")) || [];

    cartItems.forEach(item=>{

        summaryItems.innerHTML += `

            <div class="cart-card">

                <h4>${item.name}</h4>

                <p>${item.price}</p>

            </div>

        `;

        total += Number(
            item.price
            .replace("₹","")
            .replaceAll(",","")
        );

    });
}

localStorage.setItem(
    "orders",
    JSON.stringify(orders)
);


    document.getElementById("order-message")
    .innerHTML = `

        <h3>
            🎉 Order Placed Successfully!
        </h3>

        <p>
            Order ID:
            <strong>${orderId}</strong>
        </p>

    `;

    localStorage.removeItem("cartItems");


localStorage.removeItem(
    "buyNowProduct"
);

