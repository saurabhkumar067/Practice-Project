// const inputSlider = document.getElementById("inputSlider");
// const sliderValue = document.getElementById("sliderValue");
const passBox = document.getElementById("passBox");
const uppercase = document.getElementById("uppercase");
const lowercase = document.getElementById("lowercase");
const number = document.getElementById("number");
const symbol = document.getElementById("symbol");
const genBtn = document.getElementById("genBtn");
const displayValue = document.getElementById("displayValue");

// console.log(displayValue);
// passBox.addEventListener("input", () => {
    if(passBox.value >= 30){
        passBox.value = 30;
    } else if(passBox.value <= 1){
        passBox.value = 1;
    }
    // sliderValue.textContent = passBox.value;

// });
// console.log(passBox.value)

genBtn.addEventListener("click", () => {
   displayValue.value = generatePassword()
   displayValue.style.display = 'block';
});

let upperCase = "QWERTYUIOPASDFGHJKLZXCVBNM";
let lowerCase = "qwertyuiopasdfghjklzxcvbnm";
let allNumber = "0123456789";
let allSymbol = "~!@#$^&*";

function generatePassword(){
    let genPwd = '';
    let allChars = '';
    
    allChars += uppercase.checked ? upperCase : '';
    allChars += lowercase.checked ? lowerCase : '';
    allChars += number.checked ? allNumber : '';
    allChars += symbol.checked ? allSymbol : '';

    // console.log(allChars);

    if(allChars == '' || allChars.length == 0){
        return genPwd;
    }
    let i =1;
    for(i=1; i<=passBox.value; i++){
        genPwd += allChars.charAt(Math.floor(Math.random() * allChars.length))
        // console.log(genPwd)
    }
    return genPwd;
    // console.log(genPwd);
}
