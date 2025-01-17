// // TypeScript en JavaScript

// // 1. ¿Qué es TypeScript?
// // TypeScript es un superconjunto de JavaScript que añade tipado estático y otras características avanzadas.
// // Sirve para escribir código más robusto y menos propenso a errores.

// // 2. ¿Por qué tipar variables?
// // Tipar variables ayuda a detectar errores en tiempo de compilación, mejora la autocompletación y la documentación del código.

// // 3. ¿Qué es código robusto?
// // Código robusto es aquel que es menos propenso a errores y más fácil de mantener.

// // 4. Checkeo de tipos
// // TypeScript verifica los tipos en tiempo de compilación, lo que ayuda a detectar errores antes de ejecutar el código.

// // 5. Tipos básicos

// // Boolean
// let esActivo: boolean = true;
// console.log(esActivo); // Imprime: true

// // Number
// let edad: number = 30;
// console.log(edad); // Imprime: 30

// // String
// let nombre: string = "Juan";
// console.log(nombre); // Imprime: Juan

// // Arrays de números
// let numeros: number[] = [1, 2, 3, 4, 5];
// console.log(numeros); // Imprime: [1, 2, 3, 4, 5]

// // Arrays de strings
// let nombres: string[] = ["Ana", "Luis", "Carlos"];
// console.log(nombres); // Imprime: ["Ana", "Luis", "Carlos"]

// // Tipos mixtos
// let mezcla: (number | string)[] = [1, "dos", 3, "cuatro"];
// console.log(mezcla); // Imprime: [1, "dos", 3, "cuatro"]

// // 6. Enumerados y alias
// // Enumerados permiten definir un conjunto de valores con nombre.

// enum Color {
//     Rojo = "Rojo",
//     Verde = "Verde",
//     Azul = "Azul"
// }

// let colorFavorito: Color = Color.Rojo;
// console.log(colorFavorito); // Imprime: Rojo

// // Alias para tipos
// type ID = number | string;
// let idUsuario: ID = 123;
// console.log(idUsuario); // Imprime: 123
// idUsuario = "ABC123";
// console.log(idUsuario); // Imprime: ABC123

// // 7. Null y Undefined
// // Null y Undefined son tipos que representan la ausencia de valor.

// let variableNula: null = null;
// console.log(variableNula); // Imprime: null

// let variableIndefinida: undefined = undefined;
// console.log(variableIndefinida); // Imprime: undefined

// // 8. Tipar con object
// // Tipar con object no es recomendable porque no proporciona información detallada sobre la estructura del objeto.

// let persona: object = { nombre: "Juan", edad: 30 };
// console.log(persona); // Imprime: { nombre: "Juan", edad: 30 }

// // Mejor usar una interfaz o un tipo específico
// interface Persona {
//     nombre: string;
//     edad: number;
// }

// let persona2: Persona = { nombre: "Ana", edad: 25 };
// console.log(persona2); // Imprime: { nombre: "Ana", edad: 25 }

// // 9. Void y Never
// // Void indica que una función no devuelve ningún valor.

// function saludar(): void {
//     console.log("Hola");
// }
// saludar(); // Imprime: Hola

// // Never indica que una función nunca retorna (por ejemplo, lanza una excepción o entra en un bucle infinito).

// function error(mensaje: string): never {
//     throw new Error(mensaje);
// }

// // 10. Any
// // Any permite asignar cualquier tipo de valor a una variable. Es potente pero debe usarse con cuidado porque desactiva el chequeo de tipos.

// let variable: any = 123;
// console.log(variable); // Imprime: 123
// variable = "Hola";
// console.log(variable); // Imprime: Hola
// variable = true;
// console.log(variable); // Imprime: true

// // 11. Diferencias entre TypeScript y JavaScript
// // TypeScript añade tipado estático y otras características avanzadas a JavaScript.
// // Los archivos TypeScript tienen la extensión .ts, mientras que los archivos JavaScript tienen la extensión .js.

// // 12. Aseveración de tipos
// // La aseveración de tipos permite indicar a TypeScript que trate una variable como un tipo específico.

// let valor: any = "Esto es un string";
// let longitud: number = (valor as string).length;
// console.log(longitud); // Imprime: 16

// // Resumen de lo más importante

// // 1. TypeScript es un superconjunto de JavaScript que añade tipado estático.
// // 2. Tipar variables ayuda a detectar errores en tiempo de compilación y mejora la autocompletación.
// // 3. Tipos básicos: boolean, number, string, arrays, tipos mixtos.
// // 4. Enumerados y alias permiten definir conjuntos de valores con nombre y tipos personalizados.
// // 5. Null y Undefined representan la ausencia de valor.
// // 6. Tipar con object no es recomendable; mejor usar interfaces o tipos específicos.
// // 7. Void indica que una función no devuelve valor; Never indica que una función nunca retorna.
// // 8. Any permite asignar cualquier tipo de valor, pero debe usarse con cuidado.
// // 9. TypeScript añade tipado estático y otras características avanzadas a JavaScript.
// // 10. La aseveración de tipos permite indicar a TypeScript que trate una variable como un tipo específico.

// // Buenas Prácticas y Tips Profesionales

// // 1. Usar tipado estático siempre que sea posible para detectar errores en tiempo de compilación.
// // 2. Definir interfaces y tipos específicos en lugar de usar object o any.
// // 3. Usar enumerados y alias para mejorar la legibilidad y mantenibilidad del código.
// // 4. Documentar el código y los tipos para mejorar la comprensión de otros desarrolladores.
// // 5. Evitar el uso excesivo de any para mantener el chequeo de tipos.
// // 6. Usar aseveración de tipos solo cuando sea necesario y con precaución.