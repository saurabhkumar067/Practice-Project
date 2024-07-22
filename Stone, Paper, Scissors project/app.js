let userScore = 0;
let compScore = 0;

let choices = document.querySelectorAll(".choice");
let msg = document.querySelector("#msg");

let userScorePara = document.querySelector("#user-score");
let compScorePara = document.querySelector("#comp-score");

const genCompScore = () => {
  const options = ["rock", "paper", "scissors"];
  const randIdx = Math.floor(Math.random() * 3);
  return options[randIdx];
};
const gameDraw = () => {
  msg.innerText = "Game was draw. Play again";
  msg.style.background = "#081b31";
};

const showWinner = (userWin, userChoice, compChoice) => {
  if (userWin) {
    userScore++;
    userScorePara.innerText = userScore;
    msg.innerText = `You win! your ${userChoice} beats ${compChoice}`;
    msg.style.background = "green";
  } else {
    compScore++;
    compScorePara.innerText = compScore;
    msg.innerText = `You lose. ${compChoice} beats your ${userChoice}`;
    msg.style.background = "red";
  }
};

const playGame = (userChoice) => {
  const compChoice = genCompScore();
  if (userChoice === compChoice) {
    //Draw the game
    gameDraw();
    let userWin = true;
  } else {
    if (userChoice === "rock") {
      //scissors, paper
      userWin = compChoice === "scissors" ? true : false;
    } else if (userChoice === "scissors") {
      //paper, rock
      userWin = compChoice === "paper" ? true : false;
    } else {
      userWin = compChoice === "rock" ? true : false;
    }
    showWinner(userWin, userChoice, compChoice);
  }
};

choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    const userChoice = choice.getAttribute("id");

    playGame(userChoice);
  });
});
