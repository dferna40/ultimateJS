function paraAbsoluto(arr) {
    // Forma tradicional
    //let absolutos = [];
    //for (let valor of arr) {
    //    absolutos.push(Math.abs(valor));
    //}
    //return absolutos;
    // Forma con arrow function
    return arr.map(n => Math.abs(n));
}

const ns = [-2, 3, 5, -15];

const absolutos = paraAbsoluto(ns);

console.log(absolutos); // [2, 3, 5, 15]