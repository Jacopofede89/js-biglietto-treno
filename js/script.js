// Il programma dovrà chiedere all’utente: 
// -il numero di chilometri che vuole percorrere 
// -l’età del passeggero.

// Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
// il prezzo del biglietto è definito in base ai km (0.21 € al km)
// applica uno sconto del 20% per i minorenni
// applica uno sconto del 40% per gli over 65

// Chiediamo all'utente quanti km vuole percorrere

const kmUtente = prompt("Quanti km vuoi percorrere?");
console.log(kmUtente);

// Chiediamo all'utente quanti anni ha

const ageUtente = prompt("Quanti anni hai?");
console.log(ageUtente);


// Generare il prezzo del biglietto

let kmGeneretor = kmUtente * 0.21;
console.log("Il totale per km è: ", kmGeneretor);

// Applicare uno sconto del 20% per i minorenni

var discount = (kmGeneretor / 100) * 20;
console.log("sconto: ", discount);

let discountUnder =  kmGeneretor - discount;
console.log("Lo sconto per gli under18 è: ", discountUnder);


// if(ageUtente < 18){
//     discount = kmGeneretor - 20;
// } else (ageUtente > 65){
//      discount = kmGeneretor - 40;
// }
// console.log("Lo sconto per gli under18 è: ", discount);
