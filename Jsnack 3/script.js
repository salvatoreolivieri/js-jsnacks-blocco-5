/*
Scrivi una funzione che accetti una stringa come argomento e la ritorni girata (es. Ciao -> oaiC)
*/

const word = "anna";

giraparola(word);
console.log(giraparola(word));

function giraparola(str) {
  return str.split("").reverse().join("");
}