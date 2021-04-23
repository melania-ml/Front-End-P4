// edit nav
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

// close window
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

// DOM elements form validation
let firstName = document.getElementById('first');
let lastName = document.getElementById('last');
let email = document.getElementById('email');
let birthday = document.getElementById('birthday');
let quantity = document.getElementById('quantity');
let locationTotal = document.getElementById('locationTotal');
let checkbox1 = document.getElementById('checkbox1');
let form = document.getElementById('form');
let regex = /^[a-zA-ZÀ-ÖØ-öø-ÿ]+$/;

// FORM FIELD VALIDATION //

// NAME
function validateFirstName() {
  if (firstName.value.trim().length < 2 || 
  first.value.trim() === '' || 
  !firstName.value.match(regex)) {
      firstName.parentElement.setAttribute('data-error-visible', 'true');
      firstName.style.border = '2px solid #e54858';
      return false;
  }
  first.parentElement.setAttribute('data-error-visible', 'false');
  firstName.style.border = '2px solid #279e7a';
  return true;
}

// FIELDS VALIDATION
function formValidation() {
  if (validateFirstName() === true) {
      return true;
  }
  return false;
}

// SEND FORM
form.addEventListener('submit', function(e){
  e.preventDefault();
  if(formValidation()==true){
  }
});