
let i = 0;

while(i < 6){
    i++;
    
    // Continue nos permite saltarnos una iteración
    if(i === 2) {
        continue;
    }

    // Break nos permite salirnos del bucle
    if (i === 4) {
        break;
    }

    console.log(i);
}