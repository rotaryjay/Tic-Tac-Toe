const box1 = document.querySelector('.box1');
const box2 = document.querySelector('.box2');
const box3 = document.querySelector('.box3');
const box4 = document.querySelector('.box4');
const box5 = document.querySelector('.box5');
const box6 = document.querySelector('.box6');
const box7 = document.querySelector('.box7');
const box8 = document.querySelector('.box8');
const box9 = document.querySelector('.box9');
let box1Locked = false;
let box2Locked = false;
let box3Locked = false;
let box4Locked = false;
let box5Locked = false;
let box6Locked = false;
let box7Locked = false;
let box8Locked = false;
let box9Locked = false;
let box1lockedto = open;
let box2lockedto = open;
let box3lockedto = open;
let box4lockedto = open;
let box5lockedto = open;
let box6lockedto = open;
let box7lockedto = open;
let box8lockedto = open;
let box9lockedto = open;
let currentPlayer = 0;
let playerOneName = 'Player One';
let playerTwoName = 'Player Two';
let playerOneTotalWins = 0;
let playerTwoTotalWins = 0;
let currentGameWinner = 'none';

document.querySelector('.close').addEventListener('click', function () {
    box1lockedto = open;
    box2lockedto = open;
    box3lockedto = open;
    box4lockedto = open;
    box5lockedto = open;
    box6lockedto = open;
    box7lockedto = open;
    box8lockedto = open;
    box9lockedto = open;
    if (currentGameWinner == playerOneName) {
        playerOneTotalWins++;
    } else if (currentGameWinner == playerTwoName) {
        playerTwoTotalWins++;
    }
    document.querySelector('.winnerOverlay').classList.add('hidden');
    document.querySelector('.box1').classList.remove('x');
    document.querySelector('.box1').classList.remove('o');
    document.querySelector('.box1').classList.remove('locked');
    box1Locked = false;
    document.querySelector('.box2').classList.remove('x');
    document.querySelector('.box2').classList.remove('o');
    document.querySelector('.box2').classList.remove('locked');
    box2Locked = false;
    document.querySelector('.box3').classList.remove('x');
    document.querySelector('.box3').classList.remove('o');
    document.querySelector('.box3').classList.remove('locked');
    box3Locked = false;
    document.querySelector('.box4').classList.remove('x');
    document.querySelector('.box4').classList.remove('o');
    document.querySelector('.box4').classList.remove('locked');
    box4Locked = false;
    document.querySelector('.box5').classList.remove('x');
    document.querySelector('.box5').classList.remove('o');
    document.querySelector('.box5').classList.remove('locked');
    box5Locked = false;
    document.querySelector('.box6').classList.remove('x');
    document.querySelector('.box6').classList.remove('o');
    document.querySelector('.box6').classList.remove('locked');
    box6Locked = false;
    document.querySelector('.box7').classList.remove('x');
    document.querySelector('.box7').classList.remove('o');
    document.querySelector('.box7').classList.remove('locked');
    box7Locked = false;
    document.querySelector('.box8').classList.remove('x');
    document.querySelector('.box8').classList.remove('o');
    document.querySelector('.box8').classList.remove('locked');
    box8Locked = false;
    document.querySelector('.box9').classList.remove('x');
    document.querySelector('.box9').classList.remove('o');
    document.querySelector('.box9').classList.remove('locked');
    box9Locked = false;
    currentPlayer = 0;
});
document.querySelector('.closeNoWinner').addEventListener('click', function () {
    box1lockedto = open;
    box2lockedto = open;
    box3lockedto = open;
    box4lockedto = open;
    box5lockedto = open;
    box6lockedto = open;
    box7lockedto = open;
    box8lockedto = open;
    box9lockedto = open;
    document.querySelector('.winnerOverlay').classList.add('hidden');
    document.querySelector('.box1').classList.remove('x');
    document.querySelector('.box1').classList.remove('o');
    document.querySelector('.box1').classList.remove('locked');
    box1Locked = false;
    document.querySelector('.box2').classList.remove('x');
    document.querySelector('.box2').classList.remove('o');
    document.querySelector('.box2').classList.remove('locked');
    box2Locked = false;
    document.querySelector('.box3').classList.remove('x');
    document.querySelector('.box3').classList.remove('o');
    document.querySelector('.box3').classList.remove('locked');
    box3Locked = false;
    document.querySelector('.box4').classList.remove('x');
    document.querySelector('.box4').classList.remove('o');
    document.querySelector('.box4').classList.remove('locked');
    box4Locked = false;
    document.querySelector('.box5').classList.remove('x');
    document.querySelector('.box5').classList.remove('o');
    document.querySelector('.box5').classList.remove('locked');
    box5Locked = false;
    document.querySelector('.box6').classList.remove('x');
    document.querySelector('.box6').classList.remove('o');
    document.querySelector('.box6').classList.remove('locked');
    box6Locked = false;
    document.querySelector('.box7').classList.remove('x');
    document.querySelector('.box7').classList.remove('o');
    document.querySelector('.box7').classList.remove('locked');
    box7Locked = false;
    document.querySelector('.box8').classList.remove('x');
    document.querySelector('.box8').classList.remove('o');
    document.querySelector('.box8').classList.remove('locked');
    box8Locked = false;
    document.querySelector('.box9').classList.remove('x');
    document.querySelector('.box9').classList.remove('o');
    document.querySelector('.box9').classList.remove('locked');
    box9Locked = false;
    currentPlayer = 0;
    document.querySelector('.tiedOverlay').classList.add('hidden');
});

document.querySelector('.playerOneNameInput').addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
      playerOneName = document.querySelector('.playerOneNameInput').value;
      document.querySelector('.playerOne').textContent = playerOneName;
      document.querySelector('.playerOneOverlay').classList.add('hidden');
      document.querySelector('.playerTwoOverlay').classList.remove('hidden');
    }
});
document.querySelector('.playerTwoNameInput').addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
      playerTwoName = document.querySelector('.playerTwoNameInput').value;
      document.querySelector('.playerTwo').textContent = playerTwoName;
      document.querySelector('.playerTwoOverlay').classList.add('hidden');
    }
});

box1.addEventListener('click', function() {
    if (box1Locked) {
        alert("This box is locked!");
    } else {
        if (currentPlayer == 0) {
            box1.classList.add('x');
            box1.classList.add('locked');
            currentPlayer = 1;
            box1Locked = true;
            box1lockedto = 0;
        } else {
            box1.classList.add('o');
            box1.classList.add('locked');
            currentPlayer = 0;
            box1Locked = true;
            box1lockedto = 1;
        }
    }
});
box2.addEventListener('click', function() {
    if (box2Locked) {
        alert("This box is locked!");
    } else {
        if (currentPlayer == 0) {
            box2.classList.add('x');
            box2.classList.add('locked');
            currentPlayer = 1;
            box2Locked = true;
            box2lockedto = 0;
        } else {
            box2.classList.add('o');
            box2.classList.add('locked');
            currentPlayer = 0;
            box2Locked = true;
            box2lockedto = 1;
        }
    }
});
box3.addEventListener('click', function() {
    if (box3Locked) {
        alert("This box is locked!");
    } else {
            if (currentPlayer == 0) {
            box3.classList.add('x');
            box3.classList.add('locked');
            currentPlayer = 1;
            box3Locked = true;
            box3lockedto = 0;
        } else {
            box3.classList.add('o');
            box3.classList.add('locked');
            currentPlayer = 0;
            box3Locked = true;
            box3lockedto = 1;
        }
    }
});
box4.addEventListener('click', function() {
    if (box4Locked) {
        alert("This box is locked!");
    } else {
        if (currentPlayer == 0) {
            box4.classList.add('x');
            box4.classList.add('locked');
            currentPlayer = 1;
            box4Locked = true;
            box4lockedto = 0;
        } else {
            box4.classList.add('o');
            box4.classList.add('locked');
            currentPlayer = 0;
            box4Locked = true;
            box4lockedto = 1;
        }
    }
});
box5.addEventListener('click', function() {
    if (box5Locked) {
        alert("This box is locked!");
    } else {
        if (currentPlayer == 0) {
            box5.classList.add('x');
            box5.classList.add('locked');
            currentPlayer = 1;
            box5Locked = true;
            box5lockedto = 0;
        } else {
            box5.classList.add('o');
            box5.classList.add('locked');
            currentPlayer = 0;
            box5Locked = true;
            box5lockedto = 1;
        }
    }
});
box6.addEventListener('click', function() {
    if (box6Locked) {
        alert("This box is locked!");
    } else {
        if (currentPlayer == 0) {
            box6.classList.add('x');
            box6.classList.add('locked');
            currentPlayer = 1;
            box6Locked = true;
            box6lockedto = 0;
        } else {
            box6.classList.add('o');
            box6.classList.add('locked');
            currentPlayer = 0;
            box6Locked = true;
            box6lockedto = 1;
        }
    }
});
box7.addEventListener('click', function() {
    if (box7Locked) {
        alert("This box is locked!");
    } else {
        if (currentPlayer == 0) {
            box7.classList.add('x');
            box7.classList.add('locked');
            currentPlayer = 1;
            box7Locked = true;
            box7lockedto = 0;
        } else {
            box7.classList.add('o');
            box7.classList.add('locked');
            currentPlayer = 0;
            box7Locked = true;
            box7lockedto = 1;
        }
    }
});
box8.addEventListener('click', function() {
    if (box8Locked) {
        alert("This box is locked!");
    } else {
        if (currentPlayer == 0) {
            box8.classList.add('x');
            box8.classList.add('locked');
            currentPlayer = 1;
            box8Locked = true;
            box8lockedto = 0;
        } else {
            box8.classList.add('o');
            box8.classList.add('locked');
            currentPlayer = 0;
            box8Locked = true;
            box8lockedto = 1;
        }
    }
});
box9.addEventListener('click', function() {
    if (box9Locked) {
        alert("This box is locked!");
    } else {
        if (currentPlayer == 0) {
            box9.classList.add('x');
            box9.classList.add('locked');
            currentPlayer = 1;
            box9Locked = true;
            box9lockedto = 0;
        } else {
            box9.classList.add('o');
            box9.classList.add('locked');
            currentPlayer = 0;
            box9Locked = true;
            box9lockedto = 1;
        }
    }
});
document.querySelector('.tictactoe').addEventListener('mouseover', function() {
    if (box1lockedto === 0 && box2lockedto === 0 && box3lockedto === 0) {
        document.querySelector('.winnerOverlay').classList.remove('hidden');
        document.querySelector('.winner').textContent = playerOneName;
        currentGameWinner = playerOneName;
    } else if (box1lockedto === 1 && box2lockedto === 1 && box3lockedto === 1) {
        document.querySelector('.winnerOverlay').classList.remove('hidden');
        document.querySelector('.winner').textContent = playerTwoName;
        currentGameWinner = playerTwoName;
    } else if (box1lockedto === 0 && box4lockedto === 0 && box7lockedto === 0) {
        document.querySelector('.winnerOverlay').classList.remove('hidden');
        document.querySelector('.winner').textContent = playerOneName;
        currentGameWinner = playerOneName;
    } else if (box1lockedto === 1 && box4lockedto === 1 && box7lockedto === 1) {
        document.querySelector('.winnerOverlay').classList.remove('hidden');
        document.querySelector('.winner').textContent = playerTwoName;
        currentGameWinner = playerTwoName;
    } else if (box1lockedto === 0 && box5lockedto === 0 && box9lockedto === 0) {
        document.querySelector('.winnerOverlay').classList.remove('hidden');
        document.querySelector('.winner').textContent = playerOneName;
        currentGameWinner = playerOneName;
    } else if (box1lockedto === 1 && box5lockedto === 1 && box9lockedto === 1) {
        document.querySelector('.winnerOverlay').classList.remove('hidden');
        document.querySelector('.winner').textContent = playerTwoName;
        currentGameWinner = playerTwoName;
    } else if (box4lockedto === 0 && box5lockedto === 0 && box6lockedto === 0) {
        document.querySelector('.winnerOverlay').classList.remove('hidden');
        document.querySelector('.winner').textContent = playerOneName;
        currentGameWinner = playerOneName;
    } else if (box4lockedto === 1 && box5lockedto === 1 && box6lockedto === 1) {
        document.querySelector('.winnerOverlay').classList.remove('hidden');
        document.querySelector('.winner').textContent = playerTwoName;
        currentGameWinner = playerTwoName;
    } else if (box7lockedto === 0 && box8lockedto === 0 && box9lockedto === 0) {
        document.querySelector('.winnerOverlay').classList.remove('hidden');
        document.querySelector('.winner').textContent = playerOneName;
        currentGameWinner = playerOneName;
    } else if (box7lockedto === 1 && box8lockedto === 1 && box9lockedto === 1) {
        document.querySelector('.winnerOverlay').classList.remove('hidden');
        document.querySelector('.winner').textContent = playerTwoName;
        currentGameWinner = playerTwoName;
    } else if (box2lockedto === 0 && box5lockedto === 0 && box8lockedto === 0) {
        document.querySelector('.winnerOverlay').classList.remove('hidden');
        document.querySelector('.winner').textContent = playerOneName;
        currentGameWinner = playerOneName;
    } else if (box2lockedto === 1 && box5lockedto === 1 && box8lockedto === 1) {
        document.querySelector('.winnerOverlay').classList.remove('hidden');
        document.querySelector('.winner').textContent = playerTwoName;
        currentGameWinner = playerTwoName;
    } else if (box3lockedto === 0 && box6lockedto === 0 && box9lockedto === 0) {
        document.querySelector('.winnerOverlay').classList.remove('hidden');
        document.querySelector('.winner').textContent = playerOneName;
        currentGameWinner = playerOneName;
    } else if (box3lockedto === 1 && box6lockedto === 1 && box9lockedto === 1) {
        document.querySelector('.winnerOverlay').classList.remove('hidden');
        document.querySelector('.winner').textContent = playerTwoName;
        currentGameWinner = playerTwoName;
    } else if (box7lockedto === 0 && box5lockedto === 0 && box3lockedto === 0) {
        document.querySelector('.winnerOverlay').classList.remove('hidden');
        document.querySelector('.winner').textContent = playerOneName;
        currentGameWinner = playerOneName;
    } else if (box7lockedto === 1 && box5lockedto === 1 && box3lockedto === 1) {
        document.querySelector('.winnerOverlay').classList.remove('hidden');
        document.querySelector('.winner').textContent = playerTwoName;
        currentGameWinner = playerTwoName;
    }
    document.querySelector('.playerOneTotalWins').textContent = playerOneTotalWins;
    document.querySelector('.playerTwoTotalWins').textContent = playerTwoTotalWins;
    if (box1Locked === true && box2Locked === true && box3Locked === true && box4Locked === true && box5Locked === true && box6Locked === true && box7Locked === true && box8Locked === true && box9Locked === true) {
        document.querySelector('.tiedOverlay').classList.remove('hidden');
    }
});
document.querySelector('.playerOneTotalWins').textContent = playerOneTotalWins;
document.querySelector('.playerTwoTotalWins').textContent = playerTwoTotalWins;