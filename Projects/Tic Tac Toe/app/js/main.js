var gameStatus = document.getElementById("gameStatus");
var gameCell = document.querySelectorAll(".cell")
var player1Result = document.querySelector(".player1Result");
var player2Result = document.querySelector(".player2Result");
var pinkTurn = document.querySelector(".pinkTurn");
var greenTurn = document.querySelector(".greenTurn");
var win1 = document.querySelector(".win1");
var win2 = document.querySelector(".win2");
var resetBtn = document.querySelector(".game-restart");
var nextBtn = document.getElementById("nextBtn")
var previousBtn = document.getElementById("previousBtn");
var kafraMenu = document.getElementById("kafraMenu");

let player1 = `<img src="./images/pinkPoring.gif" alt="X">`
let player2 = `<img src="./images/greenPoring.gif" alt="O">`
let player1Turn = `<img src="./images/player-1-turn.gif" alt="X">`
let player2Turn = `<img src="./images/player-2-turn.gif" alt="O">`
let winEmote = `<img id="test" src="./images/winEmote.gif" alt="win">`
let loseEmote = `<img src="./images/loseEmote.gif" alt="lose">`
let drawEmote = `<img src="./images/drawEmote.gif" alt="draw">`

let gameActive = true;;
let currentPlayer = player1;
let gameState = ["", "", "", "", "", "", "", "", ""];
let gameHistory = [];
let prevHistory = [];

const winningConditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

//Mini Functions for Result and Player Control
function winningEmote() {
    if (currentPlayer === player1) {
        player1Result.innerHTML = winEmote;
        player2Result.innerHTML = loseEmote;
        win1.style.display = "block"
    } else {
        player1Result.innerHTML = loseEmote;
        player2Result.innerHTML = winEmote;
        win2.style.display = "block"
    }
        pinkTurn.style.display = "none";
        greenTurn.style.display = "none";
}

function winningMessage() {
    return `Player ${currentPlayer} has won!`;
}

function drawMessage() {
    return `Game ended in a draw!`;
}

function currentPlayerTurn() {
    // return `${currentPlayer}`;
    if (currentPlayer === player1) {
        return `${player1Turn}`;
    } else {
    return `${player2Turn}`;
    }
}

function displayPlayerMove(clickedCell, clickedCellIndex) {
    gameState[clickedCellIndex] = currentPlayer;
    clickedCell.innerHTML = currentPlayer;
}

function changePlayerTurn() {
    if (currentPlayer === player1) {
        currentPlayer = player2;
        pinkTurn.style.display = "none";
        greenTurn.style.display = "block"
    } else {
        currentPlayer = player1
        pinkTurn.style.display = "block";
        greenTurn.style.display = "none"
    }
    gameStatus.innerHTML = currentPlayerTurn();
}

gameStatus.innerHTML = currentPlayerTurn();

//Result Validation
function resultValidation() {
    let roundWon = false;
    for (let i = 0; i <= 7; i++) {
        const winCondition = winningConditions[i];
        let a = gameState[winCondition[0]];
        let b = gameState[winCondition[1]];
        let c = gameState[winCondition[2]];
        if (a === '' || b === '' || c === '') {
            continue;
        }
        if (a === b && b === c) {
            roundWon = true;
            break
        }
    }

    if (roundWon) {
        gameStatus.innerHTML = winningMessage();
        winningEmote();
        kafraMenu.style.display = "grid"
        nextBtn.style.visibility = 'hidden';
        gameActive = false;
        return;
    }

    let roundDraw = !gameState.includes("");
    if (roundDraw) {
        gameStatus.innerHTML = drawMessage();
        player1Result.innerHTML= drawEmote;
        player2Result.innerHTML= drawEmote;
        pinkTurn.style.display = "none";
        greenTurn.style.display = "none";
        kafraMenu.style.display = "grid"
        nextBtn.style.visibility = 'hidden';
        gameActive = false;
        return;
    }

    changePlayerTurn();
}

//Player Control and Save History
function onCellClick(clickedCellEvent) {
    const clickedCell = clickedCellEvent.target;
    const clickedCellIndex = parseInt(clickedCell.getAttribute('data-cell-index'));

    if (gameState[clickedCellIndex] !== "" || !gameActive) {
        return;
    }

    let moveObject = {};
    moveObject.cell = clickedCell;
    moveObject.poring = currentPlayer;
    gameHistory.push(moveObject);

    displayPlayerMove(clickedCell, clickedCellIndex);
    resultValidation();
    hover();
    disableHover();
}

gameCell.forEach(cell => {
    cell.addEventListener('click', onCellClick)
})

//Reset Button - Play Again
function gameReset() {
    gameActive = true;
    currentPlayer = currentPlayer;
    gameState = ["", "", "", "", "", "", "", "", ""];
    gameCell.forEach(cell => cell.innerHTML = "");
    gameStatus.innerHTML = currentPlayerTurn();
    player1Result.innerHTML = "";
    player2Result.innerHTML = "";
    win1.style.display = "none";
    win2.style.display = "none";
    kafraMenu.style.display = "none";
    gameHistory.length = 0;
    prevHistory.length = 0;
    nextBtn.style.visibility = 'visible';
    previousBtn.style.visibility = 'visible';
    hover()

    if (currentPlayer === player1) {
        pinkTurn.style.display = "block";
        greenTurn.style.display = "none"
    } else {
        pinkTurn.style.display = "none";
        greenTurn.style.display = "block";
    }
}

resetBtn.addEventListener('click', gameReset);

//Previous Button
    previousBtn.addEventListener('click', () => {
    nextBtn.style.visibility = 'visible';
    if (gameHistory.length != 0) {
    let lastMove = gameHistory[gameHistory.length - 1];
    let lastCell = lastMove.cell;
        lastCell.innerHTML = "";
        prevHistory.push(lastMove);
        gameHistory.pop();
    } if (gameHistory.length === 0) {
        previousBtn.style.visibility = 'hidden';
    }

})

//Next Button
nextBtn.addEventListener('click', () => {
    previousBtn.style.visibility = 'visible';
    if (prevHistory.length != 0) {
    let nextMove = prevHistory[prevHistory.length - 1];
    let nextCell = nextMove.cell;
    let nextPoring = nextMove.poring;
        nextCell.innerHTML = nextPoring;
        gameHistory.push(nextMove);
        prevHistory.pop();
    } if (prevHistory.length === 0) {
        nextBtn.style.visibility = 'hidden';
    }
})

//Reference 1: "https://dev.to/bornasepic/pure-and-simple-tic-tac-toe-with-javascript-4pgn"
//Reference 2:  "https://yvettetan.github.io/batch8-activities/TicTacToe/"

//Extras - Start Button
var showPlayer1 = document.getElementById("player1");
var showPlayer2 = document.getElementById("player2");
var playerTurnIndicator = document.getElementById("playerTurnIndicator");
var board = document.getElementById("board");
var header = document.getElementById("header");
var startBtn = document.getElementById("startBtn")
var audio = document.getElementById("backgroundMusic");
var volumeMute = document.getElementById("volumeMute");
var volumeOn = document.getElementById("volumeOn");

startBtn.addEventListener('click', () => {
   
    pickHeader.style.display = "block";
    pickPlayer.style.display = "flex";
    header.style.display = "none";
    startBtn.style.display = "none";
    audio.play();
    volumeOn.style.display = "block";
})

//Extras - Background Music
volumeOn.addEventListener('click', () => {
    audio.volume = 0;
    volumeOn.style.display = "none";
    volumeMute.style.display = "block";
})

volumeMute.addEventListener('click', () => {
    audio.volume = 0.05;
    volumeOn.style.display = "block";
    volumeMute.style.display = "none";
})

//Extras - Pick first move
var pickPlayer = document.getElementById("pickPlayer");
var pickHeader = document.getElementById("pickHeader");
var pickPlayer1 = document.querySelector(".pickPlayer1");
var pickPlayer2 = document.querySelector(".pickPlayer2");

pickPlayer1.addEventListener('click', () => {
    showPlayer1.style.display = "grid";
    showPlayer2.style.display = "grid";
    playerTurnIndicator.style.display = "grid";
    gameStatus.style.display = "block"
    board.style.display = "grid";
    pickHeader.style.display = "none";
    pickPlayer.style.display = "none";
    hover()
})

pickPlayer2.addEventListener('click', () => {
    changePlayerTurn();
    showPlayer1.style.display = "grid";
    showPlayer2.style.display = "grid";
    playerTurnIndicator.style.display = "grid";
    gameStatus.style.display = "block"
    board.style.display = "grid";
    pickHeader.style.display = "none";
    pickPlayer.style.display = "none";
    hover()
})

//Extras - Player Turn Hover
var pink = `url(../images/pinkPoring.gif)`
var green = `url(../images/greenPoring.gif)`

function hover() {
gameCell.forEach((cell) => {
    if(currentPlayer === player1) {
        cell.style.setProperty('--td-background-color', pink);
    } else {
        cell.style.setProperty('--td-background-color', green);
    }
    })
}

function disableHover() {
    gameCell.forEach((cell) => {
    if (gameActive === false) {
        cell.style.setProperty('--td-background-color', 'none');
    }
    })
}