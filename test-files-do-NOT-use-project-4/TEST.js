
// Code from Mary, adds the spin tag to an element so the CSS can do its thing

const spinnyBoyz = document.getElementsByClassName("points");
spinnyBoyz.classList.toggle("spin");


// Original Idea to run through each question, did not work out and I abandoned it
questionButton.forEach((item) => {
    item.addEventListener("click", () => {
    modal.style.display = "block";
    let questionNumber = item;
    console.log("questionNumber", questionNumber);//! TEST
    console.log("Question Button Clicked, what is Selection 1", selection1, typeof selection1);//! TEST
    popupQuestion.innerText = selection1[item].question;//TODO this line is broken
    console.log("Question Button Clicked", popupQuestion);
  }
    )})