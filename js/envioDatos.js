
(function() {
 
  const txtNombre = document.getElementById("nombre");
  const txtTelefono = document.getElementById("telefono");
  const txtEmail = document.getElementById("email");
  const txtMensaje = document.getElementById("mensaje");
  const formularioContacto = document.getElementById("formulario-contacto");

  emailjs.init({
    publicKey: "yMOZxXqsrg5p2k8rS",
  });

  function limpiarCampos() {
    txtNombre.value = "";
    txtTelefono.value = "";
    txtEmail.value = "";
    txtMensaje.value = "";
  }

  window.onload = function() {
    formularioContacto.addEventListener('submit', function(event) {
      event.preventDefault();
      if (!window.validarDatos()) { 
        return; 
      }
      emailjs.sendForm('service_eikj0hg', 'template_wi3e0gk', this)
        .then(() => {
          Swal.fire({
            title: "¡Datos enviados con éxito!",
            text: "Gracias por contactarnos, te responderemos pronto",
            icon: "success",
            customClass: {
              title: 'swal-title',
              text: 'swal-text',
              popup: 'swal-popup',
              confirmButton: 'swal-confirm-button',
              icon: 'custom-icon'
            },
             confirmButtonText: 'Salir',
            buttonsStyling: false
          }).then(() => {
            limpiarCampos(); 
          });
        }, (error) => {
          console.log('FAILED...', error);
        });
    });
  }
})();



