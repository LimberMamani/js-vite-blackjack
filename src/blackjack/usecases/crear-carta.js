



/**
 * 
 * @param {String} carta valor en string
 * @param {Number} turno turno de jugador
 */
export const crearCarta = ( carta, turno ) => {
    const divCartasJugadores = document.querySelectorAll('.divCartas');

    const imgCarta = document.createElement('img');
    imgCarta.src = `assets/cartas/${ carta }.png`;
    imgCarta.classList.add('carta');
    divCartasJugadores[turno].append( imgCarta );
}