import * as validators from "../../modules/validators.js";
const form2=document.getElementById("formulario2");

//Elementos del formulario//
const nombreRegistro= document.getElementById("formNombre");
const apellidoRegistro=document.getElementById("formApellido");
const correoRegistro=document.getElementById("formCorreo");
const contraseñaRegistro=document.getElementById("inputContraseña");
const confirmarContraseña= document.getElementById("inputConfirmar");

// const botonRegistro=document.getElementById("botonRegistro");
// const mensajeError=document.getElementsByClassName("invalid-feedback");

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
  document.querySelectorAll('.error-message').forEach(el => el.remove());
}

function validData(){
  mensajesError.length=0;
  borrarErrores();
  valid=true;

  console.log('validando formulario...')

  console.log("Nombre:", nombreRegistro);
  console.log("Apellido:", apellidoRegistro);
  console.log("Correo:", correoRegistro);
  console.log("Contraseña:", contraseñaRegistro);
  console.log("Confirmar:", confirmarContraseña);

  if(!nombreRegistro.value.trim()){
    console.log('nombre vacio');
    mensajesError.push({input: nombreRegistro, mensaje: 'Nombre vacío'});
  }

  let nombreRegex= new RegExp(/^[a-zA-ZÀ-ÿ\s]{1,40}$/);
  if(!nombreRegex.test(nombreRegistro.value)){
    console.log('nombre')
        mensajesError.push({input: nombreRegistro, mensaje: 'Ingrese un nombre'});
    // mensajesError.style.display = "block";
    // mensajesError.insertAdjacentHTML("beforeend", `<p>Ingrese un nombre.</p>`);
    valid =false;
    }

  let apellidoRegex= new RegExp(/^[a-zA-ZÀ-ÿ\s]{1,40}$/);
  if(!apellidoRegex.test(apellidoRegistro.value)){
    mensajesError.push({input:apellidoRegistro, mensaje: 'Ingresa un apellido'});
    // mensajesError.style.display="block";
    // mensajesError.insertAdjacentHTML("beforeend", '<p> Ingrese un apellido.</p>');
    valid= false;
  }

  let correoRegex=new RegExp(/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/);
  if(!correoRegex.test(correoRegistro.value)){
    mensajesError.push({input:correoRegistro, mensaje:'Ingresa un correo electrónico valido'})
    // mensajesError.style.display="block";
    // mensajesError.insertAdjacentHTML("beforeend", '<p>Ingrese un correo electronico valido.</p>');
    valid=false;
  }

  let contraseñaRegex= new RegExp("^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$")
  if(!contraseñaRegex.test(contraseñaRegistro.value))
  mensajesError.push({input:contraseñaRegistro, mensaje:'Mínimo ocho caracteres, al menos una letra mayúscula, una letra minúscula, un número y un carácter especial'});
  valid=false;

  let confirmarCon= contraseñaRegistro.value
  if(confirmarCon!==confirmarContraseña.value){
    mensajesError.push({input: confirmarContraseña, mensaje:'Las contraseñas no coinciden'});
    valid= false;
  }

  mensajesError.forEach(error => mostrarError(error.input, error.mensaje));
 


  return valid;

}

form2.addEventListener("submit", e =>{
  e.preventDefault();
  if (!validData()) {
    console.log('formulario valido') 
    Swal.fire({ //Alerta de SweetAlert
      title: "¡Awik! :)",
      text: "Tu registro no ha sido existoso",
      icon: "error"
    });
  }else{
    console.log('formulario no valido')
    Swal.fire({ //Alerta de SweetAlert
      title: "¡Awikifeliz! :)",
      text: "Tu registro ha sido existoso",
      icon: "success"
    });
  }
})
