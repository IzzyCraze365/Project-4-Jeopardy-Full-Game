// Project: Week 4
// Jeopardy Board Part 2 - Adding functionality
// John Isabella III

import placeholderQuestions from "../scripts/placeholder-questions.js";
//console.log("Here are the Questions");//! TEST

//List of Variables
var modal = document.querySelector("#modal");
let playerAnswer = document.querySelector("#playerAnswer"); //Going Fishing
console.log("User Input =", playerAnswer);
let questionButton = document.querySelectorAll(".points"); //Going Fishing
let guessButton = document.getElementById("guess-btn"); //Going Fishing
let passButton = document.getElementById("pass-btn"); //Going Fishing
let categoryList = ["Nature", "Animals", "Computers","Mythology","History","General","Final"] // TODO Empty Array
let player1Name = "John";
let player1Score = document.querySelector(".score1");
let score1 = 100; //! TEST
let player2Name = "Rob";
let player2Score = document.querySelector(".score2");


// Select the Boards Catergories (from HTML)
let categoryName1 = document.querySelector("#category1");
let categoryName2 = document.querySelector("#category2");
let categoryName3 = document.querySelector("#category3");
let categoryName4 = document.querySelector("#category4");
let categoryName5 = document.querySelector("#category5");
let categoryName6 = document.querySelector("#category6");
let popupQuestion = document.querySelector("#popupInsideModal");

// Assign values to the Catergories
let selection1 = placeholderQuestions
.filter((cat) => cat.category === categoryList[0])
.slice(5);
 console.log("Length of selection 1",selection1[0],selection1.length); //! Test
let selection2 = placeholderQuestions
.filter((cat) => cat.category === categoryList[1])
.slice(5);
let selection3 = placeholderQuestions
.filter((cat) => cat.category === categoryList[2])
.slice(5);
let selection4 = placeholderQuestions
.filter((cat) => cat.category === categoryList[3])
.slice(5);
let selection5 = placeholderQuestions
.filter((cat) => cat.category === categoryList[4])
.slice(5);
let selection6 = placeholderQuestions
.filter((cat) => cat.category === categoryList[5])
.slice(5);



// Populate the Board's Catergories
categoryName1.innerText = selection1[0].category;
categoryName2.innerText = selection2[0].category;
categoryName3.innerText = selection3[0].category;
categoryName4.innerText = selection4[0].category;
categoryName5.innerText = selection5[0].category;
categoryName6.innerText = selection6[0].category;
//let categoryName1 = document.querySelector("#category1");

// Populate the Questions // TODO make this look neater
let newQuestion = document.createElement("p");


//! Updated this with friend
questionButton.forEach((item, index) => {
  item.addEventListener("click", () => {
  modal.style.display = "block";
  let questionNumber = item;
  console.log("index", index);

  console.log("Question Number",questionNumber);
  console.log("Class List",questionNumber.classList);
  let selectedcategory = questionNumber.classList[2];
  console.log("Index divided by 6",Math.floor(index/6));
  let selectedValue = Math.floor(index/6);
  //let selectedValue = questionNumber.classList[3];
  console.log("Narrow Down Question",selectedcategory,selectedValue);
  displayQuestion(selectedcategory, selectedValue)
  //console.log("questionNumber", questionNumber);//! TEST
  //console.log("Question Button Clicked, what is Selection 1", selection1, typeof selection1);//! TEST
  popupQuestion.innerText = selection1[item].question;//TODO this line is broken
  //console.log("Question Button Clicked", popupQuestion);
}
  )})

function displayQuestion(category, value){
  console.log("Inside Function, DisplayingQuestion");
  console.log("Catergory",category,"& Value ", value);
  console.log("Value of the question", category[value].question);
  newQuestion.textContent = category[value].question;
  

}


// Modal Buttons
guessButton.onclick = function() {
  console.log("Guess Button Clicked");
  modal.style.display = "none";

}
passButton.onclick = function() {
  console.log("Pass Button Clicked");
  modal.style.display = "none";
  player1Score.innertext = `Player 1's Score: ${score1}`
}


guessButton.onclick = function() {
  console.log("Guess Button Clicked");
  modal.style.display = "none";

}
passButton.onclick = function() {
  console.log("Pass Button Clicked");
  modal.style.display = "none";
  player1Score.innertext = `Player 1's Score: ${score1}`
}


// Capitalize Strings
function titleCase(myString) {
  return (myString
    .split(" ")
    .map((word) => {
      word = word.trim();
      let firstLetter1 = word.charAt(0).toUpperCase();
      let restOfWord1 = word.slice(1).toLowerCase();
      return firstLetter1 + restOfWord1;
    })
    .join(" "));
}