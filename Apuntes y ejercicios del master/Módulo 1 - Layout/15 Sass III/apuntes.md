🌟 Tema 15: Sass III - Directivas de Control y Cuadrículas Responsivas
🔄 1. Directivas de Control
Las directivas de control en Sass permiten usar estructuras de control como @if, @for, @each, y @while para hacer el código más dinámico y reutilizable.

📚 2. Uso de @mixin y @function Juntos
Qué son: Un @mixin permite agrupar estilos reutilizables, mientras que una @function devuelve un valor específico. Usarlas juntas mejora la modularidad del código.
🔹 Ejemplo de @mixin y @function:

// Función que multiplica un valor base por un factor
@function calcular-ancho($columnas, $ancho-columna) {
  @return $columnas * $ancho-columna; // Devuelve el resultado
}

// Mixin que aplica un ancho basado en el número de columnas
@mixin ancho-columna($columnas) {
  width: calcular-ancho($columnas, 100px); // Llama a la función y aplica el ancho
}

// Uso del mixin
.caja {
  @include ancho-columna(3); // Ancho de 3 columnas de 100px cada una
}

Comentario explicativo: La función calcular-ancho devuelve el ancho total multiplicando el número de columnas por el ancho de cada columna. El @mixin usa esta función para aplicar el ancho a un elemento.

🔄 3. Bucle con Directivas de Control para un Sistema de Cuadrícula
Qué es: Un bucle @for en Sass se usa para repetir un bloque de código, ideal para crear un sistema de cuadrícula.
🔹 Ejemplo de Bucle:
// Crea clases para columnas responsivas
@mixin columnas-responsivas($total-columnas) {
  @for $i from 1 through $total-columnas {
    .col-#{$i} {
      width: (100% / $total-columnas) * $i; // Ancho proporcional
    }
  }
}

// Aplicación del mixin para 12 columnas
@include columnas-responsivas(12);

Comentario explicativo: Este bucle @for genera automáticamente las clases .col-1, .col-2, ..., .col-12, asignando un ancho proporcional basado en el total de columnas.