function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}
function close(){
  modalbg.style.display="none";
}

window.onclick = function(e){
  if (e.target === bground){
    bground.style.display="none";
  }
}

window.addEventListener("keydown", function(event){
  if (event.key === "Escape"){
    bground.style.display="none";
  }
})