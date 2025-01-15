// Objetos 

// Los objetos son una colección de propiedades, y una propiedad es una asociación entre un nombre (o clave) y un valor.
// Un valor puede ser una función, que es entonces conocida como un método del objeto.
// En javascript, casi todo es un objeto. Los objetos son una de las características más importantes de javascript.
// Pueden ser objetos predefinidos, como Date, Math, JSON, etc., o objetos definidos por el usuario.

var myName = "Marcos";

var person = {
    name: "Marcos",
    age: 39,
};

// Acceso a propiedades de un objeto

// Se puede acceder a las propiedades de un objeto utilizando la notación de puntos o la notación de corchetes.
// La notación de puntos es la forma más común de acceder a las propiedades de un objeto.
// por ejemplo, person.name devuelve "Marcos".
// La notación de corchetes se utiliza cuando el nombre de la propiedad es una variable o una expresión.
// por ejemplo, person["name"] devuelve "Marcos".

console.log(person.name); // Marcos
console.log(person["name"]); // Marcos
console.log(person.age); // 39
console.log(person["age"]); // 39
console.log(person); // { name: 'Marcos', age: 39 }

// Modificación de propiedades de un objeto

// Se puede modificar una propiedad de un objeto asignando un nuevo valor a la propiedad.
// por ejemplo, person.name = "Juan" cambia el valor de la propiedad name a "Juan".

person.name = "Juan";
console.log(person.name); // Juan
 
// Eliminación de propiedades de un objeto

// Se puede eliminar una propiedad de un objeto utilizando el operador delete.
// por ejemplo, delete person.name elimina la propiedad name del objeto person.

delete person.name;
console.log(person.name); // undefined

// Qué es un anidamiento de objetos?

// El anidamiento de objetos es cuando un objeto contiene otro objeto como propiedad.
// por ejemplo, var person = { name: "Marcos", address: { city: "Madrid", country: "Spain" } };.
// En este caso, el objeto person contiene otro objeto address como propiedad.
// ¿Cómo puedo ver un objeto dentro de otro objeto?
// Se puede ver un objeto dentro de otro objeto utilizando la notación de puntos o la notación de corchetes.  
// por ejemplo, en el ejemplo anterior: var person = { name: "Marcos", address: { city: "Madrid", country: "Spain" } };
// person.address.city devuelve "Madrid" y person["address"]["country"] devuelve "Spain".
// person es el objeto principal y address es el objeto anidado. En este caso address se anida con la notación de corchetes a la clase person.

var person = {
    name: "Marcos",
    address: {
        city: "Madrid",
        country: "Spain",
    },
};  

console.log(person.address.city); // Madrid

// Creación de objetos

// Se puede crear un objeto utilizando la sintaxis de llaves {}.
// por ejemplo, var person = { name: "Marcos", age: 39 }; crea un objeto person con las propiedades name y age.
// Se puede crear un objeto vacío utilizando la sintaxis de llaves {}.
// por ejemplo, var person = {}; crea un objeto vacío person.

var person = {
    name: "Marcos",
    age: 39,
};

var emptyObject = {};

// Creación de objetos con el constructor Object

// Se puede crear un objeto utilizando el constructor Object.
// por ejemplo, var person = new Object(); crea un objeto person vacío.
// Se pueden añadir propiedades a un objeto utilizando la notación de puntos o la notación de corchetes.
// por ejemplo, person.name = "Marcos" añade la propiedad name al objeto person.

var person = new Object();
person.name = "Marcos";
person.age = 39;

// Creación de objetos con el constructor Object y la sintaxis de llaves

// Se puede crear un objeto utilizando el constructor Object y la sintaxis de llaves {}.
// por ejemplo, var person = new Object({ name: "Marcos", age: 39 }); crea un objeto person con las propiedades name y age.

var person = new Object({ name: "Marcos", age: 39 });

// Comparación de objetos

// Los objetos se comparan por referencia, no por valor.
// Esto significa que dos objetos son iguales si y solo si son la misma instancia de objeto.
// por ejemplo, var person1 = { name: "Marcos" }; var person2 = { name: "Marcos" }; person1 === person2 devuelve false.
// Esto se debe a que person1 y person2 son dos instancias diferentes del objeto. ¿Esto qué significa? 
// Un ejemplo para niños de la palabra INSTANCIAS es el siguiente: 
// Si tienes un coche, y tu amigo tiene un coche, ambos tienen un coche, pero no es el mismo coche.
// ¿Cómo puedo comparar dos objetos?
// Se puede comparar dos objetos utilizando el operador ===.
// por ejemplo, person1 === person2 compara si person1 y person2 son la misma instancia de objeto.

var person1 = { name: "Marcos" };
var person2 = { name: "Marcos" };

console.log(person1 === person2); // false

// Consejos extra

// 1. Utiliza la notación de puntos para:
// - Acceder a las propiedades de un objeto.
// - Modificar las propiedades de un objeto.

// 2. Utiliza la notación de corchetes cuando:
// - El nombre de la propiedad es una variable o una expresión.
// - Quieres acceder a una propiedad cuyo nombre contiene espacios o caracteres especiales.

// 3. Utiliza el operador delete para eliminar propiedades de un objeto.

// 4. Utiliza objetos para agrupar datos relacionados y funciones.

// 5. Utiliza objetos predefinidos, como Date, Math, JSON, etc., para realizar tareas comunes.

// 6. Utiliza objetos definidos por el usuario para modelar entidades del mundo real.