🌈 Apuntes de Selectores CSS
CSS utiliza "selectores" para decirle al navegador qué elementos debe estilizar. Aquí tienes los selectores más útiles y comunes en el trabajo.

3. Pseudo-Clases 🕹️
Seleccionan elementos en un estado específico o una condición.

- :hover: Selecciona un elemento cuando se pasa el cursor sobre él.

a:hover {
  color: orange; /* Cambia el color del enlace al pasar el ratón */
}

- :first-child: Selecciona el primer hijo de su elemento padre.

p:first-child {
  font-weight: bold; /* Pone en negrita el primer <p> dentro de su contenedor */
}

- :nth-child(n): Selecciona el enésimo hijo de su padre.

li:nth-child(2) {
  color: purple; /* Cambia el color del segundo <li> */
}

- :not(selector): Selecciona elementos que NO cumplen el selector.

div:not(.especial) {
  border: 1px solid black; /* Selecciona todos los <div> que no tengan la clase 'especial' */
}

TIP: Los selectores ayudan a aplicar estilos de forma precisa y organizada. Úsalos para mantener el código limpio y ordenado 🧹.