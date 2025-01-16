// Destructuring en JavaScript

// 1. ¿Qué es el destructuring?
// El destructuring es una sintaxis que permite extraer valores de arrays u objetos y asignarlos a variables de manera más concisa y legible.

// 2. Destructuring de Arrays
// Permite extraer valores de un array y asignarlos a variables.

// Ejemplo básico:
const array = ["Juan", 25, true];
const [nombre, edad, casado] = array;
console.log(nombre, edad, casado); // Imprime: Juan 25 true

// Intercambio de valores:
let a = 1;
let b = 2;
[a, b] = [b, a];
console.log(a, b); // Imprime: 2 1

// Omitir elementos:
const [nombre4, , casado4] = array;
console.log(nombre4, casado4); // Imprime: Juan true

// Asignar valores por defecto:
const [nombre5, edad5, casado5, profesion = "Desarrollador"] = array;
console.log(nombre5, edad5, casado5, profesion); // Imprime: Juan 25 true Desarrollador

// 3. Destructuring de Objetos
// Permite extraer propiedades de un objeto y asignarlas a variables.

// Ejemplo básico:
const objeto = { nombre: "Ana", edad: 30, casado: false };
const { nombre: nombre3, edad: edad3, casado: casado3 } = objeto;
console.log(nombre3, edad3, casado3); // Imprime: Ana 30 false

// Renombrar variables:
const { nombre: nombrePersona, edad: edadPersona, casado: estadoCivil } = objeto;
console.log(nombrePersona, edadPersona, estadoCivil); // Imprime: Ana 30 false

// 4. Destructuring de Objetos Anidados
// Permite extraer propiedades de objetos dentro de otros objetos.

const objeto2 = {
    nombre: "Marcos",
    edad: 37,
    casado: true,
    direccion: {
        calle: "Calle Falsa",
        numero: 123
    }
};

const { nombre: nombre7, edad: edad7, casado: casado7, direccion: { calle, numero } } = objeto2;
console.log(nombre7, edad7, casado7, calle, numero); // Imprime: Marcos 37 true Calle Falsa 123

// 5. Destructuring de Arrays Anidados
// Permite extraer valores de arrays dentro de otros arrays.

const array3 = ["Marcos", 37, true, ["Calle Falsa", 123]];
const [nombre8, edad8, casado8, [calle2, numero2]] = array3;
console.log(nombre8, edad8, casado8, calle2, numero2); // Imprime: Marcos 37 true Calle Falsa 123

// 6. Destructuring en Funciones
// Permite extraer valores de arrays u objetos pasados como argumentos a funciones.

// Ejemplo con arrays:
function printUser([nombre, edad, casado]) {
    console.log(`Nombre: ${nombre}, Edad: ${edad}, Casado: ${casado}`);
}

printUser(array); // Imprime: Nombre: Juan, Edad: 25, Casado: true

// Ejemplo con objetos:
function printUser2({ nombre, edad, casado }) {
    console.log(`Nombre: ${nombre}, Edad: ${edad}, Casado: ${casado}`);
}

printUser2(objeto); // Imprime: Nombre: Ana, Edad: 30, Casado: false

// 7. Valores por Defecto
// Permite asignar valores por defecto a variables si el valor extraído es `undefined`.

const array4 = ["Carlos"];
const [nombre9 = "Desconocido", edad9 = 0, casado9 = false] = array4;
console.log(nombre9, edad9, casado9); // Imprime: Carlos 0 false

// Tips y Buenas Prácticas

// 1. Usar destructuring para mejorar la legibilidad: El destructuring hace que el código sea más limpio y fácil de entender.
// 2. Renombrar variables cuando sea necesario: Si los nombres de las propiedades del objeto no son claros, renómbralos durante el destructuring.
// 3. Valores por defecto: Usa valores por defecto para evitar errores cuando los valores extraídos sean `undefined`.
// 4. Destructuring en funciones: Simplifica la extracción de valores de los argumentos de las funciones.
// 5. Evitar destructuring excesivo: No abuses del destructuring si hace que el código sea más difícil de entender.

// Ejemplo Completo
const persona = {
    nombre: "Luis",
    edad: 28,
    casado: true,
    direccion: {
        calle: "Avenida Siempre Viva",
        numero: 742
    }
};

const { nombre: nombre10, edad: edad10, casado: casado10, direccion: { calle: calle3, numero: numero3 } } = persona;
console.log(nombre10, edad10, casado10, calle3, numero3); // Imprime: Luis 28 true Avenida Siempre Viva 742

const datos = ["Maria", 22, false, ["Calle Luna", 456]];
const [nombre11, edad11, casado11, [calle4, numero4]] = datos;
console.log(nombre11, edad11, casado11, calle4, numero4); // Imprime: Maria 22 false Calle Luna 456