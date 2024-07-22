window.addEventListener("DOMContentLoaded", () => {
  let inputBox = document.getElementById("inputBox");
  let select = document.querySelectorAll("form select");
  let selectForm = document.querySelector(".form select");
  let selectTo = document.querySelector(".to select");
  let btn = document.querySelector("button");
  let showValue = document.getElementById("showValue");
  let currValue = document.getElementById("currValue");

  let apiKey = "fb16bc76f34fe9fdc8103751";
  let api = fetch(`https://v6.exchangerate-api.com/v6/${apiKey}/latest/USD`);

  api
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      let country = data.conversion_rates;
      for (let dropdown of select) {
        for (let count in country) {
          let option = document.createElement("option");
          option.innerHTML = count;
          option.value = count;
          if (dropdown.name == "from" && count == "USD") {
            option.selected = "selected";
          } else if (dropdown.name == "to" && count == "INR") {
            option.selected = "selected";
          }
          dropdown.appendChild(option);
        }
      }
    })
    .catch((error) => {
      console.error("Error fetching initial data:", error);
      alert("Error fetching initial data");
    });

  function updateExchange() {
    let amtValue = inputBox.value;
    if (amtValue == "" || amtValue <= 0) {
      alert("You have not enter any number.");
      return;
    }

    let seApi = fetch(
      `https://v6.exchangerate-api.com/v6/${apiKey}/latest/${selectForm.value}`
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        let country = data.conversion_rates;
        let convRate = country[selectTo.value];
        let totatVal = amtValue * convRate;

        showValue.innerHTML = `${amtValue} ${
          selectForm.value
        } = ${convRate.toFixed(2)} ${selectTo.value}`;

        currValue.innerHTML = `1${selectForm.value} = ${convRate.toFixed(2)}${
          selectTo.value
        }`;
      })
      .catch((error) => {
        console.error("Error fetching conversion rate:", error);
        alert("Error fetching conversion rate");
      });
  }

  btn.addEventListener("click", (e) => {
    updateExchange();
  });
});
