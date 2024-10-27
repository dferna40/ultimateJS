/**
 * Crear funcion de factoria
 */

function crearUsuario(email, name, activo) {
    return {
        email,
        name,
        activo,

        recuperarClave: function () {
            console.log('Recuperando clave...');
        },
    };
}

let user1 = crearUsuario('David', 'david@holamundo.io',true);
let user2 = crearUsuario('Ana', 'ana@holamundo.io',false);

console.log(user1);
console.log(user2);