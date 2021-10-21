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

let costoBase = kmUtente * 0.21;
console.log("Il totale per km è: ", costoBase);

let sconto;

if (ageUtente < 18) {
    // sconto minorenni
    sconto = (costoBase / 100) * 20;
} else if (ageUtente > 65) {
    // sconto over 65
    sconto = (costoBase / 100) * 40;
} else {
    sconto = 0;
}

const prezzoFinale = costoBase - sconto;
document.getElementById('mio_id').innerHTML = 'Il prezzo finale è '+ prezzoFinale.toFixed(2);
console.log(prezzoFinale);





