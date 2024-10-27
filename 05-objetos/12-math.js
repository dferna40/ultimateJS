console.log(
    // 'Math.PI' devuelve el valor de PI (3.14159...), una constante matemática.
    Math.PI,

    // 'Math.abs()' devuelve el valor absoluto de un número, es decir, elimina el signo negativo si lo hay.
    Math.abs(-15),  // Devuelve 15

    // 'Math.round()' redondea un número al entero más cercano.
    Math.round(15.5),  // Devuelve 16, ya que 15.5 se redondea hacia arriba.
    Math.round(15.4),  // Devuelve 15, ya que 15.4 se redondea hacia abajo.

    // 'Math.floor()' redondea el número hacia abajo al entero más cercano.
    Math.floor(15.9),  // Devuelve 15, redondea hacia abajo ignorando los decimales.

    // 'Math.ceil()' redondea el número hacia arriba al entero más cercano.
    Math.ceil(15.000001),  // Devuelve 16, ya que siempre redondea hacia arriba.

    // 'Math.pow()' calcula la potencia de un número. En este caso 2 elevado a la potencia de 3.
    Math.pow(2,3),  // Devuelve 8, porque 2^3 = 8.

    // 'Math.sqrt()' devuelve la raíz cuadrada de un número.
    Math.sqrt(9)  // Devuelve 3, porque la raíz cuadrada de 9 es 3.
);

console.log(Math.random()); // 'Math.random()' devuelve un número decimal aleatorio entre 0 (incluido) y 1 (excluido).

// Función que genera un número aleatorio entre el rango de 'min' y 'max' pasado como argumento.
function getRandom(min, max) {
    // 'Math.random()' genera un número decimal entre 0 y 1, lo multiplicamos por la diferencia entre 'max' y 'min'.
    // Luego sumamos 'min' para desplazar el rango de [0, 1) a [min, max).
    return Math.random() * (max - min) + min;
}

// Aquí llamamos a la función 'getRandom' para obtener un número aleatorio entre 1 y 10.
console.log(getRandom(1,10)); // Esto devolverá un número aleatorio entre 1 (incluido) y 10 (excluido).
