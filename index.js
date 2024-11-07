const prevButton = document.querySelector(".carousel-button.prev");
const nextButton = document.querySelector(".carousel-button.next");
const projectsContainer = document.querySelector(".projects-container");

prevButton.addEventListener("click", () => {
    projectsContainer.scrollBy({
        left: -300,
        behavior: "smooth"
    });
});

nextButton.addEventListener("click", () => {
    projectsContainer.scrollBy({
        left: 300,
        behavior: "smooth"
    });
});
