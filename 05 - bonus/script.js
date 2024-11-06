/* Scrivi una funzione che accetti una stringa contenente un nome e restituisca un saluto seguito dal nome fornito. 
Il saluto deve essere :
buongiorno se è mattina (fino alle 13), 
buon pomeriggio se è pomeriggio (fino alle 17) 
e buonasera se è sera (oltre le 17)
*/

const name = 'Mario';


// Dichiara la funzione qui.
const timedGreatings = (name) => {
    let time = new Date().getHours();
    let result = '';
    console.log(time);
    if(time < 13){
        result = 'Buongiorno ';
    }
    else if(time <= 17){
        result = 'Buon pomeriggio ';
    }
    else if(time > 17){
        result = 'Buona sera ';
    }

    result += name;
    return result;
}

// Invoca la funzione qui e stampa il risultato in console
let greatings = timedGreatings(name);
console.log(greatings);


//Risultato atteso se si passa 'Mario' alle 18: // Buonasera Mario.