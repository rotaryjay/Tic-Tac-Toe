//document.body.addEventListener('touchstart', function(e) {});
document.addEventListener('DOMContentLoaded', function () {

    let openBoxes = ['1','2','3','4','5','6','7','8','9'];

    /* ------------------------------------------------------------------------------------------ */
    /* Start One or Two Player Mode Selection */
    /* ------------------------------------------------------------------------------------------ */
    
    // Variables for game state: 1 Player or 2 Player
    let onePlayer = false;
    let twoPlayer = false;

    // One or Two Player Modes 
    const onePlayerModeButton = document.querySelector('.onePlayerModeButton');
    const twoPlayerModeButton = document.querySelector('.twoPlayerModeButton');

    onePlayerModeButton.addEventListener('click', activateOnePlayerMode);
    twoPlayerModeButton.addEventListener('click', activateTwoPlayerMode);
    

    function activateOnePlayerMode() {
        document.querySelector('.playerModeOverlay').classList.add('hidden');
        document.querySelector('.playerOneOverlay').classList.remove('hidden');
        document.getElementById('playerOneNameInput').focus();
        onePlayer = true;
        twoPlayer = false;

        playerModes();
    }

    function activateTwoPlayerMode() {
        document.querySelector('.playerModeOverlay').classList.add('hidden');
        document.querySelector('.playerOneOverlay').classList.remove('hidden');
        document.getElementById('playerOneNameInput').focus();
        onePlayer = false;
        twoPlayer = true;
        playerModes();
    }

    /* ------------------------------------------------------------------------------------------ */
    /* End One or Two Player Mode Selection */
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

    // Variables to control whether the boxes are locked or not
    let box1Locked = false;
    let box2Locked = false;
    let box3Locked = false;
    let box4Locked = false;
    let box5Locked = false;
    let box6Locked = false;
    let box7Locked = false;
    let box8Locked = false;
    let box9Locked = false;
    // Sets who the boxes are locked to 
    let box1lockedto = open;
    let box2lockedto = open;
    let box3lockedto = open;
    let box4lockedto = open;
    let box5lockedto = open;
    let box6lockedto = open;
    let box7lockedto = open;
    let box8lockedto = open;
    let box9lockedto = open;

    // Box clearing when game is won or tied
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

    // Unlock boxes
    function unlockBoxes() {
        box1lockedto = open;
        box2lockedto = open;
        box3lockedto = open;
        box4lockedto = open;
        box5lockedto = open;
        box6lockedto = open;
        box7lockedto = open;
        box8lockedto = open;
        box9lockedto = open;
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
        playerOneTotalWins++;
        winnerOverlay.classList.remove('hidden');
        winner.textContent = playerOneName;
        currentGameWinner = playerOneName;
        currentPlayer = 0;
        playerOneWrapper.classList.remove('current');
        playerTwoWrapper.classList.remove('current');
        playerOneWrapper.classList.add('current');
        playerOneTotalWinsDiv.textContent = playerOneTotalWins;
        openBoxes = ['1','2','3','4','5','6','7','8','9'];
    }
    // When player two wins
    function playerTwoIsTheWinner() {
        playerTwoTotalWins++;
        document.querySelector('.winnerOverlay').classList.remove('hidden');
        document.querySelector('.winner').textContent = playerTwoName;
        currentGameWinner = playerTwoName;
        currentPlayer = 1;
        playerOneWrapper.classList.remove('current');
        playerTwoWrapper.classList.remove('current');
        playerTwoWrapper.classList.add('current');
        playerTwoTotalWinsDiv.textContent = playerTwoTotalWins;
        openBoxes = ['1','2','3','4','5','6','7','8','9'];
    }
    // No winner game reset
    function tiedGame() {
        unlockBoxes();
        clearBoxes();
        document.querySelector('.tiedOverlay').classList.add('hidden');
        openBoxes = ['1','2','3','4','5','6','7','8','9'];
    }
    function gameReset() {
        // Sets all of the boxes to unlocked
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
        openBoxes = ['1','2','3','4','5','6','7','8','9'];
    }

    /* Start close the winner dialogue */
    document.querySelector('.close').addEventListener('click', function () {
        unlockBoxes();
        clearBoxes();
        // Hides the Winner overlay
        document.querySelector('.winnerOverlay').classList.add('hidden');
    });
    /* End close the winner dialogue */

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

    /* ------------------------------------------------------------------------------------------ */
    /* End game winning steps */
    /* ------------------------------------------------------------------------------------------ */




    /* ------------------------------------------------------------------------------------------ */
    /* Start game tied steps */
    /* ------------------------------------------------------------------------------------------ */

    function findTie() {
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
    /* Start game play with touch */
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
        if (twoPlayer === true) {
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
                findTie();
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
                findTie();
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
                findTie();
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
                findTie();
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
                findTie();
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
                findTie();
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
                findTie();
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
                findTie();
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
                findTie();
            });
        } else if (onePlayer === true) {
            function randomBoxPicker() {
                return Math.floor(Math.random() * openBoxes.length);
            };
            //alert(openBoxes.length);
            //alert("The first random number is: " + randomBoxPicker());
            //let selectedItem = openBoxes[randomBoxPicker]; // Get the selected item
            // let itemToDelete = randomBoxPicker;
            //openBoxes.splice(randomBoxPicker, 1); // Remove the selected item from the array

            playerTwoName = 'A.I.';
            document.querySelector('.playerTwo').textContent = playerTwoName;
            // Player One name input
            document.querySelector('.playerOneNameInput').addEventListener('keypress', function (e) {
                // If enter key is pressed
                if (e.key === 'Enter') {
                    playerOneName = document.querySelector('.playerOneNameInput').value;
                    document.querySelector('.playerOne').textContent = playerOneName;
                    document.querySelector('.playerOneOverlay').classList.add('hidden');
                }
            });
            function ai() {
                currentPlayer = 1; // switch to player two
                playerOneWrapper.classList.remove('current');
                playerTwoWrapper.classList.add('current');
                let currentPickedNumberIndex = randomBoxPicker();
                //const currentPickedNumber = openBoxes[currentPickedNumberIndex];
                console.log("The array is: " + openBoxes);
                console.log("The random number picked from the array is: " + currentPickedNumberIndex);
                let currentBox = document.querySelector('.box' + openBoxes[`${currentPickedNumberIndex}`]);
                //console.log(currentBox);
                openBoxes.splice(openBoxes.indexOf('`${currentPickedNumber}`'), 1); // Remove the selected item from the array
                console.log("The array is now: " + openBoxes);
                console.log("And that number picked is: " + openBoxes[currentPickedNumberIndex]);
                currentBox.classList.add('o');
                currentBox.classList.add('locked');
                currentPlayer = 0; // switch to player one
            }
            boxOneTouchRegion.addEventListener('touchstart', function(e) {
                if (box1Locked) {
                    alert("This box is locked!");
                } else {
                    if (currentPlayer == 0) {
                        box1.classList.add('x'); // Add an x
                        box1.classList.add('locked'); // Add locked class to box DIV
                        box1Locked = true; // Lock the box variable
                        box1lockedto = 0; // Set the variable of who clicked the box
                        openBoxes.splice(openBoxes.indexOf('1'), 1); // Remove the selected item from the array
                        ai();
                    } 
                }
                findWinner();
                findTie();
            });
            boxTwoTouchRegion.addEventListener('touchstart', function(e) {
                if (box2Locked) {
                    alert("This box is locked!");
                } else {
                    if (currentPlayer == 0) {
                        box2.classList.add('x'); // Add an x
                        box2.classList.add('locked'); // Add locked class to box DIV
                        box2Locked = true; // Lock the box variable
                        box2lockedto = 0; // Set the variable of who clicked the box
                        openBoxes.splice(openBoxes.indexOf('2'), 1); // Remove the selected item from the array
                        ai();
                    } 
                }
                findWinner();
                findTie();
            });
            boxThreeTouchRegion.addEventListener('touchstart', function(e) {
                if (box3Locked) {
                    alert("This box is locked!");
                } else {
                    if (currentPlayer == 0) {
                        box3.classList.add('x'); // Add an x
                        box3.classList.add('locked'); // Add locked class to box DIV
                        box3Locked = true; // Lock the box variable
                        box3lockedto = 0; // Set the variable of who clicked the box
                        openBoxes.splice(openBoxes.indexOf('3'), 1); // Remove the selected item from the array
                        ai();
                    } 
                }
                findWinner();
                findTie();
            });
            boxFourTouchRegion.addEventListener('touchstart', function(e) {
                if (box4Locked) {
                    alert("This box is locked!");
                } else {
                    if (currentPlayer == 0) {
                        box4.classList.add('x'); // Add an x
                        box4.classList.add('locked'); // Add locked class to box DIV
                        box4Locked = true; // Lock the box variable
                        box4lockedto = 0; // Set the variable of who clicked the box
                        openBoxes.splice(openBoxes.indexOf('4'), 1); // Remove the selected item from the array
                        ai();
                    } 
                }
                findWinner();
                findTie();
            });
            boxFiveTouchRegion.addEventListener('touchstart', function(e) {
                if (box5Locked) {
                    alert("This box is locked!");
                } else {
                    if (currentPlayer == 0) {
                        box5.classList.add('x'); // Add an x
                        box5.classList.add('locked'); // Add locked class to box DIV
                        box5Locked = true; // Lock the box variable
                        box5lockedto = 0; // Set the variable of who clicked the box
                        openBoxes.splice(openBoxes.indexOf('5'), 1); // Remove the selected item from the array
                        ai();
                    } 
                }
                findWinner();
                findTie();
            });
            boxSixTouchRegion.addEventListener('touchstart', function(e) {
                if (box6Locked) {
                    alert("This box is locked!");
                } else {
                    if (currentPlayer == 0) {
                        box6.classList.add('x'); // Add an x
                        box6.classList.add('locked'); // Add locked class to box DIV
                        box6Locked = true; // Lock the box variable
                        box6lockedto = 0; // Set the variable of who clicked the box
                        openBoxes.splice(openBoxes.indexOf('6'), 1); // Remove the selected item from the array
                        ai();
                    } 
                }
                findWinner();
                findTie();
            });
            boxSevenTouchRegion.addEventListener('touchstart', function(e) {
                if (box7Locked) {
                    alert("This box is locked!");
                } else {
                    if (currentPlayer == 0) {
                        box7.classList.add('x'); // Add an x
                        box7.classList.add('locked'); // Add locked class to box DIV
                        box7Locked = true; // Lock the box variable
                        box7lockedto = 0; // Set the variable of who clicked the box
                        openBoxes.splice(openBoxes.indexOf('7'), 1); // Remove the selected item from the array
                        ai();
                    } 
                }
                findWinner();
                findTie();
            });
            boxEightTouchRegion.addEventListener('touchstart', function(e) {
                if (box8Locked) {
                    alert("This box is locked!");
                } else {
                    if (currentPlayer == 0) {
                        box8.classList.add('x'); // Add an x
                        box8.classList.add('locked'); // Add locked class to box DIV
                        box8Locked = true; // Lock the box variable
                        box8lockedto = 0; // Set the variable of who clicked the box
                        openBoxes.splice(openBoxes.indexOf('8'), 1); // Remove the selected item from the array
                        ai();
                    } 
                }
                findWinner();
                findTie();
            });
            boxNineTouchRegion.addEventListener('touchstart', function(e) {
                if (box9Locked) {
                    alert("This box is locked!");
                } else {
                    if (currentPlayer == 0) {
                        box9.classList.add('x'); // Add an x
                        box9.classList.add('locked'); // Add locked class to box DIV
                        box9Locked = true; // Lock the box variable
                        box9lockedto = 0; // Set the variable of who clicked the box
                        openBoxes.splice(openBoxes.indexOf('9'), 1); // Remove the selected item from the array
                        ai();
                    } 
                }
                findWinner();
                findTie();
            });
        }  
    }

    /* ------------------------------------------------------------------------------------------ */
    /* End game play with touch */
    /* ------------------------------------------------------------------------------------------ */




    // Disable pinch zoom
    document.addEventListener('touchmove', function (event) {
        if (event.scale !== 1) { event.preventDefault(); }
    }, false);
});













/* ------------------------------------------------------------------------------------------ */
/* Start old code I may reuse */
/* ------------------------------------------------------------------------------------------ */

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


    /*document.querySelector('.tictactoe').addEventListener('mouseover', function () {
        findWinner();
        document.querySelector('.playerOneTotalWins').textContent = playerOneTotalWins;
        document.querySelector('.playerTwoTotalWins').textContent = playerTwoTotalWins;
    });*/


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
    



/* ------------------------------------------------------------------------------------------ */
/* End old code I may reuse */
/* ------------------------------------------------------------------------------------------ */
