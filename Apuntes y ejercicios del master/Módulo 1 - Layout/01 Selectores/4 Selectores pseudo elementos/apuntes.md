🌈 Apuntes de Selectores CSS
CSS utiliza "selectores" para decirle al navegador qué elementos debe estilizar. Aquí tienes los selectores más útiles y comunes en el trabajo.

4. Pseudo-Elementos 🎨
Seleccionan y estilizan partes específicas de un elemento.

- ::before: Inserta contenido antes del elemento.

p::before {
  content: "👉 "; /* Añade una flecha al inicio de cada <p> */
}

- ::after: Inserta contenido después del elemento.

p::after {
  content: " 🎉"; /* Añade un emoji al final de cada <p> */
}

- ::first-line: Selecciona solo la primera línea de texto de un elemento.

p::first-line {
  font-weight: bold; /* Pone en negrita la primera línea del <p> */
}

- ::selection: Estiliza el texto seleccionado.

::selection {
  background-color: yellow; /* Cambia el fondo del texto seleccionado a amarillo */
}

TIP: Los selectores ayudan a aplicar estilos de forma precisa y organizada. Úsalos para mantener el código limpio y ordenado 🧹.