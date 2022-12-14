const computerChoiceDisplay = document.getElementById('computerChoice');
const userChoiceDisplay = document.getElementById('userChoice');
const resultDisplay = document.getElementById('result');
const possibleChoices = document.querySelectorAll('button');
let userChoice;
let computerChoice;
let result;

possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', (element) => {
    userChoice = element.target.id;
    userChoiceDisplay.innerHTML = userChoice;
    generateComputerChoice();
    getResult();
}))

function generateComputerChoice () {
    const randomNumber = Math.floor(Math.random() * possibleChoices.length) + 1;
    
    if (randomNumber === 1) {
        computerChoice = 'Rock'
    } 
    if (randomNumber === 2) {
        computerChoice = 'Scissors'
    } 
    if (randomNumber === 3) {
        computerChoice = 'Paper'
    }

    computerChoiceDisplay.innerHTML = computerChoice;
}

function getResult() {
    if (computerChoice === userChoice) {
        result = "It's a draw!"
    }
    if (computerChoice === 'Rock' && userChoice === 'Paper') {
        result = "You win!"
    }
    if (computerChoice === 'Rock' && userChoice === 'Scissors') {
        result = "You lose!"
    }
    if (computerChoice === 'Paper' && userChoice === 'Rock') {
        result = "You lose!"
    }
    if (computerChoice === 'Paper' && userChoice === 'Scissors') {
        result = "You win!"
    }
    if (computerChoice === 'Scissors' && userChoice === 'Rock') {
        result = "You win!"
    }
    if (computerChoice === 'Scissors' && userChoice === 'Paper') {
        result = "You lose!"
    }
    resultDisplay.innerHTML = result;
}