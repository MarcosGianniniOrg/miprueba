🌈 Apuntes de Selectores CSS
CSS utiliza "selectores" para decirle al navegador qué elementos debe estilizar. Aquí tienes los selectores más útiles y comunes en el trabajo.

1. Selectores Simples 🖌️
Estos selectores eligen los elementos HTML directamente.

- Selector de etiqueta 🏷️: Selecciona todos los elementos de un tipo.

p {
  color: blue; /* Selecciona todos los <p> */
}

- Selector de clase 🎩: Selecciona todos los elementos con una clase específica.

.mi-clase {
  color: red; /* Selecciona todos los elementos con la clase 'mi-clase' */
}

- Selector de ID 🆔: Selecciona un elemento con un ID único.

#mi-id {
  font-size: 20px; /* Selecciona el elemento con id 'mi-id' */
}

- Selector universal 🌐: Selecciona todos los elementos.

* {
  margin: 0; /* Aplica un margen de 0 a todos los elementos */
}

2. Selectores de Atributos 🔍
Estos selectores eligen elementos basados en sus atributos.

- [atributo]: Selecciona todos los elementos que tienen un atributo específico.

[type="text"] {
  background-color: lightgray; /* Selecciona todos los <input type="text"> */
}

- [atributo^="valor"]: Selecciona elementos cuyo atributo empieza con un valor específico.

[href^="https"] {
  color: green; /* Selecciona todos los enlaces que comienzan con 'https' */
}

- [atributo$="valor"]: Selecciona elementos cuyo atributo termina con un valor específico.

[href$=".pdf"] {
  color: red; /* Selecciona todos los enlaces que terminan en '.pdf' */
}

- *[atributo="valor"]**: Selecciona elementos que contienen un valor específico en el atributo.

[class*="boton"] {
  padding: 10px; /* Selecciona todos los elementos con 'boton' en su clase */
}

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