let pscore = 0;
let cscore = 0;
let record = "";
let rounds = 3;
let rounds_array = document.getElementsByName("rounds");

function computerPlay() {
  let r = Math.random() * 3;
  if (r < 1) return "Rock";
  if (r < 2) return "Paper";
  if (r < 3) return "Scissors"; //make case insensitive
}

function playRound(playerSelection, computerSelection) {
  const player = playerSelection.toLowerCase();
  const computer = computerSelection.toLowerCase();

  if (player == computer) return "Tie!!";
  else if (
    (player == "rock" && computer == "scissors") ||
    (player == "scissors" && computer == "paper") ||
    (player == "paper" && computer == "rock")
  ) {
    pscore++;
    return `You win! ${playerSelection} beats ${computerSelection}.`;
  }
  //make name customizable in the future
  else if (
    (computer == "rock" && player == "scissors") ||
    (computer == "scissors" && player == "paper") ||
    (computer == "paper" && player == "rock")
  ) {
    cscore++;
    return `The computer wins! ${computerSelection} beats ${playerSelection}.`;
  } else {
    alert("Please type in 'Rock', 'Paper', or 'Scissors'");
    return "";
  }
}

function newGame() {
  record =
    record +
    playRound(document.querySelector("#input-games").value, computerPlay()) +
    " ";
  document.querySelector("#input-games").value = "";
  document.querySelector("p").textContent = record;

  if (pscore == rounds / 2 + 0.5) {
    document.querySelector(
      "#final-position"
    ).textContent = `You win! You beat the computer ${
      rounds / 2 + 0.5
    } best out of ${rounds}`;
    return true;
  }
  if (cscore == rounds / 2 + 0.5) {
    document.querySelector(
      "#final-position"
    ).textContent = `You lose! The computer beat you ${
      rounds / 2 + 0.5
    } best out of ${rounds}`;
    return true;
  } else return false;
}

function roundsChoice() {
  for (i = 0; i < rounds_array.length; i++) {
    if (rounds_array[i].checked) {
      rounds = Number(rounds_array[i].value);
      return true;
    }
  }
  alert("Please select a number of rounds");
}

function restart() {
  pscore = 0;
  cscore = 0;
  record = "";
  rounds = 3;

  for (i = 0; i < rounds_array.length; i++) rounds_array[i].checked = false;
  document.querySelector("#input-games").value = "";
  document.querySelector("p").textContent = "";
  document.querySelector("h3").textContent = "";
}
