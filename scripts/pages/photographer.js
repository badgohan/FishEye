let url = new URLSearchParams(window.location.search);
let photographerId = url.get('id');

async function getPhotographers() {
    const reponse = await fetch("data/photographers.json");
    const photographers = await reponse.json();
    // et bien retourner le tableau photographers seulement une fois récupéré
    return (photographers)
}

async function displayData(photographers) {
    const photographerHeader = document.querySelector(".photograph-header");

    let photographerSelectionne = photographers.find(photographer => photographer.id == photographerId);
    const photographerModel = photographerTemplate(photographerSelectionne);
    const userCardDOM = photographerModel.getUserCardDOM();
    photographerHeader.appendChild(userCardDOM);
}

async function init() {
    // Récupère les datas des photographes
    const { photographers } = await getPhotographers();
    await displayData(photographers);
}

init();

