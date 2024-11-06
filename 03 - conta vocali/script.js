/* Scrivi una funzione che accetti una stringa e restituisca il numero di vocali contenute al suo interno */

const word = 'javascript';
console.log(word);

// Dichiara la funzione qui.

/**
 * questa funzione accetta come argomento una stringa alla quale
 * andremo a verificare quali vocali sono presenti al suo interno
 * e le restituiremo
 * @param {string} string
 * @returns {array}
 */
const getVowelsNum = (string) => {
    const vowels = ['a', 'e', 'i', 'o', 'u', 'y'];
    let result = [];
    for(let i = 0; i < string.length; i++){
        let currentletter = string[i];
        for(let j = 0; j < vowels.length; j++){
            let currentVowel = vowels[j];
            if(currentVowel === currentletter) {
                result.push(currentVowel);
            }
        }
    }
    return result;
}

// Invoca la funzione qui e stampa il risultato in console
let foundVowels = getVowelsNum(word);
console.log(`${foundVowels.length} (${foundVowels.join(', ')})`);

//Risultato atteso se si passa 'javascript': 3 (a, a, i)