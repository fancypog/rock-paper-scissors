function getComputerChoice() {
    choices = ["ROCK", "PAPER", "SCISSORS"]
    const radElement = choices[Math.floor(Math.random()* choices.length)]
    return radElement
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection == computerSelection) {
        return "You: " + playerSelection + "\n" + "Computer: " + computerSelection + "\n" + "It's a draw!"
    } 
    
    else if (playerSelection == "ROCK" && computerSelection == "SCISSORS") {
        return "You: " + playerSelection + "\n" + "Computer: " + computerSelection + "\n" + "You win!"
    } 
    
    else if (playerSelection == "PAPER" && computerSelection == "ROCK") {
        return "You: " + playerSelection + "\n" + "Computer: " + computerSelection + "\n" + "You win!"
    } 
    
    else if (playerSelection == "SCISSORS" && computerSelection == "PAPER") {
            return "You: " + playerSelection + "\n" + "Computer: " + computerSelection + "\n" + "You win!"
    }

    else {
        return "You: " + playerSelection + "\n" + "Computer: " + computerSelection + "\n" + "You lose!"
    }
}

const playerSelection = prompt("Rock, Paper, Scissors!").toUpperCase();
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));