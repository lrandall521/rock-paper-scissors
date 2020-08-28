function computerPLay() {
  let r = Math.random() * 3;
  if (r < 1) return "Rock";
  if (r < 2) return "Paper";
  if (r < 3) return "Scissors";
}

function playRound(playerSelection, computerSelection) {
  const player = trim(toLowerCase(playerSelection));
  const computer = toLowerCase(computerSelection);

  if (player == computer) return "Again!!";
  else if (
    (player == rock && computer == scissors) ||
    (player == scissors && computer == paper) ||
    (player == paper && computer == rock)
  )
    return `You win! ${playerSelection} beats ${computerSelection}.`;
  //make name customizable in the future
  else if (
    (computer == rock && player == scissors) ||
    (computer == scissors && player == paper) ||
    (computer == paper && player == rock)
  )
    return `The computer wins! ${computerSelection} beats ${playerSelection}.`;
  else return "uh oh";
}
