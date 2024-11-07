// En esta clase vamos a aprender el método reduce que nos permite reducir, mediante una función que se aplica a cada uno de los elemento del array, todos los elementos de un array a un único valor.

const numeros = [1, 2, 3, 4, 5];

// Vamos a usar el método reduce para reducir todo el contenido del array a un solo valor por ejemplo la suma de todos los elementos

const suma = numeros.reduce((acumulado, numero) => {
    return acumulado + numero;
}, 0);  // El segundo parametro es el valor inicial del acumulado

console.log(suma); // 15

// Tambien los podemos usar en un array en el que este a su vez contenga mas arrays y queramos reducirlo a un solo array
const aninado = [[1, 2],3, [4, 5], [6, 7]];

const plano = aninado.reduce((acumulado, valorActual) => {
    return acumulado.concat(valorActual);
}, []);

console.log(plano); // [1, 2, 3, 4, 5, 6, 7]


// Tambien podemos usar el método reduce cuando tenemos arrays muy grandes y queremos hacer operaciones con ellos
const users = [
    {name: 'David', age: 35},
    {name: 'Pepe', age: 25},
    {name: 'Ana', age: 13},
    {name: 'Maria', age: 17},
];

const indexado = users.reduce((acumulado, user) => ({
    ...acumulado,
    [user.name]: user,
}), {}); // El segundo parametro es el valor inicial del acumulado

console.log(indexado); // {David: {name: 'David', age: 35}, Pepe: {name: 'Pepe', age: 25}, Ana: {name: 'Ana', age: 13}, Maria: {name: 'Maria', age: 17}}

console.log(indexado['David']); // {name: 'David', age: 35}

// Todo esto va a servir para buscar elementos en un array de una forma mas eficiente y rapida en arrays muy grandes