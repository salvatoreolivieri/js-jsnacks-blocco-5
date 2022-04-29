/*
Crea un array di oggetti, in cui ogni oggetto descrive una bici da corsa con le seguenti proprietà: nome e peso.
Stampa a schermo la bici con peso minore utilizzando destructuring e template literal
*/

const biciDaCorsa = [

  {
    nome: "bmx",
    kg: 8,
  },

  {
    nome: "mountain bike",
    kg: 38,
  },
  
  {
    nome: "pedalata assistita",
    kg: 48,
  },
  
  {
    nome: "graziella",
    kg: 12,
  },
  
  {
    nome: "triciclo",
    kg: 17,
  }

]

let pesoMinore = biciDaCorsa[0].kg;

for (const object of biciDaCorsa) {

  const {kg} = object;
  console.log(kg);

  // Se il peso minore è maggiore del peso degli oggetti che sto ciclando allora il peso diventa uguale al peso di cui è maggiore. Appena becco il peso minore si trasforma in quello e il ciclo si interrompe
  if (pesoMinore > kg) {
    pesoMinore = kg
  }

}

console.log(pesoMinore);