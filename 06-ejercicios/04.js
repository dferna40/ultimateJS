// Cuales son métodos

let objeto = {
    id: 1,
    name: 'David',
    login: function () {},
    logout: function () {},
}

function cualesMetodos(obj) {
    for(let llave in obj) {
        if(typeof obj[llave] === 'function'){
            console.log(llave,' Es un método');
        }
        
    }
    
}

cualesMetodos(objeto);