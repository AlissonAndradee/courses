// Exercicio 31 
// Aula 170
// Crie dois arrays, um com mais de 5 elementos e outro com menos;
// Faça uma função que verifica o número de elementos;
// Se possuir menos que 5, imprima "Poucos elementos" no console;
// Se tiver mais, imprima "Muitos elementos";

let num = [1,2,3,4,5,6,7,8];
let nomes = ["Maria","Amanda","Eduarda"];

function verificaElementosArray(arr) {
    if(arr.length >= 5) {
      console.log("Muitos elementos");
    } else {
      console.log("Poucos elementos");
    }
  }
  
  verificaElementosArray(num);
  verificaElementosArray(nomes);