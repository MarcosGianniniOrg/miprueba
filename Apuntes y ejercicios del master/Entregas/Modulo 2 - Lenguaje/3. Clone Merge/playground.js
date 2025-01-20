// Clone

// Implementa una función clone que, a partir de un objeto de entrada source devuelva un nuevo objeto con las propiedades de source:

// function clone(source) {
//   // Implementation here.
// }

const clone = (source) => structuredClone(source); // Función para hacer una copia profunda

const obj = { name: "John", skills: { languages: ["JS"] } };
const clonedObj = clone(obj); // Llamada correcta a la función clone

clonedObj.skills.languages.push("CSS");

console.log("Esta es la versión del objeto original con sus objetos: "+obj.skills.languages); // ['JS']  -> El original no cambia
console.log("Esta es la versión del objeto copia con sus objetos: "+clonedObj.skills.languages); // ['JS', 'CSS']  -> Solo cambia la copia

// Merge

// Implementa una función merge que, dados dos objetos de entrada source y target,
// devuelva un nuevo objeto con todas las propiedades de target y de source, y en caso de propiedades con el mismo nombre, source sobreescribe a target.

// Por ejemplo, dados estos 2 objetos:

// const a = { name: "Maria", surname: "Ibañez", country: "SPA" };
// const b = { name: "Luisa", age: 31, married: true };

// el resultado de mezclar a sobre b sería:

// merge(a, b); // {name: "Maria", age: 31, married: true, surname: "Ibañez", country: "SPA"}

// TIP: Puedes usar la función "clone" del apartado A.

// function merge(source, target) {
//   // Implementation here.
// }

function merge(source, target) { // declaro la funcion merge que recibe dos objetos como argumentos
    return { ...clone(target), ...clone(source) }; // Uso clone para hacer una copia profunda de ambos objetos y luego los mezclo con el operador spread
}

// Declaración de objetos:
const a = { name: "Maria", surname: "Ibañez", country: "SPA" }; // declaro el objeto 'a' con tres propiedades
const b = { name: "Luisa", age: 31, married: true }; // declaro el objeto 'b' con tres propiedades

// Llamada a la función merge:
console.log(merge(a, b)); // {name: "Maria", age: 31, married: true, surname: "Ibañez", country: "SPA"}
// sería este objeto con todas las propiedades de ambos y en caso de propiedades con el mismo nombre, source sobreescribe a target

// Para comprobar que es un objeto nuevo y no una referencia:

const testMerge = (obj1, obj2) => { // declaro la funcion testMerge que recibe dos objetos como argumentos
    const merged = merge(obj1, obj2); // Llamada a la función merge y guardo el resultado en la variable merged
    console.log("¿Son el mismo objeto? "+(merged === obj1 || merged === obj2)); // Convierte a string y compara si son iguales los objetos 
    console.log("¿Son iguales? "+(JSON.stringify(merged) === JSON.stringify(obj1) || JSON.stringify(merged) === JSON.stringify(obj2))); // Convierte a string y 
    // compara si dentro de los objetos tienen los mismos valores en las mismas propiedades.
}

testMerge(a, b); // Mostrará por pantalla: false, true
