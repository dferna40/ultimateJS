// En este ejercicio se proporciona un array con distintos tipos y lo que se tiene que hacer es dividir el array en tantos arrays diferentes como tipos tenga y cada uno contendra los valores de su mismo tipo

const miArray = [
    "Hola",
    12,
    "Mundo",
    {},
    { id: 15},
    ['lala'], // object
]

function dividePorTipo(arr) {

    // Mi forma
    //const objetoTipo = {};

    //let tiposString = [];
    //let tiposNumber = [];
    //let tiposObject = [];

    //for (let tipo of arr){
    //    if (typeof tipo == "string"){
    //        tiposString.push(tipo);
    //    }
    //    if (typeof tipo == "number"){
    //        tiposNumber.push(tipo);
    //    }
    //    if (typeof tipo == "object"){
    //        tiposObject.push(tipo);
    //    }
    //}
    //objetoTipo.tipoString = tiposString;
    //objetoTipo.tipoNumber = tiposNumber;
    //objetoTipo.tipoObject = tiposObject;
    //return objetoTipo;

    // Forma del profesor
    return {
        numeros: arr.filter(n => typeof n === "number"),
        strings: arr.filter(n => typeof n === "string"),
        objectos: arr.filter(n => typeof n === "object"),
    }
}

const nuevoArray = dividePorTipo(miArray);

console.log(nuevoArray);