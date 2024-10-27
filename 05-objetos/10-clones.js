// Creamos un objeto 'punto' con dos propiedades: 'x' y 'y'.
let punto = {
    x: 10,
    y: 15,
};

// Clonar el objeto 'punto' modificando su propiedad 'x' y añadiendo una nueva propiedad 'z'.
// Object.assign copia las propiedades del segundo objeto al primero (punto), modificándolo.
// Aquí 'punto' será modificado directamente (la referencia será la misma).
let referencia = Object.assign(punto, { z: 20, x: 1 });

// Clonar el objeto 'punto' SIN modificarlo, añadiendo una nueva propiedad 'z'.
// En este caso, creamos un nuevo objeto vacío ({}) y luego copiamos las propiedades del objeto 'punto' y agregamos 'z: 20'.
// 'punto' permanece sin modificaciones, y 'clonePunto' es una nueva copia.
let clonePunto = Object.assign({}, punto, { z: 20 });

console.log('Objeto inicial y objeto clonado y modificado: ', punto, clonePunto); // Mostramos el objeto 'punto' (modificado) y el objeto 'clonePunto'.

console.log('Referencia ', referencia); // Mostramos el objeto 'referencia', que es el mismo que 'punto' porque fue modificado directamente.

// FORMA ANTIGUA de copiar objetos (no es recomendable usarla actualmente).
// Aquí usamos Object.assign para hacer una copia idéntica del objeto 'punto'.
let copiaPunto = Object.assign({}, punto);

console.log('Copia de objetos de forma idéntica FORMA ANTIGUA', copiaPunto, punto); // Mostramos la copia del objeto 'punto'.

// FORMA AÚN MÁS ANTIGUA y NO RECOMENDADA para copiar objetos.
// Este método usa un bucle 'for...in' para copiar las propiedades del objeto 'punto' a un nuevo objeto 'copia4'.
// No es recomendable porque es más propenso a errores y es más verboso que las alternativas modernas.
let copia4 = {};
for (let llave in punto) {
    copia4[llave] = punto[llave]; // Copiamos cada propiedad del objeto 'punto' a 'copia4'.
}

console.log('Copia de objetos de forma idéntica FORMA ANTIGUA: NO SE RECOMIENDA USAR', copia4, punto); // Mostramos la copia realizada con el método antiguo.

// FORMA NUEVA Y RECOMENDADA de copiar objetos.
// Aquí utilizamos el operador de propagación (spread operator) para hacer una copia del objeto 'punto'.
// Es la forma moderna y más concisa de copiar objetos en JavaScript.
let copia3 = { ...punto };

console.log('Copia de objetos de forma idéntica FORMA NUEVA', copia3, punto); // Mostramos la copia del objeto utilizando el spread operator.
