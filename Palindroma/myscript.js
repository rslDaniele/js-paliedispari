// Chiedere all’utente di inserire una parola
// Creare una funzione per capire se la parola inserita è palindroma

// User inserts a word

var parola = prompt("Inserisci una parola, vediamo se è palindroma!");
console.log(parola);

// system checks if parola is a palindrome word


function checkPalindroma(parola) {
  if (parola === parola.split('').reverse().join('')) {
    document.write("la parola è palindroma!");
    console.log(risposta);
  } else {
    document.write("la parola non è palindorma!");
    console.log(risposta);
  }
}

checkPalindroma(parola);
