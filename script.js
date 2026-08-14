const worker= new Worker ("worker.js");

//Evento del worker

//Evento del click (botón de convertir)

//Geolocalización
if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition((pos)=> {
        const lat=pos.coords.latitude;
        const lon=pos.coords.longitude;

        document.getElementById("ubicacion").textContent=`Latitud: ${lat}, Longitud: ${lon}`;
    });
}else {
    document.getElementById("ubicacion").textContent="Tu navegador no soporta geolocalización."
}

//Evento de cargar toda la página
window.addEventListener("load", ()=> {

})