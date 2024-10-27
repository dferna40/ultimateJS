// Definimos una función llamada Punto que actúa como "plantilla" para crear objetos.
function Punto(x, y) {
    // Establecemos una propiedad 'x' para el objeto que se creará, con el valor que pasemos como argumento.
    this.x = x;   
    // Establecemos una propiedad 'y' para el objeto, con el valor que pasemos como argumento.
    this.y = y;   
    // Definimos una función 'dibujar' dentro del objeto, que cuando se llame imprimirá "Dibujando..." en la consola.
    this.dibujar = function () { 
        console.log('Dibujando...');   
    }
}

// Esta es una forma alternativa de crear una función con el constructor Function. No se usa normalmente, pero es útil saber que existe. 
// Lo dejamos comentado porque no lo vamos a usar.
// const Point = new Function('x', 'y', `
//    this.x = x;
//    this.y = y;
//    this.dibujar = function() { console.log('Dibujando...')}
//    `);

// Si quitamos el comentario, esto crearía un nuevo objeto 'p' con 'x' = 1 y 'y' = 2 usando la función Point.
// const p = new Point(1, 2);

// Imprimimos el objeto 'p' en la consola para ver sus propiedades. Está comentado también.
// console.log(p);

// Aquí creamos un objeto 'punto' con una sola propiedad 'z', que tiene el valor 7.
let punto = { z: 7 };

// Usamos el método 'call' para llamar a la función Punto, pero en lugar de crear un nuevo objeto, usamos el objeto 'punto'.
// Esto le asigna las propiedades 'x' y 'y' (con los valores 1 y 2) al objeto 'punto'.
Punto.call(punto, 1, 2);

// También podríamos haber usado 'apply', que es muy similar a 'call', pero pasamos los argumentos en forma de arreglo.
//Punto.apply(punto, [1, 2]);

// Imprimimos el objeto 'punto' en la consola. Ahora tiene las propiedades 'z', 'x', y 'y', y también la función 'dibujar'.
console.log(punto);
