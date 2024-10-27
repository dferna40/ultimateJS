/**
 * Algoritmo para calcular los numeros impares
 */
function calcularNumerosImpares(secuencia) {
    let listaNumerosImpares = [];
    
    for(let i=0; i<secuencia;i++){
        if((secuencia > 1) && (i % 2 !== 0)) {
            listaNumerosImpares.push(i);
        }
    }
    return listaNumerosImpares;
}

for (let numeroImpar of calcularNumerosImpares(10)){
    console.log('Impar: ', numeroImpar);
}


    

