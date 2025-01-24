// Crea una función que reciba una frase en formato string y devuelva la palabra más larga. 
// En caso de haber varias con longitud máxima que devuelva siempre la primera. 
// Ten en cuenta que consideramos una frase a aquello que esté separado por espacios.

// TIP: Consulta la documentación en MDN sobre los strings, verás que incorporan muchas funciones de utilidad para el manejo y manipulación de strings.

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/prototype

// function biggestWord(phrase) {
//     // Implementation here
//   }
  
//   // Ejemplo
//   console.log(biggestWord("Esta frase puede contener muchas palabras")); // "contener"
//   console.log(biggestWord("Ejercicios básicos de JavaScript")); // "Ejercicios"

// Solución:

function biggestWord(phrase) { // Función que recibe una frase y devuelve la palabra más larga
            let words = phrase.split(" "); // Definimos un array (por el método split) que contiene las palabras de la frase, en este caso separadas por espacios.
            let longestWord = ""; // Definimos una variable que contendrá la palabra más larga de la frase.

            for (let i = 0; i < words.length; i++) { // Usamos un bucle for para recorrer el array de palabras.
                if (words[i].length > longestWord.length) { // Si la longitud de la palabra actual es mayor que la longitud de la palabra más larga, entonces...
                    longestWord = words[i]; // La palabra más larga será la palabra actual.
                }                
            }
            return longestWord; // Devolvemos la palabra más larga.
} 

// Ejemplo
console.log("La palabra más larga de la frase: 'Esta frase puede contener muchas palabras' es: %c" + biggestWord("Esta frase puede contener muchas palabras"), "font-weight: bold; font-size: 18px;"); 
console.log("La palabra más larga de la frase: 'Ejercicios básicos de JavaScript' es: %c" + biggestWord("Ejercicios básicos de JavaScript"), "font-weight: bold; font-size: 18px;");