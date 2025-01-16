// Spread y Rest Operator en JavaScript

// 1. ¿Qué es el operador spread (...)? 
// El operador spread permite expandir elementos de un array u objeto en lugares donde se esperan múltiples elementos.

// Ejemplo básico con arrays:
const array1 = [1, 2, 3];
const array2 = [...array1, 4, 5, 6];
console.log(array2); // Imprime: [1, 2, 3, 4, 5, 6]

// Ejemplo básico con objetos:
const objeto1 = { a: 1, b: 2 };
const objeto2 = { ...objeto1, c: 3 };
console.log(objeto2); // Imprime: { a: 1, b: 2, c: 3 }

// 2. ¿Qué es el operador rest (...)? 
// El operador rest permite agrupar múltiples elementos en un solo array o objeto.

// Ejemplo básico con arrays:
const [primero, segundo, ...resto] = [1, 2, 3, 4, 5];
console.log(primero); // Imprime: 1
console.log(segundo); // Imprime: 2
console.log(resto); // Imprime: [3, 4, 5]

// Ejemplo básico con objetos:
const { a, b, ...restoObjeto } = { a: 1, b: 2, c: 3, d: 4 };
console.log(a); // Imprime: 1
console.log(b); // Imprime: 2
console.log(restoObjeto); // Imprime: { c: 3, d: 4 }

// 3. Uso del operador spread
// El operador spread se usa para copiar arrays/objetos, combinar arrays/objetos, y pasar elementos de un array como argumentos a una función.

// Copiar arrays:
const array3 = [...array1];
console.log(array3); // Imprime: [1, 2, 3]

// Combinar arrays:
const array4 = [4, 5, 6];
const array5 = [...array1, ...array4];
console.log(array5); // Imprime: [1, 2, 3, 4, 5, 6]

// Pasar elementos de un array como argumentos a una función:
function sumar(a, b, c) {
    return a + b + c;
}
const numeros = [1, 2, 3];
console.log(sumar(...numeros)); // Imprime: 6

// 4. Uso del operador rest
// El operador rest se usa para agrupar argumentos en una función y para destructuring de arrays/objetos.

// Agrupar argumentos en una función:
function sumarTodos(...numeros) {
    return numeros.reduce((acc, num) => acc + num, 0);
}
console.log(sumarTodos(1, 2, 3, 4)); // Imprime: 10

// Destructuring con rest:
const [primero2, segundo2, ...resto2] = [1, 2, 3, 4, 5];
console.log(primero2); // Imprime: 1
console.log(segundo2); // Imprime: 2
console.log(resto2); // Imprime: [3, 4, 5]

// 5. Destructuring y Rest juntos
// Puedes usar destructuring y rest juntos para extraer partes de un array u objeto y agrupar el resto.

const persona = {
    nombre: "Luis",
    edad: 28,
    casado: true,
    direccion: {
        calle: "Avenida Siempre Viva",
        numero: 742
    }
};

const { nombre, edad, ...restoPersona } = persona;
console.log(nombre); // Imprime: Luis
console.log(edad); // Imprime: 28
console.log(restoPersona); // Imprime: { casado: true, direccion: { calle: 'Avenida Siempre Viva', numero: 742 } }

// Tips y Buenas Prácticas

// 1. Usar el operador spread para copiar arrays/objetos en lugar de métodos como slice() o Object.assign().
// 2. Usar el operador rest para manejar argumentos variables en funciones.
// 3. Evitar el uso excesivo del operador spread/rest si hace que el código sea más difícil de entender.
// 4. Usar destructuring y rest juntos para extraer partes de un array/objeto y agrupar el resto.
// 5. Ser consciente del rendimiento: El uso excesivo de spread/rest puede afectar el rendimiento en grandes arrays/objetos.

// Ejemplo Completo
const datos = ["Maria", 22, false, ["Calle Luna", 456]];
const [nombre2, edad2, casado2, [calle, numero]] = datos;
console.log(nombre2, edad2, casado2, calle, numero); // Imprime: Maria 22 false Calle Luna 456

const objeto3 = { a: 1, b: 2, c: 3, d: 4 };
const { a: a3, b: b3, ...resto3 } = objeto3;
console.log(a3); // Imprime: 1
console.log(b3); // Imprime: 2
console.log(resto3); // Imprime: { c: 3, d: 4 }

// RESUMEN
// El operador spread (...) se usa para expandir elementos de un array u objeto.
// El operador rest (...) se usa para agrupar múltiples elementos en un solo array u objeto.
// Puedes usar destructuring y rest juntos para extraer partes de un array u objeto y agrupar el resto.
// El uso excesivo de spread/rest puede afectar el rendimiento en grandes arrays/objetos.
