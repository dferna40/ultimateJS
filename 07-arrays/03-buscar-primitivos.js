const letras = ['a', 'b', 1, 'c', 'd', 1];

// Buscar el índice de 'c'
console.log(letras.indexOf('c')); // Imprime: 3

// Intentar buscar 'z'
console.log(letras.indexOf('z')); // Imprime: -1

// Buscar el último índice de 1
console.log(letras.lastIndexOf(1)); // Imprime: 5

// Verificar si 1 está en el array usando indexOf
console.log(letras.indexOf(1) !== -1); // Imprime: true

// Verificar si 'd' está en el array usando includes
console.log(letras.includes('d')); // Imprime: true