const modalBtn = document.getElementById("contact_header");


function displayModal() {
    const modal = document.getElementById("contact_modal");
    modal.style.display = "block";
}

modalBtn.forEach((btn) => btn.addEventListener("click", displayModal));


function closeModal() {
    const modal = document.getElementById("contact_modal");
    modal.style.display = "none";
}

// Check if "prénom" field is not empty and have at least two characters
function validateFirstname() {
    if (firstname.value.length < 2 || firstname.value.length === 0) {
        firstname.closest(".formData").setAttribute("data-error", firstname.value.length === 0 ? "Le champ prénom ne peut pas être vide" : "Le prénom doit contenir au moins deux caractères");
        firstname.closest(".formData").setAttribute("data-error-visible", "true");
        return false;
    } else {
        firstname.closest(".formData").setAttribute("data-error-visible", "false");
        return true;
    }
}

// Check if "nom" field is not empty and have at least two characters
function validateLastname() {
    if (lastname.value.length < 2 || lastname.value.length === 0) {
        lastname.closest(".formData").setAttribute("data-error", lastname.value.length === 0 ? "Le champ nom ne peut pas être vide" : "Le nom doit contenir au moins deux caractères");
        lastname.closest(".formData").setAttribute("data-error-visible", "true");
        return false;
    } else {
        lastname.closest(".formData").setAttribute("data-error-visible", "false");
        return true;
    }
}
// Check if "email" field is not empty and match a valid email format
function validateEmail() {
    var regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if (regex.test(email.value) == false || email.value.length === 0) {
        email.closest(".formData").setAttribute("data-error", email.value.length === 0 ? "Veuillez renseigner une adresse email" : "L'adresse email n'est pas valide");
        email.closest(".formData").setAttribute("data-error-visible", "true");
        return false;
    } else {
        email.closest(".formData").setAttribute("data-error-visible", "false");
        return true;
    }
}

// Check if "nom" field is not empty and have at least two characters
function validateLastname() {
    if (lastname.value.length < 2 || lastname.value.length === 0) {
        lastname.closest(".formData").setAttribute("data-error", lastname.value.length === 0 ? "Le champ nom ne peut pas être vide" : "Le nom doit contenir au moins deux caractères");
        lastname.closest(".formData").setAttribute("data-error-visible", "true");
        return false;
    } else {
        lastname.closest(".formData").setAttribute("data-error-visible", "false");
        return true;
    }
}
/*
function editNav() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }
  
  // DOM Elements  ///Valeur à null 
  const modalbg = document.querySelector(".bground");
  const modalBtn = document.querySelectorAll(".modal-btn");
  const formData = document.querySelectorAll(".formData");
  const closeBtn = document.querySelector(".close");
  const form = document.querySelector('form');
  const btnClose =document.querySelector(".btn-close");
  
  // launch modal event
  modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));
  
  // launch modal form
  function launchModal() {
    modalbg.style.display = "block";
  }
  
  // close modal form
  function closeModal() {
    modalbg.style.display = "none";
  }
  
  // close modal event, click x button
  closeBtn.addEventListener("click", closeModal);
  
  // close modal event, click on Fermer button
  btnClose.addEventListener("click", closeModal);
  
  // close modal event, click outside modal
  modalbg.addEventListener('click', function (event) {
    if (event.target === modalbg) {
      closeModal();
    }
  })
  
  function validate() {
  
    event.preventDefault();
    var firstnameValid = validateFirstname();
    var lastnameValid = validateLastname();
    var emailValid = validateEmail();
    var competitionValid = validateCompetition();
    var locationValid = validateLocation();
    var termsValid = termsAccepted();
    var birthdateValid = validateBirthdate();
  
    //if all test return true we display the success message
    if (firstnameValid && lastnameValid && emailValid && competitionValid && locationValid && termsValid && birthdateValid) {
      successMessage.style.display = "flex";
      btnClose.style.display = "block";
    }
     
  
  }

  
  // Check if "nom" field is not empty and have at least two characters
  function validateLastname() {
    if (lastname.value.length < 2 || lastname.value.length === 0) {
      lastname.closest(".formData").setAttribute("data-error", lastname.value.length === 0 ? "Le champ nom ne peut pas être vide" : "Le nom doit contenir au moins deux caractères");
      lastname.closest(".formData").setAttribute("data-error-visible", "true");
      return false;
    } else {
      lastname.closest(".formData").setAttribute("data-error-visible", "false");
      return true; 
    }
  }
  // Check if "email" field is not empty and match a valid email format
  function validateEmail() {
    var regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  
    if (regex.test(email.value) == false || email.value.length === 0) {
      email.closest(".formData").setAttribute("data-error", email.value.length === 0 ? "Veuillez renseigner une adresse email" : "L'adresse email n'est pas valide");
      email.closest(".formData").setAttribute("data-error-visible", "true");
      return false;
    } else {
      email.closest(".formData").setAttribute("data-error-visible", "false");
      return true; 
    }
  }
  
  //Check if the field "tournoi" contain a number and is not empty
  function validateCompetition() {
    competition = parseInt(quantity.value);
    if (Number.isInteger(competition) == false && quantity.value != '' && 0 <= quantity.value < 100) {
      quantity.closest(".formData").setAttribute("data-error", "La valeur entrée doit être un chiffre compris entre 0 et 100");
      quantity.closest(".formData").setAttribute("data-error-visible", "true");
      return false;
    } else {
      quantity.closest(".formData").setAttribute("data-error-visible", "false");
      return true;
    }
  }
  
  //Check if at least one location is checked
  function validateLocation() {
    const locationName = document.getElementsByName("location");
    var coché = false;
  
    for (var i = 0; i < locationName.length; i++) { 
      if (locationName[i].checked) {
        coché = true;
        break;
      } 
    }
  
    if (coché == false) {
      location1.closest(".formData").setAttribute("data-error", "Veuillez sélectionner un lieu");
      location1.closest(".formData").setAttribute("data-error-visible", "true");
      return false;
    } else {
      location1.closest(".formData").setAttribute("data-error-visible", "false");  
      return true;
    }
  }
  
  //Check is the terms and conditions are accepted
  function termsAccepted() {
    if (termsCondition.checked == false) {
      termsCondition.closest(".formData").setAttribute("data-error", "Il est obligatoire d'accepter les conditions d'utilisation");  
      termsCondition.closest(".formData").setAttribute("data-error-visible", "true");
      return false;
    } else {
      termsCondition.closest(".formData").setAttribute("data-error-visible", "false"); 
      return true;
    }
  }
  
  //Check if a birthdate is written
  function validateBirthdate() {
    if (birthdate.value.length === 0) {
      console.log("test");
      birthdate.closest(".formData").setAttribute("data-error", "La date de naissance ne peut pas être vide");
      birthdate.closest(".formData").setAttribute("data-error-visible", "true");
      return false;
    } else
    birthdate.closest(".formData").setAttribute("data-error-visible", "false");
    return true;
  }
  */