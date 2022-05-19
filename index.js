// make array for choices computer
let arr = ['rock', 'paper', 'scissors', 'lizard', 'spock']

// get the element and make a function for getting a random word
let computerChoice
let playerScore = 0;
let computerScore = 0;

//function to randomize a word from the array
function random(){
  computerChoice = arr[Math.floor(Math.random() * arr.length)];
   console.log(computerChoice);
}

//functions to get the player selection from buttons
let playerSelection;
const gameResult = document.querySelector(".result");
const computer = document.querySelector(".computer");
const updatePlayer = document.querySelector(".playerPointScore");
const updateComputer = document.querySelector(".computerPointScore");

//button functions
document.getElementById('rock').addEventListener('click', rock);

function rock() {
    playerSelection = "rock";
    console.log(playerSelection);
    random();
    game(playerSelection, computerChoice);
}

document.getElementById('paper').addEventListener('click', paper);

function paper() {
    playerSelection = "paper";
    console.log(playerSelection);
    random();
    game(playerSelection, computerChoice);

    let paper = document.getElementById("paper")
    console.log(paper);
}

document.getElementById('scissors').addEventListener('click', scissors);

function scissors() {
    playerSelection = "scissors";
    console.log(playerSelection);
    random();
    game(playerSelection, computerChoice);
}

document.getElementById('lizard').addEventListener('click', lizard);

function lizard() {
    playerSelection = "lizard";
    console.log(playerSelection);
    random();
    game(playerSelection, computerChoice);
}

document.getElementById('spock').addEventListener('click', spock);

function spock() {
    playerSelection = "spock";
    console.log(playerSelection);
    random();
    game(playerSelection, computerChoice);
}

//reset function to play again
document.getElementById('win').addEventListener("click", reset);

function reset(){
    playerScore = 0;
    computerScore = 0;
}

//check player vs computer (if and switch statement)
function game(playerSelection, computerChoice){
    if(playerScore === 10){
        alert("Player Wins The game")
    }else if(computerScore === 10){
        alert("Computer Wins The game")
    }
    switch (playerSelection) {
        case "rock":
            switch (computerChoice) {
                case "rock":
                    gameResult.innerText = "It's a draw!"
                    computer.innerText = computerChoice;
                    playerScore++;
                    updatePlayer.innerText = playerScore;
                    computerScore++;
                    updateComputer.innerText = computerScore;
                    break;
                case "paper":
                    gameResult.innerText = "Your opponent wins!"
                    computer.innerText = computerChoice;
                    computerScore++;
                    updateComputer.innerText = computerScore;

                    break;
                case "scissors":
                    gameResult.innerText = "You win!"
                    computer.innerText = computerChoice;
                    playerScore++;
                    updatePlayer.innerText = playerScore;
                    break;
                case "lizard":
                    gameResult.innerText = "You win!"
                    computer.innerText = computerChoice;
                    playerScore++;
                    updatePlayer.innerText = playerScore;
                    break;
                case "spock":
                    gameResult.innerText = "Your opponent wins!"
                    computer.innerText = computerChoice;
                    computerScore++;
                    updateComputer.innerText = computerScore;
                    break;
            }
            break;

        case "scissors":
            switch (computerChoice) {
                case "scissors":
                    gameResult.innerText = "It's a draw!"
                    computer.innerText = computerChoice;
                    playerScore++;
                    updatePlayer.innerText = playerScore;
                    computerScore++;
                    updateComputer.innerText = computerScore;
                    break;
                case "rock":
                    gameResult.innerText = "Your opponent wins!"
                    computer.innerText = computerChoice;
                    computerScore++;
                    updateComputer.innerText = computerScore;
                    break;
                case "lizard":
                    gameResult.innerText = "You win!"
                    computer.innerText = computerChoice;
                    playerScore++;
                    updatePlayer.innerText = playerScore;
                    break;
                case "paper":
                    gameResult.innerText = "You win!"
                    computer.innerText = computerChoice;
                    playerScore++;
                    updatePlayer.innerText = playerScore;
                    break;
                case "spock":
                    gameResult.innerText = "Your opponent wins!"
                    computer.innerText = computerChoice;
                    computerScore++;
                    updateComputer.innerText = computerScore;
                    break;

            }
            break;

        case "paper":
            switch (computerChoice) {
                case "paper":
                    gameResult.innerText = "It's a draw!"
                    computer.innerText = computerChoice;
                    playerScore++;
                    updatePlayer.innerText = playerScore;
                    computerScore++;
                    updateComputer.innerText = computerScore;
                    break;
                case "scissors":
                    gameResult.innerText = "Your opponent wins!"
                    computer.innerText = computerChoice;
                    computerScore++;
                    updateComputer.innerText = computerScore;
                    break;
                case "rock":
                    gameResult.innerText = "You win!"
                    computer.innerText = computerChoice;
                    playerScore++;
                    updatePlayer.innerText = playerScore;
                    break;
                case "spock":
                    gameResult.innerText = "You win!"
                    computer.innerText = computerChoice;
                    playerScore++;
                    updatePlayer.innerText = playerScore;
                    break;
                case "lizard":
                    gameResult.innerText = "Your opponent wins!"
                    computer.innerText = computerChoice;
                    computerScore++;
                    updateComputer.innerText = computerScore;
                    break;

            }
            break;

        case "lizard":
            switch (computerChoice) {
                case "lizard":
                    gameResult.innerText = "It's a draw!"
                    computer.innerText = computerChoice;
                    playerScore++;
                    updatePlayer.innerText = playerScore;
                    computerScore++;
                    updateComputer.innerText = computerScore;
                    break;
                case "rock":
                    gameResult.innerText = "Your opponent wins!"
                    computer.innerText = computerChoice;
                    computerScore++;
                    updateComputer.innerText = computerScore;
                    break;
                case "paper":
                    gameResult.innerText = "You win!"
                    computer.innerText = computerChoice;
                    playerScore++;
                    updatePlayer.innerText = playerScore;
                    break;
                case "spock":
                    gameResult.innerText = "You win!"
                    computer.innerText = computerChoice;
                    playerScore++;
                    updatePlayer.innerText = playerScore;
                    break;
                case "scissors":
                    gameResult.innerText = "Your opponent wins!"
                    computer.innerText = computerChoice;
                    computerScore++;
                    updateComputer.innerText = computerScore;
                    break;

            }
            break;
        case "spock":
            switch (computerChoice) {
                case "spock":
                    gameResult.innerText = "It's a draw!"
                    computer.innerText = computerChoice;
                    playerScore++;
                    updatePlayer.innerText = playerScore;
                    computerScore++;
                    updateComputer.innerText = computerScore;
                    break;
                case "lizard":
                    gameResult.innerText = "Your opponent wins!"
                    computer.innerText = computerChoice;
                    computerScore++;
                    updateComputer.innerText = computerScore;
                    break;
                case "rock":
                    gameResult.innerText = "You win!"
                    computer.innerText = computerChoice;
                    playerScore++;
                    updatePlayer.innerText = playerScore;
                    break;
                case "scissors":
                    gameResult.innerText = "You win!"
                    computer.innerText = computerChoice;
                    playerScore++;
                    updatePlayer.innerText = playerScore;
                    break;
                case "paper":
                    gameResult.innerText = "Your opponent wins!"
                    computer.innerText = computerChoice;
                    computerScore++;
                    updateComputer.innerText = computerScore;
                    break;
            }
            break;
    }
}

//Buttons selectors


//Playerpoints en Computerpoints


//Option Player choose

/*const element = document.getElementById("win");
element.addEventListener("click", computer);

function computer() {
    let computerRandom = Math.floor(Math.random() * 5);
    console.log(computerRandom);
    if (computerRandom === 1) {
        rock = computerRandom;
    } else if (computerRandom === 2) {
        paper = computerRandom;
    } else if (computerRandom === 3) {
        scissors = computerRandom;
    } else if (computerRandom === 4) {
        lizard = computerRandom;
    } else if (computerRandom === 5) {
        spock = computerRandom;
    }
}*/