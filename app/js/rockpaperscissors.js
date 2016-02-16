////////////////////////////////////////////////
/*   Provided Code - Please Don't Edit   */
////////////////////////////////////////////////
'use strict';

function getInput() {
    console.log("Please choose either 'rock', 'paper', or 'scissors'.")
    return prompt();
}

function randomPlay() {
    var randomNumber = Math.random();
    if (randomNumber < 0.33) {
        return "rock";
    } else if (randomNumber < 0.66) {
        return "paper";
    } else {
        return "scissors";
    }
}
////////////////////////////////////////////////
/*           Write Your Code Below            */
////////////////////////////////////////////////

var playerMove;
var computerMove;

function getPlayerMove(playerMove) {
    if (playerMove == null) {
        playerMove = getInput();
    } else {
        return playerMove;
    };
};


function getComputerMove(computerMove) {
    if (computerMove == null) {
        computerMove = randomPlay();
    } else {
        return computerMove;
    };
};

function getWinner(playerMove, computerMove) {
    var winner;
    if (playerMove === computerMove) {
        winner = "tie";
    } else if (playerMove === "rock") {
        if (computerMove === "scissors") {
            winner = "player";
        } else {
            winner = "computer";
        }
    } else if (playerMove === "paper") {
        if (computerMove === "rock") {
            winner = "player";
        } else {
            winner = "computer";
        }
    } else if (playerMove === "scissors") {
        if (computerMove === "rock") {
            winner = "computer";
        } else {
            winner = "player";
        }
        return winner;
    };
};

function playToFive() {
    console.log("Let's play Rock, Paper, Scissors");
    var playerWins = 0;
    var computerWins = 0;
    // Write code that plays 'Rock, Paper, Scissors' until either the player or the computer has won five times.
    while (playerWins < 5 || computerWins < 5) {
        if (winner = "player") {
            playerWins += 1;
            getWinner();
        };
        if (winner = "computer") {
            computerWins += 1;
            getWinner();
        };
    };
    return [playerWins, computerWins];
}