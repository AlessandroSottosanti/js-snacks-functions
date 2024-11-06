/* Scrivi una funzione che accetti un array di nomi e restituisca nuovo un array con le iniziali di ogni parola dell'array fornito */

const names = ["Anna", "Luca", "Marco", "Adele", "Giovanni", "Alessandra"];


// Dichiara la funzione qui.

/**
 * Da un array, passato come argomento, estrapoliamo la prima lettera di ogni elemento
 * e generiamo un nuovo array composto solo dalle iniziali
 * @param {array} array
 * @returns {array}
 */
const namesInitials = (array) => {
    let newArray = [];
    for(i = 0; i < array.length; i++){
        let currentName = array[i];
        let initial = currentName[0];
        newArray.push(initial);
        console.log(currentName);
    }
    return newArray
}


// Invoca la funzione qui e stampa il risultato in console

let initialsarray = namesInitials(names);
console.log(initialsarray);


//Risultato atteso: ["A", "L", "M", "A", "G", "A"]