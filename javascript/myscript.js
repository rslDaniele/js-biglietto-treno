// ESERCIZIO: utente seleziona destinazione treno in km, prezzo 0,21/km. Sconto 20% per minorenni, 40% over 65

// Utente inserisce numero di Km

var chilometri = prompt("Quanti chilometri percorrerai?");

// Utente inserisce età

var eta = prompt("Quanti anni hai?")

// definizione prezzo biglietto

var prezzo;

prezzo = chilometri * 0.21 ;

console.log(prezzo);

// calcolo percentuali sconto

var percentuale18 = 20

var percentuale65 = 40

var scontoUnder = (percentuale18 / 100) * prezzo

var scontoOver = (percentuale65 / 100) * prezzo

console.log(scontoUnder, scontoOver)

// calcolo del prezzo

if (eta < 18){
  prezzo = (prezzo - scontoUnder );
} else if (eta > 65) {
  prezzo = (prezzo - scontoOver );

}

console.log(prezzo)


// stampa del prezzo finale

document.getElementById('titolo').InnerHTML = "Ecco il tuo biglietto! Sono " + prezzo
