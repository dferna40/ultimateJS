// Ejemplo de tipo de dato PRIMITIVO
let x = 10; // Aquí 'x' es un número, que es un tipo de dato primitivo.
// Los tipos primitivos se copian directamente cuando los asignamos a otra variable.

let y = x; // Al asignar 'x' a 'y', se copia el valor 10. 'y' es independiente de 'x'.

y++; // Incrementamos 'y'. Esto no afecta a 'x' porque son valores independientes.

console.log(x); // 10 - 'x' no ha cambiado.
console.log(y); // 11 - 'y' ha sido incrementado independientemente de 'x'.

// Ahora volvamos a los tipos de referencia:

// Creamos un objeto 'a' con una propiedad 'prop'.
let a = { prop: 1 };  // Los objetos son tipos de referencia. No se guarda el valor directamente, sino una referencia.

// Definimos una función 'suma' que incrementa la propiedad 'prop' del objeto que recibe.
function suma(n) {
    n.prop++;  // Como 'n' es un objeto, esta línea modifica el objeto original al que apunta la referencia.
}

// Pasamos el objeto 'a' a la función 'suma'.
// Como 'a' es un objeto (tipo de referencia), estamos pasando una referencia a 'a', no una copia.
suma(a);

// Imprimimos 'a'. Como la función modificó el objeto original, el valor de 'prop' ha cambiado.
console.log(a); // { prop: 2 }

// Ejemplo de comparación entre un tipo primitivo y un tipo de referencia:

let primitivoA = 5;
let primitivoB = 5;

// Aquí estamos comparando dos valores primitivos. Como ambos tienen el mismo valor, la comparación será verdadera.
console.log(primitivoA === primitivoB); // true

let objA = { valor: 10 };
let objB = { valor: 10 };

// Aunque los objetos 'objA' y 'objB' tienen el mismo contenido, al compararlos se compara la referencia en memoria, no el valor.
// Dado que son dos objetos diferentes, aunque tengan el mismo contenido, la comparación será falsa.
console.log(objA === objB); // false

// Sin embargo, si asignamos objA a otra variable, ambas apuntarán al mismo objeto.
let objC = objA;

// Ahora, al comparar 'objA' y 'objC', el resultado será verdadero, porque ambos apuntan al mismo lugar en la memoria.
console.log(objA === objC); // true
