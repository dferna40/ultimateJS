const usuarios = [
    {edad: 17, nombre: 'Nico', plan: 'premium'},
    {edad: 13, nombre: 'David', plan: 'free'},
    {edad: 32, nombre: 'Ana', plan: 'free'},
    {edad: 25, nombre: 'Pepe', plan: 'gold'},
];

function groupBy(arr, prop) {

    return arr.reduce((acc, el) => {
        let valor = el[prop];

        acc[valor] = acc[valor] ? acc[valor] : [];
        acc[valor].push(el);
        return acc;
    }, {});
}

const grouped = groupBy(usuarios, 'plan');

console.log({ grouped });