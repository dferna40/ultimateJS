const saludo = "Hola \\mundo!\nbienvenidos a\t \"ultimate javascript\" :)";

const nombre = 'David';
const apellido = 'Fernández';
const nombreCompleto = nombre + ' ' + apellido;

function plantilla(nombre) {
    return `Hola ${nombre}!
Bienvenidos a "Ultima JavaScript" :)

Cariños David.
`};

console.log(plantilla('Chanchito feliz'));