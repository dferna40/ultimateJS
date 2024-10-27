// Definimos un objeto 'punto' con propiedades 'x', 'y' y una función 'dibujar'.
// La función dibujar es una "método" del objeto, que simplemente imprime "dibujando" en la consola.
const punto = {
    x: 10,
    y: 15,
    // Esta es una forma más moderna de definir un método dentro de un objeto (sin usar 'function').
    dibujar() {
        console.log('dibujando');
    }
};

// Comprobamos si el objeto 'punto' tiene un método llamado 'dibujar'.
// La expresión 'in' verifica si existe la propiedad 'dibujar' en el objeto 'punto'.
// Si existe, llamamos al método 'dibujar'.
if ('dibujar' in punto) {
    punto.dibujar();  // Llama al método y muestra "dibujando" en la consola.
}

// Usamos 'Object.keys' para obtener un array con todas las propiedades de 'punto'.
// Esto devuelve las claves (propiedades) del objeto como un array: ['x', 'y', 'dibujar'].
console.log(Object.keys(punto));

// Explicación adicional:
// 'Object.keys' es un método estático de la clase Object. 
// Esto significa que se llama directamente sobre la clase (Object), no sobre instancias de objetos.

// Forma de recorrer y mostrar las propiedades de un objeto:

// Método más antiguo para obtener las claves (propiedades) y valores de un objeto.
// 'Object.keys' devuelve un array con las claves del objeto. Aquí usamos un 'for...of' para iterar sobre ese array.
for (let llave of Object.keys(punto)) {
    // Mostramos la clave (nombre de la propiedad) y su valor accediendo a punto[llave].
    console.log(llave, punto[llave]);
}

// 'Object.entries' devuelve un array de arrays, donde cada subarray contiene la clave y el valor de cada propiedad.
// Este es otro método antiguo de iterar sobre un objeto.
for (let entry of Object.entries(punto)) {
    // Cada 'entry' es un array, donde el primer elemento es la clave y el segundo es el valor.
    console.log(entry); // Ejemplo de salida: ['x', 10], ['y', 15], ['dibujar', function() { ... }]
}

// Forma más moderna de obtener las claves y valores de un objeto.
// 'for...in' itera sobre todas las propiedades enumerables de un objeto.
// Es más directo que usar 'Object.keys' o 'Object.entries'.
for (let llave in punto) {
    // Mostramos la clave y el valor, igual que antes.
    console.log(llave, punto[llave]);
}
