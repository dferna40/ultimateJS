// Creamos una cadena de texto primitiva usando comillas simples.
const saludo = 'Hola mundo';

// Creamos un objeto de tipo String usando el constructor 'new String()'.
// Esto crea un objeto 'String', no un valor primitivo.
const despedida = new String('Chao mundo :(');

// 'typeof' nos dice el tipo de dato. 'saludo' es un string primitivo.
console.log(typeof saludo);  // Devuelve "string".

// 'despedida' es un objeto de tipo String.
console.log(typeof despedida);  // Devuelve "object".

// 'length' devuelve el número de caracteres en una cadena, incluidos los espacios.
console.log(saludo.length);  // Devuelve 10 (porque "Hola mundo" tiene 10 caracteres).

// 'indexOf' busca la primera ocurrencia de un substring en la cadena.
// Si encuentra el substring, devuelve su posición; si no lo encuentra, devuelve -1.
console.log(saludo.indexOf('mu'));  // Devuelve 5, porque 'mu' empieza en la posición 5.
console.log(saludo.indexOf('sadfda'));  // Devuelve -1, porque ese substring no está presente.

// 'includes' devuelve 'true' si la cadena contiene el substring especificado, y 'false' si no.
console.log(saludo.includes('mundo'));  // Devuelve true, porque "mundo" está en la cadena "Hola mundo".

// 'replace' reemplaza la primera ocurrencia de un substring por otro en la cadena.
// La cadena original no se modifica, sino que devuelve una nueva cadena.
console.log(saludo.replace('mundo', 'David'), saludo);  // Devuelve "Hola David", pero 'saludo' sigue siendo "Hola mundo".
let nuevoSaludo = saludo.replace('mundo', 'David');  // Guardamos el resultado de 'replace' en una nueva variable.
console.log(nuevoSaludo);  // Imprime "Hola David".

// 'toLowerCase' convierte toda la cadena a minúsculas.
console.log(saludo.toLowerCase());  // Devuelve "hola mundo".

// 'toUpperCase' convierte toda la cadena a mayúsculas.
console.log(saludo.toUpperCase());  // Devuelve "HOLA MUNDO".

// 'substring' devuelve una porción de la cadena, desde la posición inicial hasta la final (sin incluirla).
console.log(saludo.substring(0,4));  // Devuelve "Hola", es decir, los caracteres desde la posición 0 a la 3.

// 'substr' también devuelve una porción de la cadena, pero está deprecado.
// Se basa en la posición inicial y la cantidad de caracteres que se extraen.
console.log(saludo.substr(2,4));  // Devuelve "la m", desde la posición 2 y los siguientes 4 caracteres.

// Creamos una cadena con espacios al principio y al final.
const espacios = '   Hola    Mundo ';

// 'trim' elimina los espacios en blanco al principio y al final de la cadena.
console.log(espacios.trim());  // Devuelve "Hola    Mundo", eliminando los espacios extras al inicio y final.

// 'trimStart' elimina los espacios solo al principio de la cadena.
console.log(espacios.trimStart());  // Devuelve "Hola    Mundo ", eliminando solo los espacios al inicio.

// 'trimEnd' elimina los espacios solo al final de la cadena.
console.log(espacios.trimEnd());  // Devuelve "   Hola    Mundo", eliminando solo los espacios al final.
