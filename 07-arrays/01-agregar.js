// Definimos un array inicial con dos elementos
const letras = ['a', 'b'];

// agregar al final de un array
// El método push() añade uno o más elementos al final de un array y devuelve la nueva longitud del array.
letras.push('c', 'd');

// agregar al principio del un array
// El método unshift() añade uno o más elementos al inicio de un array y devuelve la nueva longitud del array.
letras.unshift('y', 'z');

// agregar elemento en medio del array
// El método splice() cambia el contenido de un array eliminando elementos existentes y/o agregando nuevos elementos.
// En este caso, no eliminamos ningún elemento (el segundo parámetro es 0) y añadimos los elementos 1 y 2 en la posición 3.
letras.splice(3, 0, 1, 2);

// Imprimimos el array resultante en la consola
console.log(letras); // Salida esperada: ['y', 'z', 'a', '1', '2', 'b', 'c', 'd']