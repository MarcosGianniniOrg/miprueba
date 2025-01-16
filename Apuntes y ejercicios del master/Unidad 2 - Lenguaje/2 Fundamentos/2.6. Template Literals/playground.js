// Template Literals en JavaScript

// 1. ¿Qué son los Template Literals?
// Los Template Literals son una forma de definir cadenas de texto que permiten la interpolación de variables y expresiones.
// Se definen usando comillas invertidas (backticks) en lugar de comillas simples o dobles.

const nombre = "Juan";
const saludo = `Hola, ${nombre}!`;
console.log(saludo); // Imprime: Hola, Juan!

// 2. Interpolación de Variables y Expresiones
// Los Template Literals permiten insertar variables y expresiones dentro de una cadena de texto usando la sintaxis ${}.

const a = 5;
const b = 10;
const resultado = `La suma de ${a} y ${b} es ${a + b}.`; // Interpolación de variables y expresiones
console.log(resultado); // Imprime: La suma de 5 y 10 es 15.

// 3. Multilínea
// Los Template Literals permiten definir cadenas de texto multilínea sin necesidad de caracteres especiales.

const mensaje = `Esto es una línea.
Y esto es otra línea.`;
console.log(mensaje);
// Imprime:
// Esto es una línea.
// Y esto es otra línea.

// 4. Funciones de Plantilla (Tagged Templates)
// Las funciones de plantilla permiten procesar un Template Literal antes de que sea evaluado.

function etiqueta(strings, ...values) {
    console.log(strings);
    console.log(values);
    return strings.reduce((resultado, string, i) => `${resultado}${string}${values[i] || ''}`, '');
}

const nombre2 = "Ana";
const edad = 30;
const mensaje2 = etiqueta`Nombre: ${nombre2}, Edad: ${edad}`;
console.log(mensaje2); // Imprime: Nombre: Ana, Edad: 30

// 5. Uso de Template Literals con Destructuring
// Los Template Literals pueden usarse junto con destructuring para crear cadenas de texto más legibles.

const persona = { nombre: "Carlos", edad: 28 };
const { nombre: nombre3, edad: edad3 } = persona;
const mensaje3 = `Nombre: ${nombre3}, Edad: ${edad3}`;
console.log(mensaje3); // Imprime: Nombre: Carlos, Edad: 28

// Tips y Buenas Prácticas

// 1. Usar Template Literals para mejorar la legibilidad del código, especialmente cuando se trabaja con cadenas de texto largas o complejas.
// 2. Evitar el uso excesivo de Template Literals si hace que el código sea más difícil de entender.
// 3. Usar funciones de plantilla (Tagged Templates) para procesar cadenas de texto de manera más avanzada.
// 4. Combinar Template Literals con destructuring para crear cadenas de texto más legibles y concisas.
// 5. Documentar el uso de Template Literals en el código para mejorar la comprensión de otros desarrolladores.

// Ejemplo Completo
const producto = {
    nombre: "Laptop",
    precio: 1200,
    disponible: true
};

const { nombre: nombreProducto, precio, disponible } = producto;
const mensajeProducto = `Producto: ${nombreProducto}, Precio: $${precio}, Disponible: ${disponible ? 'Sí' : 'No'}`;
console.log(mensajeProducto); // Imprime: Producto: Laptop, Precio: $1200, Disponible: Sí

// Resumen de lo más importante

// 1. Los Template Literals son una forma de definir cadenas de texto usando comillas invertidas (backticks).
// 2. Permiten la interpolación de variables y expresiones usando la sintaxis ${}.
// 3. Permiten definir cadenas de texto multilínea sin caracteres especiales.
// 4. Las funciones de plantilla (Tagged Templates) permiten procesar un Template Literal antes de que sea evaluado.
// 5. Usar Template Literals para mejorar la legibilidad del código y combinarlos con destructuring para crear cadenas de texto más concisas.