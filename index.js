const prevButton = document.querySelector(".carousel-button.prev");
const nextButton = document.querySelector(".carousel-button.next");
const projectsContainer = document.querySelector(".projects-container");

let isDown = false;
let startX;
let scrollLeft;

projectsContainer.addEventListener("mousedown", (e) => {
    isDown = true;
    projectsContainer.classList.add("active");
    startX = e.pageX - projectsContainer.offsetLeft;
    scrollLeft = projectsContainer.scrollLeft;
    projectsContainer.style.cursor = "grabbing"; // Cambia el cursor al agarrar
});

projectsContainer.addEventListener("mouseleave", () => {
    isDown = false;
    projectsContainer.classList.remove("active");
    projectsContainer.style.cursor = "grab"; // Cambia el cursor de nuevo
});

projectsContainer.addEventListener("mouseup", () => {
    isDown = false;
    projectsContainer.classList.remove("active");
    projectsContainer.style.cursor = "grab";
});

projectsContainer.addEventListener("mousemove", (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - projectsContainer.offsetLeft;
    const walk = (x - startX) * 2; // Ajusta la sensibilidad
    projectsContainer.scrollLeft = scrollLeft - walk;
});

prevButton.addEventListener("click", () => {
    projectsContainer.scrollBy({
        left: -projectsContainer.clientWidth,
        behavior: "smooth",
    });
});

nextButton.addEventListener("click", () => {
    projectsContainer.scrollBy({
        left: projectsContainer.clientWidth,
        behavior: "smooth",
    });
});
