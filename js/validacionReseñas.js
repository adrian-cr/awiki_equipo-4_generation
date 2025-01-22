const txtComentario = document.getElementById("comentario");
const botonEnviar = document.getElementById("boton-enviar");
const mensajeError = document.getElementById("mensaje-error");
const selectDestino=document.getElementById("destino");

function borrarErrores() {
    mensajeError.style.display = "none";
    mensajeError.innerHTML = "";
}
function validarDestino(){

    if(selectDestino.value ===""){
        mensajeError.style.display = "block";
        mensajeError.insertAdjacentHTML("beforeend", `<li class="alert alert-danger"><strong>Debes seleccionar destino.</strong></li>`);
        return false;
    }
}

function validarEstrella() {
    const estrellas = document.querySelectorAll('[name="star-experiencia"]');
    for (const estrella of estrellas) {
        if (estrella.checked) {
            return true;
        }
    }
    mensajeError.style.display = "block";
    mensajeError.insertAdjacentHTML("beforeend", `<li class="alert alert-danger"><strong>Debes seleccionar una calificación de estrellas.</strong></li>`);
    return false;
}

function validarTipoViaje() {
    const tipoViajes= document.querySelectorAll('[name="tipo-viaje"]');
    for (const tipoViaje of tipoViajes) {
        if (tipoViaje.checked) {
            return true;
        }
    }
    mensajeError.style.display = "block";
    mensajeError.insertAdjacentHTML("beforeend", `<li class="alert alert-danger"><strong>Debes seleccionar el tipo de viaje.</strong></li>`);
    return false;
}

function validarCriterios() {
    const criterios= document.querySelectorAll('[name="star-criterios"]');
    for (const criterio of criterios) {
        if (criterio.checked) {
            return true;
        }
    }
    mensajeError.style.display = "block";
    mensajeError.insertAdjacentHTML("beforeend", `<li class="alert alert-danger"><strong>Debes seleccionar una calificaciónpara todos los criterios.</strong></li>`);
    return false;
}


function validarComentario() {
    if (txtComentario.value.length < 20 || txtComentario.value.length > 200) {
        mensajeError.style.display = "block";
        mensajeError.insertAdjacentHTML("beforeend", `<li class="alert alert-danger"><strong>Tu mensaje puede contener de 20 a 200 caracteres.</strong></li>`);
        return false;
    }
    return true;
}

function validarDatos() {
    let datosValidos = true;
    borrarErrores();
    
    datosValidos=validarEstrella()&& datosValidos;
    datosValidos=validarTipoViaje()&& datosValidos;
    datosValidos = validarComentario() && datosValidos;
    datosValidos=validarCriterios()&& datosValidos;
    datosValidos = validarDestino() && datosValidos;
    return datosValidos;
}

botonEnviar.addEventListener("click", e => {
    if (!validarDatos()) {
        e.preventDefault();
    }
});