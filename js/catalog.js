/* global Product, Cart */

'use strict';

// Set up an empty cart for use on this page.
let cart = new Cart([]);

// On screen load, we call this method to put all of the busmall options
// (the things in the Product.allProducts array) into the drop down list.
function populateForm() {

  //TODO: Add an <option> tag inside the form's select for each product
  let selectElement = document.getElementById('items');
  for (let i in Product.allProducts) {
    let optionEle=document.createElement('option');
    
    optionEle.textContent=Product.allProducts[i].name;
    optionEle.value=Product.allProducts[i].name;
    selectElement.appendChild(optionEle);
  }

}

// When someone submits the form, we need to add the selected item to the cart
// object, save the whole thing back to local storage and update the screen
// so that it shows the # of items in the cart and a quick preview of the cart itself.

// let btn=document.getElementById('btn');
// btn.addEventListener('submit',handleSubmit);

function handleSubmit(event) {

  // TODO: Prevent the page from reloading
event.preventDefault();
  // Do all the things ...
  addSelectedItemToCart();

  cart.saveToLocalStorage();

  updateCounter();

  updateCartPreview();

}

// TODO: Add the selected item and quantity to the cart
function addSelectedItemToCart() {
  // TODO: suss out the item picked from the select list
  let selectedItem=document.getElementById('items').value;
  
  // TODO: get the quantity
  let selectedQuantity=document.getElementById('quantity').value;

  // TODO: using those, add one item to the Cart
  cart.addItem(selectedItem,selectedQuantity);
}

let count=0;
let cartCountElem=document.getElementById('itemCount');
// TODO: Update the cart count in the header nav with the number of items in the Cart
function updateCounter() {
   cartCountElem.textContent='';
   count++;
  
  
   let addcount=document.createElement('span');
   addcount.textContent=count;
   cartCountElem.appendChild(addcount);
  console.log(cartCountElem);

  
}
// let counter=1;
// function updateCounter() {
// let countervalue =document.getElementById("itemCount");
// countervalue.textContent =counter++;
// // countervalue.appendChild(num);
// }

// TODO: As you add items into the cart, show them (item & quantity) in the cart preview div
let cartContents=document.getElementById('cartContents');

function updateCartPreview() {
  // TODO: Get the item and quantity from the form
   let myItems=document.getElementById('items').value;
   let myQuantity=document.getElementById('quantity').value;
  // TODO: Add a new element to the cartContents div with that information
  let liElem=document.createElement('li');
  liElem.textContent=`You choose ${myItems} and the quantity is ${myQuantity}.`;
cartContents.appendChild(liElem);


}

// Set up the "submit" event listener on the form.
// This is the trigger for the app. When a user "submits" the form, it will
// Call that handleSubmit method above and kick off the whole process
let catalogForm = document.getElementById('catalog');
catalogForm.addEventListener('submit', handleSubmit);


// Before anything else of value can happen, we need to fill in the select
// drop down list in the form.
populateForm();
