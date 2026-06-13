const cartItems =
JSON.parse(localStorage.getItem("cartItems")) || [];

const cartContainer =
document.getElementById("cart-items");

let total = 0;

cartItems.forEach((item,index)=>{

    cartContainer.innerHTML += `

        <div class="cart-card">

            <h3>${item.name}</h3>

            <p>${item.price}</p>

            <button
            class="remove-btn"
            onclick="removeItem(${index})">

                Remove

            </button>

        </div>

    `;

    total += Number(
        item.price
        .replace("₹","")
        .replaceAll(",","")
    );

});

document.getElementById("cart-total")
.innerText =
`Total: ₹${total.toLocaleString()}`;

function removeItem(index){

    let cartItems =
    JSON.parse(
        localStorage.getItem("cartItems")
    ) || [];

    cartItems.splice(index,1);

    localStorage.setItem(
        "cartItems",
        JSON.stringify(cartItems)
    );

    location.reload();
}