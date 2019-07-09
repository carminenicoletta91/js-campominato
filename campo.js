/*Il computer deve generare 16 numeri casuali da 1 a 100.
In seguito deve chiedere all’utente di inserire un numero da 1 a 100 alla volta,
  se il numero è presente nella lista dei numeri generati, la partita termina,
  altrimenti continua chiedendo all’utente un altro numero.
La partita termina quando il giocatore inserisce un numero “vietato” o raggiunge
  il numero massimo possibile di numeri consentiti.
Al termine della partita il software deve comunicare il punteggio,
  cioè il numero di volte che l’utente ha inserito un numero consentito.*/

// array contenente i 16 numeri random
var numero = [];
for(var i = 1; i <= 16; i++){
  numero.push(generaNum(100,1));
}
  console.log(numero);
// ciclo inserimento numeri da utente
var inserisci;punteggio = 0;
for (var j = 1; j < 85; j++){
  inserisci = parseInt(prompt( "Inserisci un numero" ));
  console.log( "numero " + j + ":" + inserisci );
  for(var k = 0; k < 16; k++){
    // condizione di termine ciclo
  if(inserisci === numero[k] ){
    alert("trovato");
    j = 100;
    punteggio = punteggio -1;
    break;
  }
}
  punteggio = punteggio + 1;
}
console.log(punteggio);



// creo funzione per generare numeri random
function generaNum(max , min) {
  var risultato = Math.floor(Math.random() * (max)+min);
  return risultato;
}
