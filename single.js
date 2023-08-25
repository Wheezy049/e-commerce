document.addEventListener("DOMContentLoaded", function () {
 let singleContainer = document.querySelector("#single");
 async function fetchSingleProduct(url) {
  let data = await fetch(url);
  let response = await data.json();
  let id = response.id;
  // for (const single of response) {
  //  let id = single.id;
  //  singles.innerHTML += `
  //   <div class="item">
  //    <img src="${single.image}" alt="" width="220" height="250">
  //     <div class="details">
  //       <h3>${single.title}</h3>
  //       <p>${single.description}</p>
  //       <div class="price-quantity">
  //         <h2>$ ${product.price}</h2>
  //         <div class="buttons">
  //           <i onclick="decrement(${id})" class="fa fa-minus" aria-hidden="true"></i>
  //           <div id="${id}" class="quantity">0</div>
  //           <i onclick="increment(${id})" class="fa fa-plus"></i>
  //         </div>
  //       </div>
  //     </div>
  //     </div>
  //   `
  // }
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
});

let basket = [];
const increment = (id) => {
 const selectedItem = id;
 let search = basket.find((x) => x.id === selectedItem);
 if (search === undefined) {
  basket.push({
   id: selectedItem,
   item: 1,
  });
 } else {
  search.item += 1;
 }
 update(selectedItem);
};
const decrement = (id) => {
 const selectedItem = id;
 let search = basket.find((x) => x.id === selectedItem);
 if (search.item === 0) {
  return;
 } else {
  search.item -= 1;
 }
 update(selectedItem);
};
const update = (id) => {
 const search = basket.find((x) => x.id === id);
 document.getElementById(id).innerHTML = search.item;
};
