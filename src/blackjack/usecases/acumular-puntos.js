import { valorCarta } from './'


/**
 * Turno: 0 = primer jugador y el ultimo sera la computadora
 * @param {String} carta Nombre Carta String
 * @param {Number} turno Posicion del jugador
 * @param {Array<String>} puntosJugadores Array de strings
 * @returns 
 */
export const acumularPuntos = ( carta, turno, puntosJugadores ) => {

    const puntosHTML = document.querySelectorAll('small');

    puntosJugadores[turno] = puntosJugadores[turno] + valorCarta( carta );
    puntosHTML[turno].innerText = puntosJugadores[turno];
    return puntosJugadores[turno];
}