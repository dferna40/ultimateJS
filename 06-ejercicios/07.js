// Agregar la propiedad id a un objeto ya creado previamente, el valor del id tiene que ser un número generado de forma aleatoria

let objeto = {name: 'David'};

function agregarId(obj) {
    if(typeof obj === 'object'){
        obj.id = getRandom(1, 10);
    }
    return obj;
}

function getRandom(min, max) {
    return Math.round(Math.random() * (max - min) + min);
}

agregarId(objeto);

console.log(objeto);