const formularioContacto = document.getElementById("formulario-contacto");
(function() {
  emailjs.init({
    publicKey: "yMOZxXqsrg5p2k8rS",
  });
})();

window.onload = function() {
  formularioContacto.addEventListener('submit', function(event) {
      event.preventDefault();
      // these IDs from the previous steps
      emailjs.sendForm('service_eikj0hg', 'template_wi3e0gk', this)
          .then(() => {
<<<<<<< HEAD
            Swal.fire({
              title: "¡Datos enviados con éxito!",
              text: "Gracias por contactarnos, te responderemos pronto",
              icon: "success",
              draggable: true
            });
=======
              console.log('SUCCESS!');
>>>>>>> Rama_VD
          }, (error) => {
              console.log('FAILED...', error);
          });

<<<<<<< HEAD
    // window.location.assign("../index.html")
=======
    window.location.assign("../index.html")
>>>>>>> Rama_VD
  });
}
