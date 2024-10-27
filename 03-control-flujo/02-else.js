let edad = 12;

console.log('Para ver esta pelicula si el usuario tiene 13 años debe ir acompañado de un adulto sin embargo si tiene 18 años o mas puede acceder solo');
console.log('¿El Usuario puede acceder solo o acompañado al cine al cine?');
if(edad >= 18) {
    console.log('El Usuario puede acceder solo');
} else if(edad > 13) {
    console.log('El Usuario necesita acceder acompañado de sus padres');
} else {
    console.log('El Usuario no puede acceder ya que es menor de edad');
}