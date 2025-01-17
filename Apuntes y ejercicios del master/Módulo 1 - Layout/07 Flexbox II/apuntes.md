🎯 Propiedades de Alineación en CSS
Cuando trabajas con Flexbox o CSS Grid, las propiedades de alineación ayudan a organizar elementos de forma ordenada y agradable. Vamos a ver las propiedades más usadas: justify-content, align-items y align-content.

🚀 1. justify-content
Imagina que estás organizando juguetes en una estantería 🧸. La propiedad justify-content te ayuda a decidir cómo se alinean los elementos horizontalmente (de izquierda a derecha).

Valores comunes:

- flex-start: Los juguetes están todos al principio de la estantería (izquierda).
- center: Los juguetes están en el centro de la estantería.
- flex-end: Los juguetes están al final de la estantería (derecha).
- space-between: Los juguetes están separados uniformemente, con espacio solo entre ellos.
- space-around: Espacio entre y alrededor de los juguetes.
🔹 Ejemplo de justify-content:

.contenedor {
  display: flex;
  justify-content: center; /* Coloca los elementos en el centro */
}
<div class="contenedor">
  <div class="item">🧸</div>
  <div class="item">🚗</div>
  <div class="item">🪀</div>
</div>


🧲 2. align-items
Ahora imagina que los juguetes están en una caja y puedes moverlos verticalmente dentro de ella. align-items define cómo se alinean los elementos en la dirección vertical (de arriba a abajo).

Valores comunes:

flex-start: Los juguetes se alinean al borde superior de la caja.
center: Los juguetes se alinean en el centro vertical de la caja.
flex-end: Los juguetes se alinean al borde inferior de la caja.
stretch: Los juguetes se estiran para ocupar toda la altura de la caja.
🔹 Ejemplo de align-items:

.contenedor {
  display: flex;
  align-items: center; /* Coloca los elementos en el centro vertical */
}

🏗️ 3. align-content
Si tienes varias filas de juguetes y quieres decidir cómo se alinean todas las filas en el contenedor, usas align-content. Esto solo se nota si hay múltiples líneas de elementos (como en un flexbox que se ha envuelto).

Valores comunes:

- flex-start: Las filas se alinean al borde superior del contenedor.
- center: Las filas se colocan en el centro vertical.
- flex-end: Las filas se alinean al borde inferior.
- space-between: Las filas tienen espacio entre ellas.
- space-around: Espacio entre y alrededor de las filas.
🔹 Ejemplo de align-content:

.contenedor {
  display: flex;
  flex-wrap: wrap; /* Permite que los elementos se envuelvan */
  align-content: space-between; /* Coloca las filas con espacio entre ellas */
}

🔑 Resumen para Recordar
- justify-content: Alinea los elementos horizontalmente (como organizarlos en una estantería).
- align-items: Alinea los elementos verticalmente en una línea (como juguetes en una caja).
- align-content: Alinea múltiples filas de elementos verticalmente en el contenedor.