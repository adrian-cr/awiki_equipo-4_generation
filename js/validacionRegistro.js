import * as validators from "../../modules/validators.js";

const form2=document.getElementById("formulario2");

//Elementos del formulario//
const nombreRegistro= document.getElementById("formNombre");
const apellidoRegistro=document.getElementById("formApellido");
const correoRegistro=document.getElementById("formCorreo");
const contraseñaRegistro=document.getElementById("inputContraseña");
const confirmarContraseña= document.getElementById("inputConfirmar");
const botonRegistro=document.getElementById("botonRegistro");

const mensajeError=document.getElementsByClassName("invalid-feedback");

let valid=true;
const mensajesError=[];

function mostrarError(input, mensaje){
  const error =document.createElement('div');
  error.className='error-message';
  error.style.color='red';
  error.innerHTML=mensaje;
  input.parentNode.appendChild(error);
}
function borrarErrores(){
  document.querySelectorAll('.error-message').forEach(el=>el.remove());
  // mensajesError.innerHTML = "";
  // mensajesError.style.display = "none";
}

function validData(){
  borrarErrores();
  valid=true;

  mensajesError.length=0;

  if(!validators.isNameValid(nombreRegistro.id)){
    mensajesError.push({input: nombreRegistro, mensaje: 'Ingrese un nombre'});
    // mensajesError.style.display = "block";
    // mensajesError.insertAdjacentHTML("beforeend", `<p>Ingrese un nombre.</p>`);
    valid =false;
  }

  if(!validators.isNameValid(apellidoRegistro.id)){
    mensajesError.push({input:apellidoRegistro, mensaje: 'Ingresa un apellido'});
    // mensajesError.style.display="block";
    // mensajesError.insertAdjacentHTML("beforeend", '<p> Ingrese un apellido.</p>');
    valid= false;
  }

  if(!validators.isEmailValid(correoRegistro.id)){
    mensajesError.push({input:correoRegistro, mensaje:'Ingresa un correo electrónico valido'})
    // mensajesError.style.display="block";
    // mensajesError.insertAdjacentHTML("beforeend", '<p>Ingrese un correo electronico valido.</p>');
    valid=false;
  }

  if(!validators.isPasswordValid(contraseñaRegistro.id)){
    mensajesError.push({input: contraseñaRegistro, mensaje:'Mínimo ocho caracteres, al menos una letra mayúscula, una letra minúscula, un número y un carácter especial'})
    // mensajesError.style.display="block";
    // mensajesError.insertAdjacentHTML("beforeend", '<p>Mínimo ocho caracteres, al menos una letra mayúscula, una letra minúscula, un número y un carácter especial</p>')
  }

  if(confirmarContraseña.id!== contraseñaRegistro.id){
    mensajesError.push({input:confirmarContraseña, mensaje:'Las contraseñas no coinciden'});
    // mensajesError.style.display='block';
    // mensajesError.insertAdjacentHTML("beforeend", '<p>Las contraseñas no coinciden</p>');
    valid=false;
  }else{
    valid=true;
  }

  mensajesError.forEach(error => mostrarError(error.input, error.mensaje));


  return valid;

}


form2.addEventListener("submit", e =>{
  if (!validData()) {
    e.preventDefault(); 
    Swal.fire({ //Alerta de SweetAlert
      title: "¡Awikitriste! :(",
      text: "Tu registro no ha sido existoso",
      icon: "error"
    });
  }else{
    Swal.fire({ //Alerta de SweetAlert
      title: "¡Awikifeliz! :)",
      text: "Tu registro ha sido existoso",
      icon: "success"
    });
  }
  







  // Swal.fire({
  //     title: 'Error!',
  //     text: 'Do you want to continue',
  //     icon: 'error',
  //     confirmButtonText: 'Cool'
  //   })
  });

//Implementación de alerta Sweetalert

// const { value: formulario2} = await Swal.fire({
//   title: "Multiple inputs",
//   html: `
//     <input name="campoNombre" type="text" class="form-control" id="formNombre" placeholder="Nombre">
//     <input name="campoApellido"type="text" class="form-control" id="formApellido" placeholder="Apellido">
//     <input name="campoCorreo"type="text" class="form-control" id="formCorreo" placeholder="Correo electrónico">
//     <input name="campoContraseña"type="password" class="form-control" id="inputContraseña">
//     <input name="campoConfirmar"type="password" class="form-control" id="inputConfirmar">
//   `,
//   focusConfirm: false,
//   preConfirm: () => {
//     return [
//       document.getElementById("formNombre").value,
//       document.getElementById("formApellido").value,
//       document.getElementById("formCorreo").value,
//       document.getElementById("inputContraseña").value,
//       document.getElementById("inputConfirmar").value,

//     ];
//   }
// });
// if (formulario2) {
//   Swal.fire(JSON.stringify(formValues));
// }


