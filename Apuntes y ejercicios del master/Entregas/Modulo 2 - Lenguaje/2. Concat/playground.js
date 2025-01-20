// Implementa una función concat (inmutable) tal que, dados 2 arrays como entrada,
// devuelva la concatenación de ambos. Utiliza rest / spread operators.

// const concat = (a, b) => {}; // Implementation here.

const concat = (a, b) => [...a, ...b]; // declaro concat como una funcion que recibe dos arrays y devuelve la concatenacion de ambos
console.log(concat([1, 2, 3], [4, 5, 6])); // result: [1, 2, 3, 4, 5, 6]

// Opcional

// Implementa una nueva versión de concat donde se acepten múltiples arrays de entrada (más de 2). No utilices el método Array.prototype.concat.

const concatMultiple = (...arrays) => arrays.reduce((acc, arr) => [...acc, ...arr], []); // declaro concatMultiple como una funcion 
// que recibe un numero indeterminado de arrays y devuelve la concatenacion de todos ellos
console.log(concatMultiple([1, 2], [3, 4], [5, 6])); // result: [1, 2, 3, 4, 5, 6]