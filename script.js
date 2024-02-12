function getComputerChoice() {
    choices = ["Rock", "Paper", "Scissors"]
    const radElement = choices[Math.floor(Math.random()* choices.length)]
    return radElement
}
console.log(getComputerChoice())

function playRound(playerSelection, computerSelection) {

}

const playerSelection = "rock";
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));