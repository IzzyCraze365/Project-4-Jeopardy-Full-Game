// Project: Week 4
// Jeopardy Board Part 2 - Adding functionality
// John Isabella III
// ROUND 1

import placeholderQuestions from "../scripts/placeholder-questions.js";

//List of Variables
var modal = document.querySelector("#modal");
let guessButton = document.getElementById("guess-btn"); //Going Fishing
let mainMenu = document.getElementById("mainMenu"); //Going Fishing
let modalName = document.querySelector("#modal-name"); //Going Fishing
let nextRound = document.getElementById("nextRound"); //Going Fishing
let passButton = document.getElementById("pass-btn"); //Going Fishing
let playerAnswer = document.querySelector("#playerAnswer"); //Going Fishing
let playerTurn = document.getElementById("playerTurn"); //Going Fishing
let questionButton = document.querySelectorAll(".points"); //Going Fishing

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

let player1 = new Player(urlParams.get("player1Name"), 0, 0);
let player2 = new Player(urlParams.get("player2Name"), 0, 0);

let score1 = document.querySelector(".score1");
let score2 = document.querySelector(".score2");
let currentPlayer = player1;
let currentScore = score1;
let questionCount = 0; // Keeps track of how many guesses the players make (max 2)
let totalQuestionCounter = 0; // when this hits 30, the next round button enables

//Initial Game State
if (player1.name === null) {
  player1.name = "Player 1";
}
if (player2.name === null) {
  player2.name = "Player 2";
}
playerTurn.textContent = `${currentPlayer.name}'s Turn`;
score1.textContent = `${player1.name}'s Score: ${player1.score}`;
score2.textContent = `${player2.name}'s Score: ${player2.score}`;
modalName.innerText = `${currentPlayer.name}'s response:`;

// Assign values to the categories
let selectedQuestions = {
  // This is an Object
  selectedQuestion1: placeholderQuestions.filter(
    (cat) => cat.category === categoryList[0]
  ),
  selectedQuestion2: placeholderQuestions.filter(
    (cat) => cat.category === categoryList[1]
  ),
  selectedQuestion3: placeholderQuestions.filter(
    (cat) => cat.category === categoryList[2]
  ),
  selectedQuestion4: placeholderQuestions.filter(
    (cat) => cat.category === categoryList[3]
  ),
  selectedQuestion5: placeholderQuestions.filter(
    (cat) => cat.category === categoryList[4]
  ),
  selectedQuestion6: placeholderQuestions.filter(
    (cat) => cat.category === categoryList[5]
  ),
};

// Select the Boards categories (from HTML)
let categoryName1 = document.querySelector("#category1");
let categoryName2 = document.querySelector("#category2");
let categoryName3 = document.querySelector("#category3");
let categoryName4 = document.querySelector("#category4");
let categoryName5 = document.querySelector("#category5");
let categoryName6 = document.querySelector("#category6");
let popupQuestion = document.querySelector("#popupInsideModal");

// Populate the Board's category Names (Top Row)
categoryName1.innerText = selectedQuestions.selectedQuestion1[0].category;
categoryName2.innerText = selectedQuestions.selectedQuestion2[0].category;
categoryName3.innerText = selectedQuestions.selectedQuestion3[0].category;
categoryName4.innerText = selectedQuestions.selectedQuestion4[0].category;
categoryName5.innerText = selectedQuestions.selectedQuestion5[0].category;
categoryName6.innerText = selectedQuestions.selectedQuestion6[0].category;

// Populate the Questions
let newQuestion = document.createElement("p");
let questionValue = 0; // placeholder value

nextRound.addEventListener("click", goToNextPage); // Once Enabled sends us to the next page

// When the player selects a question, a modal opens up with the correct text.
questionButton.forEach((questionBox) => {
  questionBox.addEventListener("click", () => {
    questionCount = 0;
    totalQuestionCounter++;
    modal.style.display = "block";
    let questionCategory = getButtonCategory(questionBox); // Locates the Key
    questionValue = getButtonValue(questionBox); // Locates the Index
    questionBox.disabled = true;
    questionBox.classList.add("disabled");
    newQuestion = displayQuestion(questionCategory, questionValue);
    popupQuestion.textContent = newQuestion.question; // Prints the Question in the Modal
  });
});

//! FUNCTIONS (Alphabetical Order)
// Function that Selects the Question Data we are using
function displayQuestion(category, value) {
  return selectedQuestions[category][value];
}

// Function that tracks when the Round is over
function endOfRound(totalQuestionCounter) {
  if (totalQuestionCounter === 30) {
    //TODO Change this Back to 30 after Testing
    mainMenu.classList.add("disabled");
    nextRound.classList.remove("disabled");
    alert(
      `There are no questions remaining on the board.\n Please click the "Next Round" button to begin Round 2.`
    );
  }
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

// this function sets the variables for the next Round
function goToNextPage() {
  let player1Name = player1.name;
  let player1Score = player1.score;
  let player2Name = player2.name;
  let player2Score = player2.score;
  window.location.href = `./round-2.html?player1Name=${player1Name}&player2Name=${player2Name}&player1Score=${player1Score}&player2Score=${player2Score}`;
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
  modalName.innerText = `${currentPlayer.name}'s response:`;
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

//! Modal Buttons
guessButton.onclick = function () {
  questionCount++;
  if (playerAnswer.value.toUpperCase() === newQuestion.answer.toUpperCase()) {
    currentPlayer.score += (+questionValue + 1) * 100;
    currentScore.textContent = `${currentPlayer.name}'s Score: ${currentPlayer.score}`;
    alert(
      `That is the Correct Answer.\n${currentPlayer.name} gains ${
        (+questionValue + 1) * 100
      } points.\nIt is ${currentPlayer.name}'s Turn.`
    );
    modal.style.display = "none";
  } else {
    currentPlayer.score -= (+questionValue + 1) * 100;
    currentScore.textContent = `${currentPlayer.name}'s Score: ${currentPlayer.score}`;
    alert(
      `That is the Incorrect.\n${currentPlayer.name} loses ${
        (+questionValue + 1) * 100
      } points`
    );
    currentPlayer = nextPlayerTurn();
    currentScore = scoreCheck(currentPlayer);
    if (questionCount === 2) {
      alert(`The correct response is "${newQuestion.answer}"`); // This tells the answer to the question ONLY if both players failed to guess the correct answer
    }
    alert(`It is now ${currentPlayer.name}'s Turn.`);
  }
  playerAnswer.value = ""; // This clears the input field after each question
  if (questionCount === 2) {
    modal.style.display = "none";
    endOfRound(totalQuestionCounter);
  }
};

passButton.onclick = function () {
  questionCount++;
  currentPlayer = nextPlayerTurn();
  currentScore = scoreCheck(currentPlayer);
  if (questionCount === 2) {
    modal.style.display = "none";
    alert(`The correct response is "${newQuestion.answer}"`); // This tells the answer to the question ONLY if both players failed to guess the correct answer
    endOfRound(totalQuestionCounter);
  }
  alert(`It is now ${currentPlayer.name}'s Turn.`);
};
