// En esta clase vamos a aprender a unir todos los elementos de un array en un string y tambien a dividir un string en un array usando el método join.

// Forma de unir todos los elementos de un array en un string
let arr1 = ['David', 'Pepe', 'Ana'];

let mensaje = arr1.join(', ');

console.log(mensaje); // David, Pepe, Ana

// Forma de dividir un string en un array
let saludo = 'Hola soy David';

let dividido = saludo.split(' ');

console.log(dividido); // ['Hola', 'soy', 'David']

// Ahora para hacer un caso practivo vamos a convertir el string 'Hola soy David' en 'hola-soy-david' para por ejemplo usarlo en una url
console.log(dividido.join('-').toLowerCase()); // hola-soy-david
