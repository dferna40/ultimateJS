// Comprobar el nombre de una propiedad
let objeto = {
    id: 1,
    name: false,
    login: function () {},
    logout: function () {},
}

let propiedad = 'names'

function tieneProp(obj, propiedad) {
    let props = Object.keys(obj);
    //console.log(props);
    for (let prop of props) {
        if(propiedad == prop){
            return true;
        }
    }
    return false;
}

console.log(tieneProp(objeto, propiedad));