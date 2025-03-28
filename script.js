//random pick of the computer
function getRandomComputerResult() {
    const options = ["Rock", "Paper", "Scissors"];
    const randomIndex = Math.floor(Math.random() * options.length); //random index for the computer to pick in the options array
    return options[randomIndex];
  }

//player win conditions; this will return true
  function hasPlayerWonTheRound(player, computer) {
    return (
      (player === "Rock" && computer === "Scissors") ||
      (player === "Scissors" && computer === "Paper") ||
      (player === "Paper" && computer === "Rock")
    );
  }

//initialization of scores
  let playerScore = 0;
  let computerScore = 0;

//result display propmpt
  function getRoundResults(userOption) {
    const computerResult = getRandomComputerResult();

//display condition, battle of choices, random for computer and choice for player
    if (hasPlayerWonTheRound(userOption, computerResult)) {
      playerScore++;
      return `Player wins! ${userOption} beats ${computerResult}`;
    } else if (computerResult === userOption) {
      return `It's a tie! Both chose ${userOption}`;
    } else {
      computerScore++;
      return `Computer wins! ${computerResult} beats ${userOption}`;
    }
  }

//initialization of placements of the texts from script to front end
  const playerScoreSpanElement = document.getElementById("player-score");
  const computerScoreSpanElement = document.getElementById("computer-score");
  const roundResultsMsg = document.getElementById("results-msg");
  const winnerMsgElement = document.getElementById("winner-msg");
  const optionsContainer = document.querySelector(".options-container");
  const resetGameBtn = document.getElementById("reset-game-btn");

//showing of results
  function showResults(userOption) {
    roundResultsMsg.innerText = getRoundResults(userOption);
    computerScoreSpanElement.innerText = computerScore;
    playerScoreSpanElement.innerText = playerScore;
  
    if (playerScore === 3 || computerScore === 3) {
      winnerMsgElement.innerText = `${
        playerScore === 3 ? "Player" : "The Computer"
      } has won the game!`;
  
      resetGameBtn.style.display = "block";
      optionsContainer.style.display = "none";
    }
  
  };
  function resetGame() {
    // Reset scores
      playerScore = 0;
      computerScore = 0;
  
      // Update score display
      playerScoreSpanElement.innerText = playerScore;
      computerScoreSpanElement.innerText = computerScore;
  
      // Hide reset button and show options
      resetGameBtn.style.display = "none";
      optionsContainer.style.display = "block";
  
      // Clear messages
      winnerMsgElement.innerText = "";
      roundResultsMsg.innerText = "";
  };
  //resets game
  resetGameBtn.addEventListener("click", resetGame);
  //transfers element to script
  const rockBtn = document.getElementById("rock-btn");
  const paperBtn = document.getElementById("paper-btn");
  const scissorsBtn = document.getElementById("scissors-btn");
  
  //gets user input
  rockBtn.addEventListener("click", function () {
    showResults("Rock");
  });
  
  paperBtn.addEventListener("click", function () {
    showResults("Paper");
  });
  
  scissorsBtn.addEventListener("click", function () {
    showResults("Scissors");
  });