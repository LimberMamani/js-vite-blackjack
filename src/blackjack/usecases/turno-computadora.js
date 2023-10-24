import { pedirCarta, acumularPuntos, crearCarta, determinarGanador } from './'

/**
 * 
 * @param {Number} puntosMinimos Valor numerico
 * @param {Number} puntosJugadores Valor numerico
 * @param {Array<String>} deck Array de string
 */
export const turnoComputadora = ( puntosMinimos, puntosJugadores, deck ) => {
    let puntosComputadora = 0;
    do {
        const carta = pedirCarta( deck );
        
        puntosComputadora = acumularPuntos(carta, puntosJugadores.length - 1, puntosJugadores);
        crearCarta(carta, puntosJugadores.length - 1);

        if (puntosMinimos > 21) {
            break;
        }
    } while ((puntosComputadora < puntosMinimos) && (puntosMinimos <= 21));

    determinarGanador( puntosJugadores );
}

