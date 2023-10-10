let label = document.getElementById('label');
let shoppingCart = document.getElementById('shopping-cart');
let basket = JSON.parse(localStorage.getItem("data")) || [];

function cartIncrement() {
  JSON.parse(localStorage.getItem("data"))
}
cartIncrement();

function updateCartAmount() {
  const cartAmountElement = document.getElementById('cartAmount');
  const cartAmount = basket.length;
  cartAmountElement.innerHTML = cartAmount;
}


let generateCartItems = () => {
  if (basket.length !== 0) {
    document.addEventListener('DOMContentLoaded', async function () {
      let products = document.querySelector('#shop');
      async function fetchProduct(url) {
        let data = await fetch(url);
        let response = await data.json();
        function renderCartItem(item) {
          const product = response.find(product => product.id === item.id);
          if (product) {
            const cartItem = document.createElement('div');
            cartItem.classList.add('item');
            cartItem.innerHTML = `
                            <img src="${product.image}" alt="${product.title}" width="220" height="250">
                            <p>${product.title}</p>
                            <p>${product.price}</p>
                        `;
            shoppingCart.appendChild(cartItem);
          }
        }
        shoppingCart.innerHTML = '';
        basket.forEach(item => {
          renderCartItem(item);
        });
        updateCartAmount()
      }
      fetchProduct('https://fakestoreapi.com/products');
    });

  } else {
    shoppingCart.innerHTML = ``;
    label.innerHTML = `
            <h2>Cart is Empty</h2>
            <a href="index.html">
                <button class="Homebtn">Back to Home</button>
            </a>
        `;
    updateCartAmount()
  }
};

generateCartItems();