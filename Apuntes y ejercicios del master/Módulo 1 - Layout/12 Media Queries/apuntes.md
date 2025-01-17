🌟 Tema 12: Media Queries y Diseño Responsivo

📱 1. ¿Qué son las Media Queries?

Las Media Queries son reglas de CSS que permiten aplicar estilos diferentes dependiendo del tamaño de la pantalla, la resolución, o incluso la orientación del dispositivo. Sirven para crear un diseño responsivo que se adapta a distintos dispositivos (móvil, tablet, escritorio).

🔹 Ejemplo básico de Media Query:

@media (max-width: 600px) {
  .contenedor {
    background-color: lightblue;
  }
}

📱 2. Mobile First vs Desktop First
🌟 Mobile First
Qué es: Diseñar primero para pantallas pequeñas (móviles) y luego adaptar para pantallas más grandes.
Cómo se hace: Se escriben los estilos base para móviles y se usan Media Queries con min-width para adaptarlos a pantallas más grandes.
Ejemplo:

/* Estilos base para móvil */
.contenedor {
  font-size: 14px;
}

/* Adaptación para pantallas más grandes */
@media (min-width: 768px) {
  .contenedor {
    font-size: 18px;
  }
}

/* Estilos base para móvil */
.contenedor {
  font-size: 14px;
}

/* Adaptación para pantallas más grandes */
@media (min-width: 768px) {
  .contenedor {
    font-size: 18px;
  }
}

🔹 Tip: Es el enfoque más recomendado, ya que garantiza que la versión móvil sea eficiente y se añadan características para pantallas más grandes.

🖥️ Desktop First

Qué es: Diseñar primero para pantallas grandes (escritorio) y luego adaptarlo a pantallas más pequeñas.
Cómo se hace: Se escriben los estilos base para escritorio y se usan Media Queries con max-width para adaptarlos a pantallas más pequeñas.

Ejemplo:

/* Estilos base para escritorio */
.contenedor {
  font-size: 18px;
}

/* Adaptación para pantallas más pequeñas */
@media (max-width: 768px) {
  .contenedor {
    font-size: 14px;
  }
}

Tip: Útil si tu público objetivo usa principalmente dispositivos de escritorio.

Resumen para Recordar
Media Queries: Permiten aplicar estilos según el tamaño de la pantalla u otras características.
Mobile First 📱: Estilos base para móvil, y mejoras con min-width.
Desktop First 🖥️: Estilos base para escritorio, y adaptaciones con max-width.
Tip: Mobile First es el más recomendado para garantizar una buena experiencia móvil y luego ampliar funcionalidades.