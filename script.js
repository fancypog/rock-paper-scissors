function getComputerChoice() {
    const choices = ["ROCK", "PAPER", "SCISSORS"]
    const radElement = choices[Math.floor(Math.random()* choices.length)]
    return radElement
}

function playRound(playerSelection, computerSelection) {
    let result;
    if (playerSelection === computerSelection) {
        result = "You: " + playerSelection + "\n" + "Computer: " + computerSelection + "\n" + "It's a draw!"
    } 
    
    else if (playerSelection === "ROCK" && computerSelection == "SCISSORS") {
        result =  "You: " + playerSelection + "\n" + "Computer: " + computerSelection + "\n" + "You win!"
    } 
    
    else if (playerSelection === "PAPER" && computerSelection == "ROCK") {
        result =  "You: " + playerSelection + "\n" + "Computer: " + computerSelection + "\n" + "You win!"
    } 
    
    else if (playerSelection === "SCISSORS" && computerSelection == "PAPER") {
        result =  "You: " + playerSelection + "\n" + "Computer: " + computerSelection + "\n" + "You win!"
    }

    else {
        result =  "You: " + playerSelection + "\n" + "Computer: " + computerSelection + "\n" + "You lose!"
    }

    document.querySelector('.result').textContent = result;
}

const rock = document.querySelector('#rock')
const paper = document.querySelector('#paper')
const scissors = document.querySelector('#scissors')

rock.addEventListener('click', function() {playRound("ROCK", getComputerChoice());});
paper.addEventListener('click', function() {playRound("PAPER", getComputerChoice());});
scissors.addEventListener('click', function() {playRound("SCISSORS", getComputerChoice());});

