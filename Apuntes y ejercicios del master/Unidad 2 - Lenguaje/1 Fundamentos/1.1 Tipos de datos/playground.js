// 7 tipos PRIMITIVOS + Objetos + Funciones

// String, number, boolean, null, undefined
// symbol, bigInt

// Objets, arrays

// Function

function myFunction(arg1, arg2) {
    console.log(arg1, arg2);
    return arg1;
}

myFunction("Hola");

// Typeof

const myData = true;
console.log(typeof myData);

// Preguntas de autoaprendizaje

// 1. ¿Qué es un tipo de dato primitivo?
// Un tipo de dato primitivo es un tipo de dato que no es un objeto y no tiene métodos.
// En javascript hay 7 tipos de datos primitivos: string, number, boolean, null, undefined, symbol, bigInt.

// 2. ¿Qué es un objeto?
// Un objeto es una colección de propiedades, y una propiedad es una asociación entre un nombre (o clave) y un valor.
// Un valor puede ser una función, que es entonces conocida como un método del objeto.
// En javascript, casi todo es un objeto. Los objetos son una de las características más importantes de javascript.
// Pueden ser objetos predefinidos, como Date, Math, JSON, etc., o objetos definidos por el usuario.
// Un objeto definido por el usuario es creado por el programador.

// 3. ¿Qué es una función?
// Una función es un bloque de código que se define una vez pero se puede ejecutar en cualquier momento.
// Una función puede aceptar parámetros y devolver un valor.
// Las funciones son objetos, por lo que pueden ser asignadas a variables, pasadas como argumentos y devueltas por otras funciones.
// Las funciones son uno de los bloques de construcción fundamentales en javascript.

// 4. ¿Qué es typeof?
// typeof es un operador que devuelve el tipo de una variable o una expresión.
// Por ejemplo, typeof "Hola" devuelve "string", typeof 3 devuelve "number", typeof true devuelve "boolean", etc.

// 5. ¿Qué es una variable?
// Una variable es un contenedor para almacenar datos. En javascript, una variable se declara con la palabra clave var, let o const.
// var es la forma antigua de declarar una variable, let es la forma moderna y const es la forma moderna para declarar una variable cuyo valor no cambia.
// Una variable puede almacenar cualquier tipo de dato, como un número, una cadena, un objeto, una función, etc.

// 6. ¿Qué es una constante?
// Una constante es una variable cuyo valor no cambia. En javascript, una constante se declara con la palabra clave const.
// Una constante debe ser inicializada con un valor y no se puede reasignar.
// Por ejemplo, const PI = 3.14159; declara una constante llamada PI con el valor 3.14159.

// 7. ¿Qué es un objeto predefinido?
// Un objeto predefinido es un objeto que ya está definido en javascript y se puede utilizar para realizar tareas comunes.
// Por ejemplo, Date es un objeto predefinido que se utiliza para trabajar con fechas y horas.
// Otros objetos predefinidos son Math, JSON, etc.

// 8. ¿Qué es un objeto definido por el usuario?
// Un objeto definido por el usuario es un objeto que es creado por el programador.
// Un objeto definido por el usuario puede tener propiedades y métodos que se definen en el código.
// Por ejemplo, var person = { name: "Marcos", age: 39 }; crea un objeto person con las propiedades name y age.

// Consejos extra
// 1. Utiliza variables para almacenar datos que pueden cambiar.
// 2. Utiliza constantes para almacenar datos que no cambian.
// 3. Utiliza objetos para agrupar datos relacionados y funciones.
// 4. Utiliza funciones para reutilizar código y realizar tareas específicas.
// 5. Utiliza el operador typeof para comprobar el tipo de una variable o una expresión.
