import {stateAbbreviations, bizIcons} from "../../../modules/dictionaries.js";
import { capitalize } from "../../../modules/utils.js";

var listings = [];
const mejoresContainer = document.getElementsByClassName("mejores-calificados")[0];

const fillStar = (starPosition, rating) => {
  //rating=4.5, starPosition=3 --> STAR FILLED
  rating = parseFloat(rating);
  starPosition = parseFloat(starPosition);
  if (rating >= starPosition) {
    return "-fill";
  }
  //rating=1.5, starPosition=3 --> STAR EMPTY
  if (rating > starPosition - 1) {
    return "-half"
  }
  return "";

}

function addListingCard(listing){
  const listingCardHTML = `
    <div class="card" title="${capitalize(listing.categoria)} • ${listing.ubicacion.municipio}, ${listing.ubicacion.estado}">
      <div class="card-image-wrapper">
        <img src=${listing.imagen} class="card-image" alt="image">
      </div>
      <div class="card-info-wrapper">
        <div class="card-title-wrapper">
          <h3 class="card-title">${listing.nombre}</h3>
        </div>
          <p class="card-details-wrapper" >
            <p class="card-category">
              <img class="category-icon${listing.categoria == "restaurante" ? " smaller" : ""}" src="../assets/svg/${bizIcons[listing.categoria]}.svg"/>
              ${capitalize(listing.categoria)}
            </p>
          </p>
          <p class="card-location">
              ${listing.ubicacion.municipio} (${stateAbbreviations[listing.ubicacion.estado]})
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
    </div>`;
    mejoresContainer.insertAdjacentHTML("beforeend", listingCardHTML);
}


fetch("./data/listings.json")
  .then(
    res => res.json())
  .then( res => {
    listings = listings.concat(res.data);
    const mejoresLugares =listings.sort((a, b) => b.rating - a.rating) // Ordenamos de mayor a menor
      .slice(0, 4);
    mejoresLugares.forEach(e => addListingCard(e, mejoresContainer));
    });
