// main-container
let containerImage = document.getElementById("containerImage");
let productName = document.querySelector(".productName");
let productPrice = document.querySelector(".productPrice");
let cartAdd = document.getElementById("cartAdd");
let addBtn = document.querySelector(".addBtn");

// shoppingCart
let shoppingCart = document.querySelector(".shoppingCart");
let itemCul = document.querySelector(".itemCul");
let shoesImage = document.getElementById("shoesImage");
let shoesName = document.querySelector(".name");
let shoesStyle = document.querySelector(".style");
let shoesSize = document.querySelector(".size");
let quantity = document.querySelector(".quantity");
let upBtn = document.getElementById("upBtn");
let downBtn = document.getElementById("downBtn");
let cost = document.querySelector(".cost");
let subTotal = document.querySelector(".subTotal");
let shipping = document.querySelector('.shipping')
let totalValue = document.querySelector(".totalValue");

let random = Math.floor(Math.random() * 20)+1;

function apiCalling() {
  let api = fetch(`https://fakestoreapi.com/products/${random}`);
  api
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      containerImage.src = data.image;
      let split = data.title.split(" ").splice(0, 3).join(" ");
      productName.innerHTML = split;

      productPrice.innerHTML = `$${data.price}`;
    }).catch(err => {
      console.error('Error fetching data:', err);
  });
}

cartAdd.addEventListener("click", () => {
  shoppingCart.classList.remove("display");
  shoesImage.src = containerImage.src;
  let split = productName.innerHTML.split(" ");
  shoesName.innerHTML = split.slice(0, 2).join(' ')
  shoesStyle.innerHTML = split.slice(2).join(' ')
  cost.innerHTML = productPrice.innerHTML;
  total()
});

apiCalling();

let value = 1;
upBtn.addEventListener("click", () => {
  if (value >= 0 && value < 5) {
    value++;
    quantity.innerHTML = value;
    total();
    itemCul.innerHTML = `${value} items`
  } else {
    alert("Only 5 item in stock");
  }
});
downBtn.addEventListener("click", () => {
  if (value <= 5 && value > 0) {
    value--;
    quantity.innerHTML = value;
    total();
itemCul.innerHTML = `${value} items`
  }
});

function total() {
  // let storeCost = Array.from(cost.innerHTML)
  let storeCost = parseFloat(cost.innerHTML.slice(1))
  let totalStore = storeCost * value;
  subTotal.innerHTML = `$${totalStore}`

  // let ship = shipping;
  // console.log(typeof ship);
  totalValue.innerHTML = `$${totalStore}`
}
