function changeImage(element, newSrc) {
    element.setAttribute('data-original-src', element.src); // Guarda la ruta original en un atributo personalizado
    element.src = newSrc;
}

function restoreImage(element) {
    var originalSrc = element.getAttribute('data-original-src'); // Obtiene la ruta original del atributo personalizado
    element.src = originalSrc;
}




// Seleccionar elementos del DOM
const navbar = document.querySelector('.navbar');
const profileLink = document.getElementById('perfil-link');
const locationLink = document.getElementById('ubicacion-link');
const cartLink = document.getElementById('carrito-link');

// Función para cambiar las imágenes de perfil, ubicación y carrito según el estado del navbar
function handleNavbarScroll() {
    const scrollPosition = window.scrollY;

    // Definir la posición de desplazamiento en la que cambia el estilo
    const scrollThreshold = 100; // Ajusta esta posición según tus necesidades

    // Verificar si se ha desplazado más allá de la posición definida
    if (scrollPosition > scrollThreshold) {
        navbar.classList.add('white-bg'); // Agregar clase para fondo blanco
        navbar.classList.add('transparent'); // Agregar clase para navbar transparente
        // Cambiar las imágenes a las versiones con fondo blanco
        profileLink.querySelector('img').src = 'content/img/logo/perfil.svg';
        locationLink.querySelector('img').src = 'content/img/logo/ubicacion.svg';
        cartLink.querySelector('img').src = 'content/img/logo/carrito.svg';
    } else {
        navbar.classList.remove('white-bg'); // Eliminar clase para fondo blanco
        navbar.classList.remove('transparent'); // Eliminar clase para navbar transparente
        // Cambiar las imágenes a las versiones con fondo transparente
        profileLink.querySelector('img').src = 'content/img/logo/perfilB.svg';
        locationLink.querySelector('img').src = 'content/img/logo/ubicacionB.svg';
        cartLink.querySelector('img').src = 'content/img/logo/carritoB.svg';
    }
}

// Escuchar el evento de desplazamiento de la página
window.addEventListener('scroll', handleNavbarScroll);

// Seleccionar elementos del DOM
const menuBtn = document.getElementById('menu-btn');
const mobileMenu = document.getElementById('mobile-menu');

// Función para abrir/cerrar el menú desplegable al hacer clic en el botón de menú
menuBtn.addEventListener('click', () => {
    mobileMenu.classList.toggle('show-menu');
});
