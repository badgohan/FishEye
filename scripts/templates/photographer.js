function photographerTemplate(data) {
    const { id, name, portrait, city, country, tagline, price } = data;

    const picture = `assets/photographers/${portrait}`;

    function getUserCardDOM() {
        const lien = document.createElement('a');
        lien.setAttribute("href", `photographer.html?id=${id}`);
        lien.classList.add('photographer_link');
        const article = document.createElement( 'article' );
        const img = document.createElement( 'img' );
        img.setAttribute("src", picture)
        const h2 = document.createElement( 'h2' );
        h2.textContent = name;
        const localisation = document.createElement('h3');
        localisation.textContent = `${city}, ${country}`;
        const accroche = document.createElement('blockquote');
        accroche.textContent = tagline;
        const tarif = document.createElement('p');
        tarif.textContent = `${price}€/jour`;

        lien.appendChild(article);
        article.appendChild(img);
        article.appendChild(h2);
        article.appendChild(localisation);
        article.appendChild(accroche);
        article.appendChild(tarif);

        return (lien);
    }
    return { id, name, picture, city, country, tagline, price, getUserCardDOM }
}