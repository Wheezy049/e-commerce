document.addEventListener('DOMContentLoaded', function () {
 let products = document.querySelector('#shop');
 async function fetchProduct(url) {
  let data = await fetch(url);
  let response = await data.json();
  // for (const product of response) {
  //  let id = product.id;
  //  let title = product.title;
  //  products.innerHTML += `
  //   <div class="item">
  //    <img src="${product.image}" onclick="myFunction(${id})" alt="" width="220" height="250">
  //     <div class="details">
  //       <h3>${title.length > 15 ? title.substring(0, 15).concat('...') : title}</h3>
  //       <div class="price-quantity">
  //         <h2>$ ${product.price}</h2>
  //        <div> <i class="fa fa-shopping-cart fa-2x" aria-hidden="true" onclick="cartIncrement(${id})"></i> </div>
  //       </div>
  //     </div>
  //     </div>
  //   `
  // }
 };
 fetchProduct('https://fakestoreapi.com/products');
});