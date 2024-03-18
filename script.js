function getComputerChoice() {
  choices = ["rock", "paper", "scissors"]

  return choices[Math.floor(Math.random()*choices.length)];
}

function playRound(computerChoice) {
  playerChoice = prompt("Please enter rock paper or scissors:").toLowerCase();
  if ((playerChoice === "rock" && computerChoice === "paper") || (playerChoice === "paper" && computerChoice === "scissors") || (playerChoice === "scissors" && computerChoice === "rock")) {
    return `You Lose! ${computerChoice} beats ${playerChoice}`;
  }
  else if (computerChoice === playerChoice) {
    return `Draw! Try Again`;
  }
  else {
    return `You Win! ${playerChoice} beats ${computerChoice}`;
  }
}

function playGame() {
  let playerScore = 0;
  let computerScore = 0;

  for (let i = 1; i < 6; i++) {
    console.log(`Your Score: ${playerScore}`)
    console.log(`Computer Score ${computerScore}`)
    let result = playRound(getComputerChoice());
    console.log(result)

    if (result.includes("Win")) {
      playerScore++;
    }
    else if (result.includes("Lose")) {
      computerScore++
    }
    else {
      continue;
    }
  }

  if (playerScore > computerScore) {
    return `You win the game! Computer score: ${computerScore}, Your Score: ${playerScore}`;
  }
  else if (playerScore === computerScore) {
    return `It's a draw! Computer score: ${computerScore}, Your Score: ${playerScore}`
  }
  else {
    return `You lose the game! Computer score: ${computerScore}, Your Score: ${playerScore}`;
  }
  
}