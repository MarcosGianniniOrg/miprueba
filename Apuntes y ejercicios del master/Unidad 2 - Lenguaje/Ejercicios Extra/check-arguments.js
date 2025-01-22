// Check Arguments
// Es muy habitual en javascript, al recibir argumentos de una función, querer asegurarnos de que no sean undefined o null. En este ejercicio debes convertir el código de abajo en algo equivalente pero más compacto y expresivo.
// TIP: Piensa en el operador ternario y también en el operador OR.
// TIP: Puedes suponer que input es siempre de tipo string, incluyendo null o undefined. Es decir, no vas a recibir números, objetos, etc.

function f(input) { // Función que recibe un argumento y devuelve el argumento si no es null ni undefined, o una cadena vacía en caso contrario.
    return input === null ? "" : (input === undefined ? "Unknown" : input) // Si el argumento es null, devolvemos una cadena vacía. Si el argumento es undefined, devolvemos "Unknown". En caso contrario, devolvemos el argumento.
}

// Ejemplos
console.log(f("Hola")); // "Hola"
console.log(f(null)); // ""

// Podríamos optimizar aún más el código usando Nulling Coalescing Operator (??) en lugar de OR (||) para que no devuelva "Unknown" si el argumento es undefined, sino que devuelva el argumento directamente.

function g(input) { // Función que recibe un argumento y devuelve el argumento si no es null ni undefined, o una cadena vacía en caso contrario.
    return input ?? ""; // Devolvemos el argumento si no es null ni undefined, o una cadena vacía en caso contrario.
}

// Ejemplos
console.log(g("Hola")); // "Hola"
console.log(g(null)); // ""
