function makeComputerChoice(choices) {
    return choices[Math.floor(Math.random() * choices.length)];
}

function makeHumanChoice() {
    return prompt("Enter a choice between rock, paper, scissors: ").toLowerCase();
}

function playGame() {
    let choices = ["rock", "paper", "scissors"];
    let humanScore = 0;
    let computerScore = 0;
    
    for (i = 0; i < 5; i++) {
        let humanChoice = makeHumanChoice();
        let computerChoice = makeComputerChoice(choices);

        if (humanChoice === "rock" && computerChoice === "paper") {
            console.log("Computer chose " + computerChoice + ". Computer wins!");
            computerScore++;
        }
        else if (humanChoice === "rock" && computerChoice === "scissors") {
            console.log("Computer chose " + computerChoice + ". You win!");
            humanScore++;
        }
        else if (humanChoice === "rock" && computerChoice === "rock") {
            console.log("Computer chose " + computerChoice + ". It's a tie!");
        }
        else if (humanChoice === "paper" && computerChoice === "scissors") {
            console.log("Computer chose " + computerChoice + ". Computer wins!");
            computerScore++;
        }
        else if (humanChoice === "paper" && computerChoice === "rock") {
            console.log("Computer chose " + computerChoice + ". You win!");
            humanScore++;
        }
        else if (humanChoice === "paper" && computerChoice === "paper") {
            console.log("Computer chose " + computerChoice + ". It's a tie!");
        }
        else if (humanChoice === "scissors" && computerChoice === "rock") {
            console.log("Computer chose " + computerChoice + ". Computer wins!");
            computerScore++;
        }
        else if (humanChoice === "scissors" && computerChoice === "paper") {
            console.log("Computer chose " + computerChoice + ". You win!");
            humanScore++;
        }
        else if (humanChoice === "scissors" && computerChoice === "scissors") {
            console.log("Computer chose " + computerChoice + ". It's a tie!");
        }
        else {
            console.log("Your choice is not in the options!");
        }

        console.log("SCORES\n" + "Human: " + humanScore + "\t" + "Computer: " + computerScore);
    }

    console.log("SCORES\n" + "Human: " + humanScore + "\t" + "Computer: " + computerScore);

    if (humanScore > computerScore) {
        console.log("Human wins the game!");
    }
    else if (humanScore < computerScore) {
        console.log("Computer wins the game!");
    }
    else {
        console.log("No one wins the game!");
    }
}

playGame();