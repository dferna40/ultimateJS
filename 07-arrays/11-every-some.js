// En esta clase vamos a ver si los arrays cumplen una condición concreta. Para ello vamos a usar los métodos every y some.

let usuarios = [
    {id: 1, activo: true},
    {id: 2, activo: false},
    {id: 3, activo: false},
];

// Comprobar si todos los usuarios estan activos mediante el metodo every que recibe una funcion predicate
let todosActivos = usuarios.every(u => {
    console.log('Todos los usuarios estan activos', u.id);
    return u.activo;
}); 

console.log(todosActivos); // false

// Comprobar si algun usuario esta activo mediante el metodo some que recibe una funcion predicate
let algunActivo = usuarios.some(u => {
    console.log('Algun usuario esta activo', u.id);
    return u.activo;
});

console.log(algunActivo); // true


