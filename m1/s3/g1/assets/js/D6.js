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

        for(let i = 0; i < n; i++){
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
/* EXTRA 2
 Nel tuo eCommerce disponi di un'array di oggetti chiamato "shoppingCart". Ognuno di questi oggetti ha le seguenti proprietà: "price", "name", "id" e "quantity".
 Crea una funzione chiamata "shoppingCartTotal" che calcola il totale dovuto al negozio (tenendo conto delle quantità di ogni oggetto).
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let shoppingCart = [
    { price: 10, name: 'mango', id: 1, quantity: 2 },
    { price: 5, name: 'kiwi', id: 2, quantity: 4 },
    { price: 15, name: 'banana', id: 3, quantity: 2 },
    { price: 35, name: 'noci', id: 4, quantity: 7 }
]
function shoppingCartTotal(cart) {
    let total = 0
    for (const article of cart) {
            total += article.price * article.quantity
    }
    return total
}
 console.log( shoppingCartTotal(shoppingCart));

 /* EXTRA 3
 Nel tuo eCommerce disponi di un'array di oggetti chiamato "shoppingCart". Ognuno di questi oggetti ha le seguenti proprietà: "price", "name", "id" e "quantity".
 Crea una funzione chiamata "addToShoppingCart" che riceve un nuovo oggetto dello stesso tipo, lo aggiunge a "shoppingCart" e ritorna il nuovo numero totale degli elementi.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let newArticle = { price: 25, name: 'ciliegie', id: 5, quantity: 10 }

function addToShoppingCart(article) {
        shoppingCart.push(article)
        return shoppingCart
}

console.log( addToShoppingCart(newArticle));

/* EXTRA 4
 Nel tuo eCommerce disponi di un'array di oggetti chiamato "shoppingCart". Ognuno di questi oggetti ha le seguenti proprietà: "price", "name", "id" e "quantity".
 Crea una funzione chiamata "maxShoppingCart" che riceve l'array "shoppingCart" e ritorna l'oggetto più costoso in esso contenuto.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
function maxShoppingCart(cart) {
    let maxPrice = cart.reduce((a,b)=>{
        return a.price > b.price ? a : b
    })
    return maxPrice
}
 console.log( maxShoppingCart(shoppingCart));

/* EXTRA 5
 Nel tuo eCommerce disponi di un'array di oggetti chiamato "shoppingCart". Ognuno di questi oggetti ha le seguenti proprietà: "price", "name", "id" e "quantity".
 Crea una funzione chiamata "latestShoppingCart" che riceve l'array "shoppingCart" e ritorna l'ultimo elemento.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
function latestShoppingCart(cart) {
    return cart[cart.length -1]
}
 console.log( latestShoppingCart(shoppingCart));

 /* EXTRA 6
 Crea una funzione chiamata "loopUntil" che riceve un numero intero come parametro con valore tra 0 e 9.
 La funzione è composta da un ciclo che stampa un numero casuale tra 0 e 9 finchè il numero casuale non è maggiore di x per tre volte di fila.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function loopUntil(x) {
    let numbers = [0,1,2,3,4,5,6,7,8,9]
    let randNumbers = []
    
    let i = 0
    
    while (i < 3) {
        let rand = Math.floor(Math.random() * numbers.length);
        randNumbers.push(numbers[rand])
        if ( rand > x ){ i++ }
    }
    return randNumbers
    
}

console.log(loopUntil(2));

/* EXTRA 7
Crea una funzione chiamata "average" che riceve un array come parametro e ne ritorna la media aritmetica. La funzione salta automaticamente i valori non numerici nell'array.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
function average(arr) {
    let sum = 0
    let idx = 0
    for ( let char of arr){
        if (typeof char === 'number' ){
             sum += char
             idx++
        }
    }
    return sum / idx
}

let test = ['a', 1, '4', 'ciao', 10, '12']
console.log(average(test))
/* EXTRA 8
 Crea una funzione chiamata "longest" che trova la stringa più lunga all'interno di un array di stringhe fornito come parametro.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function longest(strs) {
    let maxStr = strs.reduce((a,b)=>{
        return a.length > b.length ? a : b
    })
    return maxStr
}
let strings = ["Crea", "una", "funzione", "chiamata", "longest", "che", "trova", "la", "stringa"]
 console.log( longest(strings));


/* EXTRA 9
 Crea una funzione per creare un filtro anti-spam per la tua casella email. La funzione riceve un parametro stringa chiamato "emailContent", e torna un valore booleano.
 La funzione deve ritornare true se "emailContent" non contiene le parole "SPAM" o "SCAM".
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function spamFilter(str) {
    let spam = str.includes("SPAM")
    let scam = str.includes("SCAM")
    return !spam && !scam ? true : false
}

console.log(spamFilter("Hello world, welcome to the universe."));
/* EXTRA 10
 Scrivi una funzione che riceve una data come parametro, e calcola il numero di giorni passati da quella data.
*/

/* SCRIVI QUI LA TUA RISPOSTA */


function dayDiff(day) {
    return Math.floor((new Date() - new Date(day)) / (1000 * 3600 * 24))
}
console.log(dayDiff('04/10/2022'));
  
/* EXTRA 11
 Scrivi una funzione chiamata "matrixGenerator" che riceve come paremetri due numeri interi, "x" e "y".
 Il risultato deve essere una matrice di "x" volte "y", e i valori devono rispecchiare gli indici della posizione all'interno della matrice.
 Es.: x = 3, y = 2
 ["00","01","02"
 "10","11","12"]
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let arr = [
    ['00', '01', 02]
    ['10', '11', 12]
]

function matrixGenerator(x,y) {
    let matrix = []
    for(let iy = 0; iy < y; iy++){
        matrix[iy] = []
        for(let ix = 0; ix < x; ix++){
            matrix[iy][ix] = `${iy}${ix}`
        }
    }
    return matrix
}

console.log(matrixGenerator(3,2));