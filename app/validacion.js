const txtNombre = document.getElementById("nombre");
const txtTelefono = document.getElementById("telefono");
const txtEmail = document.getElementById("email");
const txtMensaje = document.getElementById("mensaje");
const botonEnviar = document.getElementById("boton-enviar");
const mensajeError = document.getElementById("mensaje-error");

function validarNombre() {
  if (txtNombre.value.length < 3) {
    mensajeError.style.display = "block";
    mensajeError.insertAdjacentHTML("beforeend", `<li>Ingrese un nombre válido.</li>`);
    return false;
  }
  return true;
}

function validarTelefono() {
  if (txtTelefono.value.length !== 10 || Number.isNaN(txtTelefono.value)) {
    mensajeError.style.display = "block";
    mensajeError.insertAdjacentHTML("beforeend", `<li class="alerta-error"><strong>Igrese un teléfono válido.</strong></li>`);
    return false;
  }
  return true;
}

function validarEmail() {
  let regex = new RegExp("[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+");
  if (!regex.test(txtEmail.value)) {
    mensajeError.style.display = "block";
    mensajeError.insertAdjacentHTML("beforeend", `<li class="alerta-error"><strong>Ingrese un correo válido.</strong></li>`);
    return false;
  }
  return true;
}

function validarMensaje(){
  if (txtMensaje.value.length < 30 || txtMensaje.value.length > 280) {
    mensajeError.style.display = "block";
    mensajeError.insertAdjacentHTML("beforeend", `<li class="alerta-error"><strong>Tu mensaje puede contener de 30 a 280 caracteres.</strong></li>`);
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
  datosValidos = validarNombre() && datosValidos;
  datosValidos = validarTelefono() && datosValidos;
  datosValidos = validarEmail() && datosValidos;
  datosValidos = validarMensaje() && datosValidos;
  return datosValidos;
}

botonEnviar.addEventListener("click", e => {
  if (!validarDatos()) {
    e.preventDefault();
  }
})
