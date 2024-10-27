// Creamos un objeto 'Date' con la fecha y hora actuales.
const ahora = new Date();
console.log(ahora);  // Imprime la fecha y hora actual.

// Creamos un objeto 'Date' con una fecha y hora específicas, usando una cadena de texto.
// La fecha es "11 de diciembre de 1986, a las 14:15" con la zona horaria GMT+0200.
const fecha = new Date('December 11 1986 14:15 GMT+0200');
console.log(fecha);  // Imprime la fecha que corresponde a la cadena que hemos pasado.

// Creamos otro objeto 'Date' pero usando los argumentos separados (año, mes, día, hora, minutos).
// El mes en JavaScript empieza en 0, por lo que 7 representa agosto.
const fecha2 = new Date(1986, 7, 23, 14, 15);
console.log(fecha2);  // Imprime "23 de agosto de 1986, a las 14:15".

// Creamos un nuevo objeto 'Date' pero sumando 14 + 15 en la hora.
// En este caso, la hora será 29, lo que se traducirá en un valor que sobrepasa 24 horas y ajustará la fecha automáticamente.
const fecha3 = new Date(1986, 7, 23, 14 + 15, 15);  // 14 + 15 = 29, por lo que se ajusta a 1 del día siguiente.
console.log(fecha3);  // Imprime "24 de agosto de 1986, a la 01:15".

// 'toDateString()' convierte la fecha en un formato legible, mostrando solo la fecha (sin la hora).
console.log('toDateString ', fecha3.toDateString());  // Imprime algo como "Sun Aug 24 1986".

// 'toISOString()' convierte la fecha a una cadena en formato ISO 8601 (UTC).
// Este formato es el preferido para trabajar con fechas en servidores o bases de datos.
console.log('toISOString ', fecha3.toISOString());  // Ejemplo de salida: "1986-08-23T23:15:00.000Z".

// 'toTimeString()' muestra solo la parte de la hora de la fecha.
console.log('toTimeString ', fecha3.toTimeString());  // Imprime algo como "01:15:00 GMT+0200".

// Modificamos el año de 'fecha3' usando 'setFullYear()'.
// Este método permite cambiar el año de la fecha sin afectar el resto de los componentes de la fecha.
fecha3.setFullYear(2004);
console.log(fecha3);  // La fecha ahora es "24 de agosto de 2004, a la 01:15".
