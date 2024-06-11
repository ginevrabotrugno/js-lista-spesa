// Data una lista della spesa;

const shoppingList = ["pasta", "latte", "uova", "farina"];

// Stampare tutti gli elementi della lista della spesa, all'interno di una lista in HTML

// seleziono la lista in html
const ul = document.querySelector(".list");

// scorro gli elementi della lista (while)
// dichiaro la variabile indice fuori dal ciclo 
let i = 0;

while (i < shoppingList.length) {
    const shoppingItem = shoppingList[i];

    i++

    console.log(shoppingItem);

    // creo l'elemento da aggiungere in html
    let li = `<li> ${shoppingItem} </li>`;

    // aggiungo ogni elemento alla lista in html
    ul.innerHTML += li;
}


