const options = ["rock", "paper", "scissors"];

function getComputerChoice() {
    const choice = options[Math.floor(Math.random() * options.length)];
    return choice;
}

function chooseWinner(userChoice, computerChoice) {
    if (userChoice === computerChoice) {
        return "tie";
    } else if ((userChoice === "rock" && computerChoice === "scissors") ||
        (userChoice === "scissors" && computerChoice === "paper") ||
        (userChoice === "paper" && computerChoice === "rock")) {
        return "user";
    } else if ((userChoice === "scissors" && computerChoice === "rock") ||
        (userChoice === "rock" && computerChoice === "paper") ||
        (userChoice === "paper" && computerChoice === "scissors")) {
        return "computer";
    }
}

function playRound(userChoice, computerChoice) {
    const result = chooseWinner(userChoice, computerChoice);
    if (result === "tie") {
        console.log("its a tie")
    } else if (result === "user") {
        console.log(`you win ${userChoice} wins against ${computerChoice}`)
    } else {
        console.log(`you loose ${computerChoice} wins against ${userChoice}`)
    }
}
const userChoice = prompt("choose: ")
const lowercase = userChoice.toLowerCase()
const computerChoice = getComputerChoice();
console.log(playRound(userChoice, computerChoice));