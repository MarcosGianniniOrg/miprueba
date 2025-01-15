// Control de flujo en JavaScript (estructuras condicionales y bucles) 
// El control de flujo en JavaScript nos permite tomar decisiones y repetir tareas. 
// Además, nos permite ejecutar un bloque de código si se cumple una condición o repetir un bloque de código varias veces.
// Como curiosidad, en JavaScript, el valor 0 es considerado como falso y cualquier otro valor es considerado como verdadero 
// porque JavaScript es un lenguaje de tipado débil. Esto quiere decir que no es necesario declarar el tipo de dato de una variable
//  porque JavaScript lo infiere automáticamente. 
// ¿Qué es infiere? Que JavaScript determina el tipo de dato de una variable a partir del valor que se le asigna. 
// Ejemplo: var num = 3; JavaScript infiere que num es un número porque se le asignó el valor 3.

// Directivas de control de flujo

// Las directivas de control de flujo nos permiten tomar decisiones y repetir tareas.

// If-else, ternary, switch, for, while, do-while.

var x = 1;

if (x === 1) { // if x is equal to 1
    console.log('x is equal to 1');  // then print this
} else if (x === 2) {
    console.log('x is equal to 2'); // else if x is equal to 2, print this
} else {
    console.log('x is not equal to 1 or 2'); // else print this
} // In this case, x is equal to 1, so the output will be 'x is equal to 1'

// Ternary operator
// El ternary operator es una forma abreviada de escribir una estructura condicional if-else.
// Es como un interruptor de luz, si la condición es verdadera, la luz se enciende, si la condición es falsa, la luz se apaga.

var x = 1;
var numType = x >= 0 ? "positive" : "negative"; // if x is greater than or equal to 0, then numType is positive, else numType is negative
console.log(numType); // positive

// Switch
// El switch es una estructura condicional que se utiliza para comparar una expresión con múltiples valores.
// Es como una caja de opciones, si la expresión coincide con un valor, se ejecuta un bloque de código.
// Palabras clave del switch: switch, case, break, default.
// La palabra clave switch se utiliza para especificar la expresión a evaluar.
// La palabra clave case se utiliza para comparar la expresión con un valor.
// La palabra clave break se utiliza para salir del switch.
// La palabra clave default se utiliza para especificar un bloque de código que se ejecuta si no se cumple ninguna de las condiciones.

var animal = "cat";

switch (animal) {
    case "dog":
        console.log("This is a dog");
        break;
    case "cat":
        console.log("This is a cat");
        break;
    default:
        console.log("This is not a dog or a cat");
} // This is a cat

// For loop
// El bucle for se utiliza para repetir una tarea varias veces.
// Palabras clave del bucle for: for, in, of.
// La palabra clave for se utiliza para especificar las condiciones del bucle.
// La palabra clave in se utiliza para recorrer las propiedades de un objeto.
// La palabra clave of se utiliza para recorrer los elementos de un array.

for (var i = 0; i < 5; i++) {
    console.log(i); // 0, 1, 2, 3, 4
}

// While loop
// El bucle while se utiliza para repetir una tarea mientras se cumpla una condición.
// Palabras clave del bucle while: while, do, break, continue.
// La palabra clave while se utiliza para especificar la condición del bucle.
// La palabra clave do se utiliza para ejecutar un bloque de código al menos una vez.
// La palabra clave break se utiliza para salir del bucle.
// La palabra clave continue se utiliza para saltar una iteración del bucle.

var limit = 4; // define the limit becouse we want to print the numbers from 0 to 3
var i = 0; // define the initial value of i

while (i < limit) { // while i is less than 4
    console.log(i); // i is less than 4, so print i
    i++; // increment i by 1
} // Result is 0, 1, 2, 3

// Do-while loop
// El bucle do-while se utiliza para repetir una tarea al menos una vez y mientras se cumpla una condición.
// Palabras clave del bucle do-while: do, while.

var limit = 3; // define the limit becouse we want to print the numbers from 0 to 2
var i = 0; // define the initial value of i

do { // do this
    console.log(i); // print i then increment i by 1 
    i++;
} while (i < limit); // Result is 0, 1, 2

// Consejos extra

// En el mundo profesionoal, ¿qué tipo de bucle se utiliza más?
// En el mundo profesional, se utilizan más los bucles for porque se conoce el número de iteraciones que se van a realizar.
// Por ejemplo, si se quiere recorrer un array de 10 elementos, se puede utilizar un bucle for.
// En cambio, si no se conoce el número de iteraciones que se van a realizar, se puede utilizar un bucle while o do-while.



