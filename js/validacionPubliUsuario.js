const txtpublication = document.getElementById("validationTextarea");
const mensajeError = document.getElementById("mensaje-error");
const btnPublicar = document.getElementById("btnPublicar");
import * as validators from "../modules/validators.js";

function validarPublication() {
    if (!validators.isPostValid(txtpublication.id)) {
      mensajeError.style.display = "block";
      mensajeError.insertAdjacentHTML("beforeend", `<li>Ingrese una publicación válida.</li>`);
      return false;
    }
     return true;
   }

  function borrarErrores(){
    mensajeError.innerHTML = "";
    mensajeError.style.display = "none";
  }
  
  function validarDatos() {
    let datosValidos = true;
    borrarErrores();
    datosValidos = validarPublication() && datosValidos;
    return datosValidos;
  }
  
  btnPublicar.addEventListener("click", e => {
    if (!validarDatos()) {
      e.preventDefault();
    }
  })
  