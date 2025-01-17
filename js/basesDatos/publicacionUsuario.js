const formulario = document.getElementById("fullForm");

const procesaTodo = (event) =>{
    event.preventDefault();
    const datos = new FormData(event.target);
    const datosCompletos = Object.fromEntries(datos.entries());
    console.log(JSON.stringify(datosCompletos));
    return datosCompletos;
}

const postData = async(newPublicacion) => {
    try{
        const response = await fetch('http://localhost:3000/publicaciones',
            {method: 'POST',
                headers:{'Content-Type': 'application/json'},
                body:JSON.stringify(newPublicacion)
            });
            
            if(response.ok){
                const jsonResponse = await response.json();
                const{campoPublicacion, fotoPublicacion} = jsonResponse;
                respuesta.insertAdjacentHTML = `
                <ul>
                    ¡Éxito! Se ha guardado la siguiente información:
                    <li>${precio}</li>
                    <li>${descripcion}</li>
                 </ul> `
            }
    } catch(error) {
        console.log(error)
    }
}

formulario.addEventListener("submit", (event) => {
    const newPublicacion = procesaTodo(event);
    postData(newPublicacion);
})
