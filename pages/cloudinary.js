'use strict';

const boton_imagen = document.querySelector('#btn-imagen');
const imagen = document.querySelector('#user-photo');

let widget_cloudinary = cloudinary.createUploadWidget({
    cloudName: 'dawddkonk',
    uploadPreset: 'preset_awiki'
}, (err, result) => {
    if(!err && result && result.event === 'success'){
        console.log('Imagen subida con exito', result.info);
        imagen.src = result.info.secure_url;
    }
});

boton_imagen.addEventListener('click', () => {
    widget_cloudinary.open();
}, false);


  
