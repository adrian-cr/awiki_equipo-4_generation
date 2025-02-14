import {fillStar} from "../../../modules/utils.js";
const profileImage = document.getElementById("imagen-perfil");
const userName = document.getElementById("nombre-usuario");
const userDescription = document.getElementById("decripcion-usuario");
const reviewContainer = document.getElementById("contenedor-resenas");


const noReviewsBanner = `<div class="review-card" id="aviso-sin-resenas">Aún no hay reseñas para mostrar... :(</div>`;

const addReviewCard = review => {
  let reviewCard = `
    <div class="review-card">
      <div class="card-info-wrapper">
        <img src="https://www.mexicoescultura.com/galerias/espacios/principal/mide_museo.jpg" class="card-title-image">
        <div class="card-title-wrapper">
          <h5 class="card-title">${review.lugar}</h5>
          <p class="rating-container">
            <i class="bi bi-star${fillStar(1, review.calificacion)} rating-star"></i>
            <i class="bi bi-star${fillStar(2, review.calificacion)} rating-star"></i>
            <i class="bi bi-star${fillStar(3, review.calificacion)} rating-star"></i>
            <i class="bi bi-star${fillStar(4, review.calificacion)} rating-star"></i>
            <i class="bi bi-star${fillStar(5, review.calificacion)} rating-star"></i>
          </p>
        </div>
      </div>
      <div class="card-review-wrapper">
        <p class="review-text">${review.descripcion}</p>
      </div>
    </div>
  `;
  reviewContainer.insertAdjacentHTML("beforeend", reviewCard);
};

const mapData = data => {
  profileImage.setAttribute("src", data.imagenPerfil != null ? data.imagenPerfil : "/images/avatar.png");
  userName.innerHTML = `${data.nombre} ${data.apellido}`;
  userDescription.innerHTML = data.descripcionPerfil;
   data.resenasUsuario.length==0? reviewContainer.insertAdjacentHTML("beforeend", noReviewsBanner) : data.resenasUsuario.forEach(e => addReviewCard(e));
}

fetch("../../data/usuarios.json")
  .then(
    res => res.json())
  .then( res => {
    const data = res.data;
    //Import data [NOT YET IMPLEMENTED]:

    mapData(data[2]);
    });
