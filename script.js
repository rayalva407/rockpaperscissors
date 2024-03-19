function getComputerChoice() {
  choices = ["rock", "paper", "scissors"]

  return choices[Math.floor(Math.random()*choices.length)];
}

function playRound(computerChoice, playerChoice) {
  if ((playerChoice === "rock" && computerChoice === "paper") || (playerChoice === "paper" && computerChoice === "scissors") || (playerChoice === "scissors" && computerChoice === "rock")) {
    return `You Lose. ${computerChoice} beats ${playerChoice}`;
  }
  else if (computerChoice === playerChoice) {
    return `Draw!`;
  }
  else {
    return `You Win. ${playerChoice} beats ${computerChoice}`;
  }
}

// function playGame() {
//   let playerScore = 0;
//   let computerScore = 0;

//   for (let i = 1; i < 6; i++) {
//     console.log(`Your Score: ${playerScore}`)
//     console.log(`Computer Score ${computerScore}`)
//     let result = playRound(getComputerChoice());
//     console.log(result)

//     if (result.includes("Win")) {
//       playerScore++;
//     }
//     else if (result.includes("Lose")) {
//       computerScore++
//     }
//     else {
//       continue;
//     }
//   }

//   if (playerScore > computerScore) {
//     return `You win the game! Computer score: ${computerScore}, Your Score: ${playerScore}`;
//   }
//   else if (playerScore === computerScore) {
//     return `It's a draw! Computer score: ${computerScore}, Your Score: ${playerScore}`
//   }
//   else {
//     return `You lose the game! Computer score: ${computerScore}, Your Score: ${playerScore}`;
//   }
  
// }

let buttons = document.querySelectorAll(".btn");
let cpuScore = 0;
let playerScore = 0;
const scoreDisplay = document.querySelector(".score")
scoreDisplay.innerText = `Score: ${playerScore}`;


buttons.forEach((button) => {
  button.addEventListener('click', () => {
    const results = document.createElement("p");
    results.innerText = playRound(getComputerChoice(), button.innerText.toLowerCase());
    const div = document.querySelector(".results");
    div.appendChild(results);
    
    if (results.innerText.includes("Win")) {
       playerScore++;
       scoreDisplay.innerText = playerScore;
    }
    if (results.innerText.includes("Lose")) {
      cpuScore++
    }

    if (playerScore === 5) {
      results.innerText = "Congratulations! You Win the game!"
      playerScore = 0;
      cpuScore = 0;
      scoreDisplay.innerText = playerScore;
    }

    if (cpuScore === 5) {
      results.innerText = "Sorry! You lose the game. Try again!"
      playerScore = 0;
      cpuScore = 0;
      scoreDisplay.innerText = playerScore;
    }
  })
})

