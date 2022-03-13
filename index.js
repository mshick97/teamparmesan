let player = 'x'; // Intialize first player move to x
let roundOver = false; //individual matches condition;  increment score and reset board for next match;
let gameOver = false; // Condition to automatically reset the game board when a player wins
let roundWinner; // Intialize who the winner is each round, will be defined later
let gameWinner; //initialize overall game winner when score hits 3 for x or o

// Object representing the game board, each pair is undefined until user input later alters it to a string
const gameObject = {
    'top-left': undefined,
    'top-center': undefined,
    'top-right': undefined,
    'middle-left': undefined,
    'middle-center': undefined,
    'middle-right': undefined,
    'bottom-left': undefined,
    'bottom-center': undefined,
    'bottom-right': undefined
}

// This function checks all the values on our game board. If the key value pairs ever evaluate to all true (or simply all of the values are no longer undefined) then it returns to true; will be useful to indicate a draw
function gameDrawn() {
    for (let gameMoves in gameObject)
        if (gameObject[gameMoves] == undefined) return false;
    return true;
}

// console.log(checkGameState()); // Alter values in object to 'x's and 'o's to check if function works

// Keeps tally of player scores
const score = {
    'x': 0,
    'o': 0
}

// Function to mark a square in HTML, with a player symbol: X or O
function markSquare(id) {
    if (player == 'x') {
        document.getElementById(id).className = "player-piece-x";
        gameObject[id] = 'x';
        console.log(id);
        playerWinOrTie();
        player = 'o';
    } else if (player == 'o') {
        document.getElementById(id).className = "player-piece-o";
        gameObject[id] = 'o';
        console.log(id);
        playerWinOrTie();
        player = 'x';
    }
}

// Determines the different win cases / if there is a draw
function playerWinOrTie() {
    if (gameDrawn() === true) {
        roundWinner = 'draw';
        console.log('draw');
        console.log(roundWinner);
        displayModal();
        increasePlayerScore();
        return roundOver = true;
    } else if (gameObject['top-left'] == 'x' && gameObject['top-center'] == 'x' && gameObject['top-right'] == 'x') {
        roundWinner = 'x';
        console.log('o winner');
        console.log(roundWinner);
        displayModal();
        increasePlayerScore();
        return roundOver = true;
    } else if (gameObject['top-left'] == 'o' && gameObject['top-center'] == 'o' && gameObject['top-right'] == 'o') {
        roundWinner = 'o'
        console.log('o winner');
        console.log(roundWinner);
        displayModal();
        increasePlayerScore();
        return roundOver = true;
    } else if (gameObject['middle-left'] == 'x' && gameObject['middle-center'] == 'x' && gameObject['middle-right'] == 'x') {
        roundWinner = 'x';
        console.log('x winner');
        console.log(roundWinner);
        displayModal();
        increasePlayerScore();
        return roundOver = true;
    } else if (gameObject['middle-left'] == 'o' && gameObject['middle-center'] == 'o' && gameObject['middle-right'] == 'o') {
        roundWinner = 'o';
        console.log('o winner');
        console.log(roundWinner);
        displayModal();
        increasePlayerScore();
        return roundOver = true;
    } else if (gameObject['bottom-left'] == 'x' && gameObject['bottom-center'] == 'x' && gameObject['bottom-right'] == 'x') {
        roundWinner = 'x'
        console.log('x winner');
        console.log(roundWinner);
        displayModal();
        increasePlayerScore();
        return roundOver = true;
    } else if (gameObject['bottom-left'] == 'o' && gameObject['bottom-center'] == 'o' && gameObject['bottom-right'] == 'o') {
        roundWinner = 'o'
        console.log('o winner');
        console.log(roundWinner);
        displayModal();
        increasePlayerScore();
        return roundOver = true;
    } else if (gameObject['top-left'] == 'x' && gameObject['middle-center'] == 'x' && gameObject['bottom-right'] == 'x') {
        roundWinner = 'x'
        console.log('x winner');
        console.log(roundWinner);
        displayModal();
        increasePlayerScore();
        return roundOver = true;
    } else if (gameObject['top-left'] == 'o' && gameObject['middle-center'] == 'o' && gameObject['bottom-right'] == 'o') {
        roundWinner = 'o'
        console.log('o winner');
        console.log(roundWinner);
        displayModal();
        increasePlayerScore();
        return roundOver = true;
    } else if (gameObject['bottom-left'] == 'x' && gameObject['middle-center'] == 'x' && gameObject['top-right'] == 'x') {
        roundWinner = 'x'
        console.log('o winner');
        console.log(roundWinner);
        displayModal();
        increasePlayerScore();
        return roundOver = true;
    } else if (gameObject['bottom-left'] == 'o' && gameObject['middle-center'] == 'o' && gameObject['top-right'] == 'o') {
        roundWinner = 'o'
        console.log('o winner');
        console.log(roundWinner);
        displayModal();
        increasePlayerScore();
        return roundOver = true;
        /* This condition is at the end because we know that if the entire game board is filled, represented my checkGameState 
        returning true, the game is a draw because all of the above conditions were not met */
    } else if (checkGameState === true) {
        roundWinner = 'draw';
        console.log('draw');
        console.log(roundWinner);
        displayModal();
        increasePlayerScore();
        return roundOver = true;
    }
}

// Function to change the html text for player scores
function increasePlayerScore() {
    if (roundWinner == 'x') {
        // Affect html text element here
        return score['x']++;
    } else if (roundWinner == 'o') {
        // Affect html text element here
        return score['o']++;
    }
    if (score['x'] === 3) { // conditional score is incremented to 3
        resetGame();
        return gameWinner = 'x';// return game winner assined to cooresponding player
    } else if (score['o'] === 3) {
        resetGame();
        return gameWinner = 'o';
    } else {    // conditional for tie, dont increment and return 
        return;
    }
}


function displayModal() {
    document.getElementById(id).className = "winner-wrapper";
    if (roundWinner == 'x') {
        document.getElementById(id).className = "x-wins-round";
    } else if (roundWinner == 'o') {
        document.getElementById(id).className = "o-wins-round";
    } else if (roundWinner == 'draw') {
        document.getElementById(id).className = "draw";
    } else if (gameWinner == 'x') {
        document.getElementById(id).className = "x-wins";
    } else if (gameWinner == 'o') {
        document.getElementById(id).className = "o-wins";
    }
}

function resetButton() {
    // On click, function needs to reset...
    // Reset board to empty squares
    // Reset score to 0 for both players
    // Reset the player to move to "x"
    for (let gameSquare in gameObject) {
        gameObject[gameSquare] = undefined;
    }
    for (let player in score) {
        score[player] = 0;
    }
    player = 'x';
    gameOver = false;
    winningPlayer = undefined;
}

function resetGame() {
    for (let gameSquare in gameObject) {
        gameObject[gameSquare] = undefined;
    }
    for (let player in score) {
        score[player] = 0;
    }
    player = 'x';
    gameOver = false;
    winningPlayer = undefined;
}

// Test push 1 Max