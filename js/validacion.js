
(function(global) {
  const txtNombre = document.getElementById("nombre");
  const txtTelefono = document.getElementById("telefono");
  const txtEmail = document.getElementById("email");
  const txtMensaje = document.getElementById("mensaje");
  const botonEnviar = document.getElementById("boton-enviar");
  const mensajeError = document.getElementById("mensaje-error");

  // function validarNombre() {
  //   if (txtNombre.value.length < 3) {
  //     mensajeError.style.display = "block";
  //     mensajeError.insertAdjacentHTML("beforeend", `<li class="alerta-error"> ❌ Ingrese un nombre válido.</li>`);
  //     return false;
  //   }
  //   return true;
  // }
  function validarNombre() {
  
    let nombreRegex = /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/;
    if (!nombreRegex.test(txtNombre.value) || txtNombre.value.length < 3) {
      mensajeError.style.display = "block";
      mensajeError.insertAdjacentHTML("beforeend", `<li class="alerta-error">❌ Ingrese un nombre válido.</li>`);
      return false;
    }
    return true;
  }
  
  
  // function validarTelefono() {
  //   if (/^0+$/.test(txtTelefono.value)) {
  //     mensajeError.style.display = "block";
  //     mensajeError.insertAdjacentHTML("beforeend", `<li class="alerta-error"><strong>❌ Ingrese un teléfono válido.</strong></li>`);
  //     return false;
  //   }

  //   let numberRegex = new RegExp("^(\\+\\d{1,2}\\s?)?\\(?\\d{3}\\)?[-\\s]?\\d{3}[-\\s]?\\d{4}$");
  //   if (!numberRegex.test(txtTelefono.value)) {
  //     mensajeError.style.display = "block";
  //     mensajeError.insertAdjacentHTML("beforeend", `<li class="alerta-error"><strong> ❌ Ingrese un teléfono válido.</strong></li>`);
  //     return false;
  //   }
  //   return true;
  // }
  function validarTelefono() {
    if (/^0+$/.test(txtTelefono.value) || txtTelefono.value === "0000000001") {
      mensajeError.style.display = "block";
      mensajeError.insertAdjacentHTML("beforeend", `<li class="alerta-error"><strong>❌ Ingrese un teléfono válido.</strong></li>`);
      return false;
    }
  
    if (/0123456789/.test(txtTelefono.value) || /123456789/.test(txtTelefono.value) || /234567890/.test(txtTelefono.value)) {
      mensajeError.style.display = "block";
      mensajeError.insertAdjacentHTML("beforeend", `<li class="alerta-error"><strong>❌ Ingrese un teléfono válido. No se permiten secuencias consecutivas de números.</strong></li>`);
      return false;
    }
  
  
    let numberRegex = /^[0-9()+\-\\s]*$/;
    if (!numberRegex.test(txtTelefono.value) || !/^\+?\d{1,4}?[\d\s\-\(\)]{7,}$/.test(txtTelefono.value)) {
      mensajeError.style.display = "block";
      mensajeError.insertAdjacentHTML("beforeend", `<li class="alerta-error"><strong>❌ Ingrese un teléfono válido.</strong></li>`);
      return false;
    }
    return true;
  }
  
  
  

  function validarEmail() {
    let regex = new RegExp("[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+");
    if (!regex.test(txtEmail.value)) {
      mensajeError.style.display = "block";
      mensajeError.insertAdjacentHTML("beforeend", `<li class="alerta-error"><strong> ❌ Ingrese un correo válido.</strong></li>`);
      return false;
    }
    return true;
  }

  function validarMensaje() {
    if (txtMensaje.value.length < 30 || txtMensaje.value.length > 280) {
      mensajeError.style.display = "block";
      mensajeError.insertAdjacentHTML("beforeend", `<li class="alerta-error"><strong> ❌ Tu mensaje debe contener de 30 a 280 caracteres.</strong></li>`);
      return false;
    }
    return true;
  }

  function borrarErrores() {
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
  });

  global.validarDatos = validarDatos; 
})(window);
