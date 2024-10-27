/**
 * Crear algoritmo que devuelva la cantidad
 * de números positivos de un array
 */

let array = [2, 5, 7, 15, -5, -100, 55];

function cuantosPositivos(arr) {

    let numerosPositivos = [];

    for (numero of arr) {
        if(numero > 0) {
            numerosPositivos.push(numero);
        }
    }
    return numerosPositivos;
}

let resultado = cuantosPositivos(array);

console.log(resultado);