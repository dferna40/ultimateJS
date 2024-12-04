const usuarios = [
    {edad: 17, nombre: 'Nico', plan: 'premium'},
    {edad: 13, nombre: 'David', plan: 'premium'},
    {edad: 32, nombre: 'Ana', plan: 'free'},
    {edad: 25, nombre: 'Pepe', plan: 'gold'},
];

function cuantosPremium(usrs) {
    //Mi forma 
    //return usrs.filter( n => n.plan !== 'free').length;

    //Forma del profesor con reduce
    return usrs.reduce((acc, el) => 
        el.plan !== 'free' ? acc + 1 : acc  , 0);
}

function cuantosMayores(usrs) {
    //Mi forma 
    //return usrs.filter( n => n.edad >= 18).length;

    //Forma del profesor con reduce
    return usrs.reduce((acc, el) => {
        if (el.edad >= 18) {
            return acc + 1;
        }
        return acc;
    }, 0);

}

console.log(cuantosPremium(usuarios));

console.log(cuantosMayores(usuarios));