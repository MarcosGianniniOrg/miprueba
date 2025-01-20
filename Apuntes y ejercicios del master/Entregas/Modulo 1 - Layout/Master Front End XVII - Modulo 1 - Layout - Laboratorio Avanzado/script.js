document.addEventListener('DOMContentLoaded', () => {
    const topText = document.getElementById('top-text');
    const topItems = document.querySelectorAll('.top-item');
  
    const updateTopItems = () => {
      const viewportWidth = window.innerWidth;
  
      if (viewportWidth <= 768) {
        // Mobile: Mostrar 3 imágenes, ajustar el título
        topText.textContent = '3';
        topItems.forEach((item, index) => {
          item.style.display = index < 3 ? 'block' : 'none';
        });
      } else {
        // Desktop: Mostrar siempre las 5 imágenes
        topText.textContent = '5';
        topItems.forEach(item => {
          item.style.display = 'block';
        });
      }
    };
  
    updateTopItems(); // Ejecutar al cargar la página
    window.addEventListener('resize', updateTopItems); // Ejecutar al cambiar tamaño de ventana
  });
  