// Exercicio_34
// Aula_176
// Crie um array a partir de uma frames;
// Imprima cada palavra do array no console por meio de um for;
// REVISAR SPLIT 
// MetString03

const frase = "Ser um programador bom requer muita prática";

const arrFrase = frase.split(" ");

for(let i = 0; i < arrFrase.length; i++) {
    console.log(arrFrase[i]);
  }
