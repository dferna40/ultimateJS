// En este ejecicio en la consola debo devolver la resolución correcta segun el formato introducido
// Por ejemplo si introduzco 1925, 1085 será FHD ya que es un poco superior a la resolución FHD pero inferior WQHD y superior a HD 

/**
 * Nombre: ancho x alto
 * 8K 7680 x 4320
 * 4K 3840 x 2160
 * WQHD 2560 x 1440
 * FHD 1920 x 1080
 * HD 1280 x 720
 */

function nombreResolucion(ancho, alto) {

    if((ancho >= 1280 && alto >= 720) && (ancho < 1920 && alto < 1080)) {
        return 'La resolución es HD';
    } else if ((ancho >= 1920 && alto >= 1080) && (ancho < 2560 && alto < 1440)) {
        return 'La resolución es FHD';
    } else if ((ancho >= 2560 && alto >= 1440) && (ancho < 3840 && alto < 2160)) {
        return 'La resolución es WQHD';
    } else if ((ancho >= 3840 && alto >= 2160) && (ancho < 7680 && alto < 4320)) {
        return 'La resolución es 4K';
    } else if ((ancho >= 7680 && alto >= 4320)) {
        return 'La resolución es 8K';
    } else {
        return false;
    }
}

let nombre = nombreResolucion(3840, 2160);

if (!nombre) {
    console.log('La resolución introducida no es ninguna de las validas, por favor introduce una resolución valida');
} else {
    console.log(nombre);
}

