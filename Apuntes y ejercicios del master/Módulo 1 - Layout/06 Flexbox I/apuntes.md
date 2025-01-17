🌈 Apuntes de Flexbox
Flexbox es como un "superpoder" para organizar cosas en filas y columnas de manera fácil. ¡Aquí van los atributos más útiles para usar en el trabajo! 🎉

1. display: flex; 🎯
Activa el "modo Flexbox" en un contenedor.

<div style="display: flex;">
  <div>🌟 Elemento 1</div>
  <div>🌟 Elemento 2</div>
  <div>🌟 Elemento 3</div>
</div>

2. flex-direction 🧭
¿Cómo quieres ordenar las cosas?

row ➡️: Fila, de izquierda a derecha.
column ⬇️: Columna, de arriba a abajo.
row-reverse ⬅️: Fila de derecha a izquierda.
column-reverse ⬆️: Columna de abajo hacia arriba.

<div style="display: flex; flex-direction: row;">
  <div>🍎 Elemento 1</div>
  <div>🍊 Elemento 2</div>
  <div>🍌 Elemento 3</div>
</div>

3. flex-wrap 🎁
¿Quieres que los elementos se acomoden en varias filas si no caben?

nowrap 🚫: Todos en una sola fila.
wrap 🔄: Si no caben, se van a la siguiente fila.
wrap-reverse 🔄: Como wrap, pero las filas se acumulan al revés.

<div style="display: flex; flex-wrap: wrap;">
  <div>🍉 Elemento 1</div>
  <div>🍉 Elemento 2</div>
  <div>🍉 Elemento 3</div>
  <div>🍉 Elemento 4</div>
</div>

4. flex-flow 🌊
Combina flex-direction y flex-wrap en una sola línea.

Ejemplo: flex-flow: row wrap; organiza los elementos en una fila (row) y si no caben, los envuelve en varias filas (wrap).

<div style="display: flex; flex-flow: row wrap;">
  <div>🍭 Elemento 1</div>
  <div>🍭 Elemento 2</div>
  <div>🍭 Elemento 3</div>
  <div>🍭 Elemento 4</div>
</div>

🔍 Aquí, los elementos se organizan en una fila y, si no caben, se colocan en una nueva fila debajo.

TIP: Flexbox es genial para organizar cosas en filas y columnas de forma adaptable. Ideal para diferentes tamaños de pantalla 📱💻.