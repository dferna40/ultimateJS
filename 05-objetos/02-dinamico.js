// Definiendo un objeto, se puede definir con let o const pero si se hace con const se pueden modificar sus propiedades pero nunca se le podra cambiar el tipo a la variable, por ejemplo cambiarlo de objeto a un tipo string
const user = { id: 1 };

// Agregar nuevas propiedades a un objeto ya creado
user.name = 'David';
user.guardar = function () {
    console.log('Guardando', user.name);
}

user.guardar();

// Borrar propiedades de un objeto ya creado anteriormente
delete user.name;
delete user.guardar;
console.log(user);

// De esta forma se hace que el objeto nunca se pueda modificar ni cambiar el valor a las propiedades ya definidas ni poner o quitar propiedades, si se hace javascript no falla pero no se vera afectado el objeto
const user1 = Object.freeze({ id: 1 });
console.log('Usando freeze: ', user1);

// De esta forma se hace que no se le puedan agregar o quitar propiedades al objeto, pero si le podemos cambiar los valores a las propiedades ya definidas
const user2 = Object.seal({ id: 1 });
user2.id = 2;

console.log('Usando seal: ', user2);