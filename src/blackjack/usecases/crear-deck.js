// import { shuffle } from 'underscore'
import _ from 'underscore';


/**
 * Esta funcion crea un nuevo deck
 * @param {Array<String>} tipoDeCarta Ejemplo: ['C', 'D', 'H', 'S']
 * @param {Array<String>} tiposEspeciales Ejemplo: ['A', 'J', 'Q', 'K']
 * @returns {Array<String>} retorna un nuevo deck de dartas
 */
export const crearDeck = ( tipoDeCarta, tiposEspeciales ) => {

    if ( !tipoDeCarta || tipoDeCarta-length === 0 ) 
        throw Error('tipoDeCarta es obligatorio como un arreglo de string');

    if ( !tiposEspeciales || tiposEspeciales-length === 0 ) 
        throw Error('tiposEspeciales es obligatorio como un arreglo de string');

    let deck = [];
    for (let i = 2; i <= 10; i++) {
        for(let tipo of tipoDeCarta){
            deck.push(i + tipo);
        }
    }
    
    for (let tipo of tipoDeCarta) {
        for(let esp of tiposEspeciales) {
            deck.push(esp + tipo);
        }
    }
    return _.shuffle( deck );
}

// export default crearDeck;