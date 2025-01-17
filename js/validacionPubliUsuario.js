const txtpublication = document.getElementById("validationTextarea");
const mensajeError = document.getElementById("mensaje-error");
const btnPublicar = document.getElementById("btnPublicar");


function validarPublication() {
    if (txtpublication.value.length < 8) {
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
  