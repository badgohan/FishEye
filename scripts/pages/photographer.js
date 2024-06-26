let url = new URLSearchParams(window.location.search);
let photographerId = url.get('id');

async function getPhotographers() {
    const reponse = await fetch("data/photographers.json");
    const data = await reponse.json();

    const { photographers, media} = data;

    return {photographers, media };
}

async function displayData(photographers, media) {
    const photographerHeader = document.querySelector(".photograph-header");
    const photographerMedias = document.querySelector(".porfolio");
    const photographerEncart = document.querySelector("aside");
    const photographerTotalLikes = document.querySelector(".nbLikes");

    let photographerSelectionne = photographers.find(photographer => photographer.id == photographerId);

    let mediaPhotographe = media.filter(photos => photos.photographerId == photographerId)
    
    const photographerModel = photographerTemplate(photographerSelectionne);
    const userPageDOM = photographerModel.getUserPageDOM();
    const userImg = photographerModel.getUserImg();
    const userTarif = photographerModel.tarif;

    let nbTotalLikes = 0;

    mediaPhotographe.forEach(medias => {
        // Récupère chacun des médias du photographes et leur applique le template
        const photographerMediaModel = mediasTemplate(medias);
        const usermedia = photographerMediaModel.getUserPhotos();
        nbTotalLikes += photographerMediaModel.likes;
        photographerMedias.appendChild(usermedia);
    });

    photographerHeader.appendChild(userPageDOM);
    photographerHeader.appendChild(userImg);
    photographerHeader.insertBefore(userPageDOM, photographerHeader.firstChild );

    // Affichage du nom dans la modal de contact
    const photographerNameModal = document.querySelector(".nomPhotographe");
    photographerNameModal.textContent = photographerSelectionne.name;

    // Affichage du nombre de likes et du tarif
    photographerTotalLikes.textContent = nbTotalLikes;
    photographerEncart.appendChild(photographerTotalLikes);
    photographerEncart.appendChild(userTarif);
    console.log("tarif", userTarif);

}

async function init() {
    // Récupère les datas des photographes
    const { photographers, media } = await getPhotographers();
    await displayData(photographers, media);
}

init();

