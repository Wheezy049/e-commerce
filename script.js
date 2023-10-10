document.addEventListener('DOMContentLoaded', function () {
  let products = document.querySelector('#shop');
  async function fetchProduct(url) {
    let data = await fetch(url);
    let response = await data.json();
    for (const product of response) {
      let id = product.id;
      let title = product.title;
      products.innerHTML += `
    <div class="item">
     <img src="${product.image}" onclick="myFunction(${id})" alt="" width="220" height="250">
      <div class="details">
        <h3 class="title">${title.length > 15 ? title.substring(0, 15).concat('...') : title}</h3>
        <div class="price-quantity">
          <h2>$ ${product.price}</h2>
         <div> <i class="fa fa-shopping-cart fa-2x" aria-hidden="true" onclick="cartIncrement(${id})"></i> </div>
        </div>
      </div>
      </div>
    `
    }
  };
  fetchProduct('https://fakestoreapi.com/products');
});


let filterInput = document.getElementById("input_search")
let products = document.querySelector('#shop');
filterInput.addEventListener('keyup', filterProduct)

function filterProduct() {
  let filterValue = filterInput.value.toUpperCase()
  let item = products.querySelectorAll('.item')
  for (let i = 0; i < item.length; i++) {
    let span = item[i].querySelector('.title')
    if (span.innerHTML.toUpperCase().indexOf(filterValue) > -1) {
      item[i].style.display = "initial"
    } else {
      item[i].style.display = "none"
    }
  }
}


function myFunction(id) {
  localStorage.setItem('myId', id);
  window.location.assign('single.html');
}

let basket = JSON.parse(localStorage.getItem("data")) || []

function updateCartAmount() {
  localStorage.setItem("cartAmount", cart);
}

let cart = parseInt(localStorage.getItem("cartAmount")) || 0
document.getElementById('cartAmount').innerHTML = cart;

function cartIncrement(id) {
  const selectedItem = id;
  let search = basket.find((x) => x.id === selectedItem);
  if (search === undefined) {
    basket.push({
      id: selectedItem,
    })
    cart += 1
    document.getElementById('cartAmount').innerHTML = cart;
    updateCartAmount();
  } else {
    return
  }
  localStorage.setItem("data", JSON.stringify(basket))
}