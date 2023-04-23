// Project: Week 4
// Jeopardy Board Part 2 - Adding functionality
// John Isabella III

console.log("I am in the Index.JS file"); //! TEST

let nextRound = document.getElementById("nextRound"); //Going Fishing
let player1Name = document.getElementById("player1Name"); //Going Fishing
let player2Name = document.querySelector("#player2Name"); //Going Fishing

nextRound.addEventListener("click", goToNextPage); // Once Enabled sends us to the next page
// this function sets the variables for the next Round
function goToNextPage() {
  //let name1 = player1Name.value;
  //let name2 = player2Name.value;
  let name1 = "Player 1";
  let name2 = "Player 2";
  if (player1Name.value.length > 0) {
    name1 = player1Name.value;
  }
  if (player2Name.value.length > 0) {
    name2 = player2Name.value;
  }
  console.log("Name1", name1, typeof name1); //! Test
  console.log("player1Name", player1Name, typeof player1Name); //! Test
  console.log(
    "player1Name.Value",
    player1Name.value.length,
    typeof player1Name.value
  ); //! Test
  window.location.href = `./round-1.html?player1Name=${name1}&player2Name=${name2}`;
}
