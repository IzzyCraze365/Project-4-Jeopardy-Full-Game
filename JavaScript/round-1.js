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

let startingCatergories = [Nature]; // Randomly selects catergories

let questionSelector = document.querySelectorAll(".points");
console.log("questionSelector",questionSelector, typeof questionSelector); //! Test
//node list loop trhough and apply event listener

//let questionInformation = await 

for (let i = 0; i < questionSelector.length; i++) {
    questionSelector[i].addEventListener("click",() => revealQuestion(i));  
    //questionSelector[i].addEventListener("click", ()=>console.log("TEST 4"));  //! TEST
    };

//! TEST FUNCTION
let catergory1 = placeholderQuestions
.filter((cat) => cat.category === "Nature")
.slice(5);

//function selectStartingCatergories(){}

// TODO function populateCatergory from DOM Displaying Data
function selectStartingQuestions(){
  //let catergoryNumber = x;
  for(let i = 1; i <7; i++){
    let questionInfo = ;
    return `question${i}_${catergoryNumber+1}`

}}


    // pass to revel question what index it goes to
// TODO to Display questions use pokedex
    function revealQuestion(questionIndex){
    //const spinnyBoyz = document.getElementsByClassName("points");  
    console.log("Question Index",questionIndex); //! Test
   /*  modal.style.display = "block";
    //spinnyBoyz.classList.toggle("spin");
    questionSelector(questionIndex) => {
    let revealQuestionText = document.createElement("p");
    revealQuestionText.textContent = item;
    console.log("MIDPOINT"); //! Test
    let poolParty = document.getElementById("jeopardyBoard");
    poolParty = revealQuestionText; //.appendChild(revealQuestionText);
    console.log("Appended"); //! Test
        });
        console.log("Post Append"); //! Test */
      }

   /* 
    let questionTextRevealed = placeholderQuestion[0]//randomizeQuestions();
    questionTextRevealed.textContent = questionTextRevealed.question
    console.log(questionTextRevealed);
    return  */


