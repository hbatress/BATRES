function mostrarMas(btn) {
    var contenedor = btn.parentNode.parentNode; // Obtiene el contenedor padre del botón
    var proyectosid = contenedor.querySelector('.proyectosid');
    var herramientas = contenedor.querySelector('.herramientas');
    var botonmas=contenedor.querySelector('.mas');
    var botomenos=contenedor.querySelector('.closet');
    botomenos.style.display='block';
    proyectosid.style.display = 'block';
    herramientas.style.display = 'flex';
    botonmas.style.display='none';

}

// Función para ocultar la sección proyectosid y herramientas
function cerrar(btn) {
    var contenedor = btn.parentNode.parentNode; // Obtiene el contenedor padre del botón
    var proyectosid = contenedor.querySelector('.proyectosid');
    var herramientas = contenedor.querySelector('.herramientas');
    var botomenos=contenedor.querySelector('.closet');
    var botonmas=contenedor.querySelector('.mas');
    proyectosid.style.display = 'none';
    herramientas.style.display = 'none';
    botomenos.style.display='none';
    botonmas.style.display='block';
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