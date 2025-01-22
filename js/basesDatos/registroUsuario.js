const formulario = document.getElementById("formulario2");

const procesaTodo = (event) =>{
    event.preventDefault();
    const datos = new FormData(event.target);
    const datosCompletos = Object.fromEntries(datos.entries());
    console.log(JSON.stringify(datosCompletos)); // Verificar el JSON
    return datosCompletos;

}
formulario.addEventListener("submit", (event) => {
    const newUsuario = procesaTodo(event);
    localStorage.setItem('usuario', JSON.stringify(newUsuario));
    // postData(newPublicacion);
})