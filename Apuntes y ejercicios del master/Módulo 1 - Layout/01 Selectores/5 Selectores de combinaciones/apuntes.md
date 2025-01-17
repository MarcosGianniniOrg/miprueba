🌈 Apuntes de Selectores CSS
CSS utiliza "selectores" para decirle al navegador qué elementos debe estilizar. Aquí tienes los selectores más útiles y comunes en el trabajo.

5. Combinadores 🔗
Los combinadores seleccionan elementos según su relación con otros elementos.

- Selector descendente (espacio): Selecciona elementos dentro de otros.

div p {
  color: gray; /* Selecciona todos los <p> dentro de un <div> */
}

- Selector de hijo directo (>): Selecciona solo los hijos directos de un elemento.

div > p {
  color: blue; /* Selecciona <p> que son hijos directos de un <div> */
}

- Selector de hermano adyacente (+): Selecciona el primer hermano inmediato de un elemento.

h1 + p {
  margin-top: 0; /* Selecciona el primer <p> justo después de un <h1> */
}

- Selector de hermano general (~): Selecciona todos los hermanos de un tipo que sigan a un elemento.

h1 ~ p {
  color: darkred; /* Selecciona todos los <p> después de un <h1> */
}

TIP: Los selectores ayudan a aplicar estilos de forma precisa y organizada. Úsalos para mantener el código limpio y ordenado 🧹.