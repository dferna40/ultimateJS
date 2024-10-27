// Definimos una función constructora llamada 'Usuario' que actúa como una plantilla para crear objetos 'Usuario'.
function Usuario() {
    // Aquí definimos una variable 'id' usando 'let'. 
    // Esta variable es privada porque solo está accesible dentro de esta función 'Usuario'. 
    // No puedes acceder a 'id' desde fuera del objeto creado.
    let id = 1;

    // Definimos una propiedad pública 'name', accesible desde fuera del objeto.
    // Las propiedades que usas con 'this' son públicas y cualquier instancia del objeto puede acceder a ellas.
    this.name = 'David';

    // Creamos una función 'log' que es privada.
    // Al definirla con 'let' dentro de la función 'Usuario', esta función solo se puede usar dentro del contexto de 'Usuario'.
    // No puedes llamarla directamente desde fuera del objeto.
    let log = function() {
        console.log('logging...');
    }

    // Definimos una función pública 'guardar'.
    // Como usamos 'this', la función es pública y puede ser llamada desde cualquier instancia del objeto 'Usuario'.
    this.guardar = function() {
        // Dentro de 'guardar', llamamos a la función privada 'log'.
        log();  // Aunque 'log' es privada, la podemos usar dentro de 'guardar' porque ambas están en el mismo contexto.
        console.log('Guardando...');
    }
};

// Creamos una nueva instancia del objeto 'Usuario'.
const usuario = new Usuario();

// Llamamos al método público 'guardar', que primero llama a la función privada 'log' y luego imprime "Guardando...".
// No podemos llamar a 'log' directamente desde fuera, pero 'guardar' puede hacerlo.
usuario.guardar();  // Esto imprime "logging..." y luego "Guardando...".

