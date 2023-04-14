// Project: Week 4
// Jeopardy Board Part 2 - Adding functionality
// John Isabella III

const placeholderQuestions = [
    {
      category: "Nature",
      question: "The human heart has how many chambers?",
      answer: "4",
    },
    {
      category: "Nature",
      question: "What is the largest animal currently on Earth?",
      answer: "Blue Whale",
    },
    {
      category: "Nature",
      question: "What is the hottest planet in the Solar System?",
      answer: "Venus",
    },
    {
      category: "Nature",
      question: "What is the first element on the periodic table?",
      answer: "Hydrogen",
    },];

    var modal = document.getElementById("modal");

// Select Questions

let questionSelector = document.querySelectorAll(".points");
console.log("questionSelector",questionSelector, typeof questionSelector); //! Test
//node list loop trhough and apply event listener
for (let i = 0; i < questionSelector.length; i++) {
    questionSelector[i].addEventListener("click", revealQuestion);  
    };






function revealQuestion(){
    const spinnyBoyz = document.getElementsByClassName("points");  
    console.log("Click Works"); //! Test
    modal.style.display = "block";
    spinnyBoyz.classList.toggle("spin");
    questionSelector.forEach((item) => {
    let revealQuestionText = document.createElement("p");
    revealQuestionText.textContent = item;
    console.log("MIDPOINT"); //! Test
    let poolParty = document.getElementById("jeopardyBoard");
    poolParty = revealQuestionText; //.appendChild(revealQuestionText);
    console.log("Appended"); //! Test
        });
        console.log("Post Append"); //! Test
      }

   /* 
    let questionTextRevealed = placeholderQuestion[0]//randomizeQuestions();
    questionTextRevealed.textContent = questionTextRevealed.question
    console.log(questionTextRevealed);
    return  */




// Grab Questions to Populate the Boxes
// DOM Displaying Data Lesson
/* 


let pullWinningNumbers = document.getElementById("pullNums");
console.log(pullWinningNumbers); //! TEST does the same as below

pullWinningNumbers.addEventListener("click", revealWinner);

function revealWinner() {
  let powerBallNumbers = drawingNumbers();
  console.log("Power ball Numbers", powerBallNumbers); //!TEST

  let displayBalls = document.querySelectorAll(".winningNumber");
  console.log("displayBalls", displayBalls); //!TEST
  
  displayBalls.forEach((item, index) => {
    // Console Log Item
    item.textContent = powerBallNumbers[index]; //.displayBall;
  });
}

//Challenge 3 - Add Event Listener
let ticketButton = document.getElementById("drawTickets");
console.log(ticketButton); //! TEST does the same as below

let numberOfTickets = document.querySelector("#tickets");
console.log(numberOfTickets); //! TEST uses querySelector by calling the ticket ID

let allMyTickets = [];

ticketButton.addEventListener("click", ticketPurchase);
console.log(ticketButton);

function ticketPurchase(event) {
  event.preventDefault(); //This is good practie to not have the page auto refresh.
  clearEntireList();
  let numberOfTicketsValue = numberOfTickets.value;
  console.log(numberOfTicketsValue); //! TEST
  allMyTickets = gamblingProblems(numberOfTicketsValue);
  displayTickets();
}
console.log("Tickets", allMyTickets);

//Challenge 4 - Display Tickets
function displayTickets() {
  allMyTickets.forEach((item) => {
    let listItem = document.createElement("li");
    listItem.textContent = item;
    let poolParty = document.getElementById("ul");
    poolParty.appendChild(listItem);
  });
}

//clear the list
function clearEntireList() {
  let pillowFight = document.getElementById("ul");
  while (pillowFight.hasChildNodes()) {
    pillowFight.removeChild(pillowFight.firstChild);
  }
}
 */