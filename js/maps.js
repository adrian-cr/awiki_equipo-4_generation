let map = L.map("map").setView([19.66933830212766, -98.93130999127185], 11);

L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png?", {}).addTo(map);

let marcador = L.marker([19.66933830212766, -98.93130999127185]).addTo(map);

function onMapClick(e){
    const coords = e.latlng;
    const marker = L.marker([coords.lat, coords.lng]).addTo(map);
    marker.bindPopup(``).openPopup();
}

map.on("click", onMapClick);