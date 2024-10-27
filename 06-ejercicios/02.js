// Construir un objeto con Factory function
// Resultado esperado al construir los objetos con Factory function:
// {id: 0.000885541, name: 'David'} el id es un numero aleatorio

function createUsuario(name) {
   return {
    id : Math.random(),
    name,
   }
};
    
    

let user = createUsuario('David');
let user2 = createUsuario('Pepe');

console.log(user,user2);