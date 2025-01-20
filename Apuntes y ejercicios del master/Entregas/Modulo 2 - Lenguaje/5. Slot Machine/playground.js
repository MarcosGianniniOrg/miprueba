// El objetivo de este ejercicio es crear una máquina tragaperras utilizando clases donde cada vez que juguemos insertemos una moneda.
// Cada máquina tragaperras (instancia) tendrá un contador de monedas que automáticamente se irá incrementando conforme vayamos jugando.
// Cuando se llame al método play el número de monedas se debe incrementar de forma automática y 
// debe generar tres booleanos aleatorios que representarán el estado de las 3 ruletas. 
// El usuario habrá ganado en caso de que los tres booleanos sean true,
//  y por tanto deberá mostrarse por consola el mensaje:

// "Congratulations!!!. You won <número de monedas> coins!!";

// y reiniciar las monedas almacenadas, ya que las hemos conseguido y han salido de la máquina. En caso contrario deberá mostrar otro mensaje:

// "Good luck next time!!".

// Ejemplo de uso

// class SlotMachine {
//   /* ... */
// }

// const machine1 = new SlotMachine();
// machine1.play(); // "Good luck next time!!"
// machine1.play(); // "Good luck next time!!"
// machine1.play(); // "Congratulations!!!. You won 3 coins!!"
// machine1.play(); // "Good luck next time!!"
// machine1.play(); // "Congratulations!!!. You won 2 coins!!"

// Implementación:
class SlotMachine { // declaro la clase SlotMachine 
    constructor() { // declaro el constructor de la clase
        this.coins = 0; // declaro la propiedad coins con valor 0 
    } 

    play() { // declaro el metodo play de la clase
        this.coins++; // incremento la propiedad coins en 1
        const reels = Array.from({ length: 3 }, () => Math.random() >= 0.5); // Declaro la variable reels como un array de 3 elementos, 
        // llenado con valores aleatorios true o false según si el número aleatorio es mayor o igual a 0.5. 
        // ¿0.5 por qué? Porque es el punto medio entre 0 y 1, por lo que la probabilidad de que sea true o false es la misma.
        if (reels.every(reel => reel)) { // Compruebo si todos los valores del array reels son true usando el método every(), lo que significa que el usuario ha ganado.
            console.log(`Congratulations!!!. You won ${this.coins} coins!!`); // muestro por consola el mensaje con el numero de monedas ganadas
            this.coins = 0; // reinicio la propiedad coins a 0
        } else { // si no todos los elementos del array reels son true
            console.log("Good luck next time!!"); // muestro por consola el mensaje de buena suerte
        }
    }
}

const machine1 = new SlotMachine(); // declaro la variable machine1 como una nueva instancia de la clase SlotMachine
machine1.play(); // "Good luck next time!!"
machine1.play(); // "Good luck next time!!"
machine1.play(); // "Congratulations!!!. You won 3 coins!!"
machine1.play(); // "Good luck next time!!"
machine1.play(); // "Congratulations!!!. You won 2 coins!!"

