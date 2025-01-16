// Promises en JavaScript

// 1. Asincronía en JavaScript
// JavaScript es un lenguaje de programación asincrónico, lo que significa que puede realizar múltiples tareas al mismo tiempo sin bloquear la ejecución del código.

// Ejemplo de asincronía con setTimeout:
console.log("Inicio");
setTimeout(() => {
    console.log("Tarea asincrónica");
}, 1000);
console.log("Fin");
// Imprime:
// Inicio
// Fin
// Tarea asincrónica

// 2. Callbacks
// Un callback es una función que se pasa como argumento a otra función y se ejecuta después de que se complete una operación asincrónica.

function tareaAsincronica(callback) {
    setTimeout(() => {
        console.log("Tarea completada");
        callback();
    }, 1000);
}

tareaAsincronica(() => {
    console.log("Callback ejecutado");
});
// Imprime:
// Tarea completada
// Callback ejecutado

// 3. Promesas
// Una promesa es un objeto que representa la eventual finalización (o falla) de una operación asincrónica y su valor resultante.

const promesa = new Promise((resolve, reject) => {
    const exito = true; // Cambia esto a false para ver el rechazo
    setTimeout(() => {
        if (exito) {
            resolve("Operación exitosa");
        } else {
            reject("Operación fallida");
        }
    }, 1000);
});

promesa
    .then((resultado) => {
        console.log(resultado); // Imprime: Operación exitosa
    })
    .catch((error) => {
        console.error(error); // Imprime: Operación fallida
    });

// 4. Estados de las Promesas
// Las promesas tienen tres estados:
// - Pendiente (pending): La operación aún no se ha completado.
// - Cumplida (fulfilled): La operación se completó con éxito.
// - Rechazada (rejected): La operación falló.

// 5. Fetch API
// La Fetch API proporciona una forma fácil y lógica de obtener recursos de forma asincrónica por la red.

fetch('https://jsonplaceholder.typicode.com/posts/1')
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error('Error:', error));

// 6. Métodos de Promesas: then y catch
// - then: Se ejecuta cuando la promesa se cumple.
// - catch: Se ejecuta cuando la promesa es rechazada.

const promesa2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Promesa cumplida");
    }, 1000);
});

promesa2
    .then((resultado) => {
        console.log(resultado); // Imprime: Promesa cumplida
    })
    .catch((error) => {
        console.error(error);
    });

// 7. Encadenado de Promesas
// Las promesas pueden encadenarse para realizar múltiples operaciones asincrónicas en secuencia.

const promesa3 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(1);
    }, 1000);
});

promesa3
    .then((resultado) => {
        console.log(resultado); // Imprime: 1
        return resultado + 1;
    })
    .then((resultado) => {
        console.log(resultado); // Imprime: 2
        return resultado + 1;
    })
    .then((resultado) => {
        console.log(resultado); // Imprime: 3
    })
    .catch((error) => {
        console.error(error);
    });

// 8. Cómo usar y crear Promesas
// Para usar una promesa, se crea una instancia de Promise y se pasa una función que recibe dos parámetros: resolve y reject.

function tareaConPromesa() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const exito = true; // Cambia esto a false para ver el rechazo
            if (exito) {
                resolve("Tarea completada con éxito");
            } else {
                reject("Tarea fallida");
            }
        }, 1000);
    });
}

tareaConPromesa()
    .then((resultado) => {
        console.log(resultado); // Imprime: Tarea completada con éxito
    })
    .catch((error) => {
        console.error(error); // Imprime: Tarea fallida
    });

// Buenas Prácticas

// 1. Usar promesas para manejar operaciones asincrónicas en lugar de callbacks anidados (callback hell).
// 2. Encadenar promesas para realizar múltiples operaciones asincrónicas en secuencia.
// 3. Manejar errores con catch para evitar que errores no controlados rompan el flujo del programa.
// 4. Usar async/await para escribir código asincrónico de manera más legible (cuando sea posible).
// 5. Documentar el uso de promesas en el código para mejorar la comprensión de otros desarrolladores.

// Ejemplo Completo
function obtenerDatos() {
    return fetch('https://jsonplaceholder.typicode.com/posts/1')
        .then(response => {
            if (!response.ok) {
                throw new Error('Error en la solicitud');
            }
            return response.json();
        });
}

obtenerDatos()
    .then(data => {
        console.log('Datos obtenidos:', data);
    })
    .catch(error => {
        console.error('Error:', error);
    });

// Resumen de lo más importante

// 1. JavaScript es asincrónico y puede realizar múltiples tareas al mismo tiempo.
// 2. Los callbacks son funciones que se ejecutan después de una operación asincrónica.
// 3. Las promesas representan la eventual finalización (o falla) de una operación asincrónica.
// 4. Las promesas tienen tres estados: pendiente, cumplida y rechazada.
// 5. La Fetch API se usa para obtener recursos de forma asincrónica por la red.
// 6. Los métodos then y catch se usan para manejar el resultado de una promesa.
// 7. Las promesas pueden encadenarse para realizar múltiples operaciones asincrónicas en secuencia.
// 8. Usar promesas para manejar operaciones asincrónicas en lugar de callbacks anidados.