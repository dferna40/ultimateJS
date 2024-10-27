// En este ejecicio en la consola debo devolver el numero mayor
function cualEsMayor(a, b){
    // Primera forma de resolverlo con if else
    //if(a > b){
    //    return a;
    //} else {
    //    return b;
    //}

    // Segunda forma de resolverlo con operador ternario
    return (a > b) ? a : b;
};

let mayor = cualEsMayor(10, 5);

console.log('El numero mayor es: ',mayor);