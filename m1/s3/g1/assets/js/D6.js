/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Se sei in difficoltà puoi chiedere aiuto a un Teaching Assistant
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per farlo puoi utilizzare il terminale Bash, quello di VSCode o quello del tuo sistema operativo (se utilizzi macOS o Linux)
*/

/* ESERCIZIO 1
 Scrivi una funzione di nome "area", che riceve due parametri (l1, l2) e calcola l'area del rettangolo associato..
*/

/* SCRIVI QUI LA TUA RISPOSTA */
function area(l1,l2) {
    return l1 * l2
} console.log(area(5,6));
/* ESERCIZIO 2
 Scrivi una funzione di nome "crazySum", che riceve due numeri interi come parametri.
 La funzione deve ritornare la somma dei due parametri, ma se il valore dei due parametri è il medesimo deve invece tornare
 la loro somma moltiplicata per tre.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
function crazySum(n,m) {
    if( Number.isInteger(n) && Number.isInteger(m)){
        return ( n === m ) ? ( n + m )*3 : n + m
    }
    return false
}
console.log( crazySum(2,5) );
/* ESERCIZIO 3
 Scrivi una funzione di nome "crazyDiff" che calcola la differenza assoluta tra un numero fornito come parametro e 19.
 Deve inoltre tornare la differenza assoluta moltiplicata per tre qualora il numero fornito sia maggiore di 19.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function crazyDiff(n) {
    let m = 19
    if( Number.isInteger(n) ){
        return  (n > m) ? Math.abs( n - m ) : Math.abs( n - m ) * 3
    }
    return false
}
console.log( crazyDiff(20) );
/* ESERCIZIO 4
 Scrivi una funzione di nome "boundary" che accetta un numero intero n come parametro, e ritorna true se n è compreso tra 20 e 100 (incluso) oppure
 se n è uguale a 400.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function boundary(n) {
    return ( Number.isInteger(n) && ( n > 20 &&  n <= 100 ) || n === 400  ) ? true : false
}
 
console.log(boundary(21));
/* ESERCIZIO 5
 Scrivi una funzione di nome "epify" che accetta una stringa come parametro.
 La funzione deve aggiungere la parola "EPICODE" all'inizio della stringa fornita, ma se la stringa fornita comincia già con "EPICODE" allora deve
 ritornare la stringa originale senza alterarla.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function epify(str) {
    let txt = "EPICODE"
    let startStr = str.startsWith(txt)  //https://www.w3schools.com/jsref/jsref_startswith.asp

    return ( startStr ) ? str : txt +=` ${str}`
}

console.log(epify('ciao'));
/* ESERCIZIO 6
 Scrivi una funzione di nome "check3and7" che accetta un numero positivo come parametro. La funzione deve controllare che il parametro sia un multiplo
 di 3 o di 7. (Suggerimento: usa l'operatore modulo)
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function check3and7(n) {
    return ( n > 0 && n%3 == 0 || n%7 == 0 ) ? true : false
}
console.log(check3and7(14));

/* ESERCIZIO 7
 Scrivi una funzione di nome "reverseString", il cui scopo è invertire una stringa fornita come parametro (es. "EPICODE" --> "EDOCIPE")
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function reverseString(str) {
    return str.split("").reverse().join("");
    //https://www.w3schools.com/jsref/jsref_split.asp
    //https://www.w3schools.com/jsref/jsref_join.asp
}
console.log(reverseString('ciao'));

/* ESERCIZIO 8
 Scrivi una funzione di nome "upperFirst", che riceve come parametro una stringa formata da diverse parole.
 La funzione deve rendere maiuscola la prima lettera di ogni parola contenuta nella stringa.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function upperFirst(str) {
    let txt = str.split(" ")
    console.log(txt);
    let camelCase = []
        for( let char of txt){
            char = char.split("")
            char[0] = char[0].toUpperCase()
            char = char.join("")
            camelCase.push(char)
        }
    return camelCase.join(" ")

}
console.log(upperFirst('ciao pierluigi'));
/* ESERCIZIO 9
 Scrivi una funzione di nome "cutString", che riceve come parametro una stringa. La funzione deve creare una nuova stringa senza il primo e l'ultimo carattere
 della stringa originale.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function cutString(str) {
    let txt = str.split("")
        txt.splice(0,1)
        txt.splice(txt.length -1,1)
        return txt.join("")
        //https://www.w3schools.com/jsref/jsref_splice.asp
/*
        // Remove elements from array
        array.pop();  rimuove unltimo
        array.shift(); rimuove il primo
        delete myArray[0]; rimuove indice 0
        delete myArray[myArray.length -1]; rimuove l' ultimo indice
        */
}
console.log(cutString('Ciao Maria grazia'));
/* ESERCIZIO 10
 Scrivi una funzione di nome "giveMeRandom", che accetta come parametro un numero n e ritorna un'array contenente n numeri casuali inclusi tra 0 e 10.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
function giveMeRandom(n) {
    let numbers = [0,1,2,3,4,5,6,7,8,9,10]
    let randNumbers = []

        for(var i = 0; i < n; i++){
            let rand = Math.floor(Math.random() * numbers.length);
            randNumbers.push(numbers[rand])
        }
        return randNumbers;
}

console.log(giveMeRandom(2));

/* EXTRA 1
 Scrivi una funzione chiamata "checkArray" che riceve un array di numeri casuali (creati con la funzione "giveMeRandom") e per ogni elemento stampa in console
 se il suo valore è maggiore di 5 o no.
 La funzione deve inoltre ritornare la somma di tutti i valori maggiori di 5.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
function checkArray(numbers) {
    let sum = 0
    for (const number of numbers) {
        if ( number > 5 ) {
            console.log(number);
            sum += number
        }
       
    } 
    console.log(sum);
}

checkArray(giveMeRandom(15))