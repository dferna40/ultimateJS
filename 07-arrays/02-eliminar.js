const letras = ['a', 'b', 'c', 'd'];

// El método pop saca el último elemento de un array
//const final = letras.pop();

//console.log(letras,final);

// El método shiht saca el primer elemento de un array
//const comienzo = letras.shift();
//console.log(letras,comienzo);


// El método splice saca un elemento de la posicion seleccionada de un array
//const entremedio = letras.splice(1, 1);
// Si se quiere eliminar mas de un elemento se hace cambiando el segundo parametro
const entremedio = letras.splice(1, 2);
console.log(letras,entremedio);