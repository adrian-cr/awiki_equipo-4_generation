import {stateAbbreviations, bizIcons} from "../../../modules/dictionaries.js";
import { capitalize, fillStar } from "../../../modules/utils.js";

var listings = [];
const listingsContainer = document.getElementsByClassName("listings")[0];

const isHitHubPage = window.location.href.indexOf("github") != -1;

//Obtener categoría de la URL
function getQueryParam(param) {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get(param);
}
const categoriaSeleccionada = getQueryParam("categoria");

function addListingCard(listing){
  const listingLink = `../../pages/dummy pages/empresa.html?newListing=${listing.id}`;
  const listingCardHTML = `<a href="${listingLink}">
    <div class="card" title="${capitalize(listing.tipoNegocio)} • ${listing.municipio}, ${listing.estado}">
      <div class="card-image-wrapper">
        <img src=${listing.imagen} class="card-image" alt="image">
      </div>
      <div class="card-info-wrapper">
        <div class="card-title-wrapper">
          <h3 class="card-title">${listing.nombre}</h3>
        </div>
          <p class="card-details-wrapper" >
            <p class="card-category">
              <img class="category-icon${listing.tipoNegocio == "restaurante" ? " smaller" : ""}" src="../assets/svg/${bizIcons[listing.tipoNegocio]}.svg"/>
              ${capitalize(listing.tipoNegocio)}
            </p>
          </p>
          <p class="card-location">
              ${listing.municipio} (${stateAbbreviations[listing.estado]})
          </p>
          <p class="card-star-rating">
            <i class="bi bi-star${fillStar(1, listing.rating)} rating-star"></i>
            <i class="bi bi-star${fillStar(2, listing.rating)} rating-star"></i>
            <i class="bi bi-star${fillStar(3, listing.rating)} rating-star"></i>
            <i class="bi bi-star${fillStar(4, listing.rating)} rating-star"></i>
            <i class="bi bi-star${fillStar(5, listing.rating)} rating-star"></i>
          </p>
          <p class="card-rating">Rating: <span class="rating rating-${Math.floor(listing.rating)}">${parseFloat(listing.rating).toFixed(1)}</span></p>
      </div>
    </div>
    </a>`;
  listingsContainer.insertAdjacentHTML("beforeend", listingCardHTML);
}
// ruteo original  ../../data/listings.json
fetch(`${isHitHubPage? "../" :"/"}data/newListings.json`)
  .then(
    res => res.json())
  .then( res => {
    console.log(res);
    listings = listings.concat(res.data);
    listings.forEach(e => addListingCard(e));

    if (categoriaSeleccionada) {
      listings = listings.filter(lugar => lugar.tipoNegocio.toLowerCase() === categoriaSeleccionada.toLowerCase());
    }

    // Limpiar el contenedor antes de agregar las tarjetas
    listingsContainer.innerHTML = "";

    // Agregar los lugares (filtrados o todos)
    listings.forEach(e => addListingCard(e));

    });
