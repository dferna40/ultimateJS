let obj = {};

let obj1 = new Object();

// Otros constructores

/**
 * new Array(); []
 * new String(); "" '' ``
 * new Number(); 12
 * new Boolean(); true false
 */

function Usuario() {
    this.name = 'David';
}

let user = new Usuario();

console.log(user.constructor);

/**
 * Muy importate para evitar errores
 * Siempre que se defina un string se debe usar el tipo primitivo sin embargo si se tiene que usar el objeto String siempre se tiene que usar el metodo valueOf para obtener su valor
 * A continuación se muestra como se usa
 * No solo los string tiene valueOf si no que tambien lo tiene los Number y Boolean
 */

//Cuando se define por ejemplo un string de la siguiente forma y se le pide el valor me devolver exactamente esa cadena
let s1 = "1 + 1";

// Sin embargo cuando se define el string con new String esto es un objeto y javascript encapsula el string dentro de un objeto con sus metodos
let s2 = new String("1 + 1");
// Haciendolo de esta forma si se quiere acceder al valor del string se tiene que usar el metodo valueOf para que devuelva el valor como string literal
console.log(s2.valueOf());

console.log(s1,s2);