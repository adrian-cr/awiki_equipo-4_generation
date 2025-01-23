const formulario = document.getElementById("formulario2");

// const arreglo=[];


const procesaTodo = (event) =>{
    event.preventDefault();
    const datos = new FormData(event.target);
    const datosCompletos = Object.fromEntries(datos.entries());
    console.log(datosCompletos)
    console.log(JSON.stringify(datosCompletos)); // Verificar el JSON
  
    //Obtener los usuarios previos desde localStorage (si existen) y se agregan
    const usuariosPrevios=JSON.parse(localStorage.getItem('usuarios'))|| [];
    usuariosPrevios.push(datosCompletos);

    // arreglo.push(datosCompletos);
    // console.log(datosCompletos);

    //Guarda el nuevo arreglo de usuarios
    localStorage.setItem('usuarios', JSON.stringify(usuariosPrevios));

    return datosCompletos;

}

formulario.addEventListener("submit", (event) => {
    const newUsuario = procesaTodo(event);
    // localStorage.setItem('usuario', JSON.stringify(newUsuario));
    // postData(newPublicacion);
})