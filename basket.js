let basket = document.querySelector("#pictureBasket");
let AddToCardEj = document.querySelector(".AddToCardEj");
let cartProductsDiv = document.querySelector(".cartProducts");
let closse = document.querySelector(".Close")
let cnak = document.querySelector(".miusPlus")

basket.onclick = function () {
  if (AddToCardEj.style.display === "block") {
    AddToCardEj.style.display = "none";
  } else {
    AddToCardEj.style.display = "block";
  }
  closse.onclick = function () {
    if (AddToCardEj.style.display === "block") {
      AddToCardEj.style.display = "none";
    }
  }
}



function changeQuantity(type, id) {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];


  cart.forEach(elem => {
    if (elem.id == id) {
      if (type == "+") {
        elem.count += 1
        elem.price += elem.price
      }
      else {
        elem.count -= 1
        elem.price -=elem.price      }
    }
  }
  )

  localStorage.setItem('cart', JSON.stringify(cart))
  rendrCart()

}

function rendrCart() {
  let cart = JSON.parse(localStorage.getItem("cart"));

  cartProductsDiv.innerHTML = "";
  cart.forEach(product => {
    cartProductsDiv.innerHTML += `
      <div class="nkarneriDiver2">
        <img src="${product.image}" alt="picture" class="himnakanPicturNer2">
      <div class="miusPlus">
      <p class="minus" onclick="changeQuantity('-', ${product.id})" >-</p>
      <p class="count">${product.count}</p>
      <p class="plus" onclick="changeQuantity('+', ${product.id})">+</p>
      </div>
      
        <p class="text14-2 text15-2">${product.title} </p>
        <p class="text14-2 text17-2">${product.price}$
        <span class="gniKoxiBary2">${product.category}</span>
        </p>
          <button>
        
        
        <img src="3917759.png" alt="picture" class="delete1">
        </button>
      </div>`});
}



rendrCart()