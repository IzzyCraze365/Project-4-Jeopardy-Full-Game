// Project: Week 4
// Jeopardy Board Part 2 - Adding functionality
// John Isabella III
// ROUND 2

import placeholderQuestions from "../scripts/placeholder-questions.js";

//List of Variables
var modal = document.querySelector("#modal");
let guessButton = document.getElementById("guess-btn"); //Going Fishing
let mainMenu = document.getElementById("mainMenu"); //Going Fishing
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

let player1 = new Player(
  urlParams.get("player1Name"),
  parseInt(urlParams.get("player1Score")),
  0
);
let player2 = new Player(
  urlParams.get("player2Name"),
  parseInt(urlParams.get("player2Score")),
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
  // Determins who goes first in Round 2
  currentPlayer = player1;
} else if (player1.score > player2.score) {
  // Determins who goes first in Round 2
  currentPlayer = player2;
} else {
  currentPlayer = player1;
}
scoreCheck(currentPlayer);
console.log("Current Player", currentPlayer); //! TEST
playerTurn.textContent = `${currentPlayer.name}'s Turn`;
score1.textContent = `${player1.name}'s Score: ${player1.score}`;
score2.textContent = `${player2.name}'s Score: ${player2.score}`;

// Assign values to the categories
let selectedQuestions = {
  // This is an Object
  selectedQuestion1: placeholderQuestions
    .filter((cat) => cat.category === categoryList[0])
    .slice(5),
  selectedQuestion2: placeholderQuestions
    .filter((cat) => cat.category === categoryList[1])
    .slice(5),
  selectedQuestion3: placeholderQuestions
    .filter((cat) => cat.category === categoryList[2])
    .slice(5),
  selectedQuestion4: placeholderQuestions
    .filter((cat) => cat.category === categoryList[3])
    .slice(5),
  selectedQuestion5: placeholderQuestions
    .filter((cat) => cat.category === categoryList[4])
    .slice(5),
  selectedQuestion6: placeholderQuestions
    .filter((cat) => cat.category === categoryList[5])
    .slice(5),
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
//let categoryName1 = document.querySelector("#category1");

// Populate the Questions // TODO make this look neater
let newQuestion = document.createElement("p");
let questionValue = 0; // placeholder value

questionButton.forEach((questionBox) => {
  questionBox.addEventListener("click", () => {
    questionCount = 0;
    totalQuestionCounter++;
    if (totalQuestionCounter === 1) {
      //TODO Change this Back to 30 after Testing
      mainMenu.classList.add("disabled");
      nextRound.classList.remove("disabled");
    }
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

// Function that Figures out the Button's Category
function getButtonCategory(selectedObject) {
  for (let i = 1; i < 7; i++) {
    if (selectedObject.className.split(" ").includes(`category${i}`)) {
      console.log("get button catergory", i, typeof i); //! TEST
      console.log(
        "get button catergory",
        `selectedQuestion${i}`,
        typeof `selectedQuestion${i}`
      ); //! TEST
      return `selectedQuestion${i}`; // This gives me the correct key
    }
  }
}

// Function that Figures out the Button's Value
function getButtonValue(selectedObject) {
  for (let i = 1; i < 7; i++) {
    if (selectedObject.className.split(" ").includes(`value${i}00`)) {
      console.log("get button value", i, typeof i); //! TEST
      return i - 1; // Gives me the Index Number of the Question
    }
  }
}

nextRound.addEventListener("click", goToNextPage); // Once Enabled sends us to the next page
// this function sets the variables for the next Round
function goToNextPage() {
  let player1Name = player1.name;
  let player1Score = player1.score;
  let player2Name = player2.name;
  let player2Score = player2.score;
  window.location.href = `./final-jeopardy.html?player1Name=${player1Name}&player2Name=${player2Name}&player1Score=${player1Score}&player2Score=${player2Score}`;
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
    console.log("questionValue", questionValue, typeof questionValue); //! TEST
    currentPlayer.score += (+questionValue + 1) * 200;
    currentScore.textContent = `${currentPlayer.name}'s Score: ${currentPlayer.score}`;
    alert(`That is the Correct Answer \n It is ${currentPlayer.name}'s Turn.`);
    modal.style.display = "none";
  } else {
    currentPlayer.score -= (+questionValue + 1) * 200;
    currentScore.textContent = `${currentPlayer.name}'s Score: ${currentPlayer.score}`;
    currentPlayer = nextPlayerTurn();
    currentScore = scoreCheck(currentPlayer);
    alert(`That is Incorrect \n It is now ${currentPlayer.name}'s Turn.`);
  }
  playerAnswer.value = ""; // This clears the input field after each question
  if (questionCount === 2) {
    modal.style.display = "none";
  }
};

passButton.onclick = function () {
  questionCount++;
  if (questionCount === 2) {
    modal.style.display = "none";
  }
  currentPlayer = nextPlayerTurn();
  currentScore = scoreCheck(currentPlayer);
  alert(`It is now ${currentPlayer.name}'s Turn.`);
};
