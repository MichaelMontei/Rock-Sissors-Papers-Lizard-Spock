// make array for choices computer
let arr = ['rock', 'paper', 'scissors', 'lizard', 'spock']
// get the element and make a function for getting a random word
let computerChoice
let playerScore = 0;
let computerScore = 0;

document.getElementById('win').addEventListener("click", random);

function random(){
  computerChoice = arr[Math.floor(Math.random() * arr.length)];
   console.log(computerChoice);
}

//functions to get the player selection from buttons
let playerSelection;
const blad = document.querySelector(".result");
const computer = document.querySelector(".computer");
const updatePlayer = document.querySelector(".playerPointScore");
const updatecomputer = document.querySelector(".computerPointScore");

document.getElementById('rock').addEventListener('click', rock);

function rock() {
    playerSelection = "rock";
    console.log(playerSelection);
    random();
    game(playerSelection, computerChoice);
}

document.getElementById('paper').addEventListener('click', paper);

function paper() {
<<<<<<< HEAD
    playerSelection = "paper";
    console.log(playerSelection);
    random();
    game(playerSelection, computerChoice);
=======
    let paper = document.getElementById("paper")
    console.log(paper);
>>>>>>> 6eaaa430cbf20d375e5496204f41e1604d56224a
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

//check player vs computer

function game(playerSelection, computerChoice){
    switch (playerSelection) {
        case "rock":
            switch (computerChoice) {
                case "rock":
                    blad.innerText = "It's a draw!"
                    computer.innerText = computerChoice;
                    playerScore++;
                    updatePlayer.innerText = playerScore;
                    computerScore++;
                    updatecomputer.innerText = computerScore;
                    break;
                case "paper":
                    blad.innerText = "Your opponent wins!"
                    computer.innerText = computerChoice;

                    break;
                case "scissors":
                    blad.innerText = "You win!"
                    computer.innerText = computerChoice;
                    break;
                case "lizard":
                    blad.innerText = "You win!"
                    computer.innerText = computerChoice;
                    break;
                case "spock":
                    blad.innerText = "Your opponent wins!"
                    computer.innerText = computerChoice;
                    break;
            }
            break;

        case "scissors":
            switch (computerChoice) {
                case "scissors":
                    blad.innerText = "It's a draw!"
                    break;
                case "rock":
                    blad.innerText = "Your opponent wins!"
                    break;
                case "lizard":
                    blad.innerText = "You win!"
                    break;
                case "paper":
                    blad.innerText = "You win!"
                    break;
                case "spock":
                    blad.innerText = "Your opponent wins!"
                    break;

            }
            break;

        case "paper":
            switch (computerChoice) {
                case "paper":
                    blad.innerText = "It's a draw!"
                    break;
                case "scissors":
                    blad.innerText = "Your opponent wins!"
                    break;
                case "rock":
                    blad.innerText = "You win!"
                    break;
                case "spock":
                    blad.innerText = "You win!"
                    break;
                case "lizard":
                    blad.innerText = "Your opponent wins!"
                    break;

            }
            break;

        case "lizard":
            switch (computerChoice) {
                case "lizard":
                    blad.innerText = "It's a draw!"
                    break;
                case "rock":
                    blad.innerText = "Your opponent wins!"
                    break;
                case "paper":
                    blad.innerText = "You win!"
                    break;
                case "spock":
                    blad.innerText = "You win!"
                    break;
                case "scissors":
                    blad.innerText = "Your opponent wins!"
                    break;

            }
            break;
        case "spock":
            switch (computerChoice) {
                case "spock":
                    blad.innerText = "It's a draw!"
                    break;
                case "lizard":
                    blad.innerText = "Your opponent wins!"
                    break;
                case "rock":
                    blad.innerText = "You win!"
                    break;
                case "scissors":
                    blad.innerText = "You win!"
                    break;
                case "paper":
                    blad.innerText = "Your opponent wins!"
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