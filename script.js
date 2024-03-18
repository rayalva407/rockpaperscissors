function getComputerChoice() {
  choices = ["rock", "paper", "scissors"]

  return choices[Math.floor(Math.random()*choices.length)];
}

function playRound(computerChoice) {
  playerChoice = prompt("Please enter rock paper or scissors:").toLowerCase();
  if ((playerChoice === "rock" && computerChoice === "paper") || (playerChoice === "paper" && computerChoice === "scissors") || (playerChoice === "scissors" && computerChoice === "rock")) {
    return `You Lose! ${computerChoice} beats ${playerChoice}`
  }
  else if (computerChoice === playerChoice) {
    return `Draw! Try Again`
  }
  else {
      return `You Win! ${playerChoice} beats ${computerChoice}`
  }
}