// Definición de la función 'dividePorTipo' que recibe un array 'arr' como argumento
function dividePorTipo(arr) {
    // Uso del método 'reduce' para iterar sobre 'arr' y construir un objeto acumulador 'acc'
    return arr.reduce((acc, el) => {
        // Obtención del tipo de dato del elemento actual 'el'
        let llave = typeof el;

        // Si la clave 'llave' no existe en 'acc', se inicializa como un array vacío
        // Luego, se agrega 'el' al array correspondiente en 'acc'
        acc[llave] = acc[llave] ? acc[llave] : [];
        acc[llave].push(el);
        return acc; // Se retorna el acumulador actualizado para la siguiente iteración
    }, {}); // Se proporciona un objeto vacío '{}' como valor inicial del acumulador
}

// Declaración de un array 'miArray' con elementos de diferentes tipos
const miArray = [
    "Hola",    // string
    12,        // number
    true,      // boolean
    "Mundo",   // string
    {},        // object
    {id: 15},  // object
    ['lala'],  // object (arrays son de tipo 'object' en JavaScript)
];

// Llamada a la función 'dividePorTipo' pasando 'miArray' y almacenamiento del resultado en 'arr'
let arr = dividePorTipo(miArray);

// Impresión en consola del objeto resultante 'arr'
console.log(arr);
