// Función declarada
function sum(a, b) {
    return a + b;
}

// Ejemplo de función declarada
console.log(sum(1, 2)); // Imprime: 3

// Función expresada
const sumExpression = function(a, b) {
    return a + b;
}

// Ejemplo de función expresada
console.log(sumExpression(1, 2)); // Imprime: 3

// IIFE (Immediately Invoked Function Expression)

// Las IIFE son funciones que se ejecutan inmediatamente después de ser definidas.
// Son útiles para encapsular variables y funciones para evitar colisiones de nombres
// con el código exterior.

(function() {
    console.log("¡Hola, mundo!");
})();

// Otra forma de escribir una IIFE es envolviendo la función entre paréntesis  
// y luego llamándola con otro par de paréntesis.

(function() {
    console.log("¡Hola, mundo!");
}
)(); // Imprime: ¡Hola, mundo!

// También se pueden pasar argumentos a una IIFE

(function(a, b) {
    console.log(a + b);
})(1, 2); // Imprime: 3

// Las IIFE son muy comunes en librerías y frameworks de JavaScript para evitar
// contaminar el ámbito global con variables y funciones.

// BUENAS PRÁCTICAS CON FUNCIONES
// 1. Nombrar claramente las funciones y variables para mejorar la legibilidad.
// 2. Mantener las funciones pequeñas y enfocadas en una sola tarea.
// 3. Usar funciones declaradas para definir funciones que se usan en múltiples lugares.
// 4. Usar funciones expresadas o IIFE para encapsular código y evitar colisiones de nombres.
// 5. Documentar el comportamiento de las funciones y sus parámetros.

// CUÁNDO USAR FUNCIONES DECLARADAS
// 1. Cuando necesitas definir una función que se usará en múltiples lugares.
// 2. Para mejorar la legibilidad y organización del código.
// 3. Cuando la función debe estar disponible en todo el ámbito donde se declara.

// CUÁNDO USAR FUNCIONES EXPRESADAS
// 1. Cuando necesitas definir una función como parte de una expresión más grande.
// 2. Para encapsular código y evitar colisiones de nombres.
// 3. Cuando quieres definir funciones que se asignan a variables o se pasan como argumentos.

// CUÁNDO USAR IIFE
// 1. Para encapsular variables y funciones y evitar colisiones de nombres con el código exterior.
// 2. Cuando necesitas ejecutar código inmediatamente después de definirlo.
// 3. Para crear un ámbito local y evitar contaminar el ámbito global.

// CUÁNDO NO USAR IIFE
// 1. Cuando no necesitas encapsular variables o funciones.
// 2. Si el uso de IIFE complica innecesariamente el código.
// 3. Cuando una función declarada o expresada sería más clara y fácil de mantener.