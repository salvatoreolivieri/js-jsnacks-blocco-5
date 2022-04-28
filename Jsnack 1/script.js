/*
Crea un array di 10 oggetti che rappresentano una zucchina, indicando per ognuna varietà, kg e lunghezza.
Calcola quanto pesano tutte le zucchine.
*/

const zucchine = [

  {
    varietà: "nera",
    kg: 2,
    lunghezza: "30cm",
  },

  {
    varietà: "romanesco",
    kg: 4,
    lunghezza: "20cm",
  },

  {
    varietà: "fiorentina",
    kg: 1,
    lunghezza: "22cm",
  },
  
  {
    varietà: "napoletana",
    kg: 3,
    lunghezza: "27cm",
  },
  
  {
    varietà: "tonde",
    kg: 2,
    lunghezza: "25cm",
  },
  
  {
    varietà: "trombetta",
    kg: 5,
    lunghezza: "40cm",
  },
  
  {
    varietà: "ortolano",
    kg: 2,
    lunghezza: "24cm",
  },
  
  {
    varietà: "siciliano",
    kg: 3,
    lunghezza: "18cm",
  },
  
  {
    varietà: "bianca",
    kg: 7,
    lunghezza: "14cm",
  },
  
  {
    varietà: "rigata",
    kg: 3,
    lunghezza: "32cm",
  }

]


let pesoTot = 0;

for (const index in zucchine) {

  const peso = zucchine[index].kg;
  console.log(peso);

  pesoTot += peso;

}

console.log(pesoTot);