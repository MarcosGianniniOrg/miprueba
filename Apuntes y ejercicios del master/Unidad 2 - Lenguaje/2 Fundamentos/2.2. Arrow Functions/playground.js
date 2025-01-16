// Arrow Functions
// Las arrow functions son una forma más corta de escribir funciones en JavaScript.

// Sintaxis
// La sintaxis de una arrow function es la siguiente:

// Ejemplo de función tradicional
function sum(a, b) {
    return a + b;
}
// En este ejemplo, la función tradicional sum toma dos parámetros a y b y devuelve la suma de ambos.

// Ejemplo de arrow function
const sum = (a, b) => a + b;
// La arrow function hace lo mismo, pero de una forma más concisa y fácil de leer.

// Si la función solo tiene un parámetro, puedes omitir los paréntesis:
const square = x => x * x;
// En este caso, la función square toma un parámetro x y devuelve el cuadrado de x.
// Esto es azúcar sintáctico, lo que significa que es solo una forma más corta de escribir una función tradicional.

// Si la función no tiene parámetros, debes incluir los paréntesis vacíos:
const hello = () => "Hello, world!";
// En este caso, la función hello no toma ningún parámetro y devuelve la cadena "Hello, world!".

// En el siguiente ejemplo es muy importante tener en cuenta que el return 
// se puede omitir si la función solo tiene una línea de código.
// Esto lo hacemos con los paréntesis que rodean a la función.	ç
// Estos paréntesis son opcionales si la función solo tiene un parámetro pero obligatorios 
// si no tiene ninguno o más de uno.  

// Ejemplo con más de un parámetro y los paréntesis obligatorios
const toObject = (name, surname, age) => ({ name, surname, age });

// Ejemplo con un solo parámetro y los paréntesis opcionales
const toObject2 = name => ({ name });

// Ejemplo sin parámetros y los paréntesis obligatorios
const toObject3 = () => ({});

// En general, las arrow functions son útiles cuando necesitas escribir funciones cortas y concisas.
// Pero el motivo real de usar arrow functions es que no crean su propio contexto de this,
// lo que significa que heredan el contexto de this de la función que las contiene.

// Ejemplo de uso de this en una función tradicional
function Person(name) { // Constructor de la clase Person
    this.name = name; // Propiedad name
    this.sayHello = function() { // Método sayHello
        console.log("Hello, my name is " + this.name); // Imprime el mensaje del método sayHello y luego el nombre
    } // Fin del método sayHello
} // Fin del constructor de la clase Person

const person = new Person("Alice"); // Instancia de la clase Person con el nombre "Alice"
person.sayHello(); // Llama al método sayHello de la instancia person

// ¿Qué hace this en este caso?
// En este caso, this se refiere al objeto person, que es una instancia de la clase Person.

// ¿Qué es una instacia de una clase? ¿A qué nos referimos con instanciar una clase en JavaScript?
// Una instancia de una clase es un objeto que se crea a partir de una clase.
// Cuando instancias una clase en JavaScript, estás creando un nuevo objeto basado en esa clase.
// Así que volviendo a los THIS, en este caso, this se refiere al objeto person, 
// que es una instancia de la clase Person. 

// Ejemplo de uso de this en una arrow function

function Person(name) { // Constructor de la clase Person
    this.name = name; // Propiedad name
    this.sayHello = () => { // Método sayHello
        console.log("Hello, my name is " + this.name); // Imprime el mensaje del método sayHello y luego el nombre
    } // Fin del método sayHello
} // Fin del constructor de la clase Person

// ¿Por qué existen entonces las funciones flecha?
// Las funciones flecha se introdujeron en ES6 para solucionar el problema de this en JavaScript.

// ¿Qué problema solucionan las funciones flecha?
// En JavaScript, this se refiere al objeto que invoca la función.
// Pero en el caso de las funciones anidadas, this puede cambiar de valor y no referirse al objeto que esperamos.
// Esto quiere decir en lengua simple, que this en una función anidada no se refiere al objeto que esperamos.
// Esto es un problema porque puede llevar a errores difíciles de depurar.

// ¿Cómo solucionan las funciones flecha el problema de this?
// Las funciones flecha no crean su propio contexto de this, 
// sino que heredan el contexto de this de la función que las contiene.

