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

let cat1_100 = document.querySelector("#question1_100");
cat1_100.addEventListener("click",()=>{
  newQuestion.textContent = selection1[0].question;
  console.log("newQuestion",  newQuestion.textContent);
  console.log("Selection1[0]",  selection1[0]);//! TEST
  modal.style.display = "block";
  popupQuestion.textContent = selection1[0].question;
  //console.log("Click cat1_100",  popupQuestion.textContent);//! TEST
})

let cat1_200 = document.querySelector("#question1_200");
cat1_200.addEventListener("click",()=>{
  newQuestion.textContent = selection1[1].question;
  modal.style.display = "block";
  popupQuestion.textContent = selection1[1].question;
})

let cat1_300 = document.querySelector("#question1_300");
cat1_300.addEventListener("click",()=>{
  newQuestion.textContent = selection1[2].question;
  modal.style.display = "block";
  popupQuestion.textContent = selection1[2].question;
})

let cat1_400 = document.querySelector("#question1_400");
cat1_400.addEventListener("click",()=>{
  newQuestion.textContent = selection1[3].question;
  modal.style.display = "block";
  popupQuestion.textContent = selection1[3].question;
})

let cat1_500 = document.querySelector("#question1_500");
cat1_500.addEventListener("click",()=>{
  newQuestion.textContent = selection1[4].question;
  modal.style.display = "block";
  popupQuestion.textContent = selection1[4].question;
})

let cat2_100 = document.querySelector("#question2_100");
cat2_100.addEventListener("click",()=>{
  newQuestion.textContent = selection2[0].question;
  modal.style.display = "block";
  popupQuestion.textContent = selection2[0].question;
})

let cat2_200 = document.querySelector("#question2_200");
cat2_200.addEventListener("click",()=>{
  newQuestion.textContent = selection2[1].question;
  modal.style.display = "block";
  popupQuestion.textContent = selection2[1].question;
})

let cat2_300 = document.querySelector("#question2_300");
cat2_300.addEventListener("click",()=>{
  newQuestion.textContent = selection2[2].question;
  modal.style.display = "block";
  popupQuestion.textContent = selection2[2].question;
})

let cat2_400 = document.querySelector("#question2_400");
cat2_400.addEventListener("click",()=>{
  newQuestion.textContent = selection2[3].question;
  modal.style.display = "block";
  popupQuestion.textContent = selection2[3].question;
})

let cat2_500 = document.querySelector("#question2_500");
cat2_500.addEventListener("click",()=>{
  newQuestion.textContent = selection2[4].question;
  modal.style.display = "block";
  popupQuestion.textContent = selection2[4].question;
})

let cat3_100 = document.querySelector("#question3_100");
cat3_100.addEventListener("click",()=>{
  newQuestion.textContent = selection3[0].question;
  modal.style.display = "block";
  popupQuestion.textContent = selection3[0].question;
})

let cat3_200 = document.querySelector("#question3_200");
cat3_200.addEventListener("click",()=>{
  newQuestion.textContent = selection3[1].question;
  modal.style.display = "block";
  popupQuestion.textContent = selection3[1].question;
})

let cat3_300 = document.querySelector("#question3_300");
cat3_300.addEventListener("click",()=>{
  newQuestion.textContent = selection3[2].question;
  modal.style.display = "block";
  popupQuestion.textContent = selection3[2].question;
})

let cat3_400 = document.querySelector("#question3_400");
cat3_400.addEventListener("click",()=>{
  newQuestion.textContent = selection3[3].question;
  modal.style.display = "block";
  popupQuestion.textContent = selection3[3].question;
})

let cat3_500 = document.querySelector("#question3_500");
cat3_500.addEventListener("click",()=>{
  newQuestion.textContent = selection3[4].question;
  modal.style.display = "block";
  popupQuestion.textContent = selection3[4].question;
})

let cat4_100 = document.querySelector("#question4_100");
cat4_100.addEventListener("click",()=>{
  newQuestion.textContent = selection4[0].question;
  modal.style.display = "block";
  popupQuestion.textContent = selection4[0].question;
})

let cat4_200 = document.querySelector("#question4_200");
cat4_200.addEventListener("click",()=>{
  newQuestion.textContent = selection4[1].question;
  modal.style.display = "block";
  popupQuestion.textContent = selection4[1].question;
})

let cat4_300 = document.querySelector("#question4_300");
cat4_300.addEventListener("click",()=>{
  newQuestion.textContent = selection4[2].question;
  modal.style.display = "block";
  popupQuestion.textContent = selection4[2].question;
})

let cat4_400 = document.querySelector("#question4_400");
cat4_400.addEventListener("click",()=>{
  newQuestion.textContent = selection4[3].question;
  modal.style.display = "block";
  popupQuestion.textContent = selection4[3].question;
})

let cat4_500 = document.querySelector("#question4_500");
cat4_500.addEventListener("click",()=>{
  newQuestion.textContent = selection4[4].question;
  modal.style.display = "block";
  popupQuestion.textContent = selection4[4].question;
})

let cat5_100 = document.querySelector("#question5_100");
cat5_100.addEventListener("click",()=>{
  newQuestion.textContent = selection5[0].question;
  modal.style.display = "block";
  popupQuestion.textContent = selection5[0].question;
})

let cat5_200 = document.querySelector("#question5_200");
cat5_200.addEventListener("click",()=>{
  newQuestion.textContent = selection5[1].question;
  modal.style.display = "block";
  popupQuestion.textContent = selection5[1].question;
})

let cat5_300 = document.querySelector("#question5_300");
cat5_300.addEventListener("click",()=>{
  newQuestion.textContent = selection5[2].question;
  modal.style.display = "block";
  popupQuestion.textContent = selection5[2].question;
})

let cat5_400 = document.querySelector("#question5_400");
cat5_400.addEventListener("click",()=>{
  newQuestion.textContent = selection5[3].question;
  modal.style.display = "block";
  popupQuestion.textContent = selection5[3].question;
})

let cat5_500 = document.querySelector("#question5_500");
cat5_500.addEventListener("click",()=>{
  newQuestion.textContent = selection5[4].question;
  modal.style.display = "block";
  popupQuestion.textContent = selection5[4].question;
})

let cat6_100 = document.querySelector("#question6_100");
cat6_100.addEventListener("click",()=>{
  newQuestion.textContent = selection6[0].question;
  modal.style.display = "block";
  popupQuestion.textContent = selection6[0].question;
})

let cat6_200 = document.querySelector("#question6_200");
cat6_200.addEventListener("click",()=>{
  newQuestion.textContent = selection6[1].question;
  modal.style.display = "block";
  popupQuestion.textContent = selection6[1].question;
})

let cat6_300 = document.querySelector("#question6_300");
cat6_300.addEventListener("click",()=>{
  newQuestion.textContent = selection6[2].question;
  modal.style.display = "block";
  popupQuestion.textContent = selection6[2].question;
})

let cat6_400 = document.querySelector("#question6_400");
cat6_400.addEventListener("click",()=>{
  newQuestion.textContent = selection6[3].question;
  modal.style.display = "block";
  popupQuestion.textContent = selection6[3].question;
})

let cat6_500 = document.querySelector("#question6_500");
cat6_500.addEventListener("click",()=>{
  newQuestion.textContent = selection6[4].question;
  modal.style.display = "block";
  popupQuestion.textContent = selection6[4].question;
})


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