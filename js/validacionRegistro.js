
// Example starter JavaScript for disabling form submissions if there are invalid fields
(() => {
  'use strict'

  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  const forms = document.querySelectorAll('.needs-validation')

  // Loop over them and prevent submission
  Array.from(forms).forEach(form => {
    form.addEventListener('submit', event => {
      if (!form.checkValidity()) {
        event.preventDefault()
        event.stopPropagation()
      }

      form.classList.add('was-validated')
    }, false)
  })
})()






//   /*Validacion para el formulario de Registro de Usuario */
// const txtNombre= document.getElementById("formNombre");
// const txtApellido=document.getElementById("formApellido");
// const correoRegistro=document.getElementById("formCorreo");
// const contraseñaRegistro=document.getElementById("inputContraseña");
// const confirmarContraseña=document.getElementById("inputConfirmar");
// const botonRegistro=document.getElementById("botonRegistro");
// const advertencia=document.getElementById("advertencia")


// botonRegistro.addEventListener("click", e=>{
//     let warnings2="";
//     let entrar2= false
//   if(txtNombre.value.length<3)
//     warnings2+='Ingrese un nombre valido'
//     entrar2= true
// })