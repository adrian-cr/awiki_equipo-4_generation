const cardBody=document.getElementById("descripcionLugares");
const mapa = document.getElementById("map");
const carruselEmpresa= document.getElementById("imagen-c");
const URLMain="https://fakestoreapi.com/products/2"

function getData(){
    fetch(URLMain).then((response) => {
        console.log(response);
        response.json().then((res)=>{
            cardBody.innerHTML = `Titutlo: ${res.title}
            </br>
            Precio: ${res.price}
            `;
        });
    }).catch((err) => {
        alertError.innerText=`Problema al traer la información ${err}`;
        alertError.style.display="block";
    })
}//getData

// function createCards(res){
//     res.forEach((res)=> {
//       divProductos.insertAdjacentHTML("beforeend", `
//         <div class="card border-dark mb-3" style="max-width: 540px;">
//     <div class="row g-0">
//       <div class="col-md-4">
//         <img src="${res.image}" class="img-fluid rounded-start" alt="...">
//       </div>
//       <div class="col-md-8">
//         <div class="card-body">
//           <h5 class="card-title">${res.title}</h5>
//           <p class="card-text">${res.description}</p>
//           <p class="card-text"><small class="text-body-secondary"> $ ${res.price} USD</small></p>
//           <p class="card-tetx"><small class="text-body-category"> Category: ${res.category}</small></p>
//           </div>
//       </div>
//     </div>
//   </div>`)
//     });
//   }


getData();
