let pscore = 0;
let cscore = 0;
let record = "";
let rounds = 3;

function computerPlay() {
  let r = Math.random() * 3;
  if (r < 1) return "rock";
  if (r < 2) return "paper";
  if (r < 3) return "scissors"; //make case insensitive
}

function playRound(playerSelection, computerSelection) {
  const player = playerSelection;
  const computer = computerSelection;

  if (player == computer) return "Again!!";
  else if (
    (player == rock && computer == scissors) ||
    (player == scissors && computer == paper) ||
    (player == paper && computer == rock)
  ) {
    return `You win! ${playerSelection} beats ${computerSelection}.`;
    pscore++;
  }
  //make name customizable in the future
  else if (
    (computer == rock && player == scissors) ||
    (computer == scissors && player == paper) ||
    (computer == paper && player == rock)
  ) {
    return `The computer wins! ${computerSelection} beats ${playerSelection}.`;
    cscore++;
  } else return "uh oh";
}

function newGame() {
  record +=
    playRound(document.getElementById("input-games").value, computerPlay()) +
    "\n";
  document.getElementById("input-games").textContent = "";
  document.querySelector("p").textContent = record;

  if (pscore == rounds / 2 + 0.5) {
    document.querySelector(
      "input"
    ).textContent = `You win! You beat the computer ${
      rounds / 2 + 0.5
    } best out of ${rounds}`;
    break;
  }
  if (cscore == rounds / 2 + 0.5) {
    document.querySelector(
      "input"
    ).textContent = `You lose! The computer beat you ${
      rounds / 2 + 0.5
    } best out of ${rounds}`;
    break;
  }
}

function roundsChoice() {
  if (document.getElementsByName("rounds").value == false) {
    alert("Please select a number of rounds");
    return null;
  }
  rounds = Number(document.getElementsByName("rounds").value);
}

function restart() {
  pscore = 0;
  cscore = 0;
  record = "";
  rounds = 3;

  document.getElementsByClassName("rounds-button").checked = false;
  document.getElements("input-games").textContent = "";
  document.querySelector("p").textContent = "";
  document.querySelector("h3").textContent = "";
}
