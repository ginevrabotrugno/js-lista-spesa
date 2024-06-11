// Data una lista della spesa vuota;
const shoppingList = [];

// seleziono il valore dell'input dell'utente
const itemInput = document.querySelector(".input_item").value ;

// selezioni il bottone
const button = document.querySelector(".button");

// gestisco l'interazione al click
button.addEventListener('click',

    function(){
        shoppingList.push(itemInput);
        console.log(shoppingList);

        
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


