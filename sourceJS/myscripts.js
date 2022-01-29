//create function called computerPlay that randomly chooses rock paper or scissor
    // can either make a string array and return randomly of 3
    // can also use math random 1,2,3 and return rock paper or scissor respectively
//Probably Global Scope the rules of the game (paper beats rock, etc)
    // have to create a variable? that compares the move of the player to the computer
    // declaration of winner
// Make the player selection parameter case-insensitive

const myArray = ["rock", "paper", "scissor"];
let computerSelection;
let computerScore = 0;
let playerSelection; 
let playerScore = 0;
let tieScore = 0;


function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

function computerPlay() {
  return myArray [Math.floor(Math.random() * myArray.length)];
}


function game() {
  playRound();
  playRound();
  playRound();
  playRound();
  playRound();
  console.log("You scored" + " " + playerScore + " " + "to the computer's" + " " + computerScore);
  console.log("You tied with the computer" + " " + tieScore + " " + "times");
  playerScore = 0;
  computerScore = 0;
}

function playRound(playerSelection, computerSelection) {
  // your code here!
  result = window.prompt("Which move will you choose? Rock Paper or Scissors?", "Rock");
  playerSelection = result.toLowerCase();
  if (result != "rock" && result != "paper" && result != "scissor" && result != "scissors")
  return "Please select 1 of the 3 possible moves, Rock, Paper, or Scissors";
  computerSelection = computerPlay().toLowerCase();
  if (computerSelection == playerSelection) { 
  tieScore++;
  return "Tie game!";
  } else if (computerSelection == "rock" && playerSelection == "scissor"||
             computerSelection == "rock" && playerSelection == "scissors"||
             computerSelection == "paper" && playerSelection == "rock"||
             computerSelection == "scissor" && playerSelection == "paper") {
             computerScore++;
             return "Oh no! You lost to the computer's " + capitalize(computerSelection);
  } else {
    playerScore++;
    return "Congratulations! You beat the computer's " + capitalize(computerSelection);
  }
}
