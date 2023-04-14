// Project: Week 4
// Jeopardy Board Part 2 - Adding functionality
// John Isabella III

import placeholderQuestions from "../scripts/placeholder-questions";
//console.log("Here are the Questions",placeholderQuestions);//! TEST

//List of Variables
var modal = document.querySelector("#modal");
let playerAnswer = document.querySelector("#playerAnswer"); //Going Fishing
console.log("User Input =", playerAnswer);
let questionButton = document.querySelectorAll(".points"); //Going Fishing
let guessButton = document.getElementById("guess-btn"); //Going Fishing
let passButton = document.getElementById("pass-btn"); //Going Fishing
let catergoryList = ["Nature", "Animals", "Computers","Mythology","History","General","Final"] // TODO Empty Array
let Player1Name = "John";
let Player1Score = 0;
let Player2Name = "Rob";
let Player2Score = 0;

// Select the Boards Catergories
let catergoryName1 = document.querySelector("#catergory1");
console.log("Catergory1",catergoryName1)
console.log("Catergory1 =", catergory1);//! TEST
let catergoryName2 = document.querySelector("#catergory2");
let catergoryName3 = document.querySelector("#catergory3");
let catergoryName4 = document.querySelector("#catergory4");
let catergoryName5 = document.querySelector("#catergory5");
let catergoryName6 = document.querySelector("#catergory6");
let popupQuestion = document.querySelector("#questionInsideModal");

// Populate the Board's Catergories
catergoryName1.innerText = titleCase(catergoryList[0]);
catergoryName2.innerText = titleCase(catergoryList[1]);
catergoryName3.innerText = titleCase(catergoryList[2]);
catergoryName4.innerText = titleCase(catergoryList[3]);
catergoryName5.innerText = titleCase(catergoryList[4]);
catergoryName6.innerText = titleCase(catergoryList[5]);



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