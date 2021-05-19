/* global Cart */
'use strict';

// Create an event listener so that when the delete link is clicked, the removeItemFromCart method is invoked.
const table = document.getElementById('cart');
table.addEventListener('click', removeItemFromCart);
let cart;

function loadCart() {
  const cartItems = JSON.parse(localStorage.getItem('cart')) || [];
  cart = new Cart(cartItems);
  console.log(cartItems);
}
//loadCart();
// Make magic happen --- re-pull the Cart, clear out the screen and re-draw it
function renderCart() {
  loadCart();
  clearCart();
  showCart();
}
console.log(cart);
// TODO: Remove all of the rows (tr) in the cart table (tbody)
function clearCart() {localStorage.clear}

// TODO: Fill in the <tr>'s under the <tbody> for each item in the cart
function showCart() {

  // TODO: Find the table body
let tbody=document.getElementsByTagName('tbody')
console.log(cart.items.length);
  // TODO: Iterate over the items in the cart
  // TODO: Create a TR
  for (let i = 0; i < cart.items.length; i++) {
    let tr=document.createElement('tr');
table.appendChild(tr);
let td1=document.createElement('td');
let td2=document.createElement('td');
let td3=document.createElement('td');
tr.appendChild(td1);
tr.appendChild(td2);
tr.appendChild(td3);
td1.textContent='X';
td2.textContent=cart.items[i].quantity;
td3.textContent=cart.items[i].product;
console.log(cart.items[i].quantity);
    
  }
  // TODO: Create a TD for the delete link, quantity,  and the item
  
  // TODO: Add the TR to the TBODY and each of the TD's to the TR

}

function removeItemFromCart(event) {

  // TODO: When a delete link is clicked, use cart.removeItem to remove the correct item
  
  // TODO: Save the cart back to local storage
  // TODO: Re-draw the cart table

}

// This will initialize the page and draw the cart on screen
renderCart();
