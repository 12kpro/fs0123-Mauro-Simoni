document.addEventListener('DOMContentLoaded', (event) => {    //DOMContentLoaded     attendo che la pagina abbia finito di caricare, altrimenti lo script va messo prima della chiusura del body

    let todo = document.querySelector('header input[type=text]')  //Seleziono il tag <input> dove inseriamo il testo
    let todoSend = document.querySelector('#add')                 //Selezioni il tasto aggiungi id="add" 
    let main = document.querySelector('main')                     //Seleziono il <tag> main
    let tasks = []                                                //Creo un array dove inserisco i to-do, verrà utilizzato successivamnete per creare un numero progressivo

    todoSend.addEventListener('click',function (e) {              //Aggiungo un'evento al tasto aggiungi che reagirà al click 
        if( todo.value ){                                         //Se il l'input non ha valore non faccio niente                  
            let newtask = createTask(tasks.push(todo.value),todo) //Se il l'input ha valore  inserisco la stringa nell'array e ivoco la funzione create task.L'elemento creato lo metto nella variabile newTask
            main.appendChild(newtask)                             //Inserisco il nuovo to-do nel main della pagina
        }
    })


    function createTask (id,todo) {
        let newTask = document.createElement("div");             //Creo un nuovo oggetto di tipo <div> e lo metto nella vaiabile newTask
            newTask.classList.add('task')                        //Gli assegno una classe
            newTask.setAttribute("id", "task_" + id)             //Aggiungo un attributo id concatenando "task" alla lunghezza attuale del array
            newTask.textContent = todo.value                     //Inserisco il valore del input nel div appena creato

        let newDelete = document.createElement("span");          //Creo un nuovo oggetto <span> che servira da bottone per rimuovere successivamente il nuovo task
            newDelete.classList.add('close')                     //Assegno la classe "close" allo span appena creato

            newTask.addEventListener('click',function(e){        //Aggiungo un evento al <div> task per farlo reagire al click
                newTask.classList.toggle('completed')            //Se viene clikkato aggiungo la classe "completed", al click successivo la rimuovo ( toggle )
            })

            newDelete.addEventListener('click',function(e){      //Aggiungo un evento al bottone cancella per farlo reagire al clik
                tasks.splice(id - 1 , 1);                        //Quando viene clikkato rimuovo il task dal array ( id = task.length, quindi id -1 )
                newTask.remove()                                 //Rimuovo Il div task corrispondente dalla pagina
            })

            newTask.appendChild(newDelete)                       //Aggiungo il tasto cancella al div task
            todo.value = ''                                      //Azzero il valore dell'input in modo da poter inserire un0altro to-do

            return newTask                                       // ritorno l'oggetto completo
    }
});
/*** La funzione createTask restituisce un elemento così:
 * <div class="task" id="task_1">
 * Ciao
 * <span class="close"></span
 * ></div>
 */


/**** Per documentazione
 * https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelector
 * https://www.w3schools.com/howto/howto_js_toggle_class.asp
 * https://developer.mozilla.org/en-US/docs/Web/API/Document/createElement
 * https://developer.mozilla.org/en-US/docs/Web/API/Element/classList
 * https://developer.mozilla.org/en-US/docs/Web/API/Element/setAttribute
 * https://www.w3schools.com/jsref/met_node_appendchild.asp
 * https://developer.mozilla.org/en-US/docs/Web/API/Element/remove
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/push  --> Return value
 */
