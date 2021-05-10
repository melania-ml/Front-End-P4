// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const closeModalBtn = document.querySelectorAll(".close");

// edit nav
function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));


// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

// close window
closeModalBtn[0].addEventListener("click", closeModal);
function closeModal(){
  modalbg.style.display="none";
}

window.onclick = function(e){
  if (e.target === modalbg){
    modalbg.style.display="none";
  }
}

window.addEventListener("keydown", function(event){
  if (event.key === "Escape"){
    modalbg.style.display="none";
  }
})


// DOM elements form validation
let firstName = document.getElementById('first');
let lastName = document.getElementById('last');
let email = document.getElementById('email');
let birthdate = document.getElementById('birthdate');
let quantity = document.getElementById('quantity');
let locationTotal = document.getElementById('locationTotal');
let locations = document.querySelectorAll('#locationTotal .checkbox-input');
let checkbox1 = document.getElementById('checkbox1');
let input = document.getElementsByClassName('text-control');
let form = document.getElementById('form');
const nameRegex = /^[a-zA-ZÀ-ÖØ-öø-ÿ]+$/;
const emailRegex = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;

// FORM FIELD VALIDATION //

// NAME
function validateFirstName() {
  if (firstName.value.trim().length < 2 || 
  firstName.value.trim() === '' || 
  !firstName.value.match(nameRegex)) {
      firstName.parentElement.setAttribute('data-error-visible', 'true');
      return false;
  }
  firstName.parentElement.setAttribute('data-error-visible', 'false');
  firstName.style.border = '2px solid #279e7a';
  return true;
}

// LASTNAME
function validateLastName() {
  if (lastName.value.trim().length < 2 || 
  lastName.value.trim() === '' || 
  !lastName.value.match(nameRegex)) {
      lastName.parentElement.setAttribute('data-error-visible', 'true');
      return false;
  }
  lastName.parentElement.setAttribute('data-error-visible', 'false');
  lastName.style.border = '2px solid #279e7a';
  return true;
}

// EMAIL
function validateEmail() {
    if (email.value.trim().match(emailRegex)) {
        email.parentElement.setAttribute('data-error-visible', 'false');
        email.style.border = '2px solid #279e7a';
        return true;
    }
    email.parentElement.setAttribute('data-error-visible', 'true');
    return false;
}

// BIRTHDATE
function validateBirthdate() {
    if (birthdate.value.trim().length !== 10) {
        birthdate.parentElement.setAttribute('data-error-visible', 'true');
        return false;
    }
    birthdate.parentElement.setAttribute('data-error-visible', 'false');
    birthdate.style.border = '2px solid #279e7a';
    return true;
}

// NUMBER OF TOURNAMENTS
function validateNumberTournaments() {
    if (quantity.value.trim().length === 0 || isNaN(quantity.value.trim()) === true || quantity.value.trim() < 0) {
        quantity.parentElement.setAttribute('data-error-visible', 'true');
        return false;
    }
    quantity.parentElement.setAttribute('data-error-visible', 'false');
    quantity.style.border = '2px solid #279e7a';
    return true;
}

// LOCATIONS
function validateLocations() {
  locationTotal.setAttribute('data-error-visible', 'true');
    for (let i = 0; i < locations.length; i++) {
        if (locations[i].checked) {
            locationTotal.setAttribute('data-error-visible', 'false');
            return true;
        }
    }
    return false;
}

// TERMS AND CONDITIONS
function validateCheckBox() {
    if (checkbox1.checked === false) {
        checkbox1.parentElement.setAttribute('data-error-visible', 'true');
        return false;
    }
    checkbox1.parentElement.setAttribute('data-error-visible', 'false');
    return true;
}

// FORM FIELDS EVENTS - FOCUS
function formFieldsValidation(element, method, event) {
    element.addEventListener(event, method);
}
formFieldsValidation(firstName, validateFirstName, 'focusout');
formFieldsValidation(lastName, validateLastName, 'focusout');
formFieldsValidation(email, validateEmail, 'focusout');
formFieldsValidation(birthdate, validateBirthdate, 'focusout');
formFieldsValidation(quantity, validateNumberTournaments, 'focusout');
formFieldsValidation(locationTotal, validateLocations, 'change');
formFieldsValidation(checkbox1, validateCheckBox, 'change');


// ALL FIELDS VALIDATION
function allFieldsValidation() {
    validateFirstName()
    validateLastName()
    validateEmail()
    validateBirthdate()
    validateNumberTournaments()
    validateLocations()
    validateCheckBox()
}

function formValidation() {
    if (validateFirstName() === true &&
        validateLastName() === true &&
        validateEmail() === true &&
        validateBirthdate() === true &&
        validateNumberTournaments() === true &&
        validateLocations() === true &&
        validateCheckBox() === true) {
        return true;
    }
    return false;
}


// SEND FORM
form.addEventListener('submit', function (e) {
    e.preventDefault();
    if (formValidation() == true) {
        displayModalSubmit();
        document.querySelector('form').reset();
    } else {
        allFieldsValidation();
    }
});

// DOM ELEMENTS SUBMIT CONFIRMATION
const containerSubmit = document.getElementsByClassName('containerSubmit');
const closeSubmit = document.getElementsByClassName('closeSubmit');
const closeConfirmation = document.getElementById('closeConfirmation');


// DISPLAY MODAL SUBMIT
function displayModalSubmit() {
    modalbg.style.display = 'none';
    containerSubmit[0].style.display = 'block';
}

// CLOSE 
function close() {
    containerSubmit[0].style.display = 'none';
    first.style.border = 'none';
    last.style.border = 'none';
    email.style.border = 'none';
    birthdate.style.border = 'none';
    quantity.style.border = 'none';
}

// EVENT CLOSE MODAL SUBMIT
closeSubmit[0].addEventListener('click', close);
closeConfirmation.addEventListener('click', close);