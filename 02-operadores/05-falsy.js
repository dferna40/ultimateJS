// short-circuit

// Valores falsy que dan false

// false
// 0
// ''
// null
// undefined
// NaN

// Declaraciones
let nombre = 'David';
let username = nombre || 'Anonimo';

console.log(username);

function fn1() {
    console.log('soy funcion 1');
    return true;
}


function fn2() {
    console.log('soy funcion 2');
    return true;
}

let x = fn1() && fn2();

