// Ejercicio construye usuarios con funcion constructor
// Resultado esperado al construir los objetos:
// Usuario {name: 'David', id: 0.000885541} el id es un numero aleatorio

function Usuario(name) {
    this.nombre = name;
    this.id = Math.random();
};
    
    

let user = new Usuario('David');
let user2 = new Usuario('Pepe');

console.log(user,user2);