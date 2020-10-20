// ESERCIZIO: utente seleziona destinazione treno in km, prezzo 0,21/km. Sconto 20% per minorenni, 40% over 65

// Utente inserisce numero di Km

var chilometri = prompt("Quanti chilometri percorrerai?");

// Utente inserisce età

var eta = prompt("Quanti anni hai?")

// definizione prezzo biglietto

var prezzo;

prezzo = chilometri * 0.21 ;

console.log(prezzo);

// calcolo del prezzo

if (eta < 18){
  prezzo = (prezzo - 2 );
} else if (eta > 65) {
  prezzo = (prezzo + 2 );

}

console.log(prezzo)




// stampa del prezzo finale
