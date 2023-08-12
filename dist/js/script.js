document.body.addEventListener('touchstart', function(e) {});
document.addEventListener('DOMContentLoaded', function () {
    const box1 = document.querySelector('.box1');
    const box2 = document.querySelector('.box2');
    const box3 = document.querySelector('.box3');
    const box4 = document.querySelector('.box4');
    const box5 = document.querySelector('.box5');
    const box6 = document.querySelector('.box6');
    const box7 = document.querySelector('.box7');
    const box8 = document.querySelector('.box8');
    const box9 = document.querySelector('.box9');
    const playerOneWrapper = document.querySelector('.playerOneWrapper');
    const playerTwoWrapper = document.querySelector('.playerTwoWrapper');
    let onePlayer = false;
    let twoPlayer = true;
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
    const winnerOverlay = document.querySelector('.winnerOverlay');
    const winner = document.querySelector('.winner');

    function clearBoxOne() {
        box1.classList.remove('x');
        box1.classList.remove('o');
        box1.classList.remove('locked');
        box1Locked = false;
    }
    function clearBoxTwo() {
        box2.classList.remove('x');
        box2.classList.remove('o');
        box2.classList.remove('locked');
        box2Locked = false;
    }
    function clearBoxThree() {
        box3.classList.remove('x');
        box3.classList.remove('o');
        box3.classList.remove('locked');
        box3Locked = false;
    }
    function clearBoxFour() {
        box4.classList.remove('x');
        box4.classList.remove('o');
        box4.classList.remove('locked');
        box4Locked = false;
    }
    function clearBoxFive() {
        box5.classList.remove('x');
        box5.classList.remove('o');
        box5.classList.remove('locked');
        box5Locked = false;
    }
    function clearBoxSix() {
        box6.classList.remove('x');
        box6.classList.remove('o');
        box6.classList.remove('locked');
        box6Locked = false;
    }
    function clearBoxSeven() {
        box7.classList.remove('x');
        box7.classList.remove('o');
        box7.classList.remove('locked');
        box7Locked = false;
    }
    function clearBoxEight() {
        box8.classList.remove('x');
        box8.classList.remove('o');
        box8.classList.remove('locked');
        box8Locked = false;
    }
    function clearBoxNine() {
        box9.classList.remove('x');
        box9.classList.remove('o');
        box9.classList.remove('locked');
        box9Locked = false;
    }

    function playerOneIsTheWinner() {
        playerOneTotalWins++;
        winnerOverlay.classList.remove('hidden');
        winner.textContent = playerOneName;
        box1lockedto = open;
        box2lockedto = open;
        box3lockedto = open;
        box4lockedto = open;
        box5lockedto = open;
        box6lockedto = open;
        box7lockedto = open;
        box8lockedto = open;
        box9lockedto = open;
        clearBoxOne();
        clearBoxTwo();
        clearBoxThree();
        clearBoxFour();
        clearBoxFive();
        clearBoxSix();
        clearBoxSeven();
        clearBoxEight();
        clearBoxNine();
        currentGameWinner = playerOneName;
        currentPlayer = 0;
    }
    function playerTwoIsTheWinner() {
        playerTwoTotalWins++;
        document.querySelector('.winnerOverlay').classList.remove('hidden');
        document.querySelector('.winner').textContent = playerTwoName;
        box1lockedto = open;
        box2lockedto = open;
        box3lockedto = open;
        box4lockedto = open;
        box5lockedto = open;
        box6lockedto = open;
        box7lockedto = open;
        box8lockedto = open;
        box9lockedto = open;
        clearBoxOne();
        clearBoxTwo();
        clearBoxThree();
        clearBoxFour();
        clearBoxFive();
        clearBoxSix();
        clearBoxSeven();
        clearBoxEight();
        clearBoxNine();
        currentGameWinner = playerTwoName;
        currentPlayer = 1;
        
    }

    // Player Mode select
    /*document.querySelector('.onePlayerModeButton').addEventListener('click', function () {
        document.querySelector('.playerModeOverlay').classList.add('hidden');
        document.querySelector('.playerOneOverlay').classList.remove('hidden');
        document.getElementById('playerOneNameInput').focus();
        onePlayer = true;
        twoPlayer = false;
    });*/
    document.querySelector('.twoPlayerModeButton').addEventListener('click', activateTwoPlayerMode);
    document.querySelector('.twoPlayerModeButton').addEventListener('touchstart', activateTwoPlayerMode);

    function activateTwoPlayerMode() {
        document.querySelector('.playerModeOverlay').classList.add('hidden');
        document.querySelector('.playerOneOverlay').classList.remove('hidden');
        document.getElementById('playerOneNameInput').focus();
        onePlayer = false;
        twoPlayer = true;
    }


    // Settings Overlay Toggle
    const gear = document.querySelector('.gearButtonWrapper');
    const settings = document.querySelector('.settingsOverlay');
    const closeSettings = document.querySelector('.closeSettingsOverlay');
    gear.addEventListener('click', function () {
        settings.classList.remove('hidden')
    });
    closeSettings.addEventListener('click', function () {
        settings.classList.add('hidden')
    });
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
    };

    // Randomize background
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
    }

    // Background select
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

    // When the game is won by any of the players
    document.querySelector('.close').addEventListener('click', function () {
        // Sets all of the boxes to unlocked
        /*box1lockedto = open;
        box2lockedto = open;
        box3lockedto = open;
        box4lockedto = open;
        box5lockedto = open;
        box6lockedto = open;
        box7lockedto = open;
        box8lockedto = open;
        box9lockedto = open;*/
        // Adds "1" to the winner's Total Wins
        /*if (currentGameWinner == playerOneName) {
            //playerOneTotalWins++;
            //currentPlayer = 0;
            document.querySelector('.playerOneWrapper').classList.remove('current');
            document.querySelector('.playerTwoWrapper').classList.remove('current');
            document.querySelector('.playerOneWrapper').classList.add('current');
        } else if (currentGameWinner == playerTwoName) {
            //playerTwoTotalWins++;
            //currentPlayer = 1;
            document.querySelector('.playerOneWrapper').classList.remove('current');
            document.querySelector('.playerTwoWrapper').classList.remove('current');
            document.querySelector('.playerTwoWrapper').classList.add('current');
        }*/
        // Hides the Winner overlay
        document.querySelector('.winnerOverlay').classList.add('hidden');
        // Removes all of the x's and o's from all 9 boxes and removes the "locked" class
        /*clearBoxOne();
        clearBoxTwo();
        clearBoxThree();
        clearBoxFour();
        clearBoxFive();
        clearBoxSix();
        clearBoxSeven();
        clearBoxEight();
        clearBoxNine();*/
    });
    // When the game is tied
    document.querySelector('.closeNoWinner').addEventListener('click', function () {
        // Sets all of the boxes to unlocked
        box1lockedto = open;
        box2lockedto = open;
        box3lockedto = open;
        box4lockedto = open;
        box5lockedto = open;
        box6lockedto = open;
        box7lockedto = open;
        box8lockedto = open;
        box9lockedto = open;
        // Removes all of the x's and o's from all 9 boxes and removes the "locked" class
        clearBoxOne();
        clearBoxTwo();
        clearBoxThree();
        clearBoxFour();
        clearBoxFive();
        clearBoxSix();
        clearBoxSeven();
        clearBoxEight();
        clearBoxNine();
        // Sets current player to Player 1
        //currentPlayer = 0;
        // Hides the "There is no winner" dialogue
        document.querySelector('.tiedOverlay').classList.add('hidden');
    });


    // When the Reset button is clicked
    document.querySelector('.resetButton').addEventListener('click', function () {
        // Sets all of the boxes to unlocked
        box1lockedto = open;
        box2lockedto = open;
        box3lockedto = open;
        box4lockedto = open;
        box5lockedto = open;
        box6lockedto = open;
        box7lockedto = open;
        box8lockedto = open;
        box9lockedto = open;
        // Removes all of the x's and o's from all 9 boxes and removes the "locked" class
        clearBoxOne();
        clearBoxTwo();
        clearBoxThree();
        clearBoxFour();
        clearBoxFive();
        clearBoxSix();
        clearBoxSeven();
        clearBoxEight();
        clearBoxNine();
        // Sets current player to Player 1
        currentPlayer = 0;
        // Resets the Total Wins for both players back to zero
        playerOneTotalWins = 0;
        playerTwoTotalWins = 0;
        document.querySelector('.playerOneTotalWins').textContent = playerOneTotalWins;
        document.querySelector('.playerTwoTotalWins').textContent = playerTwoTotalWins;
        document.querySelector('.playerModeOverlay').classList.remove('hidden');
        document.querySelector('.settingsOverlay').classList.add('hidden');
    });

    // Player One name input
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
    document.querySelector('.playerTwoNameInput').addEventListener('keypress', function (e) {
        // If enter key is pressed
        if (e.key === 'Enter') {
            playerTwoName = document.querySelector('.playerTwoNameInput').value;
            document.querySelector('.playerTwo').textContent = playerTwoName;
            document.querySelector('.playerTwoOverlay').classList.add('hidden');
        }
    });

    // If box has already been selected
    /*box1.addEventListener('click', function () {
        if (box1Locked) {
            alert("This box is locked!");
        } else {
            if (currentPlayer == 0) {
                box1.classList.add('x');
                box1.classList.add('locked');
                currentPlayer = 1;
                box1Locked = true;
                box1lockedto = 0;
                playerOneWrapper.classList.remove('current');
                playerTwoWrapper.classList.add('current');
            } else {
                box1.classList.add('o');
                box1.classList.add('locked');
                currentPlayer = 0;
                box1Locked = true;
                box1lockedto = 1;
                playerOneWrapper.classList.add('current');
                playerTwoWrapper.classList.remove('current');
            }
        }
        findWinner();
    });
    box2.addEventListener('click', function () {
        if (box2Locked) {
            alert("This box is locked!");
        } else {
            if (currentPlayer == 0) {
                box2.classList.add('x');
                box2.classList.add('locked');
                currentPlayer = 1;
                box2Locked = true;
                box2lockedto = 0;
                playerOneWrapper.classList.remove('current');
                playerTwoWrapper.classList.add('current');
            } else {
                box2.classList.add('o');
                box2.classList.add('locked');
                currentPlayer = 0;
                box2Locked = true;
                box2lockedto = 1;
                playerOneWrapper.classList.add('current');
                playerTwoWrapper.classList.remove('current');
            }
        }
        findWinner();
    });
    box3.addEventListener('click', function () {
        if (box3Locked) {
            alert("This box is locked!");
        } else {
            if (currentPlayer == 0) {
                box3.classList.add('x');
                box3.classList.add('locked');
                currentPlayer = 1;
                box3Locked = true;
                box3lockedto = 0;
                playerOneWrapper.classList.remove('current');
                playerTwoWrapper.classList.add('current');
            } else {
                box3.classList.add('o');
                box3.classList.add('locked');
                currentPlayer = 0;
                box3Locked = true;
                box3lockedto = 1;
                playerOneWrapper.classList.add('current');
                playerTwoWrapper.classList.remove('current');
            }
        }
        findWinner();
    });
    box4.addEventListener('click', function () {
        if (box4Locked) {
            alert("This box is locked!");
        } else {
            if (currentPlayer == 0) {
                box4.classList.add('x');
                box4.classList.add('locked');
                currentPlayer = 1;
                box4Locked = true;
                box4lockedto = 0;
                playerOneWrapper.classList.remove('current');
                playerTwoWrapper.classList.add('current');
            } else {
                box4.classList.add('o');
                box4.classList.add('locked');
                currentPlayer = 0;
                box4Locked = true;
                box4lockedto = 1;
                playerOneWrapper.classList.add('current');
                playerTwoWrapper.classList.remove('current');
            }
        }
        findWinner();
    });
    box5.addEventListener('click', function () {
        if (box5Locked) {
            alert("This box is locked!");
        } else {
            if (currentPlayer == 0) {
                box5.classList.add('x');
                box5.classList.add('locked');
                currentPlayer = 1;
                box5Locked = true;
                box5lockedto = 0;
                playerOneWrapper.classList.remove('current');
                playerTwoWrapper.classList.add('current');
            } else {
                box5.classList.add('o');
                box5.classList.add('locked');
                currentPlayer = 0;
                box5Locked = true;
                box5lockedto = 1;
                playerOneWrapper.classList.add('current');
                playerTwoWrapper.classList.remove('current');
            }
        }
        findWinner();
    });
    box6.addEventListener('click', function () {
        if (box6Locked) {
            alert("This box is locked!");
        } else {
            if (currentPlayer == 0) {
                box6.classList.add('x');
                box6.classList.add('locked');
                currentPlayer = 1;
                box6Locked = true;
                box6lockedto = 0;
                playerOneWrapper.classList.remove('current');
                playerTwoWrapper.classList.add('current');
            } else {
                box6.classList.add('o');
                box6.classList.add('locked');
                currentPlayer = 0;
                box6Locked = true;
                box6lockedto = 1;
                playerOneWrapper.classList.add('current');
                playerTwoWrapper.classList.remove('current');
            }
        }
        findWinner();
    });
    box7.addEventListener('click', function () {
        if (box7Locked) {
            alert("This box is locked!");
        } else {
            if (currentPlayer == 0) {
                box7.classList.add('x');
                box7.classList.add('locked');
                currentPlayer = 1;
                box7Locked = true;
                box7lockedto = 0;
                playerOneWrapper.classList.remove('current');
                playerTwoWrapper.classList.add('current');
            } else {
                box7.classList.add('o');
                box7.classList.add('locked');
                currentPlayer = 0;
                box7Locked = true;
                box7lockedto = 1;
                playerOneWrapper.classList.add('current');
                playerTwoWrapper.classList.remove('current');
            }
        }
        findWinner();
    });
    box8.addEventListener('click', function () {
        if (box8Locked) {
            alert("This box is locked!");
        } else {
            if (currentPlayer == 0) {
                box8.classList.add('x');
                box8.classList.add('locked');
                currentPlayer = 1;
                box8Locked = true;
                box8lockedto = 0;
                playerOneWrapper.classList.remove('current');
                playerTwoWrapper.classList.add('current');
            } else {
                box8.classList.add('o');
                box8.classList.add('locked');
                currentPlayer = 0;
                box8Locked = true;
                box8lockedto = 1;
                playerOneWrapper.classList.add('current');
                playerTwoWrapper.classList.remove('current');
            }
        }
        findWinner();
    });
    box9.addEventListener('click', function () {
        if (box9Locked) {
            alert("This box is locked!");
        } else {
            if (currentPlayer == 0) {
                box9.classList.add('x');
                box9.classList.add('locked');
                currentPlayer = 1;
                box9Locked = true;
                box9lockedto = 0;
                playerOneWrapper.classList.remove('current');
                playerTwoWrapper.classList.add('current');
            } else {
                box9.classList.add('o');
                box9.classList.add('locked');
                currentPlayer = 0;
                box9Locked = true;
                box9lockedto = 1;
                playerOneWrapper.classList.add('current');
                playerTwoWrapper.classList.remove('current');
            }
        }
        findWinner();
    });*/


    // Start listening for Three In A Row and attributes that to the winner
    function findWinner() {
        if (box1lockedto === 0 && box2lockedto === 0 && box3lockedto === 0) {
            playerOneIsTheWinner();
        } else if (box1lockedto === 1 && box2lockedto === 1 && box3lockedto === 1) {
            playerTwoIsTheWinner();
        } else if (box1lockedto === 0 && box4lockedto === 0 && box7lockedto === 0) {
            playerOneIsTheWinner();
        } else if (box1lockedto === 1 && box4lockedto === 1 && box7lockedto === 1) {
            playerTwoIsTheWinner();
        } else if (box1lockedto === 0 && box5lockedto === 0 && box9lockedto === 0) {
            playerOneIsTheWinner();
        } else if (box1lockedto === 1 && box5lockedto === 1 && box9lockedto === 1) {
            playerTwoIsTheWinner();
        } else if (box4lockedto === 0 && box5lockedto === 0 && box6lockedto === 0) {
            playerOneIsTheWinner();
        } else if (box4lockedto === 1 && box5lockedto === 1 && box6lockedto === 1) {
            playerTwoIsTheWinner();
        } else if (box7lockedto === 0 && box8lockedto === 0 && box9lockedto === 0) {
            playerOneIsTheWinner();
        } else if (box7lockedto === 1 && box8lockedto === 1 && box9lockedto === 1) {
            playerTwoIsTheWinner();
        } else if (box2lockedto === 0 && box5lockedto === 0 && box8lockedto === 0) {
            playerOneIsTheWinner();
        } else if (box2lockedto === 1 && box5lockedto === 1 && box8lockedto === 1) {
            playerTwoIsTheWinner();
        } else if (box3lockedto === 0 && box6lockedto === 0 && box9lockedto === 0) {
            playerOneIsTheWinner();
        } else if (box3lockedto === 1 && box6lockedto === 1 && box9lockedto === 1) {
            playerTwoIsTheWinner();
        } else if (box7lockedto === 0 && box5lockedto === 0 && box3lockedto === 0) {
            playerOneIsTheWinner();
        } else if (box7lockedto === 1 && box5lockedto === 1 && box3lockedto === 1) {
            playerTwoIsTheWinner();
        }
    }
    /*document.querySelector('.tictactoe').addEventListener('mouseover', function () {
        findWinner();
        document.querySelector('.playerOneTotalWins').textContent = playerOneTotalWins;
        document.querySelector('.playerTwoTotalWins').textContent = playerTwoTotalWins;
    });*/

    // Start Touch
    let boxOneTouchRegion = box1;
    let boxTwoTouchRegion = box2;
    let boxThreeTouchRegion = box3;
    let boxFourTouchRegion = box4;
    let boxFiveTouchRegion = box5;
    let boxSixTouchRegion = box6;
    let boxSevenTouchRegion = box7;
    let boxEightTouchRegion = box8;
    let boxNineTouchRegion = box9;

    boxOneTouchRegion.addEventListener('touchstart', function(e) {
        if (box1Locked) {
            alert("This box is locked!");
        } else {
            if (currentPlayer == 0) {
                box1.classList.add('x');
                box1.classList.add('locked');
                currentPlayer = 1;
                box1Locked = true;
                box1lockedto = 0;
                playerOneWrapper.classList.remove('current');
                playerTwoWrapper.classList.add('current');
            } else {
                box1.classList.add('o');
                box1.classList.add('locked');
                currentPlayer = 0;
                box1Locked = true;
                box1lockedto = 1;
                playerOneWrapper.classList.add('current');
                playerTwoWrapper.classList.remove('current');
            }
        }
        findWinner();
    });
    boxTwoTouchRegion.addEventListener('touchstart', function(e) {
        if (box2Locked) {
            alert("This box is locked!");
        } else {
            if (currentPlayer == 0) {
                box2.classList.add('x');
                box2.classList.add('locked');
                currentPlayer = 1;
                box2Locked = true;
                box2lockedto = 0;
                playerOneWrapper.classList.remove('current');
                playerTwoWrapper.classList.add('current');
            } else {
                box2.classList.add('o');
                box2.classList.add('locked');
                currentPlayer = 0;
                box2Locked = true;
                box2lockedto = 1;
                playerOneWrapper.classList.add('current');
                playerTwoWrapper.classList.remove('current');
            }
        }
        findWinner();
    });
    boxThreeTouchRegion.addEventListener('touchstart', function(e) {
        if (box3Locked) {
            alert("This box is locked!");
        } else {
            if (currentPlayer == 0) {
                box3.classList.add('x');
                box3.classList.add('locked');
                currentPlayer = 1;
                box3Locked = true;
                box3lockedto = 0;
                playerOneWrapper.classList.remove('current');
                playerTwoWrapper.classList.add('current');
            } else {
                box3.classList.add('o');
                box3.classList.add('locked');
                currentPlayer = 0;
                box3Locked = true;
                box3lockedto = 1;
                playerOneWrapper.classList.add('current');
                playerTwoWrapper.classList.remove('current');
            }
        }
        findWinner();
    });
    boxFourTouchRegion.addEventListener('touchstart', function(e) {
        if (box4Locked) {
            alert("This box is locked!");
        } else {
            if (currentPlayer == 0) {
                box4.classList.add('x');
                box4.classList.add('locked');
                currentPlayer = 1;
                box4Locked = true;
                box4lockedto = 0;
                playerOneWrapper.classList.remove('current');
                playerTwoWrapper.classList.add('current');
            } else {
                box4.classList.add('o');
                box4.classList.add('locked');
                currentPlayer = 0;
                box4Locked = true;
                box4lockedto = 1;
                playerOneWrapper.classList.add('current');
                playerTwoWrapper.classList.remove('current');
            }
        }
        findWinner();
    });
    boxFiveTouchRegion.addEventListener('touchstart', function(e) {
        if (box5Locked) {
            alert("This box is locked!");
        } else {
            if (currentPlayer == 0) {
                box5.classList.add('x');
                box5.classList.add('locked');
                currentPlayer = 1;
                box5Locked = true;
                box5lockedto = 0;
                playerOneWrapper.classList.remove('current');
                playerTwoWrapper.classList.add('current');
            } else {
                box5.classList.add('o');
                box5.classList.add('locked');
                currentPlayer = 0;
                box5Locked = true;
                box5lockedto = 1;
                playerOneWrapper.classList.add('current');
                playerTwoWrapper.classList.remove('current');
            }
        }
        findWinner();
    });
    boxSixTouchRegion.addEventListener('touchstart', function(e) {
        if (box6Locked) {
            alert("This box is locked!");
        } else {
            if (currentPlayer == 0) {
                box6.classList.add('x');
                box6.classList.add('locked');
                currentPlayer = 1;
                box6Locked = true;
                box6lockedto = 0;
                playerOneWrapper.classList.remove('current');
                playerTwoWrapper.classList.add('current');
            } else {
                box6.classList.add('o');
                box6.classList.add('locked');
                currentPlayer = 0;
                box6Locked = true;
                box6lockedto = 1;
                playerOneWrapper.classList.add('current');
                playerTwoWrapper.classList.remove('current');
            }
        }
        findWinner();
    });
    boxSevenTouchRegion.addEventListener('touchstart', function(e) {
        if (box7Locked) {
            alert("This box is locked!");
        } else {
            if (currentPlayer == 0) {
                box7.classList.add('x');
                box7.classList.add('locked');
                currentPlayer = 1;
                box7Locked = true;
                box7lockedto = 0;
                playerOneWrapper.classList.remove('current');
                playerTwoWrapper.classList.add('current');
            } else {
                box7.classList.add('o');
                box7.classList.add('locked');
                currentPlayer = 0;
                box7Locked = true;
                box7lockedto = 1;
                playerOneWrapper.classList.add('current');
                playerTwoWrapper.classList.remove('current');
            }
        }
        findWinner();
    });
    boxEightTouchRegion.addEventListener('touchstart', function(e) {
        if (box8Locked) {
            alert("This box is locked!");
        } else {
            if (currentPlayer == 0) {
                box8.classList.add('x');
                box8.classList.add('locked');
                currentPlayer = 1;
                box8Locked = true;
                box8lockedto = 0;
                playerOneWrapper.classList.remove('current');
                playerTwoWrapper.classList.add('current');
            } else {
                box8.classList.add('o');
                box8.classList.add('locked');
                currentPlayer = 0;
                box8Locked = true;
                box8lockedto = 1;
                playerOneWrapper.classList.add('current');
                playerTwoWrapper.classList.remove('current');
            }
        }
        findWinner();
    });
    boxNineTouchRegion.addEventListener('touchstart', function(e) {
        if (box9Locked) {
            alert("This box is locked!");
        } else {
            if (currentPlayer == 0) {
                box9.classList.add('x');
                box9.classList.add('locked');
                currentPlayer = 1;
                box9Locked = true;
                box9lockedto = 0;
                playerOneWrapper.classList.remove('current');
                playerTwoWrapper.classList.add('current');
            } else {
                box9.classList.add('o');
                box9.classList.add('locked');
                currentPlayer = 0;
                box9Locked = true;
                box9lockedto = 1;
                playerOneWrapper.classList.add('current');
                playerTwoWrapper.classList.remove('current');
            }
        }
        findWinner();
    });

    /*touchRegionElement.addEventListener('touchend', function(e) {
        outputElement.innerHTML = 'Touch ends';
    });*/

    /*function touch() {
        const boxOneTouched = box1;
        const boxTwoTouched = box2;
        boxOneTouched.addEventListener("touchstart", alert("Box 1 Touched!"));
        boxTwoTouched.addEventListener("touchstart", alert("Box 2 Touched!"));    
    }
    document.addEventListener("DOMContentLoaded", touch);*/

    /*box1.addEventListener('touchstart', findWinner());
    box2.addEventListener('touchstart', findWinner());
    box3.addEventListener('touchstart', findWinner());
    box4.addEventListener('touchstart', findWinner());
    box5.addEventListener('touchstart', findWinner());
    box6.addEventListener('touchstart', findWinner());
    box7.addEventListener('touchstart', findWinner());
    box8.addEventListener('touchstart', findWinner());
    box9.addEventListener('touchstart', findWinner());*/

    // End listening for Three In A Row and attributes that to the winner

    // If all boxes are filled but there is no match
    /*document.querySelector('.tictactoe').addEventListener('mouseover', function () {
        if (box1Locked === true && box2Locked === true && box3Locked === true && box4Locked === true && box5Locked === true && box6Locked === true && box7Locked === true && box8Locked === true && box9Locked === true) {
            if (box1lockedto === 0 && box2lockedto === 0 && box3lockedto === 0) {
                playerOneIsTheWinner();
            } else if (box1lockedto === 1 && box2lockedto === 1 && box3lockedto === 1) {
                playerTwoIsTheWinner();
            } else if (box1lockedto === 0 && box4lockedto === 0 && box7lockedto === 0) {
                playerOneIsTheWinner();
            } else if (box1lockedto === 1 && box4lockedto === 1 && box7lockedto === 1) {
                playerTwoIsTheWinner();
            } else if (box1lockedto === 0 && box5lockedto === 0 && box9lockedto === 0) {
                playerOneIsTheWinner();
            } else if (box1lockedto === 1 && box5lockedto === 1 && box9lockedto === 1) {
                playerTwoIsTheWinner();
            } else if (box4lockedto === 0 && box5lockedto === 0 && box6lockedto === 0) {
                playerOneIsTheWinner();
            } else if (box4lockedto === 1 && box5lockedto === 1 && box6lockedto === 1) {
                playerTwoIsTheWinner();
            } else if (box7lockedto === 0 && box8lockedto === 0 && box9lockedto === 0) {
                playerOneIsTheWinner();
            } else if (box7lockedto === 1 && box8lockedto === 1 && box9lockedto === 1) {
                playerTwoIsTheWinner();
            } else if (box2lockedto === 0 && box5lockedto === 0 && box8lockedto === 0) {
                playerOneIsTheWinner();
            } else if (box2lockedto === 1 && box5lockedto === 1 && box8lockedto === 1) {
                playerTwoIsTheWinner();
            } else if (box3lockedto === 0 && box6lockedto === 0 && box9lockedto === 0) {
                playerOneIsTheWinner();
            } else if (box3lockedto === 1 && box6lockedto === 1 && box9lockedto === 1) {
                playerTwoIsTheWinner();
            } else if (box7lockedto === 0 && box5lockedto === 0 && box3lockedto === 0) {
                playerOneIsTheWinner();
            } else if (box7lockedto === 1 && box5lockedto === 1 && box3lockedto === 1) {
                playerTwoIsTheWinner();
            } else {
                document.querySelector('.tiedOverlay').classList.remove('hidden');
                currentPlayer = 0;
            }
        }
    });*/

    // Disable pinch zoom
    document.addEventListener('touchmove', function (event) {
        if (event.scale !== 1) { event.preventDefault(); }
    }, false);
});