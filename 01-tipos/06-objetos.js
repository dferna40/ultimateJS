// Pesonaje de TV

let nombre = "Goku";
let anime = "Dragon ball";
let raza = "Saiyajin";
let edad = 50;

// objeto literal
//let personaje = {};

// Construir objeto con las propiedades rellenas
let personaje = {
    nombre:"Goku", // Par llave-valor o propiedad
    anime:"Dragon ball",
    raza:"Saiyajin",
    edad: 50,
};

// Imprime en la consola el objeto completo
console.log(personaje);

// Primera forma para imprimir en la consola una propiedad del objeto
console.log(personaje.nombre);

// Segunda forma para imprimir en la consola una propiedad del objeto
console.log(personaje["nombre"]);

// Primera forma para modificar una propiedad del objeto

personaje.edad = 60;

// Segunda forma para modificar una propiedad del objeto

personaje["edad"] = 60;

// Eliminar propiedad del objeto

delete personaje.anime;

console.log(personaje);