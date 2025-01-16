// En este apartado veremos las diferencias entre var, let y const, y cuándo es recomendable usar cada una.

// Introducción a let y const
// Antes de ES6, JavaScript solo tenía una forma de declarar variables: var. Sin embargo, var tiene algunos problemas,
// como el hoisting y el ámbito de función, que pueden llevar a errores difíciles de depurar. 
// Para solucionar estos problemas,
// ES6 introdujo dos nuevas formas de declarar variables: let y const.

// 1. let
// La palabra reservada let se utiliza para declarar variables que pueden ser reasignadas y tiene ámbito de bloque.

let x = 10;
x = 20;
console.log(x); // Imprime: 20

// En este caso, la variable x se declara con let y se le asigna el valor 10.   
// Posteriormente, se reasigna el valor 20 a x y se imprime por consola.

// 2. const
// La palabra reservada const se utiliza para declarar variables que no pueden ser reasignadas 
// y también tiene ámbito de bloque (como let).

const y = 10;
// y = 20; // Error: Assignment to constant variable.

// En este caso, la variable y se declara con const y se le asigna el valor 10.
// Si intentamos reasignar un nuevo valor a y, se producirá un error.

// 3. Diferencias entre let y const
// La principal diferencia entre let y const es que las variables declaradas con let pueden ser reasignadas,
// mientras que las variables declaradas con const no pueden ser reasignadas.
// Esto no quiere decir que las variables const sean inmutables, sino que no pueden ser reasignadas.
// Es decir, si una variable constante es un objeto o un array, sus propiedades o elementos pueden ser modificados.
// El caso en el que no puede ser modificada es si es cuando es un 
// valor primitivo como un número, un string o un boolean.

let a = 10;
a = 20; // Esto es válido

const b = 10;
// b = 20; // Esto producirá un error

// 4. Ámbito de bloque
// Tanto let como const tienen ámbito de bloque, lo que significa que solo existen dentro del bloque donde se declaran.

if (true) {
    let c = 30;
    const d = 40;
    console.log(c); // Imprime: 30
    console.log(d); // Imprime: 40
}
// console.log(c); // Error: c is not defined
// console.log(d); // Error: d is not defined

// Buenas prácticas con let y const
// 1. Usar const por defecto: Siempre que declares una variable, usa const a menos que sepas que necesitarás reasignarla.
// 2. Usar let solo cuando sea necesario: Si sabes que una variable necesitará ser reasignada, usa let.
// 3. Mantener el ámbito de las variables lo más pequeño posible: Declara variables en el ámbito más pequeño posible para evitar errores.
// 4. Nombrar claramente las variables: Usa nombres de variables descriptivos para mejorar la legibilidad del código.

// Cuándo usar let y const
// 1. Usar const para valores que no cambiarán: Por ejemplo, constantes matemáticas, configuraciones, etc.
const PI = 3.14159;
const CONFIG = { apiUrl: 'https://api.example.com' };

// 2. Usar let para valores que cambiarán: Por ejemplo, contadores, acumuladores, etc.
let counter = 0;
counter++;
console.log(counter); // Imprime: 1

// Ejemplo sencillo y claro
function ejemploLetConst() {
    const nombre = 'Juan';
    let edad = 30;

    console.log(`Nombre: ${nombre}, Edad: ${edad}`); // Imprime: Nombre: Juan, Edad: 30

    edad = 31; // Reasignamos la variable edad
    console.log(`Nombre: ${nombre}, Edad: ${edad}`); // Imprime: Nombre: Juan, Edad: 31

    // nombre = 'Pedro'; // Esto producirá un error porque nombre es una constante
}

ejemploLetConst();