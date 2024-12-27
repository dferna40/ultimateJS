const usuarios = [
    {edad: 17, nombre: 'Nico', plan: 'premium'},
    {edad: 13, nombre: 'David', plan: 'free'},
    {edad: 32, nombre: 'Ana', plan: 'free'},
    {edad: 25, nombre: 'Pepe', plan: 'gold'},
];

function obtenerMayor(arr) {
    let mayor = arr[0];
    for (let usuario of arr) {
        if(mayor.edad < usuario.edad) {
            mayor = usuario;
        }
    }

    return mayor;

}

const mayor = obtenerMayor(usuarios);

console.log(mayor);