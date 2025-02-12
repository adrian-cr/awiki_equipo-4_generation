const urlParams= new URLSearchParams(window.location.search);
const listingId= urlParams.get('listing');
console.log("ID del listin del URL", listingId);
const titulo=document.getElementById("nombreLugar");
const descripcion= document.getElementById("descripcionLugares");
const imagen= document.getElementById("imagenLugar");
const direccion= document.getElementById("datoDireccion");
const telefono= document.getElementById("datoTel");
const email=document.getElementById("datoEmail");
const sitio=document.getElementById("datoSitio");
const horario= document.getElementById("datoHorario");

fetch('../../data/newListings.json')
  .then( res => res.json())
  .then( res => {
    console.log("DATOS OBTENIDOS", res);
    const listings=res.data;
        console.log(listings);
        const listing= listings.find(item=>item.id==listingId)
        if(listing){
            titulo.textContent=listing.nombre;
            descripcion.textContent=listing.descripcion;
            imagen.src=listing.imagen;
            direccion.textContent=listing.nombreCalle;
            telefono.textContent=listing.telefonoContacto;
            email.textContent=listing.emailContacto;
            sitio
            // horario.textContent=listing.horarios;

        }else{
            titulo.textContent="No hay datos";
            descripcion.textContent="No hay información que mostrar";
            imagen.src="";
        }
    })
    .catch(err=>{
            console.log("No se pudieron obtener los productos");
            titulo.textContent="Error al cargar la información";
            descripcion.textContent="Lo sentimos, no hay información que mostrar";
    })

    // fetch("../data/listings.json")
    // .then(
    //   res => res.json())
    // .then( res => {
    //   listings = listings.concat(res.data);
    //   listings.forEach(e => addListingCard(e));
    //   });


