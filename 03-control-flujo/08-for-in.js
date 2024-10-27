// Bucle para recorrer o iterar las propiedades de un objeto esto se hace porque habra veces que el objeto se cree en tiempo de ejecución y no sepas sus propiedades
let user = {
    id: 1,
    name: 'David',
    edad: 38,
};

for (let prop in user) {
    console.log(prop, user[prop]);
}

