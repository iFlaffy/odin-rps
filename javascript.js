function getComputerChoice() {
    let compChoice = Math.round(Math.random() * (3 - 1) + 1)

    if (compChoice === 1) {
        return console.log("Rock")
    } else if (i === 2) {
        return console.log("Paper")
    } else {
        return console.log("Scissors")
    }
}

console.log(getComputerChoice())