// let map = L.map("map").setView([19.66933830212766, -98.93130999127185], 11);

// L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png?", {}).addTo(map);

// let marcador = L.marker([19.66933830212766, -98.93130999127185]).addTo(map);

// function onMapClick(e){
//     const coords = e.latlng;
//     const marker = L.marker([coords.lat, coords.lng]).addTo(map);
//     marker.bindPopup(``).openPopup();
// }

// map.on("click", onMapClick);


document.addEventListener("DOMContentLoaded", () => {
    // Inicializar el mapa centrado en un punto genérico (México)
    const map = L.map("map").setView([19.4326, -99.1332], 6); 
  
    // Agregar capa base de OpenStreetMap
    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution: '&copy; OpenStreetMap contributors'
    }).addTo(map);
  
    // Función para convertir dirección en coordenadas
    function geocodeDireccion(direccion, nombre) {
      const url = `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(direccion)}`;
  
      fetch(url)
        .then(response => response.json())
        .then(data => {
          if (data.length > 0) {
            const lat = data[0].lat;
            const lon = data[0].lon;
  
            // Agregar marcador al mapa
            L.marker([lat, lon])
              .addTo(map)
              .bindPopup(`<b>${nombre}</b><br>${direccion}`)
              .openPopup();
  
            // Centrar el mapa en la nueva ubicación
            map.setView([lat, lon], 14);
          } else {
            alert("No se encontró la dirección. Inténtalo con otra.");
          }
        })
        .catch(error => console.error("Error en la geocodificación:", error));
    }
  
    // Capturar evento del formulario
    document.getElementById("registroEmpresa").addEventListener("submit", function (e) {
      e.preventDefault();
  
      const nombre = document.getElementById("nombre").value;
      const direccion = document.getElementById("direccion").value;
  
      // Llamar a la función para obtener coordenadas
      geocodeDireccion(direccion, nombre);
    });
  });
  