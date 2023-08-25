let label = document.getElementById('label');
let shoppingCart = document.getElementById('shopping-cart')
// let basket = [];
let basket = JSON.parse(localStorage.getItem("data")) || []

// let cart = 0
// function cartIncrement(id) {
//   const selectedItem = id;
//   let search = basket.find((x) => x.id === selectedItem);
//   if (search === undefined) {
//     basket.push({
//       id: selectedItem,
//     })
//     cart += 1
//     document.getElementById('cartAmount').innerHTML = cart;
    
//   } else {
//     return
//   }
//   localStorage.setItem("data", JSON.stringify(basket))
// }

// cartIncrement()

function cartIncrement(){
 localStorage.getItem("data")
}
cartIncrement()

let generateCartItems = () => {
 if(basket.length !== 0){
   document.addEventListener('DOMContentLoaded', function () {
     let products = document.querySelector('#shop');
     async function fetchProduct(url) {
       let data = await fetch(url);
       let response = await data.json();
        console.log(response)
       return (shoppingCart.innerHTML = basket
         .map((x) => {
           // console.log(x)
           // let {id, item } = x
           // let search = response.find((y)=> y.id === id) || []
           return `
    <div class="item">
    <img src="${response.image}" alt="" width="220" height="250">
    <p>${response.price}</p.
      </div>
    `
         }).join(""))

     };
     fetchProduct('https://fakestoreapi.com/products');
   });
   
 }
 else{
  shoppingCart.innerHTML = ``;
  label.innerHTML = `
  <h2>Cart is Empty</h2>
  <a href="index.html">
  <button class="Homebtn">Back to Home</button>
  </a>
  `;
 }
};

generateCartItems();
