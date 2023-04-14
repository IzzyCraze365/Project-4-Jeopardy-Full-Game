/* CSS Week 4 - Project */
/* Jeopardy! Project  */
/* Using a Model Template from W3 Schools */

/* TODO imported into each HTML file to give functionality */

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("answer")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}
/* 
// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
 */