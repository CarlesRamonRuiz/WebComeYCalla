function redireccionI(){
    window.location.href = 'main.html'
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

const secciones = document.querySelectorAll("#comidas > div");

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            // Quitamos active de todos
            document.querySelectorAll("#seleccion p").forEach(elemento => {
                elemento.classList.remove("active");
            });

            // Obtenemos el id de la sección visible
            const id = entry.target.id;

            // Activamos su elemento del menú
            document
                .querySelector(`#menu-${id}`)
                .classList.add("active");
        }

    });

}, {
    threshold: 0.5
});

secciones.forEach(seccion => {
    observer.observe(seccion);
});
const opcionesMenu = document.querySelectorAll("#seleccion p");

opcionesMenu.forEach(opcion => {
    opcion.addEventListener("click", () => {

        // menu-hamburguesas -> hamburguesas
        const idSeccion = opcion.id.replace("menu-", "");

        const seccion = document.getElementById(idSeccion);

        seccion.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });
    });
});