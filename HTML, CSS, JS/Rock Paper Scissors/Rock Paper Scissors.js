let choices = document.querySelectorAll(".choice");
let result = document.getElementById("result");

choices.forEach(choice => {
  choice.addEventListener("click", function() {
    let playerChoice = choice.id;
    let computerChoice = getComputerChoice();
    let winner = getWinner(playerChoice, computerChoice);

    displayResult(winner, computerChoice);
  });
});

function getComputerChoice() {
  let random = Math.random();
  if (random < 0.34) {
    return "rock";
  } else if (random <= 0.67) {
    return "paper";
  } else {
    return "scissors";
  }
}

function getWinner(playerChoice, computerChoice) {
  if (playerChoice === computerChoice) {
    return "draw";
  } else if (
    (playerChoice === "rock" && computerChoice === "scissors") ||
    (playerChoice === "paper" && computerChoice === "rock") ||
    (playerChoice === "scissors" && computerChoice === "paper")
  ) {
    return "player";
  } else {
    return "computer";
  }
}

function displayResult(winner, computerChoice) {
    if (winner === "player") {
      result.innerHTML = `You win! ${computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1)} loses to ${winner}.`;
    } else if (winner === "computer") {
      result.innerHTML = `You lose! ${computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1)} beats ${winner}.`;
    } else {
      result.innerHTML = `It's a draw! Both chose ${computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1)}.`;
    }
  }
  