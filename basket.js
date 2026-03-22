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
    
      }
      else if (elem.count>1) {
        elem.count-=1
      }
    }
  }
  )

  localStorage.setItem('cart', JSON.stringify(cart))
  rendrCart()

}

// if (!cart || cart.lenght===0) {
//   cart=JSON.parse(localStorage.getItem(cart))
// }

// cartProductsDiv.innerHTML="";

// if (!cart || cart.lenght===0) {
//   cart=cartProductsDiv.innerHTML="<p>your cart is empti</p>";
// }


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
        <p class="text14-2 text17-2">${product.price * product.count}$
        <span class="gniKoxiBary2">${product.category}</span>
        <button class="Clear" onclick="clearCart(${product.id})">  <svg viewBox="0 0 448 512" class="svgIcon"><path d="M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z"></path></svg>
        </button>
        </p>
        
      </div>`});
}

rendrCart()

function clearCart(id) {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];

  cart = cart.filter(element => element.id !== id);

  localStorage.setItem("cart", JSON.stringify(cart));

  rendrCart();
}



onclick="clearCart(${product.id})"

