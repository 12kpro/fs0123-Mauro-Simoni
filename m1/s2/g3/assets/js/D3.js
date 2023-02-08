/* ESERCIZIO 1
 Scrivi un algoritmo per trovare il più grande tra due numeri interi.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
// check the condition
let n = 5
let n1 = 1
let n2 = 5
let res = ''

if(n1 > n2 ) {
  res = n1;
} else {
  res = n2;
}
console.log(res);
// oppure
res = ( n1 > n2 ) ? n1 : n2;
console.log(res);
// oppure 
console.log(Math.max(n1, n2));
/* ESERCIZIO 2
  Scrivi un algoritmo che mostri "not equal" in console se un numero intero fornito è diverso da 5.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
n = 7;
let res1 = ( !( n > 5 || n < 5 ) && n == 5 ) ? "Equal" : "Not equal";
console.log(res1);
/* ESERCIZIO 3
  Scrivi un algoritmo che mostri "divisibile per 5" in console se un numero fornito è perfettamente divisibile per 5 (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/

/* SCRIVI QUI LA TUA RISPOSTA */
n = 5
let res2 = ( n%5 === 0 ) ? "Divisibile" : "Non divisibile";
console.log(res2);
/* ESERCIZIO 4
  Scrivi un algoritmo per verificare che, dati due numeri interi, il valore di uno di essi sia 8 oppure se la loro addizione/sottrazione sia uguale a 8.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
n = 1
n1 = 8
let res3 =  ( n == 8 || n1 == 8  || n + n1 == 8 || n - n1 == 8 ) ? "vero" : "falso"
console.log(res3);

/* ESERCIZIO 5
  Stai lavorando su un sito di e-commerce. Stai salvando il saldo totale del carrello dell'utente in una variabile "totalShoppingCart".
  C'è una promozione in corso: se il totale del carrello supera 50, l'utente ha diritto alla spedizione gratuita (altrimenti la spedizione ha un costo fisso pari a 10).
  Crea un algoritmo che determini l'ammontare totale che deve essere addebitato all'utente per il checkout.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let totalShoppingCart = 100
let res4 = ( totalShoppingCart  > 50 ) ? totalShoppingCart : totalShoppingCart + 10
console.log(res4);

/*
  if ( totalShoppingCart  > 50 ){
    totalShoppingCart 
  }else{
    totalShoppingCart + 10
  }
*/
/* ESERCIZIO 6
  Stai lavorando su un sito di e-commerce. Oggi è il Black Friday e viene applicato il 20% su ogni prodotto.
  Modifica la risposta precedente includendo questa nuova promozione nell'algoritmo, determinando come prima se le spedizioni sono gratuite oppure no e e calcolando il totale.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let prodotti = {
  prezzo1: 320,
  prezzo2: 20,
  prezzo3: 30
}
/*
prezzo = 100%
sconto = 20%
prezzo scontato = 80%
prezzo - ( prezzo * 0.2 )
*/

totalShoppingCart = prodotti.prezzo1 * 0.8 + prodotti.prezzo2 * 0.8 + prodotti.prezzo3 * 0.8
let res5 = ( totalShoppingCart  > 50 ) ? totalShoppingCart : totalShoppingCart + 10
console.log(res5);

/* ESERCIZIO 7
  Crea tre variabili, e assegna un valore numerico a ciascuna di esse.
  Utilizzando un blocco condizionale, crea un algoritmo per ordinarle secondo il loro valore, dal più alto al più basso.
  Alla fine mostra il risultato in console.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
n = 3 
n1 = 1
n2 = 2

if ( n > n1 && n > n2 ){
        if ( n1 > n2 ){
            console.log(`${n},${n1},${n2}`)
        }else{
            console.log(`${n},${n2},${n1}`)
        }
} else if ( n1 > n && n1 > n2 ) {
        if ( n > n2 ){
             console.log(`${n1},${n},${n2}`)
        } else {
             console.log(`${n1},${n2},${n}`)
        }
} else if ( n2 > n && n2 > n1 ) {
        if ( n > n1 ){
            console.log(`${n2},${n},${n1}`)
        } else {
            console.log(`${n2},${n1},${n}`)
        }
}  

/* ESERCIZIO 8
  Crea un algoritmo per verificare che un valore fornito sia un numero oppure no (suggerimento: cerca su un motore di ricerca "typeof").
*/

/* SCRIVI QUI LA TUA RISPOSTA */
n = 1
let res7 = ( typeof n === 'number' ) ? "Si" : "No"
console.log(res7);


/* ESERCIZIO 9
  Crea un algoritmo per controllare se un numero fornito sia pari o dispari (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/

/* SCRIVI QUI LA TUA RISPOSTA */
n = 5
let res8 = ( n%2 === 0 ) ? "Pari" : "Dispari";
console.log(res8);

/* ESERCIZIO 10
  Modifica la logica del seguente algoritmo in modo che mostri in console il messaggio corretto in ogni circostanza.
  let val = 7
  if (val < 10) {
      console.log("Meno di 10");
    } else if (val < 5) {
      console.log("Meno di 5");
    } else {
      console.log("Uguale a 10 o maggiore");
    }
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let val = 1
if (val < 5) {
    console.log("Meno di 5");
  } else if (val < 10) {
    console.log("Meno di 10");
  } else {
    console.log("Uguale a 10 o maggiore");
  }



/* ESERCIZIO 11
  Fornito il seguente oggetto, scrivi del codice per aggiungere una proprietà "city", il cui valore sarà "Toronto".
*/

const me = {
  name: 'John',
  lastName: 'Doe',
  skills: ['javascript', 'html', 'css'],
}

/* SCRIVI QUI LA TUA RISPOSTA */
 me.city = 'Toronto'
 console.table(me)
/* ESERCIZIO 12
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere la proprietà "lastName".
*/

/* SCRIVI QUI LA TUA RISPOSTA */
delete me.lastName
console.table(me)
/* ESERCIZIO 13
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere l'ultimo elemento della proprietà "skills".
*/


/* SCRIVI QUI LA TUA RISPOSTA */
me.skills.pop()
console.table(me)
/* ESERCIZIO 14
  Scrivi del codice per creare un array inizialmente vuoto. Riempilo successivamente con i numeri da 1 a 10.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
// let arr = Array.from({ length: 10 }, (value, index) => index +1); <-- alternativa
let arr = []
arr.push(1)
arr.push(2)
arr.push(3)
arr.push(4)
arr.push(5)
arr.push(6)
arr.push(7)
arr.push(8)
arr.push(9)
arr.push(10)
console.log(arr);

/* ESERCIZIO 15
  Scrivi del codice per sostituire l'ultimo elemento dell'array, ovvero il valore 10, con il valore 100.
*/
/* SCRIVI QUI LA TUA RISPOSTA */
arr[arr.length - 1] = 100
console.log(arr);