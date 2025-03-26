// get comp choice
function getCompChoice() {
    let choice = Math.random();

    if (choice > 0.66) {
        console.log("rock");
        return 'rock';
    } else if (choice < 0.33) {
        console.log("paper");
        return 'paper';
    } else {
        console.log("scissors");
        return 'scissors';
    }
}

// get human choice
function getHumChoice() {
    let choice = prompt('Enter choice');
    return choice;
}

// run game 
function playGame() {
    let roundsPlayed = 0
    let humScore = 0
    let compScore = 0

    // loop game for 5 rounds, track rounds and score
    for (i = 0; i < 5; i++) {
        const humSelection = getHumChoice();
        const compSelection = getCompChoice();

        console.log(playRound(humSelection, compSelection));
        console.log("Human's Score:" + humScore);
        console.log("Computer's Score:" + compScore);

        // plays round to determine winner
        function playRound(humChoice, compChoice) {
        humChoice = humChoice.toLowerCase();

            if (humChoice === compChoice) {
                return "Tie! You both picked " + humChoice + ".";
            } else if (humChoice === "rock" && compChoice === "paper") {
                compScore++;
                return "You lose! Paper beats rock.";
            } else if (humChoice === "rock" && compChoice === "scissors") {
                humScore++;
                return "You win! Rock beats scissors.";
            } else if (humChoice === "paper" && compChoice === "rock") {
                humScore++;
                return "You win! Paper beats rock.";
            } else if (humChoice === "paper" && compChoice === "scissors") {
                compScore++;
                return "You lose! Scissors beats paper.";
            } else if (humChoice === "scissors" && compChoice === "paper") {
                humScore++;
                return "You win! Scissors beats paper.";
            } else if (humChoice === "scissors" && compChoice === "rock") {
                compScore++;
                return "You lose! Rock beats scissors.";          
            }
        }  
    }
    // determine winner of 5 round game
    if (humScore > compScore) {
        console.log("You won the game.");
    } else if (humScore < compScore) {
        console.log("You lost the game.");
    } else {
        console.log("You tied the game.");
    }
}

playGame();