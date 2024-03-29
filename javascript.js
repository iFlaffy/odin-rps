function getComputerChoice() {
    let compChoice = Math.round(Math.random() * (3 - 1) + 1)

    if (compChoice === 1) {
        return 'Rock'
    } else if (compChoice === 2) {
        return 'Paper'
    } else {
        return 'Scissors'
    }
}

function playRound(player, computer) {
    if (player === computer) {
        return "It's a tie!"
    } else if (player == 'Rock') {
        if (computer == 'Paper') {
            return "You lose! Paper beats Rock."
        } else {
            return "You won! Rock beats Scissors."
        }
    } else if (player == 'Paper') {
        if (computer == 'Scissors') {
            return "You lose! Scissors beats Paper."
        } else {
            return "You won! Paper beats Rock."
        }
    } else if (player == 'Scissors') {
        if (computer == 'Rock') {
            return "You lose! Rock beats Scissors."
        } else {
            return "You won! Scissors beats Paper."
        }
    }
}
const playerSelection = 'Paper'
let computerSelection = getComputerChoice()
console.log(computerSelection)
console.log(playRound(playerSelection, computerSelection))