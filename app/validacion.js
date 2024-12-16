const txtNombre = document.getElementById("nombre");
const txtTelefono = document.getElementById("telefono");
const txtEmail = document.getElementById("email");
const txtMensaje = document.getElementById("mensaje");
const botonEnviar = document.getElementById("boton-enviar");
const mensajeError = document.getElementById("mensaje-error")
console.log(txtNombre.value);

function validarNombre() {
  if (txtNombre.value.length < 3) {
    mensajeError.style.display = "block";
    mensajeError.insertAdjacentHTML("beforeend", `<li>Ingrese un nombre válido.</li>`);
  }
}

function validarTelefono() {
  if (txtTelefono.value.length !== 10 || Number.isNaN(txtTelefono.value)) {
    mensajeError.style.display = "block";
    mensajeError.insertAdjacentHTML("beforeend", `<li>Ingrese un teléfono válido.</li>`);
  }
}

function validarEmail() {
  let regex = new RegExp("[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+");
  if (!regex.test(txtEmail.value)) {
    mensajeError.style.display = "block";
    mensajeError.insertAdjacentHTML("beforeend", `<li>Ingrese un correo válido.</li>`);
  }
}

function validarMensaje(){
  if (txtMensaje.value.length < 30 || txtMensaje.value.length > 280) {
    mensajeError.style.display = "block";
    mensajeError.insertAdjacentHTML("beforeend", `<li>Tu mensaje puede contener de 30 a 280 caracteres.</li>`);
  }
}

function borrarErrores(){
  mensajeError.innerHTML = "";
  mensajeError.style.display = "none";
}


botonEnviar.addEventListener("click", e => {
  e.preventDefault();
  borrarErrores();
  validarNombre();
  validarTelefono();
  validarEmail();
  validarMensaje();
})
