//import * as validators from "../../modules/validators.js";
const form2=document.getElementById("formulario2");

//Constantes formulario de Inicio de Sesión
const form1 = document.getElementById("formulario1");
const correoSesion = document.getElementById("correoSesion");
const contraseñaSesion = document.getElementById("contraseñaSesion");
const btnSesion = document.getElementById("botonSesion");

//Elementos del formulario registro//
const nombreRegistro= document.getElementById("formNombre");
const apellidoRegistro=document.getElementById("formApellido");
const correoRegistro=document.getElementById("formCorreo");
const contraseñaRegistro=document.getElementById("inputContraseña");
const confirmarContraseña= document.getElementById("inputConfirmar");

  //Mostrar, quitar errores y limpiar campos
  let mensajesError=[];

  function mostrarError(input, mensaje){
    const error =document.createElement('div');
    error.className='error-message';
    error.style.color='red';
    error.innerHTML=mensaje;
    input.parentNode.appendChild(error);
  }

  function borrarErrores(){
    const errores=document.querySelectorAll('.error-message');
    errores.forEach(err=> err.remove());
  }

 
/**Validación del formulario */
function validarNombre(){
  let nombreRegex= new RegExp(/^[a-zA-ZÀ-ÿ\s]{1,40}$/);
  if(!nombreRegex.test(nombreRegistro.value)){
    mensajesError.push({input: nombreRegistro, mensaje:'Ingrese un nombre'})
    return false;
  }
  return true;
}

function validarApellido(){
  let apellidoRegex= new RegExp(/^[a-zA-ZÀ-ÿ\s]{1,40}$/);
  if(!apellidoRegex.test(apellidoRegistro.value)){
    mensajesError.push({input: apellidoRegistro, mensaje:'Ingrese un apellido'})
    return false;
  }
return true;
}
function validarCorreo(){
  let correoRegex=new RegExp(/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/);
  if(!correoRegex.test(correoRegistro.value)){
    mensajesError.push({input: correoRegistro, mensaje:'Ingrese un correo válido'})
    return false;
  }
return true;
}
function validarContraseña(){
  let contraseñaRegex= new RegExp("^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%.^&*-]).{8,}$")
  if(!contraseñaRegex.test(contraseñaRegistro.value)){
    mensajesError.push({input:contraseñaRegistro, mensaje:'Mínimo ocho caracteres, al menos una letra mayúscula, una letra minúscula, un número y un carácter especial'});
    // mensajesError.push({input: contraseñaRegistro, mensaje:'Mínimo ocho caracteres, al menos una letra mayúscula, una letra minúscula, un número y un carácter especial'})
    return false;
  }
  return true;
}
function validarConfirmarContraseña(){
  if (contraseñaRegistro.value !== confirmarContraseña.value){
    mensajesError.push({input: confirmarContraseña, mensaje:'Las contraseñas no coinciden'})
  return false;
  }
  return true;
}

function validarLocalStorage(){
  const newUsuario= validarFormulario();
  if(newUsuario){
    const datos=new FormData(event.target);
    const datosCompletos = Object.fromEntries(datos.entries());
    console.log(datosCompletos);
    const usuariosPrevios= JSON.parse(localStorage.getItem('usuarios'))|| [];
    usuariosPrevios.push(datosCompletos);

    localStorage.setItem('usuarios', JSON.stringify(usuariosPrevios));

    return datosCompletos;

  }
}

function validarFormulario(){
  borrarErrores();
  mensajesError=[];
  const isNombreValido= validarNombre();
  const isApellidoValido= validarApellido();
  const isCorreoValido=validarCorreo();
  const isContraseñaValida=validarContraseña();
  const isConfirmarValida=validarConfirmarContraseña();

  mensajesError.forEach(err => mostrarError(err.input, err.mensaje));

  if(isNombreValido && isApellidoValido && isCorreoValido && isContraseñaValida && isConfirmarValida){
    console.log("Formulario válido");
  return true;
  }else{
  console.log("Formulario inválido");
  return false;
  }
}

function enviarDatosApi(datosCompletos) { //se agrego
  const requestOptions = {
    method: "POST",
    headers: new Headers({
      'Content-Type': 'application/json; charset=UTF-8'
    }),
    body: JSON.stringify(datosCompletos),
    redirect: "follow"
  };

  fetch("http://3.141.25.162/api/usuarios/", requestOptions)
    .then((response) => response.json())// responde con JSON
    .then((result) => console.log("Resultado de la API",result))
    .catch((error) => console.error("Error al enviar datos", error));
  }

form2.addEventListener("submit", e =>{
  e.preventDefault();
  const esFormularioValido= validarFormulario();
  const esLocalStorage= validarLocalStorage();
  if(esFormularioValido && esLocalStorage){
    const datos=new FormData(form2);// se agrego
    datos.set("descripcionPerfil", "Hola, me llamo Sofía y soy programadora web.");
    datos.set("esPerfilEmpresa", datos.get("esPerfilEmpresa")==""? true : false);
    const datosCompletos= Object.fromEntries(datos.entries()); //se agrego

    enviarDatosApi(datosCompletos);
  // limpiarFormulario();
    form2.reset(); //Método que restablece los valores del input a su estado inicial
    Swal.fire({ //Alerta de SweetAlert
            title: "¡Awikifeliz! :)",
            text: "Tu registro ha sido existoso",
            icon: "success",
            customClass: {
              title: 'swal-title',
              text: 'swal-text',
              popup: 'swal-popup',
              confirmButton: 'swal-confirm-button',
              icon: 'custom-icon'
            },
          });
  }else{
    Swal.fire({ //Alerta de SweetAlert
            title: "¡Awikitriste! :(",
            text: "Tu registro no ha sido existoso,por favor completa todos los campos.",
            icon: "error",
            customClass: {
              title: 'swal-title',
              text: 'swal-text',
              popup: 'swal-popup',
              confirmButton: 'swal-confirm-button',
              icon: 'custom-icon'
            },
          });
  }
});



//------------------------Validación formulario inicia sesión

function validarCorreoSesion(){
  let correoRegex=new RegExp(/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/);
  if(!correoRegex.test(correoSesion.value)){
    // mensajesError.push({input: correoSesion, mensaje:'Ingrese un correo válido'})
    return false;
  }
return true;
}
function validarContraseñaSesion(){
  let contraseñaRegex= new RegExp("^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$.%^&*-]).{8,}$")
  if(!contraseñaRegex.test(contraseñaSesion.value)){
    console.log("Error")
    // mensajesError.push({input: contraseñaRegistro, mensaje:'Mínimo ocho caracteres, al menos una letra mayúscula, una letra minúscula, un número y un carácter especial'})
    return false;
  }
  return true;
}

function validarFormularioSesion(){
  borrarErrores();
  mensajesError=[];
  const iscorreoSesion = validarCorreoSesion();
  const iscontraseñaSesion = validarContraseñaSesion();

  mensajesError.forEach(error => mostrarError(error.input, error.mensaje));

  if(iscorreoSesion && iscontraseñaSesion){
    console.log("Formulario válido");
  return true;
  }else{
  console.log("Formulario inválido");
  return false;
  }

}

// form1.addEventListener("submit", e =>{
//   e.preventDefault();
//   const esFormularioValidoSesion= validarFormularioSesion();
//   if(esFormularioValidoSesion){
//     form1.reset();
//     //Ruta pagina de feed social;
//   }else{
//     Swal.fire({ //Alerta de SweetAlert
//             title: "¡Awiki triste! :(",
//             text: "Completa los campos para iniciar sesión",
//             icon: "error",
//             customClass: {
//               title: 'swal-title',
//               text: 'swal-text',
//               popup: 'swal-popup',
//               confirmButton: 'swal-confirm-button',
//               icon: 'custom-icon'
//             },
//           });
//   }
// });
