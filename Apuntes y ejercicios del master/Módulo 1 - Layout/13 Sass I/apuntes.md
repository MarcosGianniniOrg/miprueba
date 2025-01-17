🌟 Tema 13: Sass I - Introducción y Conceptos Básicos
📝 1. ¿Qué es Sass?
Sass (Syntactically Awesome Style Sheets) es un preprocesador de CSS que permite escribir hojas de estilo más limpias y organizadas. Añade características como variables, anidación de reglas, operaciones matemáticas, y mucho más.

🌟 2. Reglas Anidadas 🪆
Qué son: Permiten escribir estilos anidados de forma jerárquica, como en HTML. Esto mejora la legibilidad y organización del código.
Ejemplo para niños: Es como guardar tus juguetes en cajas pequeñas dentro de una caja más grande.
🔹 Ejemplo:

.nav {
  background-color: lightblue;

  ul {
    list-style: none;
    padding: 0;

    li {
      display: inline-block;
      margin-right: 10px;

      a {
        text-decoration: none;
        color: darkblue;
      }
    }
  }
}

🔹 Tip: Usa anidación solo hasta 3 niveles para mantener la claridad.

🤝 3. Referenciado al Selector Padre (&)
Qué es: El símbolo & se usa para referirse al selector padre en reglas anidadas.
Ejemplo para niños: Imagina que haces una señal con la mano para indicar "¡Yo también!".
🔹 Ejemplo:

.button {
  background-color: green;
  color: white;

  &:hover {
    background-color: darkgreen;
  }
}

🧩 4. Propiedades Anidadas 📚
Qué son: Permiten escribir propiedades relacionadas de forma anidada para ahorrar espacio.
Ejemplo para niños: Es como agrupar tus lápices de colores y usar uno de ellos sin buscar en todo el estuche.
🔹 Ejemplo:

.box {
  border: {
    width: 2px;
    style: solid;
    color: black;
  }
}

🔹 Resultado CSS:

.box {
  border-width: 2px;
  border-style: solid;
  border-color: black;
}

🔧 5. Variables 📝
Qué son: Permiten guardar valores reutilizables (colores, tamaños, etc.) para usarlos en tu código.
Ejemplo para niños: Es como tener una caja etiquetada con "Lego rojo" para usar siempre el mismo color de Lego.
🔹 Ejemplo:

$primary-color: #3498db;
$padding-size: 10px;

.button {
  background-color: $primary-color;
  padding: $padding-size;
}

➕ 6. Operaciones Matemáticas ➗
Qué son: Permiten realizar cálculos en las propiedades (suma, resta, multiplicación, división).
Ejemplo para niños: Es como sumar tus caramelos y compartir la mitad con tu amigo.
🔹 Ejemplo:
$base-size: 16px;

.container {
  width: $base-size * 2; // 32px
  padding: $base-size / 2; // 8px
}



🤔 Cuándo Usar Estas Características de Sass
Anidación 🪆: Úsala para mantener el código limpio, pero evita más de 3 niveles de profundidad.
Referenciado al Selector Padre (&) 🤝: Ideal para pseudoclases y modificar elementos basados en su estado (hover, active, etc.).
Variables 📝: Úsalas para colores y tamaños que se repiten mucho. Alternativa: En CSS moderno, puedes usar Custom Properties (--var).
Operaciones Matemáticas ➗: Úsalas para cálculos de tamaños, márgenes y paddings. Alternativa: Usa calc() en CSS.