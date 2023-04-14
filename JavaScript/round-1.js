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
let Player1Name = "John";
let Player1Score = 0;
let Player2Name = "Rob";
let Player2Score = 0;

// Select the Boards Catergories (from HTML)
let categoryName1 = document.querySelector("#category1");
let categoryName2 = document.querySelector("#category2");
let categoryName3 = document.querySelector("#category3");
let categoryName4 = document.querySelector("#category4");
let categoryName5 = document.querySelector("#category5");
let categoryName6 = document.querySelector("#category6");
let popupQuestion = document.querySelector("#questionInsideModal");

// Assign values to the Catergories
let selection1 = placeholderQuestions
.filter((cat) => cat.category === categoryList[0])
.slice(5);
 console.log("Length of selection 1",selection1[0],selection1.length); //! Test
/*let selection2 = placeholderQuestions
.filter((cat) => cat.category === categoryList[1])
.slice(5);
console.log("Length of selection 1",selection1.length); //! Test
let selection3 = placeholderQuestions
.filter((cat) => cat.category === categoryList[2])
.slice(5);
console.log("Length of selection 1",selection1.length); //! Test
let selection4 = placeholderQuestions
.filter((cat) => cat.category === categoryList[3])
.slice(5);
console.log("Length of selection 1",selection1.length); //! Test
let selection5 = placeholderQuestions
.filter((cat) => cat.category === categoryList[4])
.slice(5);
console.log("Length of selection 1",selection1.length); //! Test
let selection6 = placeholderQuestions
.filter((cat) => cat.category === categoryList[5])
.slice(5);
console.log("Length of selection 1",selection1.length); //! Test */


// Populate the Board's Catergories
categoryName1.innerText = selection1[1].category;
console.log("category1 Name",categoryName1.category)//! TEST
categoryName2.innerText = categoryList[1];
categoryName3.innerText = categoryList[2];
categoryName4.innerText = categoryList[3];
categoryName5.innerText = categoryList[4];
categoryName6.innerText = categoryList[5];



questionButton.forEach((item) => {
  item.addEventListener("click", () => {
  modal.style.display = "block";
  console.log("Question Button Clicked", placeholderQuestions, typeof placeholderQuestions)
  popupQuestion.innerText = placeholderQuestions;



}
  )})





guessButton.onclick = function() {
  console.log("Guess Button Clicked");
  modal.style.display = "none";
}
passButton.onclick = function() {
  console.log("Pass Button Clicked");
  modal.style.display = "none"; 
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