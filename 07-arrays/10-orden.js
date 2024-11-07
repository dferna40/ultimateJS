// En esta clase vamos a aprender a ordenar un array de strings y de números.


// Ordenar un array de números
let numeros = [15, 10, -3];
// 1. Usando el método sort

// Orden de menor a mayor
numeros.sort();

console.log(numeros); // [-3, 10, 15]

// Orden de mayor a menor
numeros.reverse();

console.log(numeros); // [15, 10, -3]

// Ordenar un array de strings
let letras = ['b', 'z', 'a'];

// Orden de menor a mayor
letras.sort();

console.log(letras); // ['a', 'b', 'z']

// Orden de mayor a menor
letras.reverse();

console.log(letras); // ['z', 'b', 'a']

// Sin embargo ahora vamos a ver el ordenamiento de un array con una de las letras en mayuscula
let conMayusculas = ['Z', 'b', 'a'];

conMayusculas.sort((a, b) => {
    /**
     * a antes que b => -1
     * b antes que a => 1
     * a igual que b => 0
     */
    let alower = a.toLowerCase();
    let blower = b.toLowerCase();

    if (alower < blower) {
        return -1;
    }  if (alower > blower) {
        return 1;
    } 
    return 0;
});

console.log(conMayusculas); // ['a', 'b', 'Z']

// Ordenar un array de objetos
let usuarios = [
    {nombre: 'David', edad: 35},
    {nombre: 'Pepe', edad: 25},
    {nombre: 'Ana', edad: 30}
];

usuarios.sort((a, b) => {
    if (a.edad < b.edad) {
        return -1;
    }  if (a.edad > b.edad) {
        return 1;
    } 
    return 0;
});

console.log(usuarios); // [{nombre: 'Pepe', edad: 25}, {nombre: 'Ana', edad: 30}, {nombre: 'David', edad: 35}]