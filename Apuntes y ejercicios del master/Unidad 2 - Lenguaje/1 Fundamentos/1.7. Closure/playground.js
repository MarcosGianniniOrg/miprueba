// CLOSURE EXPLANATION
// Un closure (clausura) permite que una función interna tenga acceso al ámbito
// de una función externa, incluso después de que la función externa haya terminado
// de ejecutarse. Es como una "mochila" de variables que la función interna 
// lleva consigo.

// USOS COMUNES DE CLOSURES:
// 1. Encapsulación de datos (datos privados)
// 2. Mantener estado entre llamadas a funciones
// 3. Crear funciones factory (fábricas de funciones)

function createCounter() {
    // Esta variable 'i' es privada y solo accesible mediante el closure
    // No puede ser modificada desde fuera de la función
    let i = 0;

    // Retornamos un objeto con varias funciones que forman un closure
    // Estas funciones internas "recuerdan" la variable 'i' incluso después
    // de que createCounter() haya terminado su ejecución
    return {
        increase: function() {
            i++;
        },
        decrease: function() {
            i--;
        },
        print: function() {
            console.log("El valor de 'i' es: " + i);
        }
    }
}

// Creamos una nueva instancia del contador
// counter ahora contiene las funciones internas que tienen acceso a su propia
// copia privada de la variable 'i'
var counter = createCounter();
counter.increase();
counter.print(); // Imprime: 1
counter.decrease();
counter.print(); // Imprime: 0

// BUENAS PRÁCTICAS CON CLOSURES
// 1. Nombrar claramente las funciones y variables para mejorar la legibilidad.
// 2. Evitar anidar demasiadas funciones internas para no complicar el código.
// 3. Usar closures para encapsular datos que no deberían ser accesibles desde fuera.
// 4. Documentar el comportamiento de las funciones que utilizan closures.

// CUÁNDO USAR CLOSURES
// 1. Cuando necesitas mantener un estado privado entre llamadas a funciones.
// 2. Para crear funciones factory que generen otras funciones con comportamiento personalizado.
// 3. Para evitar el uso de variables globales y reducir el riesgo de colisiones de nombres.
// 4. En la implementación de patrones de diseño como el módulo.

// CUÁNDO NO USAR CLOSURES
// 1. Cuando el código se vuelve demasiado complejo y difícil de entender.
// 2. Si el uso de closures introduce problemas de rendimiento debido a la retención de memoria.
// 3. Cuando una solución más simple (como el uso de clases o módulos) es suficiente.
// 4. Si no se necesita mantener estado entre llamadas a funciones o encapsular datos.

// Sin azúcar sintáctico: usando funciones tradicionales
function add(a, b) {
    return a + b;
}

// Con azúcar sintáctico: usando funciones flecha (arrow functions)
const add = (a, b) => a + b;

// Ambos ejemplos hacen lo mismo: sumar dos números y devolver el resultado
// La segunda forma (con funciones flecha) es más concisa y fácil de leer