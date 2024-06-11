// Data una lista della spesa vuota;
const shoppingList = [];

// selezioni il bottone
const button = document.querySelector(".button");

// seleziono la lista in html
const ul = document.querySelector(".list");

// gestisco l'interazione al click
button.addEventListener('click',

    function(){

        // seleziono il valore dell'input dell'utente
        const itemInput = document.querySelector(".input_item").value ; 

        // aggiungo il balore dell'input all'array
        shoppingList.push(itemInput);

        // stampo la lista in console
        console.log(shoppingList);

        // scorro gli elementi della lista (while)
        // dichiaro la variabile indice fuori dal ciclo 
        let li;
        let i = 0;
        while (i < shoppingList.length) {
            
            const shoppingItem = shoppingList[i];

            i++

            console.log(shoppingItem);

            // creo l'elemento da aggiungere in html
            li = `<li> ${shoppingItem} </li>`;

        }

        // aggiungo ogni elemento alla lista in html
        ul.innerHTML += li;
    }

    
)



// // seleziono la lista in html
// const ul = document.querySelector(".list");
// // scorro gli elementi della lista (while)
// // dichiaro la variabile indice fuori dal ciclo 
// let i = 0;
// while (i < 20) {
//     const shoppingItem = shoppingList[i];

//     i++

//     console.log(shoppingItem);

//     // creo l'elemento da aggiungere in html
//     let li = `<li> ${shoppingItem} </li>`;

//     // aggiungo ogni elemento alla lista in html
//     ul.innerHTML += li;
// }


