1. Unidades de Medida
 Las unidades de medida se usan para definir tamaños de elementos como ancho, alto y fuentes. Existen unidades absolutas (px) que son fijas y unidades relativas (%, em, rem) que se adaptan al contenedor o a la raíz del documento.

Ejemplo: Tamaño de fuente con rem (relativa a la raíz del documento, útil para diseño responsivo).

body {
  font-size: 16px; /* Tamaño base */
}

h1 {
  font-size: 2rem; /* 2 veces el tamaño base, o 32px */
}

2. Colores
Los colores se pueden definir con nombres, valores hexadecimales, RGB y HSL, permitiendo distintos niveles de personalización y opacidad. Hexadecimal y RGB son muy comunes.

Ejemplo: Definir color de fondo en hexadecimal y opacidad en RGBA

.header {
  background-color: #3498db; /* Azul en hexadecimal */
}

.overlay {
  background-color: rgba(0, 0, 0, 0.5); /* Negro con opacidad del 50% */
}

3. Fuentes
Las fuentes se especifican en CSS para definir el estilo de texto, permitiendo elegir tipos de letra (font-family), tamaños (font-size) y peso (font-weight). Es común usar una fuente principal con una de respaldo genérica.

Ejemplo: Configuración de fuente con familia y peso

body {
  font-family: 'Arial', sans-serif; /* Arial, y sans-serif si no está disponible */
  font-weight: 400; /* Peso regular */
}


4. Tamaños y Espaciados
Para el tamaño y espacio alrededor de los elementos se usan propiedades como width, height, margin y padding. Estas ayudan a definir el espacio interno y externo de cada elemento.

Ejemplo: Definir ancho en porcentaje y márgenes en píxeles.

.container {
  width: 80%; /* 80% del contenedor padre */
  margin: 20px auto; /* 20px arriba y abajo, centrado horizontalmente */
}

5. Porcentajes
Los porcentajes se usan para definir valores relativos al contenedor, adaptando tamaños y espacios según el elemento padre, lo cual es útil para diseño flexible.

Ejemplo: Ancho de una imagen ajustado al 100% de su contenedor.

.responsive-image {
  width: 100%; /* La imagen ocupa todo el ancho de su contenedor */
  height: auto; /* Mantiene la proporción */
}
