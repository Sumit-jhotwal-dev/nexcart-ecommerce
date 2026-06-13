const user =
JSON.parse(localStorage.getItem("user"));

const orders =
JSON.parse(localStorage.getItem("orders")) || [];

document.getElementById("profile-card")
.innerHTML = `

    <div class="cart-card">

        <h3>${user.name}</h3>

        <p>${user.email}</p>

        <p>
            Total Orders:
            ${orders.length}
        </p>

    </div>

`;