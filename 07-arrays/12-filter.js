// En esta clase vamos a ver como filtrar un array y asi poder eliminar objetos o datos que no nos interesen. Para ello vamos a usar el método filter.

const usuarios = [
    {nombre: 'David', edad: 35},
    {nombre: 'Pepe', edad: 25},
    {nombre: 'Ana', edad: 13},
    {nombre: 'Maria', edad: 17},
];

// Filtrar los usuarios mayores de edad
const mayores = usuarios.filter(u => u.edad >= 18);

console.log(mayores); // [{nombre: 'David', edad: 35}, {nombre: 'Pepe', edad: 25}]

// Filtrar los usuarios menores de edad, dado que no existe un método filterInvertido vamos a usar el método filter y la condición contraria
const menores = usuarios.filter(u => u.edad < 18);

console.log(menores); // [{nombre: 'Ana', edad: 13}, {nombre: 'Maria', edad: 17}]

// Como casos practicos este metodo lo vamos a poder usar por ejemplo para listar los restaurantes que se encuentran abiertos en una zona, o tambien para listar tiendas que se encuentran en un rango en particular en definitiva el metodo de filter lo vamos a usar mucho a lo largo de la carrera profesional como desarrolladores de software.