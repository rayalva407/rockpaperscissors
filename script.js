function getComputerChoice() {
  choices = ["rock ✊", "paper 👋", "scissors ✌️"];

  return choices[Math.floor(Math.random() * choices.length)];
}

function playRound(computerChoice, playerChoice) {
  if (
    (playerChoice.includes("rock") && computerChoice.includes("paper")) ||
    (playerChoice.includes("paper") && computerChoice.includes("scissors")) ||
    (playerChoice.includes("scissors") && computerChoice.includes("rock"))
  ) {
    return `You Lose. ${computerChoice} beats ${playerChoice}`;
  } else if (computerChoice === playerChoice) {
    return `Draw!`;
  } else {
    return `You Win. ${playerChoice} beats ${computerChoice}`;
  }
}

let buttons = document.querySelectorAll(".btn");
let cpuScore = 0;
let playerScore = 0;
const scoreDisplay = document.querySelector(".score");
const reset = document.createElement("button");
reset.classList.add("reset");
reset.innerText = "Reset Game";
scoreDisplay.innerText = `Score: ${playerScore}`;

reset.addEventListener("click", () => {
  document.querySelectorAll(".roundResult").forEach((el) => el.remove());
  buttons.forEach((btn) => (btn.disabled = false));
});

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const results = document.createElement("p");
    results.classList.add("roundResult");
    results.innerText = playRound(
      getComputerChoice(),
      button.innerText.toLowerCase()
    );
    const div = document.querySelector(".results");
    div.appendChild(results);

    if (results.innerText.includes("Win")) {
      playerScore++;
      scoreDisplay.innerText = `Score: ${playerScore}`;
    }
    if (results.innerText.includes("Lose")) {
      cpuScore++;
    }

    if (playerScore === 5) {
      playerScore = 0;
      cpuScore = 0;
      scoreDisplay.innerText = `Score: ${playerScore}`;
      buttons.forEach((btn) => (btn.disabled = true));
      results.innerText = "Congratulations! You Win the game!";
      results.append(reset);
    }

    if (cpuScore === 5) {
      playerScore = 0;
      cpuScore = 0;
      scoreDisplay.innerText = `Score: ${playerScore}`;
      buttons.forEach((btn) => (btn.disabled = true));
      results.innerText = "Sorry! You lose the game. Try again! ";
      results.append(reset);
    }
  });
});
