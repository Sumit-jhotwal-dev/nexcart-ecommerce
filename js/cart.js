const cartItems =
JSON.parse(localStorage.getItem("cartItems")) || [];

const cartContainer =
document.getElementById("cart-items");

let total = 0;

cartItems.forEach((item,index)=>{

    const price =
    Number(
        item.price
        .replace("₹","")
        .replaceAll(",","")
    );

    const quantity =
    item.quantity || 1;

    cartContainer.innerHTML += `

        <div class="cart-card">

            <h3>${item.name}</h3>

            <p>${item.price}</p>

           <div class="quantity-box">

    <button
    onclick="decreaseQty(${index})">

        -

    </button>

    <span>${quantity}</span>

    <button
    onclick="increaseQty(${index})">

        +

    </button>

</div>

            <button
            class="remove-btn"
            onclick="removeItem(${index})">

                Remove

            </button>

        </div>

    `;

    total += price * quantity;

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
function increaseQty(index){

    let cartItems =
    JSON.parse(
        localStorage.getItem("cartItems")
    ) || [];

    cartItems[index].quantity += 1;

    localStorage.setItem(
        "cartItems",
        JSON.stringify(cartItems)
    );

    location.reload();

}
function decreaseQty(index){

    let cartItems =
    JSON.parse(
        localStorage.getItem("cartItems")
    ) || [];

    if(cartItems[index].quantity > 1){

        cartItems[index].quantity -= 1;

    }

    localStorage.setItem(
        "cartItems",
        JSON.stringify(cartItems)
    );

    location.reload();

}