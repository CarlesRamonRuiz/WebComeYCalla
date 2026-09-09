function redireccionI(){
    window.location.href = 'index.html'
}
function redireccionC(){
    window.location.href = 'carta.html';
}
function redireccionIns(){
window.location.href = 'https://www.instagram.com/comeycallapulpi/'
}
function redireccionTik(){

}
function redireccionFac(){
    window.location.href = 'https://www.facebook.com/friends/suggestions/?profile_id=100023056153491&locale=es_ES'
}

// Las categorías son enlaces nativos: funcionan también sin JavaScript.
const opcionesMenu = [...document.querySelectorAll("#seleccion a")];
const secciones = opcionesMenu.map(opcion =>
    document.getElementById(opcion.hash.slice(1))
).filter(Boolean);

if (secciones.length) {
    let pendiente = false;
    function actualizarCategoria() {
        const margen = parseFloat(getComputedStyle(document.documentElement)
            .getPropertyValue("--section-offset")) + 20;
        let actual = secciones[0];
        for (const seccion of secciones) {
            if (seccion.previousElementSibling.getBoundingClientRect().top <= margen) {
                actual = seccion;
            }
        }
        opcionesMenu.forEach(opcion => {
            const activa = opcion.hash === `#${actual.id}`;
            opcion.classList.toggle("active", activa);
            if (activa) opcion.setAttribute("aria-current", "location");
            else opcion.removeAttribute("aria-current");
        });
        pendiente = false;
    }
    window.addEventListener("scroll", () => {
        if (!pendiente) {
            pendiente = true;
            requestAnimationFrame(actualizarCategoria);
        }
    }, { passive: true });
    window.addEventListener("resize", actualizarCategoria);
    actualizarCategoria();
}
