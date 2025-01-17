// Interfaces en TypeScript

// 1. ¿Qué es una interfaz?
// Una interfaz en TypeScript es una forma de definir la estructura de un objeto. Es un contrato que el objeto debe cumplir.

// 2. Cómo se definen las interfaces
// Las interfaces se definen usando la palabra clave `interface`.

// interface Persona {
   //  nombre: string;
   //  edad: number;
// }

// 3. Cómo se usan las interfaces
// Las interfaces se usan para tipar objetos y asegurar que cumplan con la estructura definida.

// let persona: Persona = { nombre: "Juan", edad: 30 };
// console.log(persona); // Imprime: { nombre: "Juan", edad: 30 }

// 4. Buenas prácticas
// - Usar interfaces para definir la estructura de objetos y asegurar que cumplan con un contrato.
// - Nombrar las interfaces de manera clara y descriptiva.
// - Mantener las interfaces pequeñas y enfocadas en una sola responsabilidad.

// 5. Contrato
// Una interfaz actúa como un contrato que el objeto debe cumplir. Si el objeto no cumple con la interfaz, TypeScript generará un error.

// interface Vehiculo {
   //  marca: string;
   //  modelo: string;
   //  anio: number;
// }

// let coche: Vehiculo = { marca: "Toyota", modelo: "Corolla", anio: 2020 };
// console.log(coche); // Imprime: { marca: "Toyota", modelo: "Corolla", anio: 2020 }

// 6. Romper el contrato
// Si intentamos asignar un objeto que no cumple con la interfaz, TypeScript generará un error.

// let cocheInvalido: Vehiculo = { marca: "Toyota", modelo: "Corolla" }; // Error: Falta la propiedad 'anio'

// 7. Anidar otras interfaces
// Las interfaces pueden anidar otras interfaces para definir estructuras más complejas.

// interface Direccion {
//     calle: string;
//     ciudad: string;
//     pais: string;
// }

// interface PersonaConDireccion {
//     nombre: string;
//     edad: number;
//     direccion: Direccion;
// }

// let personaConDireccion: PersonaConDireccion = {
//     nombre: "Ana",
//     edad: 25,
//     direccion: {
//         calle: "Calle Falsa",
//         ciudad: "Madrid",
//         pais: "España"
//     }
// };
// console.log(personaConDireccion);
// Imprime: { nombre: 'Ana', edad: 25, direccion: { calle: 'Calle Falsa', ciudad: 'Madrid', pais: 'España' } }

// 8. Capacidad de extensión de las interfaces
// Las interfaces pueden extender otras interfaces para reutilizar y combinar estructuras.

// interface Animal {
//     nombre: string;
//     edad: number;
// }

// interface Perro extends Animal {
//     raza: string;
// }

// let miPerro: Perro = { nombre: "Firulais", edad: 3, raza: "Labrador" };
// console.log(miPerro); // Imprime: { nombre: 'Firulais', edad: 3, raza: 'Labrador' }

// Resumen de lo más importante

// 1. Las interfaces definen la estructura de un objeto y actúan como un contrato que el objeto debe cumplir.
// 2. Se definen usando la palabra clave `interface`.
// 3. Se usan para tipar objetos y asegurar que cumplan con la estructura definida.
// 4. Buenas prácticas: usar interfaces para definir la estructura de objetos, nombrar las interfaces de manera clara y descriptiva, mantener las interfaces pequeñas y enfocadas.
// 5. Las interfaces pueden anidar otras interfaces para definir estructuras más complejas.
// 6. Las interfaces pueden extender otras interfaces para reutilizar y combinar estructuras.
// 7. Si un objeto no cumple con la interfaz, TypeScript generará un error.
// Que es un objeto
