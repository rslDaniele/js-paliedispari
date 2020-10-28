// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
// Sommiamo i due numeri
// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
// Dichiariamo chi ha vinto.

var sceltaUser = prompt("Pari o Dispari ?")
console.log(sceltaUser);

var sceltaNumero = prompt("Scegli un numero da 1 a 5")

var numeroUser = parseInt(sceltaNumero);
console.log(numeroUser);

var numeroAi =  Math.floor(Math.random() * 5) + 1;
console.log(numeroAi);

// system adds up numeroAi and numeroUser
function sommaNum(numeroAi, numeroUser) {
  var risultato = numeroAi + numeroUser;
  return risultato;
}

var somma = sommaNum(numeroAi, numeroUser);
console.log(somma);
console.log(risultato);

// system checks if somma is even or odd
function evenOdd(somma) {
   if (somma % 2 == 0) {
    document.write("Pari");
  } else {
    document.write("Dispari");
  }

}
// TEST PUSH KRAKEN
evenOdd(somma);
// var risposta = evenOdd(somma);
