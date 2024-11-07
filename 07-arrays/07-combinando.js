// En esta clase vamos a aprender a combinar dos arrays en uno solo y tambien a dividir un array en dos.
let arr1 = [1, 2];
let arr2 = [3, 4];

// Combinar dos arrays
// 1. Usando el método concat
let combinados = arr1.concat(arr2);

console.log(combinados, arr1, arr2); // [1, 2, 3, 4] [1, 2] [3, 4]

// Dividir un array
// 1. Usando el método slice (el metodo slice no modifica el array original y los parametros que recibe son los indices de inicio y fin)
let divididos = combinados.slice(1, 3); // [2, 3]

console.log(divididos); // [2, 3]

// 2. Usando el metodo slice pero sin pasarle el segundo parametro lo que hara que tome todos los elementos a partir del indice que le pasamos
let divididos2 = combinados.slice(1); // [2, 3, 4]

console.log(divididos2); // [2, 3, 4]

// 3. Usando el metodo slice pero sin pasarle ningun argumento lo que hara que tome todos los elementos y lo que hace es una copia del array original y es una copia por referencia, sin ebargo si tiene un objeto dentro del array, ese objeto si se modifica en la copia
let copia = combinados.slice(); // [1, 2, 3, 4]
console.log(copia); // [1, 2, 3, 4]


