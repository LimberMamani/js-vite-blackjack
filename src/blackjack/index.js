import _ from 'underscore';
import { crearDeck, pedirCarta, valorCarta, turnoComputadora, crearCarta, acumularPuntos } from './usecases'

const miModulo = (() => {
  'use strict'
  
  let deck         = [];
  const tipos      = ['C', 'D', 'H', 'S'],
        especiales = ['A', 'J', 'Q', 'K'];

  let puntosJugadores = [];

  // Referencias del HTML
  const btnNuevo   = document.querySelector('#btnNuevo'),
        btnPedir   = document.querySelector('#btnPedir'),
        btnDetener = document.querySelector('#btnDetener');

  const divCartasJugadores = document.querySelectorAll('.divCartas'),
        puntosHTML = document.querySelectorAll('small');


// Esta función inicializa el juego 
  const inicializarJuego = ( numJugadores = 2 ) => {
      deck = crearDeck( tipos, especiales );
      puntosJugadores = [];
      for (let i = 0; i < numJugadores; i++) {
          puntosJugadores.push(0);
      }
      puntosHTML.forEach( elem => elem.innerText = 0 );
      divCartasJugadores.forEach( elem => elem.innerHTML = '' );
      
      btnPedir.disabled = false;
      btnDetener.disabled = false;
  }

  
  // Eventos
  btnPedir.addEventListener('click', () => {
      const carta = pedirCarta( deck );
      const puntosJugador = acumularPuntos( carta, 0, puntosJugadores );

      crearCarta( carta, 0 );

      if (puntosJugador > 21) {
          console.warn('Lo siento mucho, perdiste');
          btnPedir.disabled = true;
          turnoComputadora( puntosJugador, puntosJugadores, deck );
      } else if(puntosJugador === 21) {
          console.warn('21, Genial!!');
          btnPedir.disabled = true;
          turnoComputadora( puntosJugador, puntosJugadores, deck );
      }
  });

  btnDetener.addEventListener('click', () => {
      btnPedir.disabled = true;
      btnDetener.disabled = true;
      turnoComputadora( puntosJugadores[0], puntosJugadores, deck );
  });

  btnNuevo.addEventListener('click', () => {
      inicializarJuego();
  });

  return {
      nuevoJuego: inicializarJuego
  }
})();