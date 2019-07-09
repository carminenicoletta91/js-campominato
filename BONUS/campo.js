/*Il computer deve generare 16 numeri casuali da 1 a 100.
In seguito deve chiedere all’utente di inserire un numero da 1 a 100 alla volta,
  se il numero è presente nella lista dei numeri generati, la partita termina,
  altrimenti continua chiedendo all’utente un altro numero.
La partita termina quando il giocatore inserisce un numero “vietato” o raggiunge
  il numero massimo possibile di numeri consentiti.
Al termine della partita il software deve comunicare il punteggio,
  cioè il numero di volte che l’utente ha inserito un numero consentito.*/
  var scelta;
  alert("scegli la difficolta");
  alert("0:numeri da 1 a 100");
  alert("1:numeri da 1 a 80");
  alert("2:numeri da 1 a 50");
  scelta = parseInt(prompt("-0-FACILE--1-MEDIA--2-DIFFICILE-"));

 switch (scelta) {
    case 0:
      var max = 100;
      var min = 1;
      var termine = 84;
      break;
    case 1:
      var  max = 80;
      var min =  1;
      var termine = 64;
      break;
    case 2:
      var max = 50;
      var min = 1;
      var termine = 34;
      break;

    default:
      alert("Non ho capito");
 }
// array contenente i 16 numeri random
var numero = [];
for(var i=1;i<=16;i++){
  numero.push(generaNum(max,min));
}
console.log(numero);


var punteggio = 0;

var j = 1;

var trovato = false;
// ciclo inserimento numeri da utente
 while (j <= termine && trovato == false ){
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

    j++;
 }



// creo funzione per generare numeri random
function generaNum(max , min) {
  var risultato = Math.floor(Math.random() * (max)+min);
  return risultato;
}
