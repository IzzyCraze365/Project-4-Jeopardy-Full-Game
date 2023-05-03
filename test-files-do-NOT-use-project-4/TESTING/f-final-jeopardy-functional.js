// Project: Week 4
// Jeopardy Board Part 2 - Adding functionality
// John Isabella III
// FINAL ROUND
//! http://127.0.0.1:5500/projects/jeopardy-board-IzzyCraze365/final-jeopardy.html?player1Name=Whimsy&player2Name=Junior&player1Score=20500&player2Score=1250

import placeholderQuestions from "../scripts/placeholder-questions.js";

//List of Variables
var modal = document.querySelector("#modal");
let questionButton = document.querySelector(".points"); //Going Fishing
("finalQuestion-btn"); //Going Fishing
let wagerButton = document.getElementById("wager-btn"); //Going Fishing
let finalText = document.getElementById("finalText"); //Going Fishing
let popupAnswers = document.querySelector(".popupAnswers"); //Going Fishing

let categoryList = ["Final"]; // TODO Empty Array

class Player {
  // stores all of the player data
  constructor(name, score, wager) {
    (this.name = name), (this.score = score), (this.wager = wager);
  }
}

let clickCount = 0; // Needed for tracking the final button clicks

//  Splitting off from the entire URL to only grab the ? and what follows
let queryString = window.location.search;
console.log(queryString);
// Creating a new instance of URLSearchParams so we can get the value if we supply the key
let urlParams = new URLSearchParams(queryString);

let player1 = new Player(
  urlParams.get("player1Name"),
  urlParams.get("player1Score"),
  0
);
player1.score = +player1.score; // Converts the string from the URL into a number
let player2 = new Player(
  urlParams.get("player2Name"),
  urlParams.get("player2Score"),
  0
);
player2.score = +player2.score; // Converts the string from the URL into a number
console.log("Player 1", player1, "Player 2", player2); //! TEST

let score1 = document.querySelector(".score1");
let score2 = document.querySelector(".score2");
let currentPlayer = 0;
let currentScore = score1;
let questionCount = 0; // Keeps track of how many guesses the players make (max 2)

//Initial Game State
if (player1.name === null) {
  player1.name = "Player 1";
}
if (player2.name === null) {
  player2.name = "Player 2";
}
if (player1.score === null) {
  player1.score = 0;
}
if (player2.score === null) {
  player2.score = 0;
}
if (player1.score < player2.score) {
  // Determins who goes first in the Final Round
  currentPlayer = player1;
} else if (player1.score > player2.score) {
  // Determins who goes first in the Final Round
  currentPlayer = player2;
} else {
  currentPlayer = player1;
}
score1.textContent = `${player1.name}'s Score: ${player1.score}`; // Sets Scoreboard text
score2.textContent = `${player2.name}'s Score: ${player2.score}`; // Sets Scoreboard text

// Assign values to the categories
let finalQuestion = {
  // This is an Object
  finalQuestion0: placeholderQuestions.filter(
    (cat) => cat.category === categoryList[0]
  ),
};

// Populate the Questions // TODO make this look neater
let newQuestion = document.createElement("p");
let questionValue = 0; // placeholder value

// Populate the Modal
let wagerModal = document.querySelector("#popupInsideWagerModal");
wagerModal.innerText = `FINAL CATEGORY \n "${finalQuestion.finalQuestion0[0].category}"`;
popupAnswers.innerText = `${currentPlayer.name}'s Bet:`;

questionButton.addEventListener("click", () => {
  modal.style.display = "block";
  //newQuestion= displayQuestion(categoryList[0], 0);; //! TEST
  //newQuestion = displayQuestion(questionCategory, questionValue);
});

//! FUNCTIONS (Alphabetical Order)
// Function that Selects the Question Data we are using
function displayQuestion(category, value) {
  return selectedQuestions[category][value];
}

// TODO get this to work, wagers are reading as Strings
wagerButton.onclick = function () {
  if (clickCount === 0) {
    clickCount++;
    currentPlayer.wager = +finalText.value; //TODO there is something wrong with how the wager is being saved
    //currentPlayer.player.wager = +currentPlayer.wager;// TODO
    console.log("finalText.value", finalText.value, typeof finalText.value); //! TEST
    console.log("+finalText.value", +finalText.value, typeof +finalText.value); //! TEST
    console.log("Current Player", currentPlayer); //! TEST
    console.log(
      "Current Player Score",
      currentPlayer.score,
      typeof currentPlayer.score
    ); //! TEST
    console.log(
      "Current Player Wager",
      currentPlayer.wager,
      typeof currentPlayer.wager
    ); //! TEST
    wagerCheck(currentPlayer);
    console.log("currentPlayer", currentPlayer); //! TEST
    currentPlayer = nextPlayerTurn();
    finalText.value = ""; // This clears the input field
    popupAnswers.innerText = `${currentPlayer.name}'s Bet:`; // Changes Player's Name
  } else if (clickCount === 1) {
    clickCount++;
    currentPlayer.wager = +finalText.value; //TODO there is something wrong with how the wager is being saved
    //currentPlayer.player.wager = +currentPlayer.wager;// TODO
    console.log("finalText.value", finalText.value, typeof finalText.value); //! TEST
    console.log("Current Player", currentPlayer); //! TEST
    console.log(
      "Current Player Score",
      currentPlayer.score,
      typeof currentPlayer.score
    ); //! TEST
    console.log(
      "Current Player wager",
      currentPlayer.wager,
      typeof currentPlayer.wager
    ); //! TEST
    wagerCheck(currentPlayer);
    console.log("currentPlayer", currentPlayer); //! TEST
    currentPlayer = nextPlayerTurn();
    finalText.value = ""; // This clears the input field
    popupAnswers.innerText = `${currentPlayer.name}'s Final Answer:`; // Changes Player's Name
    wagerModal.innerText = `"${finalQuestion.finalQuestion0[0].category}"\n${finalQuestion.finalQuestion0[0].question}`; // Supplies the Final Question
    finalText.placeholder = "Final Answer"; // Changes text
    wagerButton.innerText = "Submit Final Answer"; // Changes Words on Button
  } else if (clickCount === 2) {
    console.log(finalText.value); //! TEST
    scoringFinalAnswer(finalText.value);
    clickCount++;
    console.log("clickcount", clickCount); //! TEST
    console.log("currentPlayer", currentPlayer); //! TEST
    currentPlayer = nextPlayerTurn();
    finalText.value = ""; // This clears the input field
    popupAnswers.innerText = `${currentPlayer.name}'s Final Answer:`; // Changes Player's Name
  } else if (clickCount === 3) {
    console.log(finalText.value); //! TEST
    scoringFinalAnswer(finalText.value);
    questionButton.classList.add("disabledFinal");
    console.log("currentPlayer", currentPlayer); //! TEST
    if (player1.score === player2.score) {
      // Determines the Winner based off who's score is higher
      questionButton.innerText = `Both Players are\nWINNERs\nBoth ${player1.name} & ${player2.name}\nhave scored ${currentPlayer.score} points!!!`;
    } else if (player1.score > player2.score) {
      questionButton.innerText = `WINNER\n${player1.name}\nScore = ${player1.score}`;
    } else if (player1.score < player2.score) {
      questionButton.innerText = `WINNER\n${player2.name}\nScore = ${player2.score}`;
    } else {
      questionButton.innerText = `There is no Winner...\n ERROR!!!`;
    }
    finalText.value = ""; // This clears the input field
    modal.style.display = "none";
    score1.textContent = `${player1.name}'s Score: ${player1.score}`; // Sets Final Scoreboard
    score2.textContent = `${player2.name}'s Score: ${player2.score}`; // Sets Final Scoreboard
  } else {
    console.log("ERROR with ClickCount");
  }

  currentScore = scoreCheck(currentPlayer);
};

//! FUNCTIONS (Alphabetical Order)
// Function that Determines which Player's turn it is
function nextPlayerTurn() {
  if (currentPlayer === player1) {
    currentPlayer = player2;
  } else if (currentPlayer === player2) {
    currentPlayer = player1;
  } else {
    alert("Error.");
  }
  return currentPlayer;
}

// Function that Determines which Player's turn it is
function scoreCheck(currentPlayer) {
  if (currentPlayer === player1) {
    return score1;
  } else if (currentPlayer === player2) {
    return score2;
  } else {
    alert("Error.");
  }
}

// Function Finalizes the score by adding or subtracting the wagered amount
function scoringFinalAnswer(playerAnswer) {
  if (
    playerAnswer.toUpperCase() ===
    finalQuestion.finalQuestion0[0].answer.toUpperCase()
  ) {
    currentPlayer.score = currentPlayer.score + currentPlayer.wager;
  } else {
    currentPlayer.score = currentPlayer.score - currentPlayer.wager;
  }
}

// Function that Determines which Player's turn it is
function wagerCheck(currentPlayer) {
  if (currentPlayer.wager >= 0 && currentPlayer.wager <= currentPlayer.score) {
    // Sets Wager to input amount
    alert(`${currentPlayer.name} has bet $${currentPlayer.wager}.`);
  } else if (currentPlayer.wager > currentPlayer.score) {
    currentPlayer.wager = currentPlayer.score;
    alert(
      //If you wager more than your score, you bet the max amount of points you have
      `You wagered more points than you have. Your wager has been set to $${currentPlayer.score}`
    );
  } else if (currentPlayer.wager < 0) {
    // If you wager less than 0, you wager 0
    currentPlayer.wager = 0;
    alert(`You cannot bet less than $0.  Your wager has been set to $0`);
  } else {
    // Ridiculous answers set the wager to 0
    currentPlayer.wager = 0;
    alert(
      `${currentPlayer.name}'s wager makes no sense and will be set to $0.`
    );
  }
}
