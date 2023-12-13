function photographerTemplate(data) {
    const { name, portrait, city, country, tagline, price } = data;

    const picture = `assets/photographers/${portrait}`;

    function getUserCardDOM() {
        const article = document.createElement( 'article' );
        const img = document.createElement( 'img' );
        img.setAttribute("src", picture)
        const h2 = document.createElement( 'h2' );
        h2.textContent = name;
        const localisation = document.createElement('p');
        localisation.textContent = `${city}, ${country}`;
        const accroche = document.createElement('p');
        accroche.textContent = tagline;
        const tarif = document.createElement('p');
        tarif.textContent = `${price}€/jour`
        article.appendChild(img);
        article.appendChild(h2);
        article.appendChild(localisation);
        article.appendChild(accroche);
        article.appendChild(tarif);
        return (article);
    }
    return { name, picture, city, country, tagline, price, getUserCardDOM }
}