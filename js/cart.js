/* global Cart */
'use strict';

// Create an event listener so that when the delete link is clicked, the removeItemFromCart method is invoked.
const table = document.getElementById('cart');
table.addEventListener('click', removeItemFromCart);
let cart;

function loadCart() {
  const cartItems = JSON.parse(localStorage.getItem('cart')) || [];
  cart = new Cart(cartItems);
}

// Make magic happen --- re-pull the Cart, clear out the screen and re-draw it
function renderCart() {
  loadCart();
  clearCart();
  showCart();
}

// TODO: Remove all of the rows (tr) in the cart table (tbody)
function clearCart() {
 let tableBody = table.getElementsByTagName('tbody');
 tableBody[0].innerHTML = ''
}

// TODO: Fill in the <tr>'s under the <tbody> for each item in the cart
function showCart() {

  // TODO: Find the table body
  var tableBody = table.getElementsByTagName('tbody');
  // TODO: Iterate over the items in the cart

  for (let i = 0; i < cart.items.length; i++){
   // TODO: Create a TR
   let tableRowElement = document.createElement('tr');
   tableRowElement.setAttribute('id',`${cart.items[i].product}`,0);
    // TODO: Create a TD for the delete link, quantity,  and the item
    let tableDElement = document.createElement('td');
    tableDElement.innerText = 'X';
    tableRowElement.appendChild(tableDElement);
    tableDElement = document.createElement('td');
    tableDElement.innerText = `${cart.items[i].quantity}`;
    tableRowElement.appendChild(tableDElement);
    tableDElement = document.createElement('td');
    tableDElement.innerText = `${cart.items[i].product}`;
    tableRowElement.appendChild(tableDElement);

    // TODO: Add the TR to the TBODY and each of the TD's to the TR
    tableBody[0].appendChild(tableRowElement);
  
}
}

function removeItemFromCart(event) {

  // TODO: When a delete link is clicked, use cart.removeItem to remove the correct item
  let itemToRemove = event.path[1].id;
  console.log(itemToRemove);
  cart.removeItem(itemToRemove);
  // TODO: Save the cart back to local storage
  cart.saveToLocalStorage();
  //localStorage.setItem('cart', JSON.stringify(cart.items));
  // TODO: Re-draw the cart table
  renderCart();
}

// This will initialize the page and draw the cart on screen
renderCart();

