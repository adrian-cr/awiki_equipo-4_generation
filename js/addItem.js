var listings = [];
function addItem(item){
  const itemHTML = '<div class="card" style="width: 18rem;">\n' +
      '    <img src="' + item.imagen + '" class="card-img-top" alt="image">\n' +
      '    <div class="card-body">\n' +
      '        <h5 class="card-title">'+ item.nombreNegocio +'</h5>\n' +
      '        <p class="card-categoria">' + 'Categoría: ' + item.categoria + '</p>\n' +
      '        <p class="card-Description">'+ item.descripcion +'</p>\n' +
      '        <p class="card-direction">' + 'Ubicación: ' + item.ubicacion.municipio +', ' + item.ubicacion.estado + '</p>\n' +
      '        <p class="card-rating">' + '<strong>Ranking: </strong>' + item.rating + '<p/>\n' +
      '        <a href="#" id = "verMas" class="btn btn-primary" <style> </style>Ver más</a>\n' +
      '    </div>\n' +
      '</div>\n' +
      '<br/>';
  const itemsContainer = document.getElementById("item-list");
  itemsContainer.insertAdjacentHTML("afterbegin", itemHTML);
}

fetch("../../data/listings.json")
  .then( 
    res => res.json())
  .then( res => {
    listings = listings.concat(res.data);
    listings.forEach(e => addItem(e));      
    });
