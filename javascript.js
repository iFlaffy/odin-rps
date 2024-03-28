function getComputerChoice() {
    let compChoice = Math.round(Math.random() * (3 - 1) + 1)

    if (compChoice === 1) {
        return "Rock"
    } else if (compChoice === 2) {
        return "Paper"
    } else {
        return "Scissors"
    }
}

console.log(getComputerChoice())