🌟 Apuntes sobre las Propiedades de Flexbox para los Hijos
En Flexbox, los elementos hijos pueden usar propiedades específicas que controlan cómo se comportan dentro del contenedor padre. Vamos a ver las propiedades más importantes:

1. order 🗂️
Qué hace: Cambia el orden de los elementos en el contenedor sin cambiar el orden en el HTML.
Cuándo usarlo: Cuando quieres reorganizar los elementos visualmente sin modificar el código HTML.
🔹 Ejemplo para niños: Imagina que tienes fichas de colores en una fila y quieres mover la ficha roja al principio sin cambiar de lugar las otras.

.ficha-roja {
  order: 1; /* Se mueve al final, ya que el valor por defecto de 'order' es 0 */
}

2. flex-grow 🌱
Qué hace: Define cuánto puede crecer un elemento si hay espacio extra en el contenedor.
Cuándo usarlo: Cuando quieres que un elemento crezca más que los demás en la misma línea.
🔹 Ejemplo para niños: Imagina que tienes caramelos y uno de ellos puede crecer para ocupar más espacio que los otros si hay espacio libre.

.caramelo-grande {
  flex-grow: 2; /* Este caramelo crecerá el doble de los demás */
}

3. flex-shrink 📉
Qué hace: Controla cuánto puede reducirse un elemento si el contenedor es más pequeño.
Cuándo usarlo: Cuando quieres que algunos elementos se reduzcan más que otros al disminuir el tamaño de la ventana.
🔹 Ejemplo para niños: Imagina que tienes globos y algunos pueden encogerse más que otros si el espacio se hace pequeño.

.globo-pequeño {
  flex-shrink: 3; /* Este globo se encogerá más que los demás */
}

4. flex-basis 📏
Qué hace: Define el tamaño base inicial de un elemento antes de que se apliquen flex-grow o flex-shrink.
Cuándo usarlo: Cuando quieres que un elemento comience con un tamaño específico.
🔹 Ejemplo para niños: Imagina que tienes una caja de juguetes y defines que cada juguete debe empezar ocupando 100px de espacio.

.juguete {
  flex-basis: 100px; /* El juguete empieza con un tamaño de 100px */
}

5. align-self 🎯
Qué hace: Permite alinear un elemento hijo individualmente, sobreescribiendo align-items del contenedor.
Cuándo usarlo: Cuando un solo elemento necesita una alineación diferente a los demás.
🔹 Ejemplo para niños: Imagina que en una fila de niños, uno quiere estirarse para ponerse en el medio mientras los otros siguen alineados al inicio.

.niño-especial {
  align-self: center; /* Solo este niño se alinea al centro verticalmente */
}

🔑 Resumen para Recordar
order: Cambia el orden de los elementos en el contenedor sin modificar el HTML.
flex-grow: Controla cuánto puede crecer un elemento si hay espacio extra.
flex-shrink: Define cuánto puede encogerse un elemento si el contenedor es más pequeño.
flex-basis: Especifica el tamaño base inicial de un elemento antes de aplicar flex-grow o flex-shrink.
align-self: Permite alinear un elemento hijo individualmente, sobrescribiendo align-items del contenedor padre.