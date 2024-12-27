const usuarios = [
    {edad: 17, nombre: 'Nico', plan: 'premium'},
    {edad: 13, nombre: 'David', plan: 'free'},
    {edad: 32, nombre: 'Ana', plan: 'free'},
    {edad: 25, nombre: 'Pepe', plan: 'gold'},
];

// Resultado esperado
/**
 * <ul>
 *  <li>Pepe</li>
 *  <li>Nico</li>
 * </ul>
 */

// Obtener los usuarios de pago Premium o Gold
const pagos = usuarios.filter(u => u.plan !== 'free');

// Ordenar de mayor a menor edad
pagos.sort((a, b) => {
    if (a.edad > b.edad) {
        return -1;
    }  if (a.edad < b.edad) {
        return 1;
    } 
    return 0;
});

// Devolver el nombre del usuario
const lista = pagos.map(u => `<li>${u.nombre}</li>`);

// Crear una plantilla HTML
const html = `
<ul>
    ${lista.join(`
    `)}
</ul>
`
// Imprimirla por consola
console.log(html);

