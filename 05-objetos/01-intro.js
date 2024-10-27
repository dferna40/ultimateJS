/**
 * Este es un ejemplo de como se puede definir un objeto en JavaScript
 * al objeto se le pueden definir propiedades por separado,
 * tambien un objeto dentro del mismo 
 * propiedades con valor boleano
 * y tambien funciones en este caso anonimas que será ejecutado al ejecutar el objeto
 */
let user = {
    email: 'nico@holamundo.io',
    name: 'Nicolas',
    direccion: {
        calle: 'cadiz',
        numero: 16,
    },
    activo: true,

    recuperarClave: function () {
        console.log('Recuperando clave...');
    },
};