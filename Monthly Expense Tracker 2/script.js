const inputAmount = document.querySelector("#amount");
const btnAdd = document.querySelector(".add");
const btnClear = document.querySelector(".clear");
let inputName = document.querySelector("#name");
let store = document.querySelector("#store");
let itemName = document.querySelector(".itemName");
let itemPrice = document.querySelector(".itemPrice");
let totalPrice = document.querySelector(".totalPrice");
let storeCont = document.querySelector(".storeCont");

btnAdd.addEventListener("click", () => {
  update();
  incrementPrice();
  // show();
  // console.log(inputName.innerHTML)
});
btnClear.addEventListener("click", () => {
  store.innerHTML = "";
  totalPrice.textContent = "";
});

function update() {
  if (inputName.value === "" && inputAmount.value === "") {
    alert("Enter Your Name");
  } else {
    let div = document.createElement("div");
    div.innerHTML += inputName.value + " : ";
    div.classList.add("itemName");
    store.appendChild(div);
    let span = document.createElement("span");
    span.innerHTML += `₹${inputAmount.value}.00`;
    span.classList.add("itemPrice");
    div.appendChild(span);
  }
  // inputName.value = "";
  // inputAmount.value = "";
}

function incrementPrice() {
  let totalValue = 0;
  let itemPriceAll = document.querySelectorAll(".itemPrice");
  itemPriceAll.forEach((item) => {
    const price = parseFloat(item.textContent.replace("₹", ""));
    totalValue += price;
    // console.log("price ", price);
  });
  // console.log("totalValue ", totalValue);

  totalPrice.textContent = `₹${totalValue}.00`;
}

// function show(){
//   let locStorName;
//   let locStorPrice
//    locStorName += localStorage.setItem(("Item Name", inputName.value), ("Item Price", inputAmount.value))
  // locStorPrice += localStorage.setItem("Item Price", inputAmount.value)
// }
