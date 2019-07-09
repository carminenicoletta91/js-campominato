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
for(var i=1;i<=16;i++){
  numero.push(generaNum(100,1));
}
console.log(numero);


var punteggio = 0;

var j = 1;

var trovato = false;
// ciclo inserimento numeri da utente
 while (j < 85 && trovato == false ){
   var inserisci = parseInt(prompt( "Inserisci un numero" ));
   while (isNaN (inserisci) ){
     alert( "Npn è un numero" );
     inserisci = parseInt(prompt( "Inserisci un numero" ));
   }
   console.log("Il numero inserito è:" + inserisci);
   var k = 0;
   while (k  < numero.length && trovato == false){
     if (inserisci === numero[k]){
       alert("Trovato");
       trovato = true;
       console.log("Il punteggio finale e':"+punteggio);
     }
     k++;
   }
   if(trovato == false){
     punteggio += 1;
   }
    console.log("la j vale:" + j);
    j++;
 }



// creo funzione per generare numeri random
function generaNum(max , min) {
  var risultato = Math.floor(Math.random() * (max)+min);
  return risultato;
}
