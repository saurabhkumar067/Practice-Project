let monthlyIncome = document.getElementById("monthlyIncome");
let monthlyExpense = document.getElementById("monthlyExpense");
let totalBalance = document.getElementById("totalBalance");
let inputExpense = document.getElementById("expense");
let inputIncome = document.getElementById("income");
let inputBox = document.getElementById("inputBox");
let addBtn = document.getElementById("addBtn");

addBtn.addEventListener("click", (e) => {
  trackerExpense();
});

let storeExpense = 0;
let storeIncome = 0;

function trackerExpense(){
    let amount = parseFloat(inputBox.value);
    if(!isNaN(amount) && amount >0){
        if(inputExpense.checked){
            storeExpense += amount;
            monthlyExpense.innerHTML = `$ ${storeExpense}`
        } else if(inputIncome.checked){
            storeIncome += amount;
            monthlyIncome.innerHTML = `$ ${storeIncome}`
        }else{
            alert('Please select an option: Income or Expense')
            return;
        }
        let total = storeIncome - storeExpense;
        totalBalance.innerHTML = `$ ${total}`
    }else{
        alert('Please enter a valid amount')
    }    
    inputBox.value = ''
}