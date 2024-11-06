// Selecciona el contenedor de las tarjetas
const container = document.querySelector('.projects-container-wrapper');

let isDown = false;
let startX;
let scrollLeft;

// Evento al presionar el ratón
container.addEventListener('mousedown', (e) => {
    isDown = true;
    container.classList.add('active');
    startX = e.pageX - container.offsetLeft;
    scrollLeft = container.scrollLeft;
});

// Evento al soltar el ratón
container.addEventListener('mouseleave', () => {
    isDown = false;
    container.classList.remove('active');
});

container.addEventListener('mouseup', () => {
    isDown = false;
    container.classList.remove('active');
});

// Evento para mover el scroll
container.addEventListener('mousemove', (e) => {
    if (!isDown) return; // Detiene la función si no se está arrastrando
    e.preventDefault();
    const x = e.pageX - container.offsetLeft;
    const walk = (x - startX) * 2; // Ajusta la velocidad de desplazamiento
    container.scrollLeft = scrollLeft - walk;
});
