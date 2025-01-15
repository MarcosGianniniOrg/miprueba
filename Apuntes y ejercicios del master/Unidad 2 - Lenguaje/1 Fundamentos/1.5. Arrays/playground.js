// Arrays
// Los arrays son una estructura de datos que nos permite almacenar varios valores en una sola variable. Se declaran con corchetes [] y los valores se separan por comas.

// Para inicializar un array:

var collection = [1, 2, 3, 4, 5];

// También se pueden inicializar a partir de variables

var myNumber = 1; // Define a number
var collection = [myNumber, myNumber + 1, myNumber + 2]; // Define an array with the number and the next two numbers. 
// [1, 2, 3] Because myNumber is 1 and we use increment to get the next two numbers.

// También podemos incluir dentro del arrya otros objetos como strings, booleanos, arrays, objetos, etc.

var collection = [
    1, 
    "Hello", 
    true, 
    [1, 2, 3], 
    {name: "John"}
];

console.log(collection); // [1, "Hello", true, Array(3), {name: "John"}]

// Acceder a los elementos de un array
// Para acceder a los elementos de un array utilizamos la notación de corchetes [] 
// y el índice del elemento que queremos acceder. Los índices de los arrays empiezan en 0.

var collection = [1, 2, 3, 4, 5];
console.log(collection[0]); // 1
console.log(collection[1]); // 2
console.log(collection[2]); // 3
console.log(collection[3]); // 4
console.log(collection[4]); // 5


// Modificar elementos de un array
// Para modificar un elemento de un array simplemente accedemos al elemento y le asignamos un nuevo valor.

var collection = [1, 2, 3, 4, 5];
collection[0] = 10;
console.log(collection); // [10, 2, 3, 4, 5]

// Añadir elementos a un array
// Para añadir elementos a un array utilizamos el método push().
// Este método añade un elemento al final del array.

var collection = [1, 2, 3, 4, 5];
collection.push(6);
console.log("\nEjercicio 1: Añadir elementos a un array");
console.log(collection); // [1, 2, 3, 4, 5, 6]

// Propiedades y métodos de los arrays
// Los arrays tienen varias propiedades y métodos que nos permiten trabajar con ellos de forma más eficiente.

// length
// La propiedad length nos devuelve el número de elementos de un array.

var collection = [1, 2, 3, 4, 5];
console.log("\nEjercicio 2: Propiedad length");
console.log(collection.length); // 5 --> Funciona igual que en strings, nos devuelve el número de elementos del array.

// push()
// El método push() añade un elemento al final del array.

// Otros métodos útiles son: pop(), shift(), unshift(), slice(), splice(), concat(), join(), reverse(), sort(), etc.
// Los arrays son objetos en JavaScript, por lo que tienen métodos y propiedades que nos permiten trabajar con ellos de forma más eficiente.

// Ejercicio 3
// Crea un array con los números del 1 al 10 y muestra cada uno de los elementos por consola.

var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log("\nEjercicio 3: Mostrar elementos del array");

for (var i = 0; i < numbers.length; i++) {
    console.log(numbers[i]);
}

// Cómo iterar un array
// Para recorrer un array podemos utilizar un bucle for o un bucle forEach().
// El bucle for nos permite recorrer un array utilizando un índice.
// El bucle forEach() nos permite recorrer un array sin necesidad de utilizar un índice.

// Ejercicio 4
// Crea un array con los números del 1 al 10 y muestra cada uno de los elementos por consola utilizando un bucle for.

var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log("\nEjercicio 4: Mostrar elementos del array con bucle for");

for (var i = 0; i < numbers.length; i++) {
    console.log(numbers[i]);
}

// Ejercicio 5
// Crea un array con los números del 1 al 10 y muestra cada uno de los elementos por consola utilizando el método forEach().

var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log("\nEjercicio 5: Mostrar elementos del array con forEach()");
numbers.forEach(function(number) {
    console.log(number);
});

// la diferencia, cómo se puede observar en el ejercicio 5, es que en el método forEach() no necesitamos utilizar un índice como en el bucle for
// para acceder a los elementos del array. Con forEach() simplemente pasamos una función que recibe 
// como parámetro cada uno de los elementos del array.

// for...of
// Otra forma de recorrer un array es utilizando el bucle for...of. 
// Este bucle nos permite recorrer un array sin necesidad de utilizar un índice. 
// ¿Cuál es la diferencia entre forEach() y for...of? 
// La diferencia es que con forEach() no podemos utilizar la sentencia break para salir del bucle,
// mientras que con for...of sí podemos utilizarla.
// Esto es útil cuando queremos recorrer un array y en determinado momento queremos salir del bucle.

// Ejercicio 6
// Crea un array con los números del 1 al 10 y muestra cada uno de los elementos por consola utilizando el bucle for...of.

var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log("\nEjercicio 6: Mostrar elementos del array con for...of");

for (var number of numbers) {
    console.log(number);
}

// Resumen:
// Los arrays son una estructura de datos que nos permite almacenar varios valores en una sola variable.
// Se declaran con corchetes [] y los valores se separan por comas.
// Podemos incluir dentro del array otros objetos como strings, booleanos, arrays, objetos, etc.
// Para acceder a los elementos de un array utilizamos la notación de corchetes [] y el índice del elemento que queremos acceder.
// Los índices de los arrays empiezan en 0.
// Para modificar un elemento de un array simplemente accedemos al elemento y le asignamos un nuevo valor.
// Para añadir elementos a un array utilizamos el método push().
// Los arrays tienen varias propiedades y métodos que nos permiten trabajar con ellos de forma más eficiente.
// Para recorrer un array podemos utilizar un bucle for o un bucle forEach().
// El bucle for nos permite recorrer un array utilizando un índice.
// El bucle forEach() nos permite recorrer un array sin necesidad de utilizar un índice.
// Otra forma de recorrer un array es utilizando el bucle for...of.

// Tips para uso profesional y limpio de arrays:
// 1. Utiliza nombres descriptivos para tus arrays.
// 2. Utiliza arrays para agrupar elementos relacionados.
// 3. Utiliza comentarios para documentar tu código.
// 4. Utiliza bucles for, forEach() o for...of para recorrer arrays.
// 5. Utiliza métodos como push(), pop(), shift(), unshift(), slice(), splice(), concat(), join(), reverse(), sort(), etc. para trabajar con arrays.
// 6. Utiliza la propiedad length para obtener el número de elementos de un array.

