const formularioContacto = document.getElementById("formulario-contacto");

// (function() {
//   emailjs.init({
//     publicKey: "yMOZxXqsrg5p2k8rS",
//   });
// })();

// formularioContacto.addEventListener("submit", e => {
//   e.preventDefault();
//   emailjs.sendForm('service_eikj0hg', 'template_wi3e0gk', this)
//     .then(() => {
//         console.log('SUCCESS!');
//     }, (error) => {
//         console.log('FAILED...', error);
//     });
// });

// window.onload = function() {
//   botonEnviar.addEventListener('click', function(event) {
//       event.preventDefault();
//       console.log("Evento")
//       // these IDs from the previous steps
//       emailjs.sendForm('service_eikj0hg', 'template_wi3e0gk', "formulario-contacto")
//           .then(() => {
//               console.log('SUCCESS!');
//           }, (error) => {
//               console.log('FAILED...', error);
//           });
//   });
// }

Email.send({
  Host : "smtp.mailendo.com",
  Username : "username",
  Password : "password",
  To : 'them@website.com',
  From : "you@isp.com",
  Subject : "This is the subject",
  Body : "And this is the body"
}).then(
message => alert(message)
);
