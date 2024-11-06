// Selección del contenedor y configuración para el "carrusel"
const container = document.querySelector('.projects-container-wrapper');
const projectCards = document.querySelectorAll('.project-card');
let currentIndex = 0;

// Calcula el ancho de las tarjetas y la separación
const cardWidth = projectCards[0].offsetWidth + 20; // Incluye el espacio entre tarjetas

// Función para avanzar a la siguiente posición
function scrollNext() {
    currentIndex += 3;
    if (currentIndex >= projectCards.length) {
        currentIndex = 0; // Reinicia al principio si llega al final
    }
    container.scrollTo({
        left: cardWidth * currentIndex,
        behavior: 'smooth'
    });
}

// Función para retroceder a la posición anterior
function scrollPrev() {
    currentIndex -= 3;
    if (currentIndex < 0) {
        currentIndex = projectCards.length - 3; // Va al final si está al principio
    }
    container.scrollTo({
        left: cardWidth * currentIndex,
        behavior: 'smooth'
    });
}

// Añade botones de navegación para controlar el carrusel
const nextButton = document.createElement('button');
nextButton.innerText = 'Siguiente';
nextButton.style.position = 'absolute';
nextButton.style.right = '20px';
nextButton.onclick = scrollNext;

const prevButton = document.createElement('button');
prevButton.innerText = 'Anterior';
prevButton.style.position = 'absolute';
prevButton.style.left = '20px';
prevButton.onclick = scrollPrev;

container.parentElement.appendChild(nextButton);
container.parentElement.appendChild(prevButton);
