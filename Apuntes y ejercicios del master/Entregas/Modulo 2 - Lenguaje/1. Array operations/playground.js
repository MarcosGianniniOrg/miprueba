// Head

// Implementa una función head (inmutable), tal que, dado un array como entrada extraiga y devuelva su primer elemento. Utiliza destructuring.
// const head = (/* array */) => {}; // Implementation here.

const head = ([first]) => first; // declaro head como una funcion que recibe un array (first) y devuelve el primer elemento de ese array
console.log(head([1, 2, 3, 4, 5])); // result: 1

// Tail

// Implementa una función tail (inmutable), tal que, dado un array como entrada devuelta todos menos el primer elemento. Utiliza rest operator.
// const tail = (/* array */) => {}; // Implementation here.

const tail = ([ ,...rest]) => rest; // declaro tail como una funcion que recibe un array y devuelve todos los elementos menos el primero
console.log(tail([1, 2, 3, 4, 5])); // result: [2, 3, 4, 5]


// Init

// Implementa una función init (inmutable), tal que, dado un array como entrada devuelva todos los elementos menos el último. 
// Utiliza los métodos que ofrece Array.prototype.

// const init = (/* array */) => {}; // Implementation here.

const init = (arr) => arr.slice(0, -1); 
console.log(init([1, 2, 3, 4, 5])); // result: [1, 2, 3, 4]

// Last

// Implementa una función last (inmutable), tal que, dado un array como entrada devuelva el último elemento.
// const last = (/* array */) => {}; // Implementation here.

const last = (arr) => arr.at(-1);
console.log(last([1, 2, 3, 4, 5])); // result: 5