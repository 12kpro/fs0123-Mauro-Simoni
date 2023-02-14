/* ESERCIZIO 1
  Scrivi una funzione per concatenare due stringhe ricevute come parametri, selezionando solamente i primi 2 caratteri della
  prima e gli ultimi 3 della seconda. Converti la stringa risultante in maiuscolo e mostrala con un console.log().
*/
function concatToUpper(str1,str2) {
      str1 = str1.slice(0,2)                   //parto da indice 0 e prendo 2 caratteri, quindi indice 0 e 1
      str2 = str2.slice(str2.length - 3)       // ultimo - 3, calcolo indice di partenza e omettendo il numero caratteri, slice prende fino alla fine
      return str1.concat(str2).toUpperCase()
      // return [...str1,...str2];             // --> concatenamento alternativo
}
console.log(concatToUpper('ciao','michele'));
/* ESERCIZIO 2
  Scrivi una funzione per creare un array di soli valori DISPARI da 1 a 100.
 */
function oddArray(n) {
  numbers = []
  for (let i = 1; i <= n ; i++) {
    if ( i%2 ){ numbers.push(i)} // 0 è valutato  falso, 1 è valutato vero, quindi i numeri pari hanno modulo 0
  }
  /*
  2%2 = 0 pari 
  3%2 = 1 dispari
  4%2 = 0 pari    4/2 = 2 resto( modulo) = 0
  5%2 = 1 dispari 5/2 = 2 resto( modulo) = 1
  */
  return numbers
}
// oppure 
//Array.from({length: 10}, (_, i) => i + 1)
//=> [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
function oddArrayV2(n) {
  numbers = Array.from({length: n}, (_, i) => i + 1)
  return numbers.filter((a) => a%2 )
}

console.log(oddArray(100));
console.log(oddArrayV2(100));
/* ESERCIZIO 3
  Scrivi una funzione per creare un array di soli valori multipli di 5, da 1 a 100.
 */
  function fiveMultiples(n) {
    numbers = []
    for (let i = 1; i <= n; i++) {
      if ( i%5 === 0 ){ numbers.push(i)}
    }
      /*
  5%5 = 0 pari    5/5 = 1 resto( modulo) = 0
  9%5 = 1 dispari 9/5 = 1 resto( modulo) = 4
  */
    return numbers
  }
  // oppure
  function fiveMultiplesV2(n) {
    numbers = Array.from({length: n}, (_, i) => i + 1) // (_, i) => i + 1) funzione map _ indice, i valore, ci serve un array da 1 a 100
    return numbers.filter((a) => a%5 === 0 )
  }
  console.log(fiveMultiples(100));
  console.log(fiveMultiplesV2(100));

/* ESERCIZIO 4
  Scrivi una funzione per creare un array di 10 elementi; ognuno di essi deve essere un valore random compreso tra 0 e 100 (incluso).
 */
  function giveMeRandom(n) {
    let numbers = [...Array(n+1).keys()]  // forma contratta per creare array da 0 a 100
    let randNumbers = []
        for(let i = 0; i < 10; i++){
            let rand = Math.floor(Math.random() * numbers.length);
            randNumbers.push(numbers[rand])
        }
        return randNumbers;
}
console.log(giveMeRandom(100));
/* ESERCIZIO 5
  Scrivi una funzione per ricavare solamente i valori PARI da un array composto da soli valori numerici.
 */
  function evenArray(n) {
    numbers = []
    for (let i = 0; i < n.length; i++) {
      if ( n[i]%2 === 0 ){ numbers.push(i)} // [i] indica che sto andando a beccare l'indice dell'array
    }
    return numbers
  }
  // oppure
  function evenArrayV2(n) {
    return n.filter((a) => a%2 === 0 )
  }
  console.log(evenArray([...Array(50).keys()]));
  console.log(evenArrayV2([...Array(50).keys()]));

/* ESERCIZIO 6
  Scrivi una funzione per sommare a catena i numeri contenuti in un array.
 */
  function sumArray(n) {
    return n.reduce((a, b) => a + b, 0) // 0 è la condizione di partenza perchè a inizialmente è indefinita
  }
  console.log( sumArray([...Array(5).keys()])); // => [0,1,2,3,4]

/* ESERCIZIO 7
  Scrivi una funzione per incrementare di 1 tutti i valori numerici in un array.
*/
function addOneArray(n) {
  return n.map((a) => a + 1)
}
console.log( addOneArray([...Array(5).keys()])); // => [0,1,2,3,4]
/* ESERCIZIO 8
  Sostituisci ogni stringa contenuta in un array con un numero rappresentante la sua lunghezza.
  es.: ["EPICODE", "is", "great"] => [7, 2, 5]
*/
function toLength(n) {
  return n.map((a) => a.length) // .length retituisce la lungheza di ogni stringa
}
console.log( toLength(['ciao', 'treviso', 'metereologia']));


/* ESERCIZIO 9 (EXTRA)
  Scrivi una funzione per eliminare solo i valori PARI da un array.
*/
function evenRemove(n) {
  return n.filter((e) => e%2) //come su es 2
}
console.log( evenRemove([...Array(5).keys()]));



/* ESERCIZIO 10 (EXTRA)
  Scrivi una funzione per creare un array di 10 elementi; ognuno di essi deve essere un valore random compreso tra 0 e 10 (incluso), SENZA AMMETTERE DUPLICATI.
 */
  function giveMeRandomNoDuplicate() {
    let randNumbers = []
        for(let i = 0; i < 10; i++){
            let rand = Math.floor(Math.random() * 11); // 11 perche 10 è inculso 
            ( !randNumbers.includes(rand) ) ? randNumbers.push(rand) : i-- //i-- mi scala l'indice di 1
        }
        return randNumbers;
}
console.log(giveMeRandomNoDuplicate());
/* ESERCIZIO 11 (EXTRA)
  Scrivi un algoritmo in grado di invertire un array.
  es: [1, 3, 5] ==> [5, 3, 1]
*/
function reverseArray(n) {
  let reverseArray= []
  for (let i = n.length -1; i > 0; i--) {
    reverseArray.push(n[i])
  }
  return reverseArray
}
console.log(reverseArray([...Array(5).keys()]));

/* Questo array di film verrà usato negli esercizi a seguire. Non modificarlo e scorri oltre per riprendere gli esercizi :) */
const movies = [
  {
    Title: 'The Lord of the Rings: The Fellowship of the Ring',
    Year: '2001',
    imdbID: 'tt0120737',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_SX300.jpg',
  },
  {
    Title: 'The Lord of the Rings: The Return of the King',
    Year: '2003',
    imdbID: 'tt0167260',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BNzA5ZDNlZWMtM2NhNS00NDJjLTk4NDItYTRmY2EwMWZlMTY3XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg',
  },
  {
    Title: 'The Lord of the Rings: The Two Towers',
    Year: '2002',
    imdbID: 'tt0167261',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BNGE5MzIyNTAtNWFlMC00NDA2LWJiMjItMjc4Yjg1OWM5NzhhXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg',
  },
  {
    Title: 'Lord of War',
    Year: '2005',
    imdbID: 'tt0399295',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMTYzZWE3MDAtZjZkMi00MzhlLTlhZDUtNmI2Zjg3OWVlZWI0XkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg',
  },
  {
    Title: 'Lords of Dogtown',
    Year: '2005',
    imdbID: 'tt0355702',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BNDBhNGJlOTAtM2ExNi00NmEzLWFmZTQtYTZhYTRlNjJjODhmXkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg',
  },
  {
    Title: 'The Lord of the Rings',
    Year: '1978',
    imdbID: 'tt0077869',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BOGMyNWJhZmYtNGQxYi00Y2ZjLWJmNjktNTgzZWJjOTg4YjM3L2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg',
  },
  {
    Title: 'Lord of the Flies',
    Year: '1990',
    imdbID: 'tt0100054',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BOTI2NTQyODk0M15BMl5BanBnXkFtZTcwNTQ3NDk0NA@@._V1_SX300.jpg',
  },
  {
    Title: 'The Lords of Salem',
    Year: '2012',
    imdbID: 'tt1731697',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMjA2NTc5Njc4MV5BMl5BanBnXkFtZTcwNTYzMTcwOQ@@._V1_SX300.jpg',
  },
  {
    Title: 'Greystoke: The Legend of Tarzan, Lord of the Apes',
    Year: '1984',
    imdbID: 'tt0087365',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMTM5MzcwOTg4MF5BMl5BanBnXkFtZTgwOTQwMzQxMDE@._V1_SX300.jpg',
  },
  {
    Title: 'Lord of the Flies',
    Year: '1963',
    imdbID: 'tt0057261',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BOGEwYTlhMTgtODBlNC00ZjgzLTk1ZmEtNmNkMTEwYTZiM2Y0XkEyXkFqcGdeQXVyMzU4Nzk4MDI@._V1_SX300.jpg',
  },
  {
    Title: 'The Avengers',
    Year: '2012',
    imdbID: 'tt0848228',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg',
  },
  {
    Title: 'Avengers: Infinity War',
    Year: '2018',
    imdbID: 'tt4154756',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg',
  },
  {
    Title: 'Avengers: Age of Ultron',
    Year: '2015',
    imdbID: 'tt2395427',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMTM4OGJmNWMtOTM4Ni00NTE3LTg3MDItZmQxYjc4N2JhNmUxXkEyXkFqcGdeQXVyNTgzMDMzMTg@._V1_SX300.jpg',
  },
  {
    Title: 'Avengers: Endgame',
    Year: '2019',
    imdbID: 'tt4154796',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_SX300.jpg',
  },
]

/* ESERCIZIO 12
  Scrivi una funzione per trovare il film più vecchio nell'array fornito.
*/
function tooOld(n) {
  return n.reduce((a,b) => a.Year > b.Year ? a : b )
}
console.log( tooOld(movies));
/* ESERCIZIO 13
  Scrivi una funzione per ottenere il numero di film contenuti nell'array fornito.
*/
function findType(n) {
  return n.length
  /*  oppure
      let movies = n.filter(movie => movie.Type === 'movie')
      return movies.length
  */
}
console.log( findType(movies));
/* ESERCIZIO 14
  Scrivi una funzione per creare un array con solamente i titoli dei film contenuti nell'array fornito.
*/
function titleArray(n) {
  return n.map((movie) => movie.Title)  // map scorre tutto l'array movies e restituisce un array contenente i titoli ( movie.title )
}
console.log( titleArray(movies));
/* ESERCIZIO 15
  Scrivi una funzione per ottenere dall'array fornito solamente i film usciti nel millennio corrente.
*/
function yearMovies(n) {
  return n.filter(movie => movie.Year  >= 2000 && movie.Year  < 3000 ) // filter restituisce un array contente tutti i film ( movie)  valutati dalla condizione
}
console.log( yearMovies(movies));
/* ESERCIZIO 16
  Scrivi una funzione per ottenere dall'array fornito uno specifico film (la funzione riceve un imdbID come parametro).
*/
function findmovie(n,imd) {
  return n.find(movie => movie.imdbID === imd ) // come sopra ma ristituisce solo la prima occorrenza
}
console.log( findmovie(movies,'tt0167261'));
/* ESERCIZIO 17
  Scrivi una funzione per calcolare la somma di tutti gli anni in cui sono stati prodotti i film contenuti nell'array fornito.
*/

function sumYear(n) {         // dentro ad a c'è sempre un valore ( somma di a + b.Year ), mai un oggetto. L'oggetto è presente solo in b
  return n.reduce((a, b) => {
    return a + Number(b.Year)
  },0)
}
console.log( sumYear(movies));
/* ESERCIZIO 18 (EXTRA)
  Scrivi una funzione per recuperare tutti i film dall'array fornito che contengono una parola fornita.
*/
function findByWord(n,word) {
  return n.filter(movie => {
    let str = word.toLowerCase()
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/values?retiredLocale=it
    // Object.values restituisce un array contenete i valori delle chiavi dell'oggetto
    let txt = Object.values(movie).join(" ").toLowerCase().search(str);
    return txt != -1
  })
}

console.log( findByWord(movies,'Flies'));