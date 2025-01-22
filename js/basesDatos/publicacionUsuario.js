'use strict';
let url_imagenes = [];
const boton_imagen = document.querySelector('#btn-imagen');
const imagen = document.querySelector('#user-photo');

let widget_cloudinary = cloudinary.createUploadWidget({
    cloudName: 'dawddkonk',
    uploadPreset: 'preset_awiki'
}, (err, result) => {
    if(!err && result && result.event === 'success'){
        console.log('Imagen subida con exito', result.info);
        imagen.src = result.info.secure_url;
        url_imagenes.push(result.info.secure_url);
    }
});

boton_imagen.addEventListener('click', () => {
    widget_cloudinary.open();
}, false);



const formulario = document.getElementById("fullForm");

const procesaTodo = (event) =>{
    event.preventDefault();
    const datos = new FormData(event.target);
    const datosCompletos = Object.fromEntries(datos.entries());
    datosCompletos.imagenes = url_imagenes;
    console.log('JSON Final con imágenes:', JSON.stringify(datosCompletos)); // Verificar el JSON
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