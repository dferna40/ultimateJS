const usuarios = [
    { id: 1, name: 'David'},
    { id: 3, name: 'Pepe'},
    { id: 2, name: 'Paco'},
];

// Buscar un usuario por su nombre
// El tipo de funciones como es find al que le tenemos que pasar una función como argumento se llaman funciones predicate, predicate significa predicado, es decir, una función que devuelve un valor booleano, true o false.
const resultado = usuarios.find(function(usuario){
     return usuario.name === 'Pepe';    
});

// Forma mas corta de escribir la función anterior con fat arrow function
// const resultado = usuarios.find(usuario => usuario.name === 'Pepe');

// En caso de que no necesitemos el elemento si no solo el índice, podemos hacerlo de la siguiente manera
// const resultado = usuarios.findIndex(usuario => usuario.name === 'Pepe');

console.log(resultado); // { id: 1, name: 'David' }