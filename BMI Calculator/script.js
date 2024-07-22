let total = document.getElementById("total");
let button = document.querySelector("button");
let weightName = document.getElementById("weightName");

button.addEventListener("click", () => {
  bmiCal();
});

function bmiCal() {
  let height = parseInt(document.getElementById("height").value);
  let weight = parseInt(document.getElementById("weight").value);

  let formula = (weight / ((height * height) / 10000)).toFixed(2);
  console.log(formula);
  total.innerHTML = formula;
  if (formula < 18.4) {
    weightName.innerHTML = "UNDERWEIGHT";
  } else if (formula > 18.5 && formula < 24) {
    weightName.innerHTML = "NORMAL";
  } else if (formula > 25 && formula < 39.9) {
    weightName.innerHTML = "OVERWEIGHT";
  } else {
    weightName.innerHTML = "OBESE";
  }
}