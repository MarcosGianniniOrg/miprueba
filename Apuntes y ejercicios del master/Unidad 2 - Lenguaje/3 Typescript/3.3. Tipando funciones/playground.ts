// // Tipando funciones
// // TypeScript permite tipar los parámetros y el valor de retorno de las funciones.

// // 1. Tipar parámetros y valor de retorno
// // Para tipar una función, se especifican los tipos de los parámetros y el tipo del valor de retorno.

// function sumar(a: number, b: number): number {
//     // Esta función suma dos números y devuelve el resultado.
//     return a + b;
// }

// const resultado = sumar(5, 3); // Llamamos a la función sumar con los números 5 y 3.
// console.log(resultado); // Imprime: 8

// // 2. Funciones con parámetros opcionales
// // Los parámetros opcionales se indican con un signo de interrogación (?).

// function saludar(nombre: string, saludo?: string): string {
//     // Esta función saluda a una persona. Si no se proporciona un saludo, usa "Hola".
//     if (saludo) {
//         return `${saludo}, ${nombre}!`; // Si hay un saludo, lo usa.
//     } else {
//         return `Hola, ${nombre}!`; // Si no hay saludo, usa "Hola".
//     }
// }

// console.log(saludar("Juan")); // Imprime: Hola, Juan!
// console.log(saludar("Juan", "Buenos días")); // Imprime: Buenos días, Juan!

// // 3. Funciones con parámetros por defecto
// // Los parámetros por defecto se indican asignando un valor por defecto en la declaración de la función.

// function multiplicar(a: number, b: number = 2): number {
//     // Esta función multiplica dos números. Si no se proporciona el segundo número, usa 2.
//     return a * b;
// }

// console.log(multiplicar(5)); // Imprime: 10 (5 * 2)
// console.log(multiplicar(5, 3)); // Imprime: 15 (5 * 3)

// // 4. Funciones con rest parameters
// // Los rest parameters permiten pasar un número variable de argumentos a una función.

// function sumarTodos(...numeros: number[]): number {
//     // Esta función suma todos los números que se le pasan.
//     return numeros.reduce((acc, num) => acc + num, 0); // Suma todos los números en el array.
// }

// console.log(sumarTodos(1, 2, 3, 4, 5)); // Imprime: 15

// // 5. Tipar funciones anónimas
// // Las funciones anónimas también pueden ser tipadas.

// const dividir = function (a: number, b: number): number {
//     // Esta función divide dos números.
//     return a / b;
// };

// console.log(dividir(10, 2)); // Imprime: 5

// // 6. Tipar funciones flecha
// // Las funciones flecha también pueden ser tipadas.

// const restar = (a: number, b: number): number => {
//     // Esta función resta dos números.
//     return a - b;
// };

// console.log(restar(10, 3)); // Imprime: 7

// // 7. Alias para funciones
// // Puedes usar alias para definir tipos de funciones, lo que facilita la reutilización y la legibilidad del código.

// type Operacion = (a: number, b: number) => number; // Definimos un alias para una función que toma dos números y devuelve un número.

// const sumarAlias: Operacion = (a, b) => a + b; // Usamos el alias para definir una función de suma.
// const multiplicarAlias: Operacion = (a, b) => a * b; // Usamos el alias para definir una función de multiplicación.

// console.log(sumarAlias(5, 3)); // Imprime: 8
// console.log(multiplicarAlias(5, 3)); // Imprime: 15

// // Ejemplo adicional usando alias para funciones
// type Comparacion = (a: number, b: number) => boolean; // Definimos un alias para una función que compara dos números y devuelve un booleano.

// const esMayor: Comparacion = (a, b) => a > b; // Usamos el alias para definir una función que verifica si un número es mayor que otro.
// const esIgual: Comparacion = (a, b) => a === b; // Usamos el alias para definir una función que verifica si dos números son iguales.

// console.log(esMayor(10, 5)); // Imprime: true
// console.log(esIgual(10, 10)); // Imprime: true

// // 8. Sobrecargas de funciones
// // TypeScript permite definir múltiples firmas para una función, lo que se conoce como sobrecarga de funciones.

// function combinar(a: string, b: string): string; // Firma para combinar dos strings.
// function combinar(a: number, b: number): number; // Firma para combinar dos números.
// function combinar(a: any, b: any): any {
//     // Implementación de la función combinar. Puede recibir strings o números.
//     if (typeof a === "string" && typeof b === "string") { // Si ambos son strings:
//         return a + b; // los concatena.
//     }
//     if (typeof a === "number" && typeof b === "number") { 
//         return a + b; // Si ambos son números, los suma.
//     }
// }

// console.log(combinar("Hola, ", "mundo!")); // Imprime: Hola, mundo!
// console.log(combinar(10, 20)); // Imprime: 30

// // Resumen de lo más importante

// // 1. Para tipar una función, se especifican los tipos de los parámetros y el tipo del valor de retorno.
// // 2. Los parámetros opcionales se indican con un signo de interrogación (?).
// // 3. Los parámetros por defecto se indican asignando un valor por defecto en la declaración de la función.
// // 4. Los rest parameters permiten pasar un número variable de argumentos a una función.
// // 5. Las funciones anónimas y las funciones flecha también pueden ser tipadas.
// // 6. Los alias para funciones facilitan la reutilización y la legibilidad del código.
// // 7. TypeScript permite definir múltiples firmas para una función, lo que se conoce como sobrecarga de funciones.