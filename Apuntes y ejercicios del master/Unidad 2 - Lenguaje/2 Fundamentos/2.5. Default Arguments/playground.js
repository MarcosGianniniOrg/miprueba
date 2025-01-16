// Default Arguments en JavaScript

// 1. ¿Qué son los Default Arguments?
// Los Default Arguments (argumentos por defecto) permiten definir valores predeterminados para los parámetros de una función.
// Si no se proporciona un valor para un parámetro, se utilizará el valor por defecto.

function saludar(nombre = "Visitante") {
    console.log(`Hola, ${nombre}!`);
}

saludar(); // Imprime: Hola, Visitante!
saludar("Juan"); // Imprime: Hola, Juan!

// 2. Cómo se activan los Default Arguments
// Los Default Arguments se activan cuando no se proporciona un valor para el parámetro correspondiente o cuando se pasa `undefined`.

function sumar(a = 0, b = 0) {
    return a + b;
}

console.log(sumar()); // Imprime: 0
console.log(sumar(5)); // Imprime: 5
console.log(sumar(5, 10)); // Imprime: 15

// 3. Aplicaciones útiles de Default Arguments
// Los Default Arguments son útiles para evitar errores cuando no se proporcionan todos los argumentos necesarios.

function crearUsuario(nombre = "Anónimo", edad = 0, activo = true) {
    return {
        nombre,
        edad,
        activo
    };
}

console.log(crearUsuario()); // Imprime: { nombre: 'Anónimo', edad: 0, activo: true }
console.log(crearUsuario("Ana", 25)); // Imprime: { nombre: 'Ana', edad: 25, activo: true }

// 4. Uso de Default Arguments con Destructuring
// Puedes usar Default Arguments junto con destructuring para proporcionar valores por defecto a las propiedades de un objeto.

function mostrarInfo({ nombre = "Desconocido", edad = 0, casado = false } = {}) {
    console.log(`Nombre: ${nombre}, Edad: ${edad}, Casado: ${casado}`);
}

mostrarInfo(); // Imprime: Nombre: Desconocido, Edad: 0, Casado: false
mostrarInfo({ nombre: "Carlos", edad: 30 }); // Imprime: Nombre: Carlos, Edad: 30, Casado: false

// Tips y Buenas Prácticas

// 1. Usar Default Arguments para evitar errores cuando no se proporcionan todos los argumentos necesarios.
// 2. Mantener los valores por defecto simples y claros.
// 3. Usar Default Arguments junto con destructuring para proporcionar valores por defecto a las propiedades de un objeto.
// 4. Evitar el uso excesivo de Default Arguments si hace que el código sea más difícil de entender.
// 5. Documentar los valores por defecto en la definición de la función para mejorar la legibilidad del código.

// Ejemplo Completo
function configurarServidor({ host = "localhost", puerto = 8080, protocolo = "http" } = {}) {
    console.log(`Servidor configurado en ${protocolo}://${host}:${puerto}`);
}

configurarServidor(); // Imprime: Servidor configurado en http://localhost:8080
configurarServidor({ host: "127.0.0.1", puerto: 3000 }); // Imprime: Servidor configurado en http://127.0.0.1:3000

// Resumen de lo más importante

// 1. Los Default Arguments permiten definir valores predeterminados para los parámetros de una función.
// 2. Se activan cuando no se proporciona un valor para el parámetro correspondiente o cuando se pasa `undefined`.
// 3. Son útiles para evitar errores cuando no se proporcionan todos los argumentos necesarios.
// 4. Pueden usarse junto con destructuring para proporcionar valores por defecto a las propiedades de un objeto.
// 5. Mantener los valores por defecto simples y claros, y documentarlos en la definición de la función.