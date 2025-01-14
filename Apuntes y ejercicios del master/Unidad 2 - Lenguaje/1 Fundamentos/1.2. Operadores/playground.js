
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




