// Existen 4 formas de vaciar un array:
// 1. Asignarle un array vacío: usuarios = [];
// 2. Asignarle la propiedad length con el valor 0: usuarios.length = 0;
// 3. Usar el método splice: usuarios.splice(0, usuarios.length);
// 4. Usar el método pop: while(usuarios.length) usuarios.pop();

let arr = [1, 2];
let arr2 = arr;

// 1. Asignarle un array vacío
//arr2 = [];
//console.log(arr,arr2); // [1, 2] []

// 2. Asignarle la propiedad length con el valor 0
//arr2.length = 0;
//console.log(arr2);   // []

// 3. Usar el método splice
//arr.splice(0, arr.length);
//console.log(arr);  // []

// 4. Usar el método pop y es la menos recomendada porque va usar más recursos
//while(arr.length > 0) {
//    arr.pop();
//}

//console.log(arr);  // []