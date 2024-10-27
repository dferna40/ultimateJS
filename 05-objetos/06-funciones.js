// Aclaración: Las funciones en JS tambien son objetos y por lo tanto tambien tienen metodos
// Llamados objetos de primera clase

function Usuario(nombre) {
    this.nombre = nombre;
}

// Metodo que retorna el nombre de la funcion
console.log('nombre de la funcion: ', Usuario.name);
// Metodo que retorna la cantidad de argumentos que recibe la funcion
console.log('cantidad de argumentos que recibe la funcion: ', Usuario.length);

// Defino una constante y le asigno una funcion
const U = Usuario;
// Se crea un usario a partir de la funcion de usuario "U" definida al principio
let user = new U('David');

console.log('Usando la constante a la que se le ha asignado la funcion: ', user);

// Forma de pasar una funcion como argumento
function of(Fn, arg) {
    return new Fn(arg);
}

let usuario = of(Usuario, "Pepe");

console.log('Usando of: ', usuario);

// Retornar una funcion dentro de otra funcion
function returned() {
    return function () {
        console.log('Hola mundo');
    }

}

// Ejecutamos la funcion returned asignandola a una variable esta variable se convierte en una funcion
let saludo = returned();
// Como en el paso anterio saludo se ha convertido en una funcion la podemos ejecutar
saludo();