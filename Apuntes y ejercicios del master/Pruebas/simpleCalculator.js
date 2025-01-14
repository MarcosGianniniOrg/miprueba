function simpleCalculator(number1, number2, operation) {
    let result;
    if (operation === 'add') {
        result = number1 + number2;
    } else if (operation === 'subtract') {
        result = number1 - number2;
    } else if (operation === 'multiply') {
        result = number1 * number2;
    } else if (operation === 'divide') {
        // Cambio hecho aquí: Usando !== en lugar de != para comprobar también el tipo
        if (number2 !== 0) {
            result = number1 / number2;
        } else {
            // Añadido manejo de división por cero
            result = "No se puede dividir por cero";
        }
    }

    return result;
}

console.log(simpleCalculator(10, 5, 'add')); // Esperado: 15
console.log(simpleCalculator(10, 5, 'subtract')); // Esperado: 5
console.log(simpleCalculator(10, 5, 'multiply')); // Esperado: 50
console.log(simpleCalculator(10, 0, 'divide')); // Esperado: "No se puede dividir por cero"