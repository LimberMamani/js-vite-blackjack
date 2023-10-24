/**
 * Determina quien gana el juego
 * @param {Array<String>} puntosJugadores 
 */
export const determinarGanador = ( puntosJugadores ) => {
    const [ puntosMinimos, puntosComputadora ] = puntosJugadores;
    setTimeout(() => {
        if (puntosComputadora === puntosMinimos) {
            alert('Nadie Gana :(');
        } else if( puntosMinimos > 21 ) {
            alert('Computadora gana');
        } else if( puntosComputadora > 21 ){
            alert('jugador gana');
        } else {
            alert('Computadora gana');
        }
    }, 100);
}