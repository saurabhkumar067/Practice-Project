let container = document.querySelector(".container");
let boxes = document.querySelectorAll(".box");
let resetBtn = document.getElementById("reset-btn");
let msg = document.querySelector(".msg");
let msgP = document.querySelector(".msg p");
let newGame = document.getElementById("new-game");

let turnO = true; //playerX , playerO;
const winPatterns = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 4, 6],
  [2, 5, 8],
  [3, 4, 5],
  [6, 7, 8],
];

function disabled() {
  for (box of boxes) {
    box.disabled = true;
  }
}
function resetGame() {
  for (box of boxes) {
    box.disabled = false;
    turnO = true;
    box.innerHTML = "";
  }
}
resetBtn.addEventListener("click", resetGame);
newGame.addEventListener("click", () => {
  resetGame();
  msg.classList.add("display");
  container.classList.remove("display");
});

boxes.forEach((e) => {
  e.addEventListener("click", () => {
    if (turnO) {
      e.innerHTML = "O";
      turnO = false;
    } else {
      e.innerHTML = "X";
      turnO = true;
    }
    e.disabled = true;
    checkWin();
  });
  // disabled()
});

function showWinner(winner) {
  msg.classList.remove("display");
  msgP.innerHTML = `Congratulations, Winner is ${winner}`;
  container.classList.add("display");
}

function checkWin() {
  for (win of winPatterns) {
    let pos1Val = boxes[win[0]].innerText;
    let pos2Val = boxes[win[1]].innerText;
    let pos3Val = boxes[win[2]].innerText;

    if (pos1Val != "" && pos2Val != "" && pos3Val != "") {
      if (pos1Val == pos2Val && pos2Val == pos3Val) {
        showWinner(pos1Val);
        disabled();
        break;
      }
    }
  }
}

// function checkWin() {
//     // Iterate over each win pattern
//     for (let win of winPatterns) {
//       let [a, b, c] = win; // Destructure the pattern to get indices
//       // Get the values at the win pattern indices
//       let pos1Val = boxes[a].innerHTML;
//       let pos2Val = boxes[b].innerHTML;
//       let pos3Val = boxes[c].innerHTML;

//       // Check if all values are the same and not empty
//       if (pos1Val !== "" && pos1Val === pos2Val && pos2Val === pos3Val) {
//         showWinner(pos1Val); // Display the winner
//         disabled(); // Disable all boxes
//         break; // Exit the loop as we found a winner
//       }
//     }
//   }
// //   checkWin();
