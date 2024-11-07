function scrollProjects(direction) {
    const container = document.querySelector('.projects-container');
    const scrollAmount = 300;
    if (direction === 'left') {
        container.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
    } else if (direction === 'right') {
        container.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
}
