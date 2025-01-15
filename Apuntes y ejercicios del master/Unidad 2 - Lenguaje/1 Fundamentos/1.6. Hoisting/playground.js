// Hoisting & Scope

// Lo normal en programación es que las variables se declaren antes de ser utilizadas.
// Por ejemplo: 
var myNumber = 1;
console.log("\nEjercicio 1: Variables");
console.log(myNumber); // 1
// Sin embargo, en JavaScript podemos utilizar una variable antes de declararla.
// Esto es posible gracias a un concepto llamado hoisting.
// Hoisting es el proceso en el que las declaraciones de variables y funciones son movidas al inicio del código.
// Por ejemplo:
console.log("\nEjercicio 2: Variables");
console.log(myNumber); // undefined
var myNumber = 1;
// En este caso, la variable myNumber se declara e inicializa después de ser utilizada, por lo que el valor es undefined.
// Para evitar este tipo de errores, es recomendable declarar e inicializar las variables al inicio del código.

// El hosting también aplica en variables declaradas con let y const.

console.log("\nEjercicio 3: Variables");
console.log(a); // undefined - aqui se declara la variable a pero no se inicializa por eso es undefined
var a = 1; 
console.log(a); // 1 - aqui se inicializa la variable a con el valor 1 y se imprime

// En javascript las variables tipo var tienen ambito de función, es decir, si se declara una variable dentro de una función,
// esta variable solo estará disponible dentro de la función.
// Por ejemplo:
console.log("\nEjercicio 4: Variables");
function myFunction() {
    var b = 2; // variable b solo disponible dentro de la función
    console.log(b); // 2
}

// Pero en las variablas de tipo VAR y en los bloques como if, for, while, etc. no tienen ambito de bloque, es decir,
// si se declara una variable dentro de un bloque, esta variable estará disponible fuera del bloque.

console.log("\nEjercicio 5: Variables");
if (true) {
    var c = 3; // variable c disponible fuera del bloque
}
console.log(c); // 3 - variable c disponible fuera del bloque

// Si a esto le añadimos el hoisting, el resultado sería el siguiente:
console.log("\nEjercicio 6: Variables");
console.log(d); // undefined - aqui se declara la variable d pero no se inicializa por eso es undefined
if (true) {
    var d = 4; // variable d disponible fuera del bloque
}
console.log(d); // 4 - variable d disponible fuera del bloque

// En ES6 se introdujeron las variables let y const, que tienen ámbito de bloque.
// Esto significa que si se declara una variable let o const dentro de un bloque, esta variable solo estará disponible dentro del bloque.
// ¿Por qué hicieron esto? Para evitar errores y hacer el código más legible.
// Por ejemplo:
console.log("\nEjercicio 7: Variables");
if (true) {
    let e = 5; // variable e no disponible fuera del bloque
}
// console.log(e); // ReferenceError: e is not defined

var a;
a = 1;

function final() {
    var a; // Esta declaración se eleva al principio de la función
    console.log(a); // Aquí 'a' es 'undefined' porque la variable 'a' dentro de la función 'final' aún no ha sido inicializada
    a = 2; // Ahora 'a' se inicializa a 2 dentro de la función
    console.log(a); // Aquí 'a' es 2
}
console.log(a); // Aquí 'a' es 1

