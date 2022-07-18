const btn = document.getElementById('btn-strt');

btn.addEventListener('click', () => {
  // 👇️ hide button
  btn.style.display = 'none';

  var newP = document.createElement("p");
  var newContent = document.createTextNode("Choose Rock, Paper or Scissors!");
  newP.appendChild(newContent); 
  newP.style.color = 'red'; 
  newP.setAttribute('id','para1');
  var currentBtn = document.getElementById("btn-strt");
  document.body.insertBefore(newP, currentBtn);


  var newDiv = document.createElement("div");
//   newDiv.style.backgroundColor = 'pink'; 
//   newDiv.style.borderBlockStyle = 'solid'; 
//   newDiv.style.borderBlockColor = 'black';
  newDiv.setAttribute('id','wrapper'); 
  var currentPara = document.getElementById("para1");
  document.body.insertBefore(newDiv, currentPara.nextSibling);

  var newBtnRock = document.createElement("button");
  var newBtnRockContent = document.createTextNode("Rock");
  newBtnRock.appendChild(newBtnRockContent);
  newBtnRock.style.backgroundColor = 'pink'; 
  newBtnRock.style.borderBlockStyle = 'solid'; 
  newBtnRock.style.borderBlockColor = 'black';
  newBtnRock.setAttribute('id','rockID'); 
  var currentNewDiv = document.getElementById("wrapper");
  currentNewDiv.appendChild(newBtnRock);


  var newBtnPaper = document.createElement("button");
  var newBtnPaperContent = document.createTextNode("Paper");
  newBtnPaper.appendChild(newBtnPaperContent);
  newBtnPaper.style.backgroundColor = 'pink'; 
  newBtnPaper.style.borderBlockStyle = 'solid'; 
  newBtnPaper.style.borderBlockColor = 'black';
  newBtnPaper.setAttribute('id','paperID'); 
  currentNewDiv.appendChild(newBtnPaper);


  var newBtnSci = document.createElement("button");
  var newBtnSciContent = document.createTextNode("Scissors");
  newBtnSci.appendChild(newBtnSciContent);
  newBtnSci.style.backgroundColor = 'pink'; 
  newBtnSci.style.borderBlockStyle = 'solid'; 
  newBtnSci.style.borderBlockColor = 'black';
  newBtnSci.setAttribute('id','sciID'); 
  currentNewDiv.appendChild(newBtnSci);

    var currentRock = document.getElementById("rockID");
    var currentPaper = document.getElementById("paperID");
    var currentScissors = document.getElementById("sciID");


    // This will get very nested...!!!!!!!!!!!!!!
    // Function called computerPlay that will randomly return either ‘Rock’, ‘Paper’ or ‘Scissors’.

    function computerPlay() {
        let randomReturn = ["Rock", "Paper", "Scissors"];
        let computerSelection = randomReturn[Math.floor(Math.random() * randomReturn.length)].toLowerCase();
        //console.log(computerSelection)
        return computerSelection;
    }
    //computerPlay();

    // Function playRound that plays a single round of Rock Paper Scissors.
// Return a string that declares the winner of the round, e.g. "You Lose! Paper beats Rock"

//const prompt = require('prompt-sync')({sigint: true});

    function playRound(playerSelection, computerSelection) {

        //let playerSelection = prompt('Enter "rock", "paper" or "scissors":');
        playerSelection = playerSelection.toLowerCase();
        //console.log(playerSelection);
        let result = 0;

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

    currentRock.addEventListener('click', () => {
        const computerElement=computerPlay()
        const result=playRound("rock", computerElement);

        var newH2 = document.createElement("h2");
        var newH2Content = document.createTextNode(result);
        newH2.appendChild(newH2Content);
        newH2.setAttribute('id','result'); 
        document.body.insertBefore(newH2, currentNewDiv.nextSibling);

        var newBtnReload = document.createElement("button");
        var newnewBtnReload = document.createTextNode("Play again!");
        newBtnReload.appendChild(newnewBtnReload);
        newBtnReload.setAttribute('id','playAgain'); 
        newBtnReload.setAttribute('onClick','window.location.reload()'); 
        var currentH2 = document.getElementById("result");
        document.body.insertBefore(newBtnReload, currentH2.nextSibling);

         
      })

      currentPaper.addEventListener('click', () => {
        const computerElement=computerPlay()
        const result=playRound("paper", computerElement);

        var newH2 = document.createElement("h2");
        var newH2Content = document.createTextNode(result);
        newH2.appendChild(newH2Content);
        newH2.setAttribute('id','result'); 
        document.body.insertBefore(newH2, currentNewDiv.nextSibling);

        var newBtnReload = document.createElement("button");
        var newnewBtnReload = document.createTextNode("Play again!");
        newBtnReload.appendChild(newnewBtnReload);
        newBtnReload.setAttribute('id','playAgain'); 
        newBtnReload.setAttribute('onClick','window.location.reload()'); 
        var currentH2 = document.getElementById("result");
        document.body.insertBefore(newBtnReload, currentH2.nextSibling);
      })

      currentScissors.addEventListener('click', () => {
        const computerElement=computerPlay()
        const result=playRound("scissors", computerElement);

        var newH2 = document.createElement("h2");
        var newH2Content = document.createTextNode(result);
        newH2.appendChild(newH2Content);
        newH2.setAttribute('id','result'); 
        document.body.insertBefore(newH2, currentNewDiv.nextSibling);

        var newBtnReload = document.createElement("button");
        var newnewBtnReload = document.createTextNode("Play again!");
        newBtnReload.appendChild(newnewBtnReload);
        newBtnReload.setAttribute('id','playAgain'); 
        newBtnReload.setAttribute('onClick','window.location.reload()'); 
        var currentH2 = document.getElementById("result");
        document.body.insertBefore(newBtnReload, currentH2.nextSibling);
      })
});








//const playerSelection = 'paper';
//let computerSelection = computerPlay();
//console.log(playRound(playerSelection, computerSelection))

// Function game(). Call the playRound function inside of this one to play a 5 round game that keeps score and reports a winner or loser at the end.

function game() {
    let userPoints = 0;
    let computerPoints = 0;
    let winner=0;

    for (let i = 0; i < 1; i++) {
        let element = prompt(`Round ${i+1}: Type Rock, Paper or Scissors.`);

        while (element.toLowerCase() !== "rock" && element.toLowerCase() !== "paper" && element.toLowerCase() !== "scissors") {
            console.log('Please enter a valid element');
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

        console.log(`Round ${i+1}: user has ${element} and ${userPoints}, computer has ${computerElement} and ${computerPoints}.`)
	}

    if (userPoints>computerPoints) {
        winner= `You win! ${userPoints} : ${computerPoints}`;
        console.log(winner);
        alert(`You win! ${userPoints} : ${computerPoints}`);
    }
    else if (computerPoints>userPoints) {
        winner= `You loose! ${userPoints} : ${computerPoints}`;
        console.log(winner);
        alert(`You loose! ${userPoints} : ${computerPoints}`);
    }
    else if (userPoints==computerPoints) {
        winner= `You tie! ${userPoints} : ${computerPoints}`;
        console.log(winner);
        alert(`You tie! ${userPoints} : ${computerPoints}`);
    }
    else {
        winner="something strange";
        console.log(winner);
        alert(`something strange... ${userPoints} : ${computerPoints}`);
    }
}

