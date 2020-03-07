var board = [
    ["", "", ""],
    ["", "", ""],
    ["", "", ""]
];

var symbol = ["X", "O"];
var playerX = {
    turn: true
};
var playerO = {
    turn: false
};
var numOfTurns = 0;

function getValue(row, column) {
    return board[row][column];
}

function setValue(row, column, value) {
    board[row][column] = value;
    console.log(board);
}

function inputRowAndCol() {
    var row = prompt("enter a row");
    var column = prompt("enter a column");
    var value = prompt("enter X or O");
    row = parseInt(row);
    column = parseInt(column);

    if(getValue(row, column) === "") {
        if(playerX.turn === true) {
            setValue(row, column, value);
            playerX.turn = false;
            playerO.turn = true;
        } else {
            setValue(row, column, value);
            playerO.turn = false;
            playerX.turn = true;
        }
    }    
}

// function to run from Array.every to check for all X's
function allX(value) {
    return value === "X";
}

// function to run from Array.every to check for all O's
function allO(value) {
    return value === "O";
}

function checkRows() {
    // iterate through each row of board and check for all O's
    // or all X's. Breakout of loop if found and return
    for(var i = 0; i < board.length; i++) {
        if(board[i].every(allX)) {
            return("X won the game");
        } else if(board[i].every(allO)) {
            return("O won the game");
        }
    }
}

function checkColumns() {
    // iterate through board and push each column to variable
    // arr
    for(var i = 0; i < board.length; i++) {
        var arr = [];
        for(var j = 0; j < board.length; j++) {
            arr.push(board[j][i]);
        }
        // check if each column has all Xs or Os if found no need to
        // further check so return from loop
        if(arr.every(allX)) {
            return "X won the game";
        } else if(arr.every(allO)) {
            return "O won the game";
        }
    }
}

function checkDiagonal() {
    var arr = [];
    var arr1 = [];

    // iterate through board and place diagonal column in arr
    for(var i = 0; i < board.length; i++) {
        arr.push(board[i][i]);
    }
    // iterate through board and place other diagonal column in
    // arr1
    for(var i = 0, j = 2; i < board.length; i++, j--) {
        arr1.push(board[i][j]);
    }

    if(arr.every(allX)) {
        return "X won the game";
    } else if(arr.every(allO)) {
        return "O won the game";
    } else if(arr1.every(allX)) {
        return "X won the game";
    } else if(arr1.every(allO)) {
        return "O won the game";
    }
}

function whoWonGame() {
    var checkWhoWon;
    if(checkWhoWon = checkRows()) {
        return checkWhoWon;
    } else if(checkWhoWon = checkColumns()) {
        return checkWhoWon;
    } else if(checkWhoWon = checkDiagonal()) {
        return checkWhoWon;
    } else if(numOfTurns === 9) {
        return "Game is tied";
    }
}

function askUserInput() {
    var whoWon;
    while(numOfTurns < 9) {
        inputRowAndCol();
        numOfTurns++;
        if(numOfTurns >= 5) {
            whoWon = whoWonGame();
           if(whoWon) {
               alert(whoWon);
               return;
           }
        }
    }
}

function renderBoard2(board) {
    for (var i = 0; i < board.length; i++) {
        var rowArr = [];
        for (var y = 0; y < board[i].length; y++) {
            var cell = `<div id="${i}${y}">${getValue(i, y)}</div>`
            rowArr.push(cell)

            //console.log(getValue(i, y));
        }
        console.log(rowArr);
    }
}


askUserInput();


















/* var content = document.getElementById('content');

var ticTacToe = "Replace this with your own abstraction of Tic Tac Toe"

content.innerHTML = renderGame(ticTacToe);




function renderGame(game) {
    // Change this render function to use the "game" parameter

    return `
        <div class="container d-flex flex-column justify-content-start align-items-center">
            <h4>It's player O's turn!</h4>
            <div class="w-50 text-center">
                <button>X</button>
                <button>O</button>
                <button>X</button>
            </div>
            <div class="w-50 text-center">
                <button>-</button>
                <button>-</button>
                <button>-</button>
            </div>
            <div class="w-50 text-center">
                <button>O</button>
                <button>-</button>
                <button>X</button>
            </div>
        </div>
    `
} */