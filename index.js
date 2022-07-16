// Function called computerPlay that will randomly return either ‘Rock’, ‘Paper’ or ‘Scissors’.

function computerPlay() {
	randomReturn = ["Rock", "Paper", "Scissors"];
	computerSelection = randomReturn[Math.floor(Math.random() * randomReturn.length)].toLowerCase();
    //console.log(computerSelection)
    return computerSelection;
}

//computerPlay();

// Function playRound that plays a single round of Rock Paper Scissors.
// Return a string that declares the winner of the round, e.g. "You Lose! Paper beats Rock"

//const prompt = require('prompt-sync')({sigint: true});

function playRound(playerSelection, computerSelection) {

    //var playerSelection = prompt('Enter "rock", "paper" or "scissors":');
    playerSelection = playerSelection.toLowerCase();
    //console.log(playerSelection);

	if (playerSelection === "rock" && computerSelection === "rock") {
		result = `You tie! (${playerSelection} and ${computerSelection}).`;
	} else if (playerSelection === "rock" && computerSelection === "paper") {
		result = `You loose! ${computerSelection[0].toUpperCase() + computerSelection.slice(1).toLowerCase()} beats ${playerSelection}!`;
	} else if (playerSelection === "rock" && computerSelection === "scissors") {
		result = `You win! ${playerSelection[0].toUpperCase() + playerSelection.slice(1).toLowerCase()} beats ${computerSelection}!`;
	} else if (playerSelection === "paper" && computerSelection === "paper") {
		result = `You tie! (${playerSelection} and ${computerSelection})`;
	} else if (playerSelection === "paper" && computerSelection === "rock") {
		result = `You win! ${playerSelection[0].toUpperCase() + playerSelection.slice(1).toLowerCase()} beats ${computerSelection}!`;
	} else if (playerSelection === "paper" && computerSelection === "scissors") {
		result = `You loose! ${computerSelection[0].toUpperCase() + computerSelection.slice(1).toLowerCase()} beats ${playerSelection}.`;
	} else if (playerSelection === "scissors" && computerSelection === "scissors") {
		result = `You tie! (${playerSelection} and ${computerSelection})`;
	} else if (playerSelection === "scissors" && computerSelection === "paper") {
		result = `You win! ${playerSelection[0].toUpperCase() + playerSelection.slice(1).toLowerCase()} beats ${computerSelection}!`;
	} else if (playerSelection === "scissors" && computerSelection === "rock") {
		result = `You loose! ${computerSelection[0].toUpperCase() + computerSelection.slice(1).toLowerCase()} beats ${playerSelection}.`;
	} else {
        result = `Your input is not valid: ${playerSelection}`;
    }
	return result;
}

//const playerSelection = 'paper';
//var computerSelection = computerPlay();
//console.log(playRound(playerSelection, computerSelection))

// Function game(). Call the playRound function inside of this one to play a 5 round game that keeps score and reports a winner or loser at the end.

function game() {
    var userPoints = 0;
    var computerPoints = 0;
    var winner=0;

    for (let i = 0; i < 5; i++) {
        var element = prompt("Type Rock, Paper or Scissors");

        while (element.toLowerCase() !== "rock" && element.toLowerCase() !== "paper" && element.toLowerCase() !== "scissors") {
            alert("Ooops! That didn't work!");
            element = prompt("Type Rock, Paper or Scissors");
        }

        const computerElement=computerPlay()
		const result=playRound(element, computerElement);

        if (result.includes("win")) {
            userPoints++;
            computerPoints--;
        } 
        else if (result.includes("loose")) {
            userPoints--;
            computerPoints++;
        }
        else if (result.includes("tie")) {
            userPoints;
            computerPoints;
        }
        else {
            console.log("something strange")
        }  

        console.log(`Round ${i}: user has ${element} and ${userPoints}, computer has ${computerElement} and ${computerPoints}.`)
	}

    if (userPoints>computerPoints) {
        winner= `You win! ${userPoints} : ${computerPoints}`;
        console.log(winner);
    }
    else if (computerPoints>userPoints) {
        winner= `You loose! ${userPoints} : ${computerPoints}`;
        console.log(winner);
    }
    else if (userPoints==computerPoints) {
        winner= `You tie! ${userPoints} : ${computerPoints}`;
        console.log(winner);
    }
    else {
        winner="something strange";
        console.log(winner);
    }
}

game();