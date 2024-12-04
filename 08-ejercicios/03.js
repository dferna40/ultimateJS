const usuarios = [
    {edad: 17, nombre: 'Nico', plan: 'premium'},
    {edad: 13, nombre: 'David', plan: 'free'},
    {edad: 32, nombre: 'Ana', plan: 'free'},
    {edad: 25, nombre: 'Pepe', plan: 'gold'},
];

function getPaidUsers(usrs) {
    return usrs.filter( n => n.plan !== 'free');
}

console.log(getPaidUsers(usuarios));