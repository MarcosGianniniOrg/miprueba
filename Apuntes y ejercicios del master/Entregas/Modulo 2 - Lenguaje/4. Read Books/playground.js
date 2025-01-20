// Crea una función isBookRead que reciba una lista de libros y un título y devuelva si se ha leído o no dicho libro. 
// Un libro es un objeto con title como string y isRead como booleano. En caso de no existir el libro devolver false TIP:
//  Existe un método de Array.prototype que te ayudará a buscar según un patrón.

// function isBookRead(books, titleToSearch) {
//   // Implementation here
// }

// Ejemplo

// const books = [
//   { title: "Harry Potter y la piedra filosofal", isRead: true },
//   { title: "Canción de hielo y fuego", isRead: false },
//   { title: "Devastación", isRead: true },
// ];

// console.log(isBookRead(books, "Devastación")); // true
// console.log(isBookRead(books, "Canción de hielo y fuego")); // false
// console.log(isBookRead(books, "Los Pilares de la Tierra")); // false

// Opcional

// // Utiliza Typescript para añadir los tipos adecuados.

// Creación funciones:
const isBookRead = (books, title) => // // Creamos la función flecha isBookRead con dos parámetros: una lista de libros y un título a buscar.
    books.find(book => book.title === title)?.isRead ?? false; // Usamos find para buscar el libro por su título.
    // Si el libro existe, devolvemos la propiedad isRead; de lo contrario, devolvemos false.

// Creación objetos: 
const books = [ //
    { title: "Harry Potter y la piedra filosofal", isRead: true },
    { title: "Canción de hielo y fuego", isRead: false },
    { title: "Devastación", isRead: true }
]

// Probamos la función:
console.log(isBookRead(books, "Devastación")); // true (el libro existe y está leído)
console.log(isBookRead(books, "Canción de hielo y fuego")); // false (el libro existe pero no está leído)
console.log(isBookRead(books, "Los Pilares de la Tierra")); // false (el libro no existe)
console.log(isBookRead(books, "Harry Potter y la piedra filosofal")); // true
console.log(isBookRead([], "Devastación")); // false (lista vacía, el libro no existe)

// Utiliza Typescript para añadir los tipos adecuados.

// // Creación de tipos:
// type Book = { title: string, isRead: boolean }; // Creamos el tipo Book con dos propiedades: title (string) e isRead (boolean).
// type Books = Book[]; // Creamos el tipo Books que es un array de libros.

// // Creación de la función con tipos:
// const isBookRead = (books: Books, title: string): boolean => // Creamos la función isBookRead con los tipos adecuados.
//     books.find(book => book.title === title)?.isRead ?? false; // Usamos find para buscar el libro por su título.
//     // Si el libro existe, devolvemos la propiedad isRead; de lo contrario, devolvemos false.

// // Probamos la función:

// const books: Books = [ // Creamos un array de libros con los tipos adecuados.
//     { title: "Harry Potter y la piedra filosofal", isRead: true },
//     { title: "Canción de hielo y fuego", isRead: false },
//     { title: "Devastación", isRead: true }
// ]

// console.log(isBookRead(books, "Devastación")); // true (el libro existe y está leído)
// console.log(isBookRead(books, "Canción de hielo y fuego")); // false (el libro existe pero no está leído)
// console.log(isBookRead(books, "Los Pilares de la Tierra")); // false (el libro no existe)
// console.log(isBookRead(books, "Harry Potter y la piedra filosofal")); // true
// console.log(isBookRead([], "Devastación")); // false (lista vacía, el libro no existe)
