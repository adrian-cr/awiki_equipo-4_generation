const botonesLugares= document.querySelectorAll('.boton-lugar');

botonesLugares.forEach(boton =>{
    boton.addEventListener('click', (e) =>{
        const empresa= e.target.dataset.empresa;
        window.location.href=`empresa.html?empresa=${empresa}`;
    });
});
