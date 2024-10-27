/**
 * Crear algoritmo que tome un array
 *  de objetos y devuelva un array de pares
 */

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

let pares = [
    [1, { id: 1, name: 'David'}],
    [2, { id: 2, name: 'Pepe'}],
    [3, { id: 3, name: 'Ana'}],
];

function toPairs(arr) {

    let pairs = [];

    for (idx in arr) {
        let elemento = arr[idx];
        pairs[idx] = [elemento.id, elemento];
    }
    return pairs;
}

let resultado = toPairs(array);

console.log(resultado);

