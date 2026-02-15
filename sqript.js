let allProducts = [];

fetch('https://fakestoreapi.com/products')
  .then(res => res.json())
  .then(data => {
    allProducts = data;
    renderProducts(data);
  });

function renderProducts(products) {
  let card = document.querySelector("#card");
  card.innerHTML = "";

  if (products.length === 0) {
    card.innerHTML = "product not found";
    return;
  }

  products.forEach(elem => {
    card.innerHTML += `
      <div class="card">
        <img src="${elem.image}">
        <h3 class="fname">${elem.title}</h3>
        <p class="lname">${elem.price}$</p>
        <p class="bio">${elem.category}</p>
        <button class="localstorage" onclick="handleAddProduct(${elem.id})">add to cart</button>
      </div>
    `;
  });
}

// category
document.querySelector("#categoriy").addEventListener("change", e => {
  let value = e.target.value;
  renderProducts(value === "all"
    ? allProducts
    : allProducts.filter(p => p.category === value)
  );
});


// price
function priceFilter() {
  let min = +minInput.value || 0;
  let max = +maxInput.value || Infinity;
  renderProducts(allProducts.filter(p => p.price >= min && p.price <= max));
}

let minInput = document.querySelector("#min");
let maxInput = document.querySelector("#max");
minInput.addEventListener("input", priceFilter);
maxInput.addEventListener("input", priceFilter);

// sort
document.querySelector("#sort").addEventListener("change", e => {
  let v = e.target.value;
  let arr = [...allProducts];

  if (v === "a-z") arr.sort((a, b) => a.title.localeCompare(b.title));
  if (v === "z-a") arr.sort((a, b) => b.title.localeCompare(a.title));
  if (v === "min-max") arr.sort((a, b) => a.price - b.price);
  if (v === "max-min") arr.sort((a, b) => b.price - a.price);

  renderProducts(v === "oll" ? allProducts : arr);
});

// swiper
new Swiper(".mySwiper", {
  slidesPerView: 1,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});


// function handleAddProduqts(id) {
//   let prod = allProducts.find(elem => elem.id)
//   let loqalData = localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : []
//   loqalData.push(products)
//   localStorage.setItem('cart', JSON.stringify(loqalData))
// }

function handleAddProduct(id) {
  console.log(id);
  
  let product = allProducts.find(elem => elem.id == id)
  let localData = localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : [];
  localData.push(product)

  localStorage.setItem('cart',JSON.stringify(localData))}   
  

