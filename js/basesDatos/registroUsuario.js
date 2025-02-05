
const loginuser = document.getElementById("formulario1");
loginuser.addEventListener("submit", (e) => {
  e.preventDefault();

  const email = document.getElementById("correoSesion").value;
  const contraseña = document.getElementById("contraseñaSesion").value;
  const usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];
  const validUser = usuarios.find(Usuario => Usuario.campoCorreo === email && Usuario.campoContraseña === contraseña);

  if (!validUser) {
    Swal.fire({
      title: "Error",
      text: "Usuario y/o contraseña incorrectos!",
      icon: "error",
      confirmButtonText: "Entendido",
      buttonsStyling: false,
      customClass: {
        title: 'swal-title',
        text: 'swal-text',
        popup: 'swal-popup',
        confirmButton: 'swal-confirm-button',
        icon: 'custom-icon'
      },
      
    });
  } else {
    Swal.fire({
      title: "¡Bienvenid@!",
      text: `Bienvenid@ ${validUser.campoCorreo}, ahora eres parte de Awiki :)`,
      icon: "success",
      confirmButtonText: "Continuar",
      buttonsStyling: false,
      customClass: {
        title: 'swal-title',
        text: 'swal-text',
        popup: 'swal-popup',
        confirmButton: 'swal-confirm-button',
        icon: 'custom-icon'
      },

      willClose: () => {
        window.location.href = "/index.html"; 
      }
    });
  }
});