document.addEventListener("DOMContentLoaded", function () {
    let singleContainer = document.querySelector("#single");
    let cartAmountElement = document.getElementById("cartAmount");
    async function fetchSingleProduct(url) {
        let data = await fetch(url);
        let response = await data.json();
        let singles = `
            <div class="single-item">
            <img src="${response.image}" alt="" width="270" height="250">
            <div class="single-text">
                <p class="single-title">${response.title}</p>
                <p class="single-description">${response.description}</p>
                <div class="single-price-quantity">
             <h2>$ ${response.price}</h2>
              <div> <i class="fa fa-shopping-cart fa-2x" aria-hidden="true"></i> </div>
          </div>
            </div>
            </div>
        `;
        singleContainer.innerHTML = singles;
    }
    const singleId = localStorage.getItem("myId");
    fetchSingleProduct(`https://fakestoreapi.com/products/${singleId}`);

    let cartAmount = parseInt(localStorage.getItem("cartAmount")) || 0;
    cartAmountElement.innerHTML = cartAmount;

    function updateCartAmount() {
        cartAmountElement.innerHTML = cartAmount;
        localStorage.setItem("cartAmount", cartAmount);
    }

    window.addToCart = function (itemId) {
        if (!basket.includes(itemId)) {
            basket.push(itemId);
            cartAmount++;
            updateCartAmount();
        }
    };
});


let basket = [];



// const increment = (id) => {
//  const selectedItem = id;
//  let search = basket.find((x) => x.id === selectedItem);
//  if (search === undefined) {
//   basket.push({
//    id: selectedItem,
//    item: 1,
//   });
//  } else {
//   search.item += 1;
//  }
//  update(selectedItem);
// };
// const decrement = (id) => {
//  const selectedItem = id;
//  let search = basket.find((x) => x.id === selectedItem);
//  if (search.item === 0) {
//   return;
//  } else {
//   search.item -= 1;
//  }
//  update(selectedItem);
// };
// const update = (id) => {
//  const search = basket.find((x) => x.id === id);
//  document.getElementById(id).innerHTML = search.item;
// };
// // JSON.parse(localStorage.getItem("myId"))