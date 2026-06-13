const orders =
JSON.parse(localStorage.getItem("orders")) || [];

const container =
document.getElementById("orders-container");

orders.forEach(order=>{

    container.innerHTML += `

        <div class="cart-card">

            <h3>${order.orderId}</h3>

            <p>Total: ₹${order.total.toLocaleString()}</p>

            <p>Date: ${order.date}</p>

            <p>Status: ${order.status}</p>

        </div>

    `;

});