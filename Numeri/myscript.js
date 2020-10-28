// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
// Sommiamo i due numeri
// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
// Dichiariamo chi ha vinto.

var sceltaUser = prompt("Pari o Dispari ?");
console.log(sceltaUser);

var sceltaNumero = parseInt(prompt("Scegli un numero da 1 a 5"));
console.log(sceltaNumero);

var numeroAi =  generaNumero();
console.log(numeroAi);

// FUNZIONE CHE GENERA NUMERO RANDOMICO 1 a 5
function generaNumero() {

  return Math.floor(Math.random() * 5) + 1;
}

// SOMMA I DUE NUMERI
var somma = (numeroAi + sceltaNumero);
console.log(somma);

// FUNZIONE CHE STABILISCE PARI O DISPARI

function evenOdd(x) {
  if (x % 2 === 0) {
    return "pari"
  } else {
    return "dispari"
  }
}

// LANCIO FUNZIONE
// definiesco una variabile di appoggio che permetta di lanciare la funzione e sostituire all'argomento X la mia variabile somma
var esito = evenOdd(somma);
console.log(esito);

// TROVA VINCITORE
if (sceltaUser === esito) {
  document.getElementById('win').innerHTML = "hai vinto!";
} else {
  document.getElementById('win').innerHTML = "hai perso!";
}
