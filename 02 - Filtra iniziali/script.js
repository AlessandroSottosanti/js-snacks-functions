/* Scrivi una funzione che accetti un'array di stringhe e una lettera e restituisca un array contenente solo le parole che iniziano con quella lettera */

const names = ["Anna", "Luca", "Marco", "Adele", "Laura", "Alessandra"];
const letter = 'A';

// Dichiara la funzione qui.

/**
 * Passando come proprietà un array cerchiamo di 
 * crearne un altro con solo elementi che iniziano per {char}, 
 * la seconda proprietà in ingresso alla funzione
 * @param {array} array
 * @param {char} char
 * @returns {array}
 */
const filteredArray = (array, char) => {
    let filteredby = [];
    for(i = 0; i < array.length; i++ ){
        currentItem = array[i];
        if(currentItem[0] === char){
            filteredby.push(currentItem);
        }
    }
    return filteredby;
}

// Invoca la funzione qui e stampa il risultato in console
let aNames = filteredArray(names, letter);
console.log(aNames);

//Risultato atteso se si passa la lettera A: ["Anna", "Adele", "Alessandra"]