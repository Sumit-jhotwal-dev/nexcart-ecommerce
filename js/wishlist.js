const wishlistItems =
JSON.parse(
localStorage.getItem("wishlistItems")
) || [];

const container =
document.getElementById(
"wishlist-container"
);

if(wishlistItems.length === 0){

container.innerHTML =

"<h2>No Products In Wishlist</h2>";

}else{

wishlistItems.forEach(product=>{

container.innerHTML += `

<div class="product-card">


<h3>${product.name}</h3>

<p class="price">

${product.price}

</p>

<button
class="remove-btn">

Remove

</button>

</div>

`;

});

}
const removeButtons =
document.querySelectorAll(".remove-btn");

removeButtons.forEach((button,index)=>{

    button.addEventListener("click",()=>{

        wishlistItems.splice(index,1);

        localStorage.setItem(
            "wishlistItems",
            JSON.stringify(wishlistItems)
        );

        location.reload();

    });

});