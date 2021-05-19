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
  document.getElementsByTagName('tr').innerHTML = '';
}

// TODO: Fill in the <tr>'s under the <tbody> for each item in the cart
function showCart() {

  // TODO: Find the table body
 let tbody = document.getElementById('cart').getElementsByTagName('tbody')[0];
  // TODO: Iterate over the items in the cart
   // TODO: Create a TR
    // TODO: Create a TD for the delete link, quantity,  and the item
    // TODO: Add the TR to the TBODY and each of the TD's to the TR

    let trEl = document.createElement('tr');
  for (let i = 0; i < cart.items.length; i++){


  let tdRem = document.createElement('td');
  let buttonRemove = document.createElement('button');
  buttonRemove.id = i;
  buttonRemove.textContent = 'X';
  tdRem.appendChild(buttonRemove);

  var tdElQuant = document.createElement('td');
    tdElQuant.textContent = cart.items[i].quantity;
    console.log(cart.items[i].quantity);

    let tdElItem = document.createElement('td');
    tdElItem.textContent = cart.items[i].product;
    console.log(cart.items[i].product);

    trEl.appendChild(tdRem);
    trEl.appendChild(tdElQuant);
    trEl.appendChild(tdElItem);
    tbody.appendChild(trEl);//append row to body

/*deletTd.textContent = 'X';
  tr.appendChild(deletTd);
 
let quantityTd = document.createElement('td');
  quantityTd.textContent = cart.items[i].quantity;
  tr.appendChild(quantityTd);

  let itemTd = document.createElement('td');
  itemTd.textContent = cart.items[i].product;
  tr.appendChild(itemTd);*/
}
}

function removeItemFromCart(event) {

  // TODO: When a delete link is clicked, use cart.removeItem to remove the correct item
  if (event.target.textContent === 'X') 
  cart.removeItem(event.target.id);
  // TODO: Save the cart back to local storage
  localStorage.setItem('cart', JSON.stringify(cart.items));
  // TODO: Re-draw the cart table
  renderCart();
}

// This will initialize the page and draw the cart on screen
renderCart();
table.addEventListener('click',removeItemFromCart);
