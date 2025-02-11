const urlParams= new URLSearchParams(window.location.search);
const productoId= urlParams.get('product');
console.log("ID del producto del URL", productoId);
const titulo=document.getElementById("nombreLugar");
const descripcion= document.getElementById("descripcionLugares");
const imagen= document.getElementById("imagenLugar");
const URL='https://fakestoreapi.com/products/';

console.log(URL);

fetch(URL)
.then((response)=>{
    console.log(response);
    response.json().then((res)=>{
        const producto= res.find(product=> product.id==productoId)

        if(producto){
            titulo.textContent=producto.title;
            descripcion.textContent=producto.description;
            imagen.src="";
        }else{
            titulo.textContent="No hay datos";
            descripcion.textContent="No hay información que mostrar";
            imagen.src="";
        }
    })
})
.catch(err=>{
    console.log("No se pudieron obtener los productos");
    titulo.textContent="Error al cargar la información";
    descripcion.textContent="Lo sentimos, no hay información que mostrar";
})






