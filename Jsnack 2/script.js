/*
Crea 10 oggetti che rappresentano una zucchina.
Dividi in due array separati le zucchine che misurano meno o più di 15cm. Infine stampa separatamente quanto pesano i due gruppi di zucchine.
*/

const zucchine = [

  {
    varietà: "nera",
    kg: 2,
    cm: 30,
  },

  {
    varietà: "romanesco",
    kg: 4,
    cm: 20,
  },

  {
    varietà: "fiorentina",
    kg: 1,
    cm: 22,
  },
  
  {
    varietà: "napoletana",
    kg: 3,
    cm: 27,
  },
  
  {
    varietà: "tonde",
    kg: 2,
    cm: 25,
  },
  
  {
    varietà: "trombetta",
    kg: 5,
    cm: 40,
  },
  
  {
    varietà: "ortolano",
    kg: 2,
    cm: 24,
  },
  
  {
    varietà: "siciliano",
    kg: 3,
    cm: 18,
  },
  
  {
    varietà: "bianca",
    kg: 7,
    cm: 14,
  },
  
  {
    varietà: "rigata",
    kg: 3,
    cm: 32,
  }

]

const conditionCentimetri = 15;

const zucchineLunghe = []; //maggiori di 15cm
const zucchineCorte = []; //minori o uguale di 15cm


for (const index in zucchine) {

  const peso = zucchine[index].kg;
  const lunghezza = zucchine[index].cm;

  if (lunghezza > conditionCentimetri){
    zucchineLunghe.push(zucchine[index]); //comando per inserire le zucchine > 15cm nell'array
  } else {
    zucchineCorte.push(zucchine[index]); //comando per inserire le zucchine < 15cm nell'array
  }

}

console.log("zucchineLunghe", zucchineLunghe);
console.log("zucchineCorte", zucchineCorte);

let pesoTotZucchineLunghe = 0;
let pesoTotZucchineCorte = 0;

for (const index in zucchineLunghe) {
  const pesoZucchineLunghe = zucchineLunghe[index].kg;
  pesoTotZucchineLunghe += pesoZucchineLunghe;

}

console.log(pesoTotZucchineLunghe); //peso array zucchine > 15cm


for (const index in zucchineCorte) {
  const pesoZucchineCorte = zucchineCorte[index].kg;
  pesoTotZucchineCorte += pesoZucchineCorte;
}

console.log(pesoTotZucchineCorte); //peso array zucchine < 15cm
