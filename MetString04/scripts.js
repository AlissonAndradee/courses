// - Métodos de string: join
// - aula 150
// - Junta elementos em um array em uma frase, 
// - por meio de um separador;

let frase = "Testando o método split";

let palavras = frase.split(" ");

let novaFrase = palavras.join("@");

console.log(novaFrase);

console.log(palavras.join(" "));
