var content = document.getElementById('content');

var rockPaperScissors = {
    playerChoice: "",
    computerChoice: "",
    winMessage: ""
}

content.innerHTML = renderGame(rockPaperScissors);
setupGame();

var availableMoves = ["rock", "paper", "scissors"];



function determineWinner(playerChoice) {
    var computerChoice = availableMoves[Math.floor((Math.random() * 3))];
    // Math.floor returns the largest integer less than or equal to a given number, 
    //making the number either a 0, 1 or 2. https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/floor
    console.log(computerChoice);

    var winMessage = "";
    // if (playerChoice === computerChoice) {
    //      winMessage = "Tie!"
    // }

    var loseMoves = {
        rock: "paper",
        paper: "scissors",
        scissors: "rock"
    };

    if (loseMoves[playerChoice] == computerChoice) {
        winMessage = "Computer wins";
    } else if (loseMoves[computerChoice] == playerChoice) {
        winMessage = "Player Wins";
    } else {
        winMessage = "Tie!"
    }

    setGameValues(playerChoice, computerChoice, winMessage);
    content.innerHTML = renderGame(rockPaperScissors);
    setupGame();

}

function setGameValues(playerChoice, computerChoice, winMessage) {
    rockPaperScissors.playerChoice = playerChoice;
    rockPaperScissors.computerChoice = computerChoice;
    rockPaperScissors.winMessage = winMessage;
}

function setupGame() {

    var buttonRock = document.getElementById('rock');
    var buttonPaper = document.getElementById('paper');
    var buttonScissors = document.getElementById('scissors');

    buttonRock.addEventListener('click', function() {
        //alert("You picked Rock");
        var playerChoice = "rock"
        determineWinner(playerChoice);

    })
    buttonPaper.addEventListener('click', function() {
        var playerChoice = "paper"
        determineWinner(playerChoice);

    })
    buttonScissors.addEventListener('click', function() {
        var playerChoice = "scissors"
        determineWinner(playerChoice);

    })

}

// random number code -- >> https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_random2

function renderGame(game) {
    // Change this render function to use the "game" parameter



    return `
        <div class="container d-flex flex-column justify-content-start align-items-center">
            <h4>Choose your weapon:</h4>
            <div class="w-50 text-center">
                <button id="rock" class="btn btn-primary">Rock</button>
                <button id="paper" class="btn btn-primary">Paper</button>
                <button id="scissors" class="btn btn-primary">Scissors</button>
            </div>
            <div class="d-flex justify-content-center">
                <div class="m-5">You played: <b>${game.playerChoice}</b></div>
                <div class="m-5">The computer played: <b>${game.computerChoice}</b></div>
            </div>
            <h1 class="text-center">${game.winMessage}</h1>
        </div>
    `
}
