const prevButton = document.querySelector(".carousel-button.prev");
const nextButton = document.querySelector(".carousel-button.next");
const projectsContainer = document.querySelector(".projects-container");

prevButton.addEventListener("click", () => {
    projectsContainer.scrollBy({
        left: -320,
        behavior: "smooth"
    });
});

nextButton.addEventListener("click", () => {
    projectsContainer.scrollBy({
        left: 320,
        behavior: "smooth"
    });
});
const projectsContainer = document.querySelector(".projects-container");

let isDown = false;
let startX;
let scrollLeft;

projectsContainer.addEventListener("mousedown", (e) => {
    isDown = true;
    projectsContainer.classList.add("active");
    startX = e.pageX - projectsContainer.offsetLeft;
    scrollLeft = projectsContainer.scrollLeft;
});

projectsContainer.addEventListener("mouseleave", () => {
    isDown = false;
    projectsContainer.classList.remove("active");
});

projectsContainer.addEventListener("mouseup", () => {
    isDown = false;
    projectsContainer.classList.remove("active");
});

projectsContainer.addEventListener("mousemove", (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - projectsContainer.offsetLeft;
    const walk = (x - startX) * 2; // Velocidad de desplazamiento
    projectsContainer.scrollLeft = scrollLeft - walk;
});
