🔧 1. Funciones en Sass (@function)
Qué es: Las funciones en Sass permiten crear fragmentos de código reutilizables que devuelven un valor.
Ejemplo para niños: Es como una receta que siempre da como resultado una tarta del mismo sabor.
🔹 Ejemplo:

@function calcular-espacio($base, $factor) {
  @return $base * $factor;
}

.container {
  margin: calcular-espacio(10px, 2); // Resultado: 20px
}

📦 2. Regla @import
Qué es: @import se usa para incluir otros archivos Sass en tu archivo principal, lo que permite modularizar el código.
Ejemplo para niños: Es como invitar a tus amigos a jugar; todos traen sus juguetes y se combinan.
🔹 Ejemplo:

@import 'variables'; // Importa un archivo llamado _variables.scss
@import 'mixins'; // Importa un archivo llamado _mixins.scss

Tip: Usa @use en lugar de @import en proyectos modernos para evitar conflictos de nombres.

📝 3. Directiva @mixin
Qué es: Los @mixin permiten crear grupos de estilos reutilizables con parámetros opcionales.
Ejemplo para niños: Es como un set de pegatinas que puedes usar donde quieras y en el color que prefieras.
🔹 Ejemplo:

@mixin redondear($radio) {
  border-radius: $radio;
  -webkit-border-radius: $radio;
  -moz-border-radius: $radio;
}

.caja {
  @include redondear(10px);
}

📱 4. Anidación de @media
Qué es: Permite escribir reglas de medios anidadas dentro de un selector, manteniendo la organización del código.
Ejemplo para niños: Es como tener un cuaderno con secciones específicas para escribir sobre diferentes tamaños de papel.
🔹 Ejemplo:

.caja {
  background-color: lightgreen;

  @media (min-width: 768px) {
    background-color: lightblue; // Cambia de color en pantallas grandes
  }
}

🚀 5. Directiva @extend
Qué es: @extend permite heredar estilos de otro selector para evitar repetir código.
Ejemplo para niños: Es como copiar el atuendo de tu amigo porque te gusta cómo se ve.
🔹 Ejemplo:

.btn {
  padding: 10px;
  background-color: #3498db;
  color: white;
}

.btn-grande {
  @extend .btn; // Hereda los estilos de .btn
  font-size: 20px;
}

🤔 Cuándo Usar Cada Característica de Sass
Funciones 🔧: Úsalas para cálculos reutilizables como márgenes y tamaños.
@import 📦: Divide tu código en módulos para facilitar su mantenimiento.
@mixin 📝: Agrupa y reutiliza estilos complejos en múltiples lugares.
Anidación de @media 📱: Mantén las reglas de medios junto al selector para un código más organizado.
@extend 🚀: Úsalo para evitar la repetición de estilos comunes.
Nota: En proyectos modernos, @use es preferible a @import para un mejor control de las variables y funciones.

🔑 Resumen para Recordar
Funciones 🔧: Cálculos y valores reutilizables.
@import 📦: Modulariza tu código.
@mixin 📝: Reutiliza grupos de estilos.
Anidación de @media 📱: Organiza reglas de medios.
@extend 🚀: Hereda estilos de otros selectores.