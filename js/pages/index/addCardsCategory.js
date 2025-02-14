import { capitalize } from "../../../modules/utils.js";

var listing = []
const categoriasContainer = document.getElementById("categorias-container");

const categoriasPermitidas = ["museo", "restaurante", "hotel"];

//Para obtener las imagenes
function getCategoryImage(categoria) {
    const imagenes = {
        "museo": "https://i.pinimg.com/736x/2b/e5/03/2be50367bd597c6f1f878dc3c0450d85.jpg",
        "restaurante": "https://i.pinimg.com/736x/ee/35/27/ee352708e7b053d8b73987346e17188e.jpg",
        "hotel": "https://i.pinimg.com/736x/9b/a3/6c/9ba36c4172e81cb77e9cbdead8a9b7f2.jpg"
    };
    return imagenes[categoria] || "https://via.placeholder.com/150"; // Imagen de respaldo
}


//Función para obtener las categorias de museo, restaurante y hotel

function getFilteredCategories(listings) {
    const categoriasUnicas = {};
  
    listings.forEach(lugar => {
      if (categoriasPermitidas.includes(lugar.categoria)) {
        if (categoriasPermitidas.includes(lugar.categoria) && !categoriasUnicas[lugar.categoria]) {
            categoriasUnicas[lugar.categoria] = {
                categoria: lugar.categoria,
                imagen: getCategoryImage(lugar.categoria) 
          };
        }
      }
    });
  
    return Object.values(categoriasUnicas);
  }

// Función para agregar las tarjetas de categorías
function addListingCard(listing){
  const listingCardHTML = `
                <a href="/pages/resultadosBusqueda.html?categoria=${listing.categoria}" class="tarjeta-link">
                  <div class="tarjetaImagen" style="position: relative;">
                   <div class="imagen-container">
                    <img class="imagen" src="${listing.imagen}">
                    <div class="overlay"></div> 
                    <div class="textoSobreImagen">
                      ${capitalize(listing.categoria)}
                    </div>
                  </div>
                  </div>

    `;
    categoriasContainer.insertAdjacentHTML("beforeend", listingCardHTML);
}

// Obtener los datos y mostrar las categorías
fetch("../data/listings.json")
  .then(res => res.json())
  .then(res => {
    const categories = getFilteredCategories(res.data);
    categories.forEach(e => addListingCard(e, categoriasContainer)); 
  });
