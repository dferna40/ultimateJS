// En esta clase vamos a aprender a usar el operador spread para combinar y dividir arrays que es mas facil de leer y tambien es mas flexible es una funcionalidad nueva de ES6 de 2015.
let arr1 = [1, 2];
let arr2 = [5, 6];

// Esto lo que hace es coger todos los elementos de arr1 y arr2 y los mete en un nuevo array
let arr3 = [...arr1];
console.log(arr3); // [1, 2]
// De esta misma forma puedo ademas añadir elementos
let arr4 = [...arr1, 3, 4];
console.log(arr4); // [1, 2, 3, 4]
// Tambien puedo añadir elementos al principio
let arr5 = [0, ...arr1];
console.log(arr5); // [0, 1, 2]

// Tambien puedo combinar dos arrays o mas arrays
let arr6 = [...arr1, 3, 4, ...arr2];
console.log(arr6); // [1, 2, 3, 4, 5, 6]

// Tambien puedo generar una copia de un array
let arr7 = [...arr4];
arr4.pop();
console.log(arr4,arr7);  // [1, 2, 3] [1, 2, 3, 4]
