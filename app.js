let cartCount = 0;
    const cartCountElement = document.getElementById ("cart-count");

   
    const cartButtons = document.querySelectorAll(".cart");

    cartButtons.forEach((button) => {
      button.addEventListener("click", () => {
        cartCount++;
        cartCountElement.textContent = cartCount;

    const itemName = button.parentElement.querySelector(".item").textContent;
    let itemPrice = button.parentElement.querySelector("span").textContent;
    itemPrice = itemPrice.replace(/[^0-9.-]+/g, "");
 // Create New List Item for Cart
 const cartItem = document.createElement("ul");
 cartItem.textContent = `${itemName} - ${itemPrice}`;

 // Append Item to Cart Display
 displayCart.appendChild(cartItem);
// Update Total Price
const totalPriceElement = document.getElementById("total-price");
let totalPrice = parseFloat(totalPriceElement.textContent) || 0;
totalPrice += parseFloat(itemPrice);
totalPriceElement.textContent = totalPrice;

// Confirm Order Button
const confirmOrderButton = document.getElementById("confirm-order");
confirmOrderButton.addEventListener("click", () => {
  alert(`Order confirmed! Total items: Total price: $${totalPriceElement.textContent}`);
  // Reset Cart
  cartCount = 0;
  cartCountElement.textContent = cartCount;
  displayCart.innerHTML = "";
  totalPriceElement.textContent = "0";
});

      });
      });