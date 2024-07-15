function mostrarMas(btn) {
    var contenedor = btn.parentNode.parentNode; // Obtiene el contenedor padre del botón
    var proyectosid = contenedor.querySelector('.proyectosid');
    var herramientas = contenedor.querySelector('.herramientas');
    var botonmas = contenedor.querySelector('.mas');
    var botomenos = contenedor.querySelector('.closet');
    botomenos.style.display = 'block';
    proyectosid.style.display = 'block';
    herramientas.style.display = 'flex';
    botonmas.style.display = 'none';

}

// Función para ocultar la sección proyectosid y herramientas
function cerrar(btn) {
    var contenedor = btn.parentNode.parentNode; // Obtiene el contenedor padre del botón
    var proyectosid = contenedor.querySelector('.proyectosid');
    var herramientas = contenedor.querySelector('.herramientas');
    var botomenos = contenedor.querySelector('.closet');
    var botonmas = contenedor.querySelector('.mas');
    proyectosid.style.display = 'none';
    herramientas.style.display = 'none';
    botomenos.style.display = 'none';
    botonmas.style.display = 'block';
}
function animar(enlace) {
    var contenedor = enlace.parentNode; // Obtener el padre del enlace
    var conteninertizquierdo = contenedor.querySelector('.sobreizquierda');
    var conteninertderecho = contenedor.querySelector('.sobrederecha');

    if (conteninertizquierdo) {
        conteninertizquierdo.style.animation = 'izquierdacentro 2s forwards';
    } else {
        console.log('Elemento no encontrado');
    }
}
function animarhabilidad() {
    var divs = document.querySelectorAll('.contenierhabilidad1, .contenierhabilidad2, .contenierhabilidad3, .contenierhabilidad4, .contenierhabilidad5');

    divs.forEach(function (div, index) {
        div.style.animation = 'movernavehabi 30s infinite';
        div.style.display = 'none';
        div.classList.add('retraso');

        switch (index) {
            case 0:
                //div.style.transform = 'translate(15vw, 2vh)';
                div.style.display = 'flex';
                div.style.animationDelay = '1s';
                break;
            case 1:
                // div.style.transform = 'translate(30vw, 2vh)';
                div.style.display = 'flex';
                div.style.animationDelay = '6s';
                break;
            case 2:
                //div.style.transform = 'translate(60vw, 2vh)';
                div.style.display = 'flex';
                div.style.animationDelay = '12s';
                break;
            case 3:
                // div.style.transform = 'translate(60vw, 30vh)';
                div.style.display = 'flex';
                div.style.animationDelay = '18s';
                break;
            case 4:
                // div.style.transform = 'translate(15vw, 30vh)';
                div.style.display = 'flex';
                div.style.animationDelay = '24s';
                break;
            default:
                break;
        }
    });
}