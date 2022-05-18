// make array for choices computer
let arr = ['rock', 'paper', 'scissors', 'lizard', 'spock']
// get the element and make a function for getting a random word
document.getElementById('win').addEventListener("click", random);

function random(){
    let number = arr[Math.floor(Math.random() * arr.length)];
    console.log(number);
}

document.getElementById('rock').addEventListener('click', rock);

function rock() {
    let rock = document.getElementById("rock").value;
    console.log(rock);
}

document.getElementById('paper').addEventListener('click', paper);

function paper() {
    let paper = document.getElementById("paper").value;
    console.log(paper);
}

document.getElementById('paper').addEventListener('click', scissors);

function scissors() {
    let scissors = document.getElementById("scissors").value;
    console.log(scissors);
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