/**
 * Indice validar que no sea menor a cero y que el elemento exista
 * en el array
 */
function getByIdx(arr, idx) {

    if((idx => arr.length) || (idx < 0)){
        return '';
    } else {
        return arr[idx];
    }
}

let resultado = getByIdx([1,2], -2);

if (resultado != ''){
    console.log(resultado);
} else {
    console.log('El indice introducido no es valido');
}

