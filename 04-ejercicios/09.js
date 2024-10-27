/**
 * Crear algoritmo que tome un array
 *  de objetos en base a pares
 */

let pairs = [
    [1, { name: 'David'}],
    [2, { name: 'Pepe'}],
    [3, { name: 'Ana'}],
];

let array = [
    {
        id: 1,
        name: 'David',
    },
    {
        id: 2,
        name: 'Pepe',
    },
    {
        id: 3,
        name: 'Ana',
    }
];


function toCollection(arr) {
    let collection = [];
    for (idx in arr) {
        let elemento = arr[idx];
        collection[idx] = elemento[1];
        collection[idx].id = elemento[0];
    }
    return collection;
    
}

let resultado = toCollection(pairs);

console.log(resultado);