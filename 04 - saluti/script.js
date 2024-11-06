/* Scrivi una funzione che accetti una stringa contenente un nome e restituisca un saluto seguito dal nome fornito (es. "Ciao [nome]") */

const name = 'Mario';


// Dichiara la funzione qui.

/**
 * Retituisce un messaggio di saluto personalizzato
 * @param {any} name
 * @returns {any}
 */
const getGreatings = (name) => {
    return `Ciao ${name}`;
}

// Invoca la funzione qui e stampa il risultato in console
let message = getGreatings(name);
console.log(message);


//Risultato atteso se si passa 'Mario': // ciao Mario