const modalBtn = document.getElementById("contact_header");
modalBtn.addEventListener("click", displayModal);

function displayModal() {
    const modal = document.getElementById("contact_modal");
    modal.style.display = "block";
}

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
function validateMessage() {
    if (message.value.length < 2 || message.value.length === 0) {
        message.closest(".formData").setAttribute("data-error", message.value.length === 0 ? "Le champ nom ne peut pas être vide" : "Le nom doit contenir au moins deux caractères");
        message.closest(".formData").setAttribute("data-error-visible", "true");
        return false;
    } else {
        message.closest(".formData").setAttribute("data-error-visible", "false");
        return true;
    }
}

function validate() {

    var firstnameValid = validateFirstname();
    var lastnameValid = validateLastname();
    var emailValid = validateEmail();
    var messageValid = validateMessage();

    //if all test return true we display the success message
    if (firstnameValid && lastnameValid && emailValid && messageValid) {
        successMessage.style.display = "flex";
    }
}