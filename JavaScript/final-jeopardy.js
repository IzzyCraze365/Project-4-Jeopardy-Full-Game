// Project: Week 4
// Jeopardy Board Part 2 - Adding functionality
// John Isabella III
// FINAL ROUND


import placeholderQuestions from "../scripts/placeholder-questions.js";

//List of Variables
var modal = document.querySelector("#modal");
let questionButton = document.querySelectorAll(".points"); //Going Fishing
let wagerButton = document.getElementById("wager-btn"); //Going Fishing

let categoryList = [
  "Nature",
  "Animals",
  "Computers",
  "Mythology",
  "History",
  "General",
  "Final",
]; // TODO Empty Array

class Player {
  constructor(name, score, wager) {
    (this.name = name), (this.score = score);
    this.wager = wager;
  }
}

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
let player2 = new Player(
  urlParams.get("player2Name"),
  urlParams.get("player2Score"),
  0
);
console.log("Player 1", player1, "Player 2", player2);

let score1 = document.querySelector(".score1");
let score2 = document.querySelector(".score2");
let currentPlayer = 0;
let currentScore = score1;
let questionCount = 0; // Keeps track of how many guesses the players make (max 2)
let totalQuestionCounter = 0; // when this hits 30, the next round button enables

//Initial Game State
if (player1.name === null) {
  player1.name = "Player 1";
}
if (player2.name=== null) {
  player2.name = "Player 2";
}
if (player1.score === null) {
  player1.score = 0;
}
if (player2.score=== null) {
  player2.score = 0;
}
if (player1.score < player2.score) {
  // Determins who goes first in Round 2
  currentPlayer = player1;
}else if (player1.score > player2.score) {
    // Determins who goes first in Round 2
    currentPlayer = player2;
} else {
  currentPlayer = player1;
}
playerTurn.textContent = `${currentPlayer.name}'s Turn`;
score1.textContent = `${player1.name}'s Score: ${player1.score}`;
score2.textContent = `${player2.name}'s Score: ${player2.score}`;


// Select the Boards categories (from HTML)
let categoryName = document.querySelector("#category");
let popupQuestion = document.querySelector("#popupInsideModal");

// Populate the Board's category Names (Top Row)
categoryName.innerText = selectedQuestions.selectedQuestion[0].category;

//let categoryName1 = document.querySelector("#category1");

// Populate the Questions // TODO make this look neater
let newQuestion = document.createElement("p");
let questionValue = 0; // placeholder value

questionButton.addEventListener("click", () => {
    modal.style.display = "block";
    newQuestion = displayQuestion(questionCategory, questionValue);
    popupQuestion.textContent = newQuestion.question; // Prints the Question in the Modal
  });

//! FUNCTIONS (Alphabetical Order)
// Function that Selects the Question Data we are using
function displayQuestion(category, value) {
  return selectedQuestions[category][value];
}

// Function that Figures out the Button's Category
function getButtonCategory(selectedObject) {
  for (let i = 1; i < 7; i++) {
    if (selectedObject.className.split(" ").includes(`category${i}`)) {
      return `selectedQuestion${i}`; // This gives me the correct key
    }
  }
}

// Function that Figures out the Button's Value
function getButtonValue(selectedObject) {
  for (let i = 1; i < 7; i++) {
    if (selectedObject.className.split(" ").includes(`value${i}00`)) {
      return i - 1; // Gives me the Index Number of the Question
    }
  }
}

// Function that Determines which Player's turn it is
function nextPlayerTurn() {
  if (currentPlayer === player1) {
    currentPlayer = player2;
  } else if (currentPlayer === player2) {
    currentPlayer = player1;
  } else {
    alert("Error.");
  }
  playerTurn.textContent = `${currentPlayer.name}'s Turn`;
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

// Modal Buttons
guessButton.onclick = function () {
  questionCount++;
  if (playerAnswer.value.toUpperCase() === newQuestion.answer.toUpperCase()) {
    currentPlayer.score += (+questionValue + 1) * 200;
    currentScore.textContent = `${currentPlayer.name}'s Score: ${currentPlayer.score}`;
    alert(`That is the Correct Answer \n It is ${currentPlayer.name}'s Turn.`);
    modal.style.display = "none";


    currentPlayer.score -= (+questionValue + 1) * 200;
    currentScore.textContent = `${currentPlayer.name}'s Score: ${currentPlayer.score}`;
    currentPlayer = nextPlayerTurn();
    currentScore = scoreCheck(currentPlayer);
    alert(`That is Incorrect \n It is now ${currentPlayer.name}'s Turn.`);
  }
  if (questionCount === 2) {
    modal.style.display = "none";
  }
};

