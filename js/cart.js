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
function clearCart() {}

// TODO: Fill in the <tr>'s under the <tbody> for each item in the cart

function showCart() {

  let cartItems=JSON.parse(localStorage.getItem('cart'));
  // TODO: Find the table body
  let tbody=document.getElementById('tbody');
  
  let btn=document.createElement('button');
  btn.setAttribute('onClick','removeItemFromCart()');
  
  // TODO: Iterate over the items in the cart
  for (let i = 0; i < cartItems.length; i++) {
    let tr=document.createElement('tr');
    tbody.appendChild(tr);
    for (let j = 0; j < cartItems.length; j++) {
      
      let td=document.createElement('td');
      tr.appendChild(td);
      if (j===0) {
        
        td.innerHTML='<button onClick="removeItemFromCart()">X</button>';
      }
      else if (j===1) {
        td.textContent=cartItems[i].quantity;
        
      }
      else if(j===2)
      {
        td.textContent=cartItems[i].Item;

      }
      
      
      
        
      
      
        console.log(cartItems);
    }
      console.log(tbody);
      
    
  }
  // TODO: Create a TR
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
