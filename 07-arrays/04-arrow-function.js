// Función tradicional que retorna 'Hola Mundo'
function holaAntigua() {
  return 'Hola Mundo';
}

// La función de flecha es anónima, si se quiere referenciar se tiene que asignar a una constante o variable
const hola = () => 'Hola Mundo';

// Si la función de flecha recibe un parámetro, se pueden omitir los paréntesis
const hola2 = mensaje => mensaje + 'Hola Mundo';

// Si la función de flecha recibe más de un parámetro, se tienen que poner los paréntesis
const hola3 = (mensaje, nombre) => mensaje + nombre;

// Otra forma de escribir la función de flecha con un bloque de código
const hola4 = mensaje => {
  return mensaje + 'Hola Mundo';
}

// Llamada a la función tradicional
const resultado = hola();

// Llamada a la función de flecha con un parámetro
const resultado2 = hola2('Soy David ');

// Llamada a la función de flecha con dos parámetros
const resultado3 = hola3('Soy David ', 'resultado 3');

// Llamada a la función de flecha con un bloque de código
const resultado4 = hola4('Soy David ');

// Imprimir los resultados en la consola
console.log(resultado); // 'Hola Mundo'
console.log(resultado2); // 'Soy David Hola Mundo'
console.log(resultado3); // 'Soy David resultado 3'
console.log(resultado4); // 'Soy David Hola Mundo'



