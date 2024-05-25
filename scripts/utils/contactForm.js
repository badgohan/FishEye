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
