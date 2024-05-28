function photographerTemplate(data) {
    const { id, name, portrait, city, country, tagline, price } = data;

    const picture = `assets/photographers/${portrait}`;
    
    // Création des éléments de la page d'accueil
    const lien = document.createElement('a');
    lien.setAttribute("href", `photographer.html?id=${id}`);
    lien.classList.add('photographer_link');
    const article = document.createElement( 'article' );
    const img = document.createElement( 'img' );
    img.setAttribute("src", picture);
    const h2 = document.createElement( 'h2' );
    h2.textContent = name;
    const localisation = document.createElement('h3');
    localisation.textContent = `${city}, ${country}`;
    const accroche = document.createElement('blockquote');
    accroche.textContent = tagline;
    const tarif = document.createElement('p');
    tarif.textContent = `${price}€/jour`;

    // Ajout des éléments pour le header de la page photographe
    const informations = document.createElement('div');
    informations.classList.add('informations_photographe');

    function getUserCardDOM() {

        lien.appendChild(article);
        article.appendChild(img);
        article.appendChild(h2);
        article.appendChild(localisation);
        article.appendChild(accroche);
        article.appendChild(tarif);

        return (lien);
    }

    function getUserPageDOM() {
        informations.appendChild(h2);
        informations.appendChild(localisation);
        informations.appendChild(accroche);

        return (informations);
    }

    function getUserImg() {
        return (img);
    }

    return { id, name, picture, city, country, tagline, price, getUserCardDOM, getUserPageDOM, getUserImg}
}

function mediasTemplate(data2) {
    const {photographerId, title, image, video, likes } = data2;
    
    // Ajout des éléments pour l'affichage des photos des phographes

    const vignette = document.createElement('div');
    vignette.classList.add('vignette');
    const photos = document.createElement('img');
    photos.classList.add('vignette_img');
    const videos = document.createElement('video');
    const infoPhotos = document.createElement('div');
    infoPhotos.classList.add('vignette_information');
    const titre = document.createElement('p');
    titre.textContent = title;
    const nbLike = document.createElement('p');
    nbLike.classList.add('nombre_like');
    nbLike.textContent = likes;
    

    // Elements de l'encart
    const totalLikes = document.createElement('p');
    totalLikes.classList.add('likes_encart');

    function getUserPhotos() {
        if (image !== undefined) {
            photos.setAttribute("src", `assets/photos/Sample_Photos/${photographerId}/${image}`);
            vignette.appendChild(photos);
        }
        if (video !== undefined) {
            videos.setAttribute("src", `assets/photos/Sample_Photos/${photographerId}/${video}`);
            vignette.appendChild(videos);
        }
        infoPhotos.appendChild(titre);
        infoPhotos.appendChild(nbLike);

        vignette.appendChild(infoPhotos);

        return (vignette);
    }

    return { photographerId, title, image, video, likes, totalLikes, getUserPhotos}
}