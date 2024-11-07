// En esta clase vamos a ver el método de map se usa mucho y se usa para crear un array nuevo a partir de otro array ya existente.

const usuarios = [
    {nombre: 'David', edad: 35},
    {nombre: 'Pepe', edad: 25},
    {nombre: 'Ana', edad: 13},
    {nombre: 'Maria', edad: 17},
];

// En este caso particular lo vamos a usar para crear un nuevo array con los nombres de los usuarios pero estos se van a encontrar envueltos en la etiqueta html de <li> o sea para poder listar elementos en una lista
// Para este caso estamos usando template strings donde $ vale para interpolar variables y {} para ejecutar expresiones
const lista = usuarios.map(u => `<li>${u.nombre}</li>`);

// Ahora vamos a generar un html con la lista de usuarios
const html = `
    <ol>
        ${lista.join('')}
    </ol>
`;  

console.log(html); // <ol><li>David</li><li>Pepe</li><li>Ana</li><li>Maria</li></ol>

// Tambien podemos usar el método map para crear nuevos objetos a partir de objetos ya existentes o obtener una propiedad del listado de objetos que tenemos

// En este caso vamos a crear un nuevo array de usuarios pero con una propiedad adicional que nos diga si el usuario es mayor de edad o no
const mapped = usuarios.map(u => {
    return {
        ...u,
        mayor: u.edad >= 18
    };
});

console.log(mapped); // [{nombre: 'David', edad: 35, mayor: true}, {nombre: 'Pepe', edad: 25, mayor: true}, {nombre: 'Ana', edad: 13, mayor: false}, {nombre: 'Maria', edad: 17, mayor: false}]


// El método map al igual que el método filter nos devuelve un nuevo array lo que significa que nosotros podemos encadenar estos métodos para hacer operaciones mas complejas
// En este caso vamos a listar los usuarios mayores de edad en una lista
const html2 = `
    <ol>
        ${usuarios
            .filter(u => u.edad >= 18)
            .map(u => `<li>${u.nombre}</li>`)
            .join('')
        }
    </ol>
`;

console.log(html2); // <ol><li>David</li><li>Pepe</li></ol>