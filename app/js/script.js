//document.body.addEventListener('touchstart', function(e) {});


let openBoxes = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let gameOver = false;
let ai = false;

/* ------------------------------------------------------------------------------------------ */
/* Start One or Two Player Mode Selection */
/* ------------------------------------------------------------------------------------------ */

// Variables for game state: 1 Player or 2 Player
let onePlayer = false;
let twoPlayer = false;

// One or Two Player Modes 
document.querySelector('.onePlayerModeButton').addEventListener('click', function () {
    activateOnePlayerMode();
});

document.querySelector('.twoPlayerModeButton').addEventListener('click', function () {
    activateTwoPlayerMode();
});

function activateOnePlayerMode() {
    document.querySelector('.playerModeOverlay').classList.add('hidden');
    document.querySelector('.playerOneOverlay').classList.remove('hidden');
    document.getElementById('playerOneNameInput').focus();
    onePlayer = true;
    twoPlayer = false;
    gameOver = false;
    ai = true;
    playerModes();
}

function activateTwoPlayerMode() {
    document.querySelector('.playerModeOverlay').classList.add('hidden');
    document.querySelector('.playerOneOverlay').classList.remove('hidden');
    document.getElementById('playerOneNameInput').focus();
    onePlayer = false;
    twoPlayer = true;
    gameOver = false;
    ai = false;
    playerModes();
}

/* ------------------------------------------------------------------------------------------ */
/* End One or Two Player Mode Selection */
/* ------------------------------------------------------------------------------------------ */





/* ------------------------------------------------------------------------------------------ */
/* Start AI Options */
/* ------------------------------------------------------------------------------------------ */

function aiOption1() {
    if ((boxesLockedTo[`box1lockedto`] == 0) && (boxesLockedTo[`box3lockedto`] == 0) && (boxLocks[`box2Locked`] == false)) {
        lockBox2toPlayer2();
        findWinner();
        currentPlayer = 0; // switch to player one
        findTie();
    }
}
function aiOption2() {
    if ((boxesLockedTo[`box1lockedto`] == 0) && (boxesLockedTo[`box7lockedto`] == 0) && (boxLocks[`box4Locked`] == false)) {
        lockBox4toPlayer2();
        findWinner();
        currentPlayer = 0; // switch to player one
        findTie();
    }
}
function aiOption3() {
    if ((boxesLockedTo[`box1lockedto`] == 0) && (boxesLockedTo[`box9lockedto`] == 0) && (boxLocks[`box5Locked`] == false)) {
        lockBox5toPlayer2();
        findWinner();
        currentPlayer = 0; // switch to player one
        findTie();
    }
}
function aiOption4() {
    if ((boxesLockedTo[`box2lockedto`] == 0) && (boxesLockedTo[`box8lockedto`] == 0) && (boxLocks[`box5Locked`] == false)) {
        lockBox5toPlayer2();
        findWinner();
        currentPlayer = 0; // switch to player one
        findTie();
    }
}
function aiOption5() {
    if ((boxesLockedTo[`box3lockedto`] == 0) && (boxesLockedTo[`box9lockedto`] == 0) && (boxLocks[`box6Locked`] == false)) {
        lockBox6toPlayer2();
        findWinner();
        currentPlayer = 0; // switch to player one
        findTie();
    }
}
function aiOption6() {
    if ((boxesLockedTo[`box4lockedto`] == 0) && (boxesLockedTo[`box6lockedto`] == 0) && (boxLocks[`box5Locked`] == false)) {
        lockBox6toPlayer2();
        findWinner();
        currentPlayer = 0; // switch to player one
        findTie();
    }
}
function aiOption7() {
    if ((boxesLockedTo[`box7lockedto`] == 0) && (boxesLockedTo[`box9lockedto`] == 0) && (boxLocks[`box8Locked`] == false)) {
        lockBox8toPlayer2();
        findWinner();
        currentPlayer = 0; // switch to player one
        findTie();
    }
}
function aiOption8() {
    if ((boxesLockedTo[`box3lockedto`] == 0) && (boxesLockedTo[`box7lockedto`] == 0) && (boxLocks[`box5Locked`] == false)) {
        lockBox5toPlayer2();
        findWinner();
        currentPlayer = 0; // switch to player one
        findTie()
    }
}
function aiOption9() {
    if ((boxesLockedTo[`box1lockedto`] == 0) && (boxesLockedTo[`box3lockedto`] == 0) && (boxLocks[`box2Locked`] == false)) {
        lockBox2toPlayer2();
        findWinner();
        currentPlayer = 0; // switch to player one
        findTie();
    }
}
function aiOption10() {
    if ((boxesLockedTo[`box1lockedto`] == 0) && (boxesLockedTo[`box3lockedto`] == 0) && (boxLocks[`box2Locked`] == false)) {
        lockBox2toPlayer2();
        findWinner();
        currentPlayer = 0; // switch to player one
        findTie();
    }
}
function aiOption11() {
    if ((boxesLockedTo[`box4lockedto`] == 0) && (boxesLockedTo[`box6lockedto`] == 0) && (boxLocks[`box5Locked`] == false)) {
        lockBox5toPlayer2();
        findWinner();
        currentPlayer = 0; // switch to player one
        findTie();
    }
}
function aiOption12() {
    if ((boxesLockedTo[`box7lockedto`] == 0) && (boxesLockedTo[`box9lockedto`] == 0) && (boxLocks[`box8Locked`] == false)) {
        lockBox8toPlayer2();
        findWinner();
        currentPlayer = 0; // switch to player one
        findTie();
    }
}
function aiOption13() {
    if ((boxesLockedTo[`box1lockedto`] == 0) && (boxesLockedTo[`box5lockedto`] == 0) && (boxLocks[`box9Locked`] == false)) {
        lockBox9toPlayer2();
        findWinner();
        currentPlayer = 0; // switch to player one
        findTie();
    }
}
function aiOption14() {
    if ((boxesLockedTo[`box3lockedto`] == 0) && (boxesLockedTo[`box5lockedto`] == 0) && (boxLocks[`box7Locked`] == false)) {
        lockBox7toPlayer2();
        findWinner();
        currentPlayer = 0; // switch to player one
        findTie();
    }
}
function aiOption15() {
    if ((boxesLockedTo[`box1lockedto`] == 0) && (boxesLockedTo[`box2lockedto`] == 0) && (boxLocks[`box3Locked`] == false)) {
        lockBox3toPlayer2();
        findWinner();
        currentPlayer = 0; // switch to player one
        findTie();
    }
}
function aiOption16() {
    if ((boxesLockedTo[`box4lockedto`] == 0) && (boxesLockedTo[`box5lockedto`] == 0) && (boxLocks[`box6Locked`] == false)) {
        lockBox6toPlayer2();
        findWinner();
        currentPlayer = 0; // switch to player one
        findTie();
    }
}
function aiOption17() {
    if ((boxesLockedTo[`box7lockedto`] == 0) && (boxesLockedTo[`box8lockedto`] == 0) && (boxLocks[`box9Locked`] == false)) {
        lockBox9toPlayer2();
        findWinner();
        currentPlayer = 0; // switch to player one
        findTie();
    }
}
function aiOption18() {
    if ((boxesLockedTo[`box1lockedto`] == 0) && (boxesLockedTo[`box4lockedto`] == 0) && (boxLocks[`box7Locked`] == false)) {
        lockBox7toPlayer2();
        findWinner();
        currentPlayer = 0; // switch to player one
        findTie();
    }
}
function aiOption19() {
    if ((boxesLockedTo[`box2lockedto`] == 0) && (boxesLockedTo[`box5lockedto`] == 0) && (boxLocks[`box8Locked`] == false)) {
        lockBox8toPlayer2();
        findWinner();
        currentPlayer = 0; // switch to player one
        findTie();
    }
}
function aiOption20() {
    if ((boxesLockedTo[`box3lockedto`] == 0) && (boxesLockedTo[`box6lockedto`] == 0) && (boxLocks[`box9Locked`] == false)) {
        lockBox9toPlayer2();
        findWinner();
        currentPlayer = 0; // switch to player one
        findTie();
    }
}
function aiOption21() {
    if (boxLocks[`box1Locked`] === false) {
        lockBox1toPlayer2();
        findWinner();
        currentPlayer = 0; // switch to player one
        findTie();
    }
}
function aiOption22() {
    if (boxLocks[`box5Locked`] === false) {
        lockBox5toPlayer2();
        findWinner();
        currentPlayer = 0; // switch to player one
        findTie();
    }
}
function aiOption23() {
    if (boxLocks[`box3Locked`] === false) {
        lockBox3toPlayer2();
        findWinner();
        currentPlayer = 0; // switch to player one
        findTie();
    }
}
function aiOption24() {
    if (boxLocks[`box7Locked`] === false) {
        lockBox7toPlayer2();
        findWinner();
        currentPlayer = 0; // switch to player one
        findTie();
    }
}
function aiOption25() {
    if (boxLocks[`box9Locked`] === false) {
        lockBox9toPlayer2();
        findWinner();
        currentPlayer = 0; // switch to player one
        findTie();
    }
}
/*else {
    let currentPickedNumberIndex = randomBoxPicker();
    let currentNumber = openBoxes[currentPickedNumberIndex];
    let currentBox = document.querySelector('.box' + openBoxes[currentPickedNumberIndex]);
    openBoxes.splice(openBoxes.indexOf(currentNumber), 1); // Remove the selected item from the array
    currentBox.classList.add('o');
    currentBox.classList.add('locked');
    boxLocks[`box${currentNumber}Locked`] = true;
    boxesLockedTo[`box${currentNumber}lockedto`] = 1;
    playerOneWrapper.classList.add('current');
    playerTwoWrapper.classList.remove('current');
    findWinner();
    currentPlayer = 0; // switch to player one
    findTie();
}
}*/


































/* ------------------------------------------------------------------------------------------ */
/* Start don't jump your turn! */
/* ------------------------------------------------------------------------------------------ */

/*document.querySelector('.tictactoe').addEventListener('click', function () {
    if ((ai == true) && (currentPlayer == 1)) {
        alert("It's not your turn!");
    } else {

    }
});*/


/* ------------------------------------------------------------------------------------------ */
/* End don't jump your turn! */
/* ------------------------------------------------------------------------------------------ */




/* ------------------------------------------------------------------------------------------ */
/* Start Sets variables for the boxes in the HTML DOM */
/* ------------------------------------------------------------------------------------------ */

const box1 = document.querySelector('.box1');
const box2 = document.querySelector('.box2');
const box3 = document.querySelector('.box3');
const box4 = document.querySelector('.box4');
const box5 = document.querySelector('.box5');
const box6 = document.querySelector('.box6');
const box7 = document.querySelector('.box7');
const box8 = document.querySelector('.box8');
const box9 = document.querySelector('.box9');

/* ------------------------------------------------------------------------------------------ */
/* End Sets variables for the boxes in the HTML DOM */
/* ------------------------------------------------------------------------------------------ */



/* ------------------------------------------------------------------------------------------ */
/* Start Box Locking Functions */
/* ------------------------------------------------------------------------------------------ */

function lockBox1toPlayer1() {
    box1.textContent = 'X'; // Adds an X to the grid
    box1.classList.add('x'); // Add an X
    box1.classList.add('locked'); // Add locked class to box DIV
    boxLocks[`box1Locked`] = true;
    boxesLockedTo[`box1lockedto`] = 0;
    openBoxes.splice(openBoxes.indexOf(1), 1); // Remove the selected item from the array
    findWinner();
    findTie();
}
function lockBox1toPlayer2() {
    box1.textContent = 'O'; // Adds an X to the grid
    box1.classList.add('o'); // Add an O
    box1.classList.add('locked'); // Add locked class to box DIV
    boxLocks[`box1Locked`] = true;
    boxesLockedTo[`box1lockedto`] = 1;
    openBoxes.splice(openBoxes.indexOf(1), 1); // Remove the selected item from the array
    currentPlayer = 0; // Flip to Player One
    playerOneWrapper.classList.add('current');
    playerTwoWrapper.classList.remove('current');
}
function lockBox2toPlayer1() {
    box2.textContent = 'X'; // Adds an X to the grid
    box2.classList.add('x'); // Add an X
    box2.classList.add('locked'); // Add locked class to box DIV
    boxLocks[`box2Locked`] = true;
    boxesLockedTo[`box2lockedto`] = 0;
    openBoxes.splice(openBoxes.indexOf(2), 1); // Remove the selected item from the array
    playerOneWrapper.classList.remove('current');
    playerTwoWrapper.classList.add('current');
}
function lockBox2toPlayer2() {
    box2.textContent = 'O'; // Adds an X to the grid
    box2.classList.add('o'); // Add an O
    box2.classList.add('locked'); // Add locked class to box DIV
    boxLocks[`box2Locked`] = true;
    boxesLockedTo[`box2lockedto`] = 1;
    openBoxes.splice(openBoxes.indexOf(2), 1); // Remove the selected item from the array
    playerOneWrapper.classList.add('current');
    playerTwoWrapper.classList.remove('current');
}
function lockBox3toPlayer1() {
    box3.textContent = 'X'; // Adds an X to the grid
    box3.classList.add('x'); // Add an X
    box3.classList.add('locked'); // Add locked class to box DIV
    boxLocks[`box3Locked`] = true;
    boxesLockedTo[`box3lockedto`] = 0;
    openBoxes.splice(openBoxes.indexOf(3), 1); // Remove the selected item from the array
    playerOneWrapper.classList.remove('current');
    playerTwoWrapper.classList.add('current');
}
function lockBox3toPlayer2() {
    box3.textContent = 'O'; // Adds an X to the grid
    box3.classList.add('o'); // Add an O
    box3.classList.add('locked'); // Add locked class to box DIV
    boxLocks[`box3Locked`] = true;
    boxesLockedTo[`box3lockedto`] = 1;
    openBoxes.splice(openBoxes.indexOf(3), 1); // Remove the selected item from the array
    playerOneWrapper.classList.add('current');
    playerTwoWrapper.classList.remove('current');
}
function lockBox4toPlayer1() {
    box4.textContent = 'X'; // Adds an X to the grid
    box4.classList.add('x'); // Add an X
    box4.classList.add('locked'); // Add locked class to box DIV
    boxLocks[`box4Locked`] = true;
    boxesLockedTo[`box4lockedto`] = 0;
    openBoxes.splice(openBoxes.indexOf(4), 1); // Remove the selected item from the array
    playerOneWrapper.classList.remove('current');
    playerTwoWrapper.classList.add('current');
}
function lockBox4toPlayer2() {
    box4.textContent = 'O'; // Adds an X to the grid
    box4.classList.add('o'); // Add an O
    box4.classList.add('locked'); // Add locked class to box DIV
    boxLocks[`box4Locked`] = true;
    boxesLockedTo[`box4lockedto`] = 1;
    openBoxes.splice(openBoxes.indexOf(4), 1); // Remove the selected item from the array
    playerOneWrapper.classList.add('current');
    playerTwoWrapper.classList.remove('current');
}
function lockBox5toPlayer1() {
    box5.textContent = 'X'; // Adds an X to the grid
    box5.classList.add('x'); // Add an X
    box5.classList.add('locked'); // Add locked class to box DIV
    boxLocks[`box5Locked`] = true;
    boxesLockedTo[`box5lockedto`] = 0;
    openBoxes.splice(openBoxes.indexOf(5), 1); // Remove the selected item from the array
    playerOneWrapper.classList.remove('current');
    playerTwoWrapper.classList.add('current');
}
function lockBox5toPlayer2() {
    box5.textContent = 'O'; // Adds an X to the grid
    box5.classList.add('o'); // Add an O
    box5.classList.add('locked'); // Add locked class to box DIV
    boxLocks[`box5Locked`] = true;
    boxesLockedTo[`box5lockedto`] = 1;
    openBoxes.splice(openBoxes.indexOf(5), 1); // Remove the selected item from the array
    playerOneWrapper.classList.add('current');
    playerTwoWrapper.classList.remove('current');
}
function lockBox6toPlayer1() {
    box6.textContent = 'X'; // Adds an X to the grid
    box6.classList.add('x'); // Add an X
    box6.classList.add('locked'); // Add locked class to box DIV
    boxLocks[`box6Locked`] = true;
    boxesLockedTo[`box6lockedto`] = 0;
    openBoxes.splice(openBoxes.indexOf(6), 1); // Remove the selected item from the array
    playerOneWrapper.classList.remove('current');
    playerTwoWrapper.classList.add('current');
}
function lockBox6toPlayer2() {
    box6.textContent = 'O'; // Adds an X to the grid
    box6.classList.add('o'); // Add an O
    box6.classList.add('locked'); // Add locked class to box DIV
    boxLocks[`box6Locked`] = true;
    boxesLockedTo[`box6lockedto`] = 1;
    openBoxes.splice(openBoxes.indexOf(6), 1); // Remove the selected item from the array
    playerOneWrapper.classList.add('current');
    playerTwoWrapper.classList.remove('current');
}
function lockBox7toPlayer1() {
    box7.textContent = 'X'; // Adds an X to the grid
    box7.classList.add('x'); // Add an X
    box7.classList.add('locked'); // Add locked class to box DIV
    boxLocks[`box7Locked`] = true;
    boxesLockedTo[`box7lockedto`] = 0;
    openBoxes.splice(openBoxes.indexOf(7), 1); // Remove the selected item from the array
    playerOneWrapper.classList.remove('current');
    playerTwoWrapper.classList.add('current');
}
function lockBox7toPlayer2() {
    box7.textContent = 'O'; // Adds an X to the grid
    box7.classList.add('o'); // Add an O
    box7.classList.add('locked'); // Add locked class to box DIV
    boxLocks[`box7Locked`] = true;
    boxesLockedTo[`box7lockedto`] = 1;
    openBoxes.splice(openBoxes.indexOf(7), 1); // Remove the selected item from the array
    playerOneWrapper.classList.add('current');
    playerTwoWrapper.classList.remove('current');
}
function lockBox8toPlayer1() {
    box8.textContent = 'X'; // Adds an X to the grid
    box8.classList.add('x'); // Add an X
    box8.classList.add('locked'); // Add locked class to box DIV
    boxLocks[`box8Locked`] = true;
    boxesLockedTo[`box8lockedto`] = 0;
    openBoxes.splice(openBoxes.indexOf(8), 1); // Remove the selected item from the array
    playerOneWrapper.classList.remove('current');
    playerTwoWrapper.classList.add('current');
}
function lockBox8toPlayer2() {
    box8.textContent = 'O'; // Adds an X to the grid
    box8.classList.add('o'); // Add an O
    box8.classList.add('locked'); // Add locked class to box DIV
    boxLocks[`box8Locked`] = true;
    boxesLockedTo[`box8lockedto`] = 1;
    openBoxes.splice(openBoxes.indexOf(8), 1); // Remove the selected item from the array
    playerOneWrapper.classList.add('current');
    playerTwoWrapper.classList.remove('current');
}
function lockBox9toPlayer1() {
    box9.textContent = 'X'; // Adds an X to the grid
    box9.classList.add('x'); // Add an X
    box9.classList.add('locked'); // Add locked class to box DIV
    boxLocks[`box9Locked`] = true;
    boxesLockedTo[`box9lockedto`] = 0;
    openBoxes.splice(openBoxes.indexOf(9), 1); // Remove the selected item from the array
    playerOneWrapper.classList.remove('current');
    playerTwoWrapper.classList.add('current');
}
function lockBox9toPlayer2() {
    box9.textContent = 'O'; // Adds an X to the grid
    box9.classList.add('o'); // Add an O
    box9.classList.add('locked'); // Add locked class to box DIV
    boxLocks[`box9Locked`] = true;
    boxesLockedTo[`box9lockedto`] = 1;
    openBoxes.splice(openBoxes.indexOf(9), 1); // Remove the selected item from the array
    playerOneWrapper.classList.add('current');
    playerTwoWrapper.classList.remove('current');
}

/* ------------------------------------------------------------------------------------------ */
/* End Box Locking Functions */
/* ------------------------------------------------------------------------------------------ */




/* ------------------------------------------------------------------------------------------ */
/* Start player score cards */
/* ------------------------------------------------------------------------------------------ */

// Sets variables for the score cards in the HTML DOM
const playerOneWrapper = document.querySelector('.playerOneWrapper');
const playerTwoWrapper = document.querySelector('.playerTwoWrapper');

// Player name variables
let playerOneName = 'Player One';
let playerTwoName = 'Player Two';
const playerOneTotalWinsDiv = document.querySelector('.playerOneTotalWins');
const playerTwoTotalWinsDiv = document.querySelector('.playerTwoTotalWins');

// Keeps score of total wins
let playerOneTotalWins = 0;
let playerTwoTotalWins = 0;

/* ------------------------------------------------------------------------------------------ */
/* End player score cards */
/* ------------------------------------------------------------------------------------------ */





/* ------------------------------------------------------------------------------------------ */
/* Start game play box management */
/* ------------------------------------------------------------------------------------------ */

let boxLocks = {
    box1Locked: false,
    box2Locked: false,
    box3Locked: false,
    box4Locked: false,
    box5Locked: false,
    box6Locked: false,
    box7Locked: false,
    box8Locked: false,
    box9Locked: false
};
let boxesLockedTo = {
    box1lockedto: 'open',
    box2lockedto: 'open',
    box3lockedto: 'open',
    box4lockedto: 'open',
    box5lockedto: 'open',
    box6lockedto: 'open',
    box7lockedto: 'open',
    box8lockedto: 'open',
    box9lockedto: 'open'
}

// Box clearing when game is won or tied
function clearBoxOne() {
    box1.textContent = '';
    box1.classList.remove('x');
    box1.classList.remove('o');
    box1.classList.remove('locked');
    boxLocks[`box1Locked`] = false;
}
function clearBoxTwo() {
    box2.textContent = '';
    box2.classList.remove('x');
    box2.classList.remove('o');
    box2.classList.remove('locked');
    boxLocks[`box2Locked`] = false;
}
function clearBoxThree() {
    box3.textContent = '';
    box3.classList.remove('x');
    box3.classList.remove('o');
    box3.classList.remove('locked');
    boxLocks[`box3Locked`] = false;
}
function clearBoxFour() {
    box4.textContent = '';
    box4.classList.remove('x');
    box4.classList.remove('o');
    box4.classList.remove('locked');
    boxLocks[`box4Locked`] = false;
}
function clearBoxFive() {
    box5.textContent = '';
    box5.classList.remove('x');
    box5.classList.remove('o');
    box5.classList.remove('locked');
    boxLocks[`box5Locked`] = false;
}
function clearBoxSix() {
    box6.textContent = '';
    box6.classList.remove('x');
    box6.classList.remove('o');
    box6.classList.remove('locked');
    boxLocks[`box6Locked`] = false;
}
function clearBoxSeven() {
    box7.textContent = '';
    box7.classList.remove('x');
    box7.classList.remove('o');
    box7.classList.remove('locked');
    boxLocks[`box7Locked`] = false;
}
function clearBoxEight() {
    box8.textContent = '';
    box8.classList.remove('x');
    box8.classList.remove('o');
    box8.classList.remove('locked');
    boxLocks[`box8Locked`] = false;
}
function clearBoxNine() {
    box9.textContent = '';
    box9.classList.remove('x');
    box9.classList.remove('o');
    box9.classList.remove('locked');
    boxLocks[`box9Locked`] = false;
}

/* ------------------------------------------------------------------------------------------ */
/* End game play box management */
/* ------------------------------------------------------------------------------------------ */




/* ------------------------------------------------------------------------------------------ */
/* Start game winning steps */
/* ------------------------------------------------------------------------------------------ */

//Sets the current game winner variable
let currentGameWinner = 'none';
const winnerOverlay = document.querySelector('.winnerOverlay');
const winner = document.querySelector('.winner');

// Unlock box locks
function unlock() {
    boxLocks[`box1Locked`] = false,
        boxLocks[`box2Locked`] = false,
        boxLocks[`box3Locked`] = false,
        boxLocks[`box4Locked`] = false,
        boxLocks[`box5Locked`] = false,
        boxLocks[`box6Locked`] = false,
        boxLocks[`box7Locked`] = false,
        boxLocks[`box8Locked`] = false,
        boxLocks[`box9Locked`] = false
}

// Unlock boxeslocked to
function unlockBoxes() {
    boxesLockedTo[`box1lockedto`] = 'open';
    boxesLockedTo[`box2lockedto`] = 'open';
    boxesLockedTo[`box3lockedto`] = 'open';
    boxesLockedTo[`box4lockedto`] = 'open';
    boxesLockedTo[`box5lockedto`] = 'open';
    boxesLockedTo[`box6lockedto`] = 'open';
    boxesLockedTo[`box7lockedto`] = 'open';
    boxesLockedTo[`box8lockedto`] = 'open';
    boxesLockedTo[`box9lockedto`] = 'open';
}

// Clear boxes
function clearBoxes() {
    clearBoxOne();
    clearBoxTwo();
    clearBoxThree();
    clearBoxFour();
    clearBoxFive();
    clearBoxSix();
    clearBoxSeven();
    clearBoxEight();
    clearBoxNine();
}

// When player one wins
function playerOneIsTheWinner() {
    playerOneTotalWins++; // Add 1 to the Player One total wins
    winnerOverlay.classList.remove('hidden'); // Shows the winner dialogue
    winner.textContent = playerOneName; // Shows the Player One name in the winner dialogue
    currentGameWinner = playerOneName; // Sets the current game winner variable to Player One
    playerOneTotalWinsDiv.textContent = playerOneTotalWins; // Displays Player One total wins in the interface
    openBoxes = [1, 2, 3, 4, 5, 6, 7, 8, 9]; // Resets the Open Boxes variable in preparation for another game play
    gameOver = true; // Sets the game over variable
    if (ai == true) { // If playing against the AI
        currentPlayer = 0; // Reset the first player to Player One
        playerOneWrapper.classList.remove('current');
        playerTwoWrapper.classList.remove('current');
        playerOneWrapper.classList.add('current');
    } else { // If NOT playing the AI
        // Keep the current player as-is and don't change the focus of the player wrappers in the DOM
    }
}
// When player two wins
function playerTwoIsTheWinner() {
    playerTwoTotalWins++; // Add 1 to the Player Two total wins
    winnerOverlay.classList.remove('hidden'); // Shows the winner dialogue
    winner.textContent = playerTwoName; // Shows the Player Two name in the winner dialogue
    currentGameWinner = playerTwoName; // Sets the current game winner variable to Player Two
    playerTwoTotalWinsDiv.textContent = playerTwoTotalWins; // Displays Player Two total wins in the interface
    openBoxes = [1, 2, 3, 4, 5, 6, 7, 8, 9]; // Resets the Open Boxes variable in preparation for another game play
    gameOver = true; // Sets the game over variable
    if (ai == true) { // If playing against the AI
        currentPlayer = 0; // Reset the first player to Player One
        playerOneWrapper.classList.remove('current');
        playerTwoWrapper.classList.remove('current');
        playerOneWrapper.classList.add('current');
    } else {
        // Keep the current player as-is and don't change the focus of the player wrappers in the DOM
    }
}
// No winner game reset
function tiedGame() {
    unlockBoxes();
    clearBoxes();
    document.querySelector('.tiedOverlay').classList.add('hidden');
    openBoxes = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    gameOver = true;
    if (ai == true) {
        currentPlayer = 0;
        playerOneWrapper.classList.remove('current');
        playerTwoWrapper.classList.remove('current');
        playerOneWrapper.classList.add('current');
        //ai == false;
        //alert("Game was tied with A.I. It should flip back to Player One.")
    } else {

    }
}
function gameReset() {
    location.reload();
    /*
    // Sets all of the boxes to unlocked
    unlock()
    unlockBoxes();
    // Removes all of the x's and o's from all 9 boxes and removes the "locked" class
    clearBoxes();
    // Sets current player to Player 1
    currentPlayer = 0;
    // Resets the Total Wins for both players back to zero
    playerOneTotalWins = 0;
    playerTwoTotalWins = 0;
    playerOneTotalWinsDiv.textContent = playerOneTotalWins;
    playerTwoTotalWinsDiv.textContent = playerTwoTotalWins;
    playerOneWrapper.classList.remove('current');
    playerTwoWrapper.classList.remove('current');
    playerOneWrapper.classList.add('current');
    onePlayer = false;
    twoPlayer = false;
    openBoxes = [1,2,3,4,5,6,7,8,9];*/
}

/* Start close the winner dialogue */
document.querySelector('.close').addEventListener('click', function () {
    unlockBoxes();
    clearBoxes();
    gameOver = false;
    // Hides the Winner overlay
    document.querySelector('.winnerOverlay').classList.add('hidden');
});
/* End close the winner dialogue */

// Start listening for Three In A Row and attributes that to the winner
function findWinner() {
    if (boxesLockedTo[`box1lockedto`] === 0 && boxesLockedTo[`box2lockedto`] === 0 && boxesLockedTo[`box3lockedto`] === 0) {
        playerOneIsTheWinner();
    } else if (boxesLockedTo[`box1lockedto`] === 1 && boxesLockedTo[`box2lockedto`] === 1 && boxesLockedTo[`box3lockedto`] === 1) {
        playerTwoIsTheWinner();
    } else if (boxesLockedTo[`box1lockedto`] === 0 && boxesLockedTo[`box4lockedto`] === 0 && boxesLockedTo[`box7lockedto`] === 0) {
        playerOneIsTheWinner();
    } else if (boxesLockedTo[`box1lockedto`] === 1 && boxesLockedTo[`box4lockedto`] === 1 && boxesLockedTo[`box7lockedto`] === 1) {
        playerTwoIsTheWinner();
    } else if (boxesLockedTo[`box1lockedto`] === 0 && boxesLockedTo[`box5lockedto`] === 0 && boxesLockedTo[`box9lockedto`] === 0) {
        playerOneIsTheWinner();
    } else if (boxesLockedTo[`box1lockedto`] === 1 && boxesLockedTo[`box5lockedto`] === 1 && boxesLockedTo[`box9lockedto`] === 1) {
        playerTwoIsTheWinner();
    } else if (boxesLockedTo[`box4lockedto`] === 0 && boxesLockedTo[`box5lockedto`] === 0 && boxesLockedTo[`box6lockedto`] === 0) {
        playerOneIsTheWinner();
    } else if (boxesLockedTo[`box4lockedto`] === 1 && boxesLockedTo[`box5lockedto`] === 1 && boxesLockedTo[`box6lockedto`] === 1) {
        playerTwoIsTheWinner();
    } else if (boxesLockedTo[`box7lockedto`] === 0 && boxesLockedTo[`box8lockedto`] === 0 && boxesLockedTo[`box9lockedto`] === 0) {
        playerOneIsTheWinner();
    } else if (boxesLockedTo[`box7lockedto`] === 1 && boxesLockedTo[`box8lockedto`] === 1 && boxesLockedTo[`box9lockedto`] === 1) {
        playerTwoIsTheWinner();
    } else if (boxesLockedTo[`box2lockedto`] === 0 && boxesLockedTo[`box5lockedto`] === 0 && boxesLockedTo[`box8lockedto`] === 0) {
        playerOneIsTheWinner();
    } else if (boxesLockedTo[`box2lockedto`] === 1 && boxesLockedTo[`box5lockedto`] === 1 && boxesLockedTo[`box8lockedto`] === 1) {
        playerTwoIsTheWinner();
    } else if (boxesLockedTo[`box3lockedto`] === 0 && boxesLockedTo[`box6lockedto`] === 0 && boxesLockedTo[`box9lockedto`] === 0) {
        playerOneIsTheWinner();
    } else if (boxesLockedTo[`box3lockedto`] === 1 && boxesLockedTo[`box6lockedto`] === 1 && boxesLockedTo[`box9lockedto`] === 1) {
        playerTwoIsTheWinner();
    } else if (boxesLockedTo[`box7lockedto`] === 0 && boxesLockedTo[`box5lockedto`] === 0 && boxesLockedTo[`box3lockedto`] === 0) {
        playerOneIsTheWinner();
    } else if (boxesLockedTo[`box7lockedto`] === 1 && boxesLockedTo[`box5lockedto`] === 1 && boxesLockedTo[`box3lockedto`] === 1) {
        playerTwoIsTheWinner();
    }
}

/* ------------------------------------------------------------------------------------------ */
/* End game winning steps */
/* ------------------------------------------------------------------------------------------ */




/* ------------------------------------------------------------------------------------------ */
/* Start game tied steps */
/* ------------------------------------------------------------------------------------------ */

function findTie() {
    if (boxLocks[`box1Locked`] === true && boxLocks[`box2Locked`] === true && boxLocks[`box3Locked`] === true && boxLocks[`box4Locked`] === true && boxLocks[`box5Locked`] === true && boxLocks[`box6Locked`] === true && boxLocks[`box7Locked`] === true && boxLocks[`box8Locked`] === true && boxLocks[`box9Locked`] === true) {
        if (boxesLockedTo[`box1lockedto`] === 0 && boxesLockedTo[`box2lockedto`] === 0 && boxesLockedTo[`box3lockedto`] === 0) {
            playerOneIsTheWinner();
        } else if (boxesLockedTo[`box1lockedto`] === 1 && boxesLockedTo[`box2lockedto`] === 1 && boxesLockedTo[`box3lockedto`] === 1) {
            playerTwoIsTheWinner();
        } else if (boxesLockedTo[`box1lockedto`] === 0 && boxesLockedTo[`box4ockedto`] === 0 && boxesLockedTo[`box7lockedto`] === 0) {
            playerOneIsTheWinner();
        } else if (boxesLockedTo[`box1lockedto`] === 1 && boxesLockedTo[`box4lockedto`] === 1 && boxesLockedTo[`box7lockedto`] === 1) {
            playerTwoIsTheWinner();
        } else if (boxesLockedTo[`box1lockedto`] === 0 && boxesLockedTo[`box5lockedto`] === 0 && boxesLockedTo[`box9lockedto`] === 0) {
            playerOneIsTheWinner();
        } else if (boxesLockedTo[`box1lockedto`] === 1 && boxesLockedTo[`box5lockedto`] === 1 && boxesLockedTo[`box9lockedto`] === 1) {
            playerTwoIsTheWinner();
        } else if (boxesLockedTo[`box4lockedto`] === 0 && boxesLockedTo[`box5lockedto`] === 0 && boxesLockedTo[`box6lockedto`] === 0) {
            playerOneIsTheWinner();
        } else if (boxesLockedTo[`box4lockedto`] === 1 && boxesLockedTo[`box5lockedto`] === 1 && boxesLockedTo[`box6lockedto`] === 1) {
            playerTwoIsTheWinner();
        } else if (boxesLockedTo[`box7lockedto`] === 0 && boxesLockedTo[`box8lockedto`] === 0 && boxesLockedTo[`box9lockedto`] === 0) {
            playerOneIsTheWinner();
        } else if (boxesLockedTo[`box7lockedto`] === 1 && boxesLockedTo[`box8lockedto`] === 1 && boxesLockedTo[`box9lockedto`] === 1) {
            playerTwoIsTheWinner();
        } else if (boxesLockedTo[`box2lockedto`] === 0 && boxesLockedTo[`box5lockedto`] === 0 && boxesLockedTo[`box8lockedto`] === 0) {
            playerOneIsTheWinner();
        } else if (boxesLockedTo[`box2lockedto`] === 1 && boxesLockedTo[`box5lockedto`] === 1 && boxesLockedTo[`box8lockedto`] === 1) {
            playerTwoIsTheWinner();
        } else if (boxesLockedTo[`box3lockedto`] === 0 && boxesLockedTo[`box6lockedto`] === 0 && boxesLockedTo[`box9lockedto`] === 0) {
            playerOneIsTheWinner();
        } else if (boxesLockedTo[`box3lockedto`] === 1 && boxesLockedTo[`box6lockedto`] === 1 && boxesLockedTo[`box9lockedto`] === 1) {
            playerTwoIsTheWinner();
        } else if (boxesLockedTo[`box7lockedto`] === 0 && boxesLockedTo[`box5lockedto`] === 0 && boxesLockedTo[`box3lockedto`] === 0) {
            playerOneIsTheWinner();
        } else if (boxesLockedTo[`box7lockedto`] === 1 && boxesLockedTo[`box5lockedto`] === 1 && boxesLockedTo[`box3lockedto`] === 1) {
            playerTwoIsTheWinner();
        } else {
            document.querySelector('.tiedOverlay').classList.remove('hidden');
            //currentPlayer = 0;
        }
    }
}
// When the game is tied
document.querySelector('.closeNoWinner').addEventListener('click', function () {
    tiedGame();
});

/* ------------------------------------------------------------------------------------------ */
/* End game tied steps */
/* ------------------------------------------------------------------------------------------ */






// Current player variable
let currentPlayer = 0;


/* ------------------------------------------------------------------------------------------ */
/* Start settings menu */
/* ------------------------------------------------------------------------------------------ */

// Start Settings Overlay Toggle
const gear = document.querySelector('.gearButtonWrapper');
const settings = document.querySelector('.settingsOverlay');
const closeSettings = document.querySelector('.closeSettingsOverlay');
gear.addEventListener('click', function () {
    settings.classList.remove('hidden')
});
closeSettings.addEventListener('click', function () {
    settings.classList.add('hidden')
});


// Start background selection
const backgroundThumbnail01 = document.getElementById('backgroundThumbnail01');
const backgroundThumbnail02 = document.getElementById('backgroundThumbnail02');
const backgroundThumbnail03 = document.getElementById('backgroundThumbnail03');
const backgroundThumbnail04 = document.getElementById('backgroundThumbnail04');
const backgroundThumbnail05 = document.getElementById('backgroundThumbnail05');
const backgroundThumbnail06 = document.getElementById('backgroundThumbnail06');
const backgroundThumbnail07 = document.getElementById('backgroundThumbnail07');
const backgroundThumbnail08 = document.getElementById('backgroundThumbnail08');
const backgroundThumbnail09 = document.getElementById('backgroundThumbnail09');
const backgroundThumbnail10 = document.getElementById('backgroundThumbnail10');
const backgroundThumbnail11 = document.getElementById('backgroundThumbnail11');
const backgroundThumbnail12 = document.getElementById('backgroundThumbnail12');
const backgroundThumbnail13 = document.getElementById('backgroundThumbnail13');
const backgroundThumbnail14 = document.getElementById('backgroundThumbnail14');
const backgroundThumbnail15 = document.getElementById('backgroundThumbnail15');
const backgroundThumbnail16 = document.getElementById('backgroundThumbnail16');
const backgroundThumbnail17 = document.getElementById('backgroundThumbnail17');
const backgroundThumbnail18 = document.getElementById('backgroundThumbnail18');
function removeSelected() {
    backgroundThumbnail01.classList.remove('selected');
    backgroundThumbnail02.classList.remove('selected');
    backgroundThumbnail03.classList.remove('selected');
    backgroundThumbnail04.classList.remove('selected');
    backgroundThumbnail05.classList.remove('selected');
    backgroundThumbnail06.classList.remove('selected');
    backgroundThumbnail07.classList.remove('selected');
    backgroundThumbnail08.classList.remove('selected');
    backgroundThumbnail09.classList.remove('selected');
    backgroundThumbnail10.classList.remove('selected');
    backgroundThumbnail11.classList.remove('selected');
    backgroundThumbnail12.classList.remove('selected');
    backgroundThumbnail13.classList.remove('selected');
    backgroundThumbnail14.classList.remove('selected');
    backgroundThumbnail15.classList.remove('selected');
    backgroundThumbnail16.classList.remove('selected');
    backgroundThumbnail17.classList.remove('selected');
    backgroundThumbnail18.classList.remove('selected');
};

backgroundThumbnail01.addEventListener('click', function () {
    gameBackground.style.background = "linear-gradient(rgba(255,255,255,0.1), rgba(255,255,255,0.1)), fixed no-repeat center/cover url('img/backgrounds/background01.jpg')";
    settings.classList.add('hidden');
    removeSelected();
    backgroundThumbnail01.classList.add('selected');
});
backgroundThumbnail02.addEventListener('click', function () {
    gameBackground.style.background = "linear-gradient(rgba(255,255,255,0.1), rgba(255,255,255,0.1)), fixed no-repeat center/cover url('img/backgrounds/background02.jpg')";
    settings.classList.add('hidden');
    removeSelected();
    backgroundThumbnail02.classList.add('selected');
});
backgroundThumbnail03.addEventListener('click', function () {
    gameBackground.style.background = "linear-gradient(rgba(255,255,255,0.1), rgba(255,255,255,0.1)), fixed no-repeat center/cover url('img/backgrounds/background03.jpg')";
    settings.classList.add('hidden');
    removeSelected();
    backgroundThumbnail03.classList.add('selected');
});
backgroundThumbnail04.addEventListener('click', function () {
    gameBackground.style.background = "linear-gradient(rgba(255,255,255,0.1), rgba(255,255,255,0.1)), fixed no-repeat center/cover url('img/backgrounds/background04.jpg')";
    settings.classList.add('hidden');
    removeSelected();
    backgroundThumbnail04.classList.add('selected');
});
backgroundThumbnail05.addEventListener('click', function () {
    gameBackground.style.background = "linear-gradient(rgba(255,255,255,0.1), rgba(255,255,255,0.1)), fixed no-repeat center/cover  url('img/backgrounds/background05.jpg')";
    settings.classList.add('hidden');
    removeSelected();
    backgroundThumbnail05.classList.add('selected');
});
backgroundThumbnail06.addEventListener('click', function () {
    gameBackground.style.background = "linear-gradient(rgba(255,255,255,0.1), rgba(255,255,255,0.1)), fixed no-repeat center/cover url('img/backgrounds/background06.jpg')";
    settings.classList.add('hidden');
    removeSelected();
    backgroundThumbnail06.classList.add('selected');
});
backgroundThumbnail07.addEventListener('click', function () {
    gameBackground.style.background = "linear-gradient(rgba(255,255,255,0.1), rgba(255,255,255,0.1)), fixed no-repeat center/cover url('img/backgrounds/background07.jpg')";
    settings.classList.add('hidden');
    removeSelected();
    backgroundThumbnail07.classList.add('selected');
});
backgroundThumbnail08.addEventListener('click', function () {
    gameBackground.style.background = "linear-gradient(rgba(255,255,255,0.1), rgba(255,255,255,0.1)), fixed no-repeat center/cover url('img/backgrounds/background08.jpg')";
    settings.classList.add('hidden');
    removeSelected();
    backgroundThumbnail08.classList.add('selected');
});
backgroundThumbnail09.addEventListener('click', function () {
    gameBackground.style.background = "linear-gradient(rgba(255,255,255,0.1), rgba(255,255,255,0.1)), fixed no-repeat center/cover url('img/backgrounds/background09.jpg')";
    settings.classList.add('hidden');
    removeSelected();
    backgroundThumbnail09.classList.add('selected');
});
backgroundThumbnail10.addEventListener('click', function () {
    gameBackground.style.background = "linear-gradient(rgba(255,255,255,0.1), rgba(255,255,255,0.1)), fixed no-repeat center/cover url('img/backgrounds/background10.jpg')";
    settings.classList.add('hidden');
    removeSelected();
    backgroundThumbnail10.classList.add('selected');
});
backgroundThumbnail11.addEventListener('click', function () {
    gameBackground.style.background = "linear-gradient(rgba(255,255,255,0.1), rgba(255,255,255,0.1)), fixed no-repeat center/cover url('img/backgrounds/background11.jpg')";
    settings.classList.add('hidden');
    removeSelected();
    backgroundThumbnail11.classList.add('selected');
});
backgroundThumbnail12.addEventListener('click', function () {
    gameBackground.style.background = "linear-gradient(rgba(255,255,255,0.1), rgba(255,255,255,0.1)), fixed no-repeat center/cover url('img/backgrounds/background12.jpg')";
    settings.classList.add('hidden');
    removeSelected();
    backgroundThumbnail12.classList.add('selected');
});
backgroundThumbnail13.addEventListener('click', function () {
    gameBackground.style.background = "linear-gradient(rgba(255,255,255,0.1), rgba(255,255,255,0.1)), fixed no-repeat center/cover url('img/backgrounds/background13.jpg')";
    settings.classList.add('hidden');
    removeSelected();
    backgroundThumbnail13.classList.add('selected');
});
backgroundThumbnail14.addEventListener('click', function () {
    gameBackground.style.background = "linear-gradient(rgba(255,255,255,0.1), rgba(255,255,255,0.1)), fixed no-repeat center/cover url('img/backgrounds/background14.jpg')";
    settings.classList.add('hidden');
    removeSelected();
    backgroundThumbnail14.classList.add('selected');
});
backgroundThumbnail15.addEventListener('click', function () {
    gameBackground.style.background = "linear-gradient(rgba(255,255,255,0.1), rgba(255,255,255,0.1)), fixed no-repeat center/cover url('img/backgrounds/background15.jpg')";
    settings.classList.add('hidden');
    removeSelected();
    backgroundThumbnail15.classList.add('selected');
});
backgroundThumbnail16.addEventListener('click', function () {
    gameBackground.style.background = "linear-gradient(rgba(255,255,255,0.1), rgba(255,255,255,0.1)), fixed no-repeat center/cover url('img/backgrounds/background16.jpg')";
    settings.classList.add('hidden');
    removeSelected();
    backgroundThumbnail16.classList.add('selected');
});
backgroundThumbnail17.addEventListener('click', function () {
    gameBackground.style.background = "linear-gradient(rgba(255,255,255,0.1), rgba(255,255,255,0.1)), fixed no-repeat center/cover url('img/backgrounds/background17.jpg')";
    settings.classList.add('hidden');
    removeSelected();
    backgroundThumbnail17.classList.add('selected');
});
backgroundThumbnail18.addEventListener('click', function () {
    gameBackground.style.background = "linear-gradient(rgba(255,255,255,0.1), rgba(255,255,255,0.1)), fixed no-repeat center/cover url('img/backgrounds/background18.jpg')";
    settings.classList.add('hidden');
    removeSelected();
    backgroundThumbnail18.classList.add('selected');
});

/* ------------------------------------------------------------------------------------------ */
/* End settings menu */
/* ------------------------------------------------------------------------------------------ */





/* ------------------------------------------------------------------------------------------ */
/* Start Randomization of backgrounds on load */
/* ------------------------------------------------------------------------------------------ */

function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

const randomNumber = getRandomNumber(1, 14);
const gameBackground = document.querySelector('.tictactoe');

if (randomNumber === 1) {
    gameBackground.style.background = "linear-gradient(rgba(255,255,255,0.1), rgba(255,255,255,0.1)), fixed no-repeat center/cover url('img/backgrounds/background01.jpg')";
    removeSelected();
    backgroundThumbnail01.classList.add('selected');
} else if (randomNumber === 2) {
    gameBackground.style.background = "linear-gradient(rgba(255,255,255,0.1), rgba(255,255,255,0.1)), fixed no-repeat center/cover url('img/backgrounds/background02.jpg')";
    removeSelected();
    backgroundThumbnail02.classList.add('selected');
} else if (randomNumber === 3) {
    gameBackground.style.background = "linear-gradient(rgba(255,255,255,0.1), rgba(255,255,255,0.1)), fixed no-repeat center/cover url('img/backgrounds/background03.jpg')";
    removeSelected();
    backgroundThumbnail03.classList.add('selected');
} else if (randomNumber === 4) {
    gameBackground.style.background = "linear-gradient(rgba(255,255,255,0.1), rgba(255,255,255,0.1)), fixed no-repeat center/cover url('img/backgrounds/background04.jpg')";
    removeSelected();
    backgroundThumbnail04.classList.add('selected');
} else if (randomNumber === 5) {
    gameBackground.style.background = "linear-gradient(rgba(255,255,255,0.1), rgba(255,255,255,0.1)), fixed no-repeat center/cover url('img/backgrounds/background05.jpg')";
    removeSelected();
    backgroundThumbnail05.classList.add('selected');
} else if (randomNumber === 6) {
    gameBackground.style.background = "linear-gradient(rgba(255,255,255,0.1), rgba(255,255,255,0.1)), fixed no-repeat center/cover url('img/backgrounds/background06.jpg')";
    removeSelected();
    backgroundThumbnail06.classList.add('selected');
} else if (randomNumber === 7) {
    gameBackground.style.background = "linear-gradient(rgba(255,255,255,0.1), rgba(255,255,255,0.1)), fixed no-repeat center/cover url('img/backgrounds/background07.jpg')";
    removeSelected();
    backgroundThumbnail07.classList.add('selected');
} else if (randomNumber === 8) {
    gameBackground.style.background = "linear-gradient(rgba(255,255,255,0.1), rgba(255,255,255,0.1)), fixed no-repeat center/cover url('img/backgrounds/background08.jpg')";
    removeSelected();
    backgroundThumbnail08.classList.add('selected');
} else if (randomNumber === 9) {
    gameBackground.style.background = "linear-gradient(rgba(255,255,255,0.1), rgba(255,255,255,0.1)), fixed no-repeat center/cover url('img/backgrounds/background09.jpg')";
    removeSelected();
    backgroundThumbnail09.classList.add('selected');
} else if (randomNumber === 10) {
    gameBackground.style.background = "linear-gradient(rgba(255,255,255,0.1), rgba(255,255,255,0.1)), fixed no-repeat center/cover url('img/backgrounds/background10.jpg')";
    removeSelected();
    backgroundThumbnail10.classList.add('selected');
} else if (randomNumber === 11) {
    gameBackground.style.background = "linear-gradient(rgba(255,255,255,0.1), rgba(255,255,255,0.1)), fixed no-repeat center/cover url('img/backgrounds/background11.jpg')";
    removeSelected();
    backgroundThumbnail11.classList.add('selected');
} else if (randomNumber === 12) {
    gameBackground.style.background = "linear-gradient(rgba(255,255,255,0.1), rgba(255,255,255,0.1)), fixed no-repeat center/cover url('img/backgrounds/background12.jpg')";
    removeSelected();
    backgroundThumbnail12.classList.add('selected');
} else if (randomNumber === 13) {
    gameBackground.style.background = "linear-gradient(rgba(255,255,255,0.1), rgba(255,255,255,0.1)), fixed no-repeat center/cover url('img/backgrounds/background13.jpg')";
    removeSelected();
    backgroundThumbnail13.classList.add('selected');
} else if (randomNumber === 14) {
    gameBackground.style.background = "linear-gradient(rgba(255,255,255,0.1), rgba(255,255,255,0.1)), fixed no-repeat center/cover url('img/backgrounds/background14.jpg')";
    removeSelected();
    backgroundThumbnail14.classList.add('selected');
} else if (randomNumber === 15) {
    gameBackground.style.background = "linear-gradient(rgba(255,255,255,0.1), rgba(255,255,255,0.1)), fixed no-repeat center/cover url('img/backgrounds/background15.jpg')";
    removeSelected();
    backgroundThumbnail15.classList.add('selected');
} else if (randomNumber === 16) {
    gameBackground.style.background = "linear-gradient(rgba(255,255,255,0.1), rgba(255,255,255,0.1)), fixed no-repeat center/cover url('img/backgrounds/background16.jpg')";
    removeSelected();
    backgroundThumbnail16.classList.add('selected');
} else if (randomNumber === 17) {
    gameBackground.style.background = "linear-gradient(rgba(255,255,255,0.1), rgba(255,255,255,0.1)), fixed no-repeat center/cover url('img/backgrounds/background17.jpg')";
    removeSelected();
    backgroundThumbnail17.classList.add('selected');
} else if (randomNumber === 18) {
    gameBackground.style.background = "linear-gradient(rgba(255,255,255,0.1), rgba(255,255,255,0.1)), fixed no-repeat center/cover url('img/backgrounds/background18.jpg')";
    removeSelected();
    backgroundThumbnail18.classList.add('selected');
}

/* ------------------------------------------------------------------------------------------ */
/* End Randomization of backgrounds on load */
/* ------------------------------------------------------------------------------------------ */





/* ------------------------------------------------------------------------------------------ */
/* Start when the Reset button is clicked */
/* ------------------------------------------------------------------------------------------ */

document.querySelector('.resetButton').addEventListener('click', function () {
    gameReset()
    document.querySelector('.playerModeOverlay').classList.remove('hidden');
    document.querySelector('.settingsOverlay').classList.add('hidden');
});

/* ------------------------------------------------------------------------------------------ */
/* End when the Reset button is clicked */
/* ------------------------------------------------------------------------------------------ */













/* ------------------------------------------------------------------------------------------ */
/* Start game play */
/* ------------------------------------------------------------------------------------------ */

let boxOneTouchRegion = box1;
let boxTwoTouchRegion = box2;
let boxThreeTouchRegion = box3;
let boxFourTouchRegion = box4;
let boxFiveTouchRegion = box5;
let boxSixTouchRegion = box6;
let boxSevenTouchRegion = box7;
let boxEightTouchRegion = box8;
let boxNineTouchRegion = box9;

function playerModes() {
    if ((twoPlayer) && (gameOver == false) && (ai == false)) {
        //alert("Two player selected!");
        // Player One name input
        document.querySelector('.goPlayerOneButton').addEventListener('click', function (e) {
            // If Go button pressed
            playerOneName = document.querySelector('.playerOneNameInput').value;
            document.querySelector('.playerOne').textContent = playerOneName;
            document.querySelector('.playerOneOverlay').classList.add('hidden');
            document.querySelector('.playerTwoOverlay').classList.remove('hidden');
            document.getElementById('playerTwoNameInput').focus();
        });
        document.querySelector('.playerOneNameInput').addEventListener('keypress', function (e) {
            // If enter key is pressed
            if (e.key === 'Enter') {
                playerOneName = document.querySelector('.playerOneNameInput').value;
                document.querySelector('.playerOne').textContent = playerOneName;
                document.querySelector('.playerOneOverlay').classList.add('hidden');
                document.querySelector('.playerTwoOverlay').classList.remove('hidden');
                document.getElementById('playerTwoNameInput').focus();
            }
        });
        // Player Two name input
        document.querySelector('.goPlayerTwoButton').addEventListener('click', function () {
            // If Go button pressed
            playerTwoName = document.querySelector('.playerTwoNameInput').value;
            document.querySelector('.playerTwo').textContent = playerTwoName;
            document.querySelector('.playerTwoOverlay').classList.add('hidden');
        });

        document.querySelector('.playerTwoNameInput').addEventListener('keypress', function (e) {
            // If enter key is pressed
            if (e.key === 'Enter') {
                playerTwoName = document.querySelector('.playerTwoNameInput').value;
                document.querySelector('.playerTwo').textContent = playerTwoName;
                document.querySelector('.playerTwoOverlay').classList.add('hidden');
            }
        });

        boxOneTouchRegion.addEventListener('click', function (e) {
            if (boxLocks[`box1Locked`] === true) {
                alert("This box is locked!");
            } else {
                if (currentPlayer == 0) {
                    lockBox1toPlayer1();
                } else {
                    lockBox1toPlayer2();
                }
            }
            findWinner();
            findTie();
        });
        boxTwoTouchRegion.addEventListener('click', function (e) {
            if (boxLocks[`box2Locked`] === true) {
                alert("This box is locked!");
            } else {
                if (currentPlayer == 0) {
                    lockBox2toPlayer1();
                } else {
                    lockBox2toPlayer2();
                }
            }
            findWinner();
            findTie();
        });
        boxThreeTouchRegion.addEventListener('click', function (e) {
            if (boxLocks[`box3Locked`] === true) {
                alert("This box is locked!");
            } else {
                if (currentPlayer == 0) {
                    lockBox3toPlayer1();
                } else {
                    lockBox3toPlayer2();
                }
            }
            findWinner();
            findTie();
        });
        boxFourTouchRegion.addEventListener('click', function (e) {
            if (boxLocks[`box4Locked`] === true) {
                alert("This box is locked!");
            } else {
                if (currentPlayer == 0) {
                    lockBox4toPlayer1();
                } else {
                    lockBox4toPlayer2();
                }
            }
            findWinner();
            findTie();
        });
        boxFiveTouchRegion.addEventListener('click', function (e) {
            if (boxLocks[`box5Locked`] === true) {
                alert("This box is locked!");
            } else {
                if (currentPlayer == 0) {
                    lockBox5toPlayer1();
                } else {
                    lockBox5toPlayer2();
                }
            }
            findWinner();
            findTie();
        });
        boxSixTouchRegion.addEventListener('click', function (e) {
            if (boxLocks[`box6Locked`] === true) {
                alert("This box is locked!");
            } else {
                if (currentPlayer == 0) {
                    lockBox6toPlayer1();
                } else {
                    lockBox6toPlayer2();
                }
            }
            findWinner();
            findTie();
        });
        boxSevenTouchRegion.addEventListener('click', function (e) {
            if (boxLocks[`box7Locked`] === true) {
                alert("This box is locked!");
            } else {
                if (currentPlayer == 0) {
                    lockBox7toPlayer1();
                } else {
                    lockBox7toPlayer2();
                }
            }
            findWinner();
            findTie();
        });
        boxEightTouchRegion.addEventListener('click', function (e) {
            if (boxLocks[`box8Locked`] === true) {
                alert("This box is locked!");
            } else {
                if (currentPlayer == 0) {
                    lockBox8toPlayer1();
                } else {
                    lockBox8toPlayer2();
                }
            }
            findWinner();
            findTie();
        });
        boxNineTouchRegion.addEventListener('click', function (e) {
            if (boxLocks[`box9Locked`] === true) {
                alert("This box is locked!");
            } else {
                if (currentPlayer == 0) {
                    lockBox9toPlayer1();
                } else {
                    lockBox9toPlayer2();
                }
            }
            findWinner();
            findTie();
        });
    } else if ((onePlayer) && (gameOver == false) && (ai)) {
        // alert("One Player is selected.");
        function randomBoxPicker() {
            return Math.floor(Math.random() * openBoxes.length);
        };

        playerTwoName = 'A.I.';
        // alert("Player Two name set to A.I.");
        document.querySelector('.playerTwo').textContent = playerTwoName;
        // Player One name input
        document.querySelector('.goPlayerOneButton').addEventListener('click', function (e) {
            // If Go button pressed
            playerOneName = document.querySelector('.playerOneNameInput').value;
            document.querySelector('.playerOne').textContent = playerOneName;
            document.querySelector('.playerOneOverlay').classList.add('hidden');
        });

        document.querySelector('.playerOneNameInput').addEventListener('keypress', function (e) {
            // If enter key is pressed
            if (e.key === 'Enter') {
                playerOneName = document.querySelector('.playerOneNameInput').value;
                document.querySelector('.playerOne').textContent = playerOneName;
                document.querySelector('.playerOneOverlay').classList.add('hidden');
            }
        });
       

        function artificialIntelligence() {
            findWinner();
            findTie();
            if (gameOver) {
                currentPlayer = 0; // Reset the first player to Player One
                playerOneWrapper.classList.remove('current');
                playerTwoWrapper.classList.remove('current');
                playerOneWrapper.classList.add('current');
                gameOver == false;
            } else {
                currentPlayer = 1; // Switch to player two
                if ((boxesLockedTo[`box1lockedto`] == 0) && (boxesLockedTo[`box3lockedto`] == 0) && (boxLocks[`box2Locked`] == false)) {
                    lockBox2toPlayer2();
                    findWinner();
                    currentPlayer = 0; // switch to player one
                    findTie();
                } else if ((boxesLockedTo[`box1lockedto`] == 0) && (boxesLockedTo[`box7lockedto`] == 0) && (boxLocks[`box4Locked`] == false)) {
                    lockBox4toPlayer2();
                    findWinner();
                    currentPlayer = 0; // switch to player one
                    findTie();
                } else if ((boxesLockedTo[`box1lockedto`] == 0) && (boxesLockedTo[`box9lockedto`] == 0) && (boxLocks[`box5Locked`] == false)) {
                    lockBox5toPlayer2();
                    findWinner();
                    currentPlayer = 0; // switch to player one
                    findTie();
                } else if ((boxesLockedTo[`box2lockedto`] == 0) && (boxesLockedTo[`box8lockedto`] == 0) && (boxLocks[`box5Locked`] == false)) {
                    lockBox5toPlayer2();
                    findWinner();
                    currentPlayer = 0; // switch to player one
                    findTie();
                } else if ((boxesLockedTo[`box3lockedto`] == 0) && (boxesLockedTo[`box9lockedto`] == 0) && (boxLocks[`box6Locked`] == false)) {
                    lockBox6toPlayer2();
                    findWinner();
                    currentPlayer = 0; // switch to player one
                    findTie();
                } else if ((boxesLockedTo[`box4lockedto`] == 0) && (boxesLockedTo[`box6lockedto`] == 0) && (boxLocks[`box5Locked`] == false)) {
                    lockBox6toPlayer2();
                    findWinner();
                    currentPlayer = 0; // switch to player one
                    findTie();
                } else if ((boxesLockedTo[`box7lockedto`] == 0) && (boxesLockedTo[`box9lockedto`] == 0) && (boxLocks[`box8Locked`] == false)) {
                    lockBox8toPlayer2();
                    findWinner();
                    currentPlayer = 0; // switch to player one
                    findTie();
                } else if ((boxesLockedTo[`box3lockedto`] == 0) && (boxesLockedTo[`box7lockedto`] == 0) && (boxLocks[`box5Locked`] == false)) {
                    lockBox5toPlayer2();
                    findWinner();
                    currentPlayer = 0; // switch to player one
                    findTie()
                } else if ((boxesLockedTo[`box1lockedto`] == 0) && (boxesLockedTo[`box3lockedto`] == 0) && (boxLocks[`box2Locked`] == false)) {
                    lockBox2toPlayer2();
                    findWinner();
                    currentPlayer = 0; // switch to player one
                    findTie();
                } else if ((boxesLockedTo[`box1lockedto`] == 0) && (boxesLockedTo[`box5lockedto`] == 0) && (boxLocks[`box9Locked`] == false)) {
                    lockBox9toPlayer2();
                    findWinner();
                    currentPlayer = 0; // switch to player one
                    findTie();
                } else if ((boxesLockedTo[`box3lockedto`] == 0) && (boxesLockedTo[`box5lockedto`] == 0) && (boxLocks[`box7Locked`] == false)) {
                    lockBox7toPlayer2();
                    findWinner();
                    currentPlayer = 0; // switch to player one
                    findTie();
                } else if ((boxesLockedTo[`box1lockedto`] == 0) && (boxesLockedTo[`box2lockedto`] == 0) && (boxLocks[`box3Locked`] == false)) {
                    lockBox3toPlayer2();
                    findWinner();
                    currentPlayer = 0; // switch to player one
                    findTie();
                } else if ((boxesLockedTo[`box4lockedto`] == 0) && (boxesLockedTo[`box5lockedto`] == 0) && (boxLocks[`box6Locked`] == false)) {
                    lockBox6toPlayer2();
                    findWinner();
                    currentPlayer = 0; // switch to player one
                    findTie();
                } else if ((boxesLockedTo[`box7lockedto`] == 0) && (boxesLockedTo[`box8lockedto`] == 0) && (boxLocks[`box9Locked`] == false)) {
                    lockBox9toPlayer2();
                    findWinner();
                    currentPlayer = 0; // switch to player one
                    findTie();
                } else if ((boxesLockedTo[`box1lockedto`] == 0) && (boxesLockedTo[`box4lockedto`] == 0) && (boxLocks[`box7Locked`] == false)) {
                    lockBox7toPlayer2();
                    findWinner();
                    currentPlayer = 0; // switch to player one
                    findTie();
                } else if ((boxesLockedTo[`box2lockedto`] == 0) && (boxesLockedTo[`box5lockedto`] == 0) && (boxLocks[`box8Locked`] == false)) {
                    lockBox8toPlayer2();
                    findWinner();
                    currentPlayer = 0; // switch to player one
                    findTie();
                } else if ((boxesLockedTo[`box3lockedto`] == 0) && (boxesLockedTo[`box6lockedto`] == 0) && (boxLocks[`box9Locked`] == false)) {
                    lockBox9toPlayer2();
                    findWinner();
                    currentPlayer = 0; // switch to player one
                    findTie();
                } else if (boxLocks[`box1Locked`] === false) {
                    lockBox1toPlayer2();
                    findWinner();
                    currentPlayer = 0; // switch to player one
                    findTie();
                } else if (boxLocks[`box5Locked`] === false) {
                    lockBox5toPlayer2();
                    findWinner();
                    currentPlayer = 0; // switch to player one
                    findTie();
                } else if (boxLocks[`box3Locked`] === false) {
                    lockBox3toPlayer2();
                    findWinner();
                    currentPlayer = 0; // switch to player one
                    findTie();
                } else if (boxLocks[`box7Locked`] === false) {
                    lockBox7toPlayer2();
                    findWinner();
                    currentPlayer = 0; // switch to player one
                    findTie();
                } else if (boxLocks[`box9Locked`] === false) {
                    lockBox9toPlayer2();
                    findWinner();
                    currentPlayer = 0; // switch to player one
                    findTie();
                } else {
                    let currentPickedNumberIndex = randomBoxPicker();
                    let currentNumber = openBoxes[currentPickedNumberIndex];
                    let currentBox = document.querySelector('.box' + openBoxes[currentPickedNumberIndex]);
                    openBoxes.splice(openBoxes.indexOf(currentNumber), 1); // Remove the selected item from the array
                    currentBox.classList.add('o');
                    currentBox.classList.add('locked');
                    boxLocks[`box${currentNumber}Locked`] = true;
                    boxesLockedTo[`box${currentNumber}lockedto`] = 1;
                    playerOneWrapper.classList.add('current');
                    playerTwoWrapper.classList.remove('current');
                    findWinner();
                    currentPlayer = 0; // switch to player one
                    findTie();
                }
            }
        }

        boxOneTouchRegion.addEventListener('click', function (e) {
            if (boxLocks[`box1Locked`] === true) {
                alert("This box is locked!");
            } else {
                if (currentPlayer == 0) {
                    lockBox1toPlayer1();
                    findWinner();
                    findTie();
                    if (gameOver) {
                        gameOver = false;
                    } else {
                        playerOneWrapper.classList.remove('current');
                        playerTwoWrapper.classList.add('current');
                        setTimeout(artificialIntelligence, Math.floor(Math.random() * 500) + 1000);
                    }
                }
            }
        });
        boxTwoTouchRegion.addEventListener('click', function (e) {
            if (boxLocks[`box2Locked`] === true) {
                alert("This box is locked!");
            } else {
                if (currentPlayer == 0) {
                    lockBox2toPlayer1();
                    findWinner();
                    findTie();
                    if (gameOver) {
                        gameOver = false;
                    } else {
                        playerOneWrapper.classList.remove('current');
                        playerTwoWrapper.classList.add('current');
                        setTimeout(artificialIntelligence, Math.floor(Math.random() * 500) + 1000);
                    }
                }
            }
        });
        boxThreeTouchRegion.addEventListener('click', function (e) {
            if (boxLocks[`box3Locked`] === true) {
                alert("This box is locked!");
            } else {
                if (currentPlayer == 0) {
                    lockBox3toPlayer1();
                    findWinner();
                    findTie();
                    if (gameOver) {
                        gameOver = false;
                    } else {
                        playerOneWrapper.classList.remove('current');
                        playerTwoWrapper.classList.add('current');
                        setTimeout(artificialIntelligence, Math.floor(Math.random() * 500) + 1000);
                    }
                }
            }
        });
        boxFourTouchRegion.addEventListener('click', function (e) {
            if (boxLocks[`box4Locked`] === true) {
                alert("This box is locked!");
            } else {
                if (currentPlayer == 0) {
                    lockBox4toPlayer1();
                    findWinner();
                    findTie();
                    if (gameOver) {
                        gameOver = false;
                    } else {
                        playerOneWrapper.classList.remove('current');
                        playerTwoWrapper.classList.add('current');
                        setTimeout(artificialIntelligence, Math.floor(Math.random() * 500) + 1000);
                    }
                }
            }
        });
        boxFiveTouchRegion.addEventListener('click', function (e) {
            if (boxLocks[`box5Locked`] === true) {
                alert("This box is locked!");
            } else {
                if (currentPlayer == 0) {
                    lockBox5toPlayer1();
                    findWinner();
                    findTie();
                    if (gameOver) {
                        gameOver = false;
                    } else {
                        playerOneWrapper.classList.remove('current');
                        playerTwoWrapper.classList.add('current');
                        setTimeout(artificialIntelligence, Math.floor(Math.random() * 500) + 1000);
                    }
                }
            }
        });
        boxSixTouchRegion.addEventListener('click', function (e) {
            if (boxLocks[`box6Locked`] === true) {
                alert("This box is locked!");
            } else {
                if (currentPlayer == 0) {
                    lockBox6toPlayer1();
                    findWinner();
                    findTie();
                    if (gameOver) {
                        gameOver = false;
                    } else {
                        playerOneWrapper.classList.remove('current');
                        playerTwoWrapper.classList.add('current');
                        setTimeout(artificialIntelligence, Math.floor(Math.random() * 500) + 1000);
                    }
                }
            }
        });
        boxSevenTouchRegion.addEventListener('click', function (e) {
            if (boxLocks[`box7Locked`] === true) {
                alert("This box is locked!");
            } else {
                if (currentPlayer == 0) {
                    lockBox7toPlayer1();
                    findWinner();
                    findTie();
                    if (gameOver) {
                        gameOver = false;
                    } else {
                        playerOneWrapper.classList.remove('current');
                        playerTwoWrapper.classList.add('current');
                        setTimeout(artificialIntelligence, Math.floor(Math.random() * 500) + 1000);
                    }
                }
            }
        });
        boxEightTouchRegion.addEventListener('click', function (e) {
            if (boxLocks[`box8Locked`] === true) {
                alert("This box is locked!");
            } else {
                if (currentPlayer == 0) {
                    lockBox8toPlayer1();
                    findWinner();
                    findTie();
                    if (gameOver) {
                        gameOver = false;
                    } else {
                        setTimeout(artificialIntelligence, Math.floor(Math.random() * 500) + 1000);
                    }
                }
            }
        });
        boxNineTouchRegion.addEventListener('click', function (e) {
            if (boxLocks[`box9Locked`] === true) {
                alert("This box is locked!");
            } else {
                if (currentPlayer == 0) {
                    lockBox9toPlayer1();
                    findWinner();
                    findTie();
                    if (gameOver) {
                        gameOver = false;
                    } else {
                        playerOneWrapper.classList.remove('current');
                        playerTwoWrapper.classList.add('current');
                        setTimeout(artificialIntelligence, Math.floor(Math.random() * 500) + 1000);
                    }
                }
            }
        });
    } else {
        //alert("Testing");
    }
}

/* ------------------------------------------------------------------------------------------ */
/* End game play */
/* ------------------------------------------------------------------------------------------ */




// Disable pinch zoom
document.addEventListener('touchmove', function (event) {
    if (event.scale !== 1) { event.preventDefault(); }
}, false);
