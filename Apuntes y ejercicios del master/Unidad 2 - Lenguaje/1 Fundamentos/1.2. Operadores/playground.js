
// 1. Operadores Aritméticos

var num = 3; 
console.log(num++); // 3 (post-incremento)
console.log(num--); // 0 (post-decremento)
console.log(++num); // 25 (pre-incremento)
console.log(--num); // 1 (pre-decremento) 

// 2. Operadores de Comparación

console.log(1 > 0); // true
console.log(1 < 0); // false
console.log(1 >= 1); // true
console.log(1 <= 1); // true

// 3. Operadores de Igualdad

console.log(1 == 1); // true
console.log(1 === 1); // true --> Desigualdad estricta
console.log(1 != 1); // false
console.log(1 !== 1); // false 
console.log(1 != '1'); // false
console.log(1 !== '1'); // true

// 4. Operadores Lógicos

// AND (&&)
console.log(true && true); // true 
console.log(true && false); // false
console.log(false && false); // false
conssole.log(false && true); // false

// OR (||)
console.log(true || true); // true
console.log(true || false); // true   
console.log(false || false); // false
console.log(false || true); // true

var a = 3 || 20; // 3
console.log(a); // 3

// type casting (coerción de tipos) definición: es la conversión automática o implícita de valores de un tipo de dato a otro
console.log('1' == 1); // true por qué? porque el doble igual compara el valor, entonces '1' es un string y 1 es un número
console.log('1' === 1); // false por qué? porque el triple igual compara el tipo de dato y el valor, entonces '1' es un string y 1 es un número

// falsy values: valores que son considerados como falso en JavaScript porque son convertidos a false cuando se evalúan en un contexto booleano
var b = 0 || 20; // 20

console.log(b); // 20 Es decir, si el primer valor es falso, se toma el segundo valor

// 5. Operadores Bitwise
// los operadores bitwise son operadores que trabajan a nivel de bits. No son relevantes en frontend, 
// pero sí en backend porque se trabaja con datos binarios y se necesita hacer operaciones a nivel de bits

// Preguntas de autoaprendizaje

// 1. ¿Qué es un operador aritmético?
// Un operador aritmético es un operador que toma uno o más operandos y devuelve un valor numérico.
// Los operadores aritméticos son: +, -, *, /, %, ++, --.
// El operador + se utiliza para sumar dos operandos.
// El operador - se utiliza para restar dos operandos.
// El operador * se utiliza para multiplicar dos operandos.
// El operador / se utiliza para dividir dos operandos.
// El operador % se utiliza para obtener el resto de una división.
// El operador ++ se utiliza para incrementar un operando en 1.
// El operador -- se utiliza para decrementar un operando en 1.

// 2. ¿Qué es un operador de comparación?
// Un operador de comparación es un operador que compara dos valores y devuelve un valor booleano (true o false).
// Los operadores de comparación son: >, <, >=, <=.
// El operador > se utiliza para comprobar si un valor es mayor que otro.
// El operador < se utiliza para comprobar si un valor es menor que otro.
// El operador >= se utiliza para comprobar si un valor es mayor o igual que otro.
// El operador <= se utiliza para comprobar si un valor es menor o igual que otro.

// 3. ¿Qué es un operador de igualdad?
// Un operador de igualdad es un operador que compara dos valores y devuelve un valor booleano (true o false).
// Los operadores de igualdad son: ==, ===, !=, !==.
// El operador == se utiliza para comprobar si dos valores son iguales.
// El operador === se utiliza para comprobar si dos valores son iguales y del mismo tipo.
// El operador != se utiliza para comprobar si dos valores son diferentes.
// El operador !== se utiliza para comprobar si dos valores son diferentes o de diferente tipo.
// Recuerda que el operador === es más estricto que el operador ==.
// El operador == convierte los operandos si son de diferentes tipos antes de compararlos. 
// El operador === no convierte los operandos si son de diferentes tipos antes de compararlos.
// Por lo tanto, el operador === es más rápido y seguro que el operador ==. 
// Es una buena práctica de programación utilizar el operador === en lugar del operador ==.
// El operador !== es el opuesto del operador ===.
// El operador != es el opuesto del operador ==.
// Es una buena práctica de programación utilizar el operador !== en lugar del operador !=.
// Por ejemplo, 1 == '1' devuelve true, pero 1 === '1' devuelve false.
// Por ejemplo, 1 != '1' devuelve false, pero 1 !== '1' devuelve true.
// ¿Por qué? Porque el operador == convierte los operandos si son de diferentes tipos antes de compararlos,
// pero el operador === no convierte los operandos si son de diferentes tipos antes de compararlos.

// Consejos extra
// 1. Utiliza el operador === en lugar del operador ==.
// 2. Utiliza el operador !== en lugar del operador !=.
// 3. Utiliza el operador === para comparar valores y tipos de datos.
// 4. Utiliza el operador == solo si necesitas convertir los operandos si son de diferentes tipos antes de compararlos.
// 5. Utiliza el operador != solo si necesitas convertir los operandos si son de diferentes tipos antes de compararlos.
