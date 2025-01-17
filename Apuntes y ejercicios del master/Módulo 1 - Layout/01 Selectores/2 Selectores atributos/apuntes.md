🌈 Apuntes de Selectores CSS
CSS utiliza "selectores" para decirle al navegador qué elementos debe estilizar. Aquí tienes los selectores más útiles y comunes en el trabajo.


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

TIP: Los selectores ayudan a aplicar estilos de forma precisa y organizada. Úsalos para mantener el código limpio y ordenado 🧹.