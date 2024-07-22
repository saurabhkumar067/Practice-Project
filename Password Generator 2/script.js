document.getElementById("passG").addEventListener("click", () => {
  // let button = document.querySelector("button");
  let upperCase = document.getElementById("uppercase");
  let lowerCase = document.getElementById("lowercase");
  let allNumber = document.getElementById("number");
  let allSymbols = document.getElementById("symbols");

  let password = passGen(upperCase, lowerCase, allNumber, allSymbols);

  document.getElementById("inputBox").value = password;
});

  document.getElementById("copyBtn").addEventListener("click", () => {
    let inputBox = document.getElementById("inputBox");
    inputBox.select();
    inputBox.setSelectionRange(0, 99999); // For mobile devices
    document.execCommand("copy");
    alert("Password copied to clipboard!");
  });

function passGen(upperCase, lowerCase, allNumber, allSymbols) {
  let upperWord = "QWERTYUIOPASDFGHJKLZXCVBNM";
  let lowerWord = "qwertyuiopasdfghjklzxcvbnm";
  let numCount = "0123456789";
  let symbolWord = "~!@#$%^&*(-)";

  let strPss = "";
  let allChars = "";

  allChars += upperCase.checked ? upperWord : "";
  allChars += lowerCase.checked ? lowerWord : "";
  allChars += allNumber.checked ? numCount : "";
  allChars += allSymbols.checked ? symbolWord : "";

  if (allChars == "") {
    return strPss;
  }

  for (let i = 0; i < 8; i++) {
    strPss += allChars.charAt(Math.floor(Math.random() * allChars.length));
  }
  return strPss;
}


document.getElementById("copyBtn").addEventListener("click", () => {
    let inputBox = document.getElementById("inputBox");
    inputBox.select();
    inputBox.setSelectionRange(0, 99999); // For mobile devices
    document.execCommand("copy");
    alert("Password copied to clipboard!");
  });