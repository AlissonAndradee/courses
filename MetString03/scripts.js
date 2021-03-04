// - Métodos de string: split
// - aula 149
// - Divide uma string por um separador, e retorna um array

let frase = "O rato roeu a roupa do rei de roma";

let palavras = frase.split(" ");

console.log(palavras);

// - exemplo 2

let frase2 = "Testando esta frase"

let palavras2 = frase2.split(" ");

console.log(palavras2);

// - exemplo 3 com ponto e virgula

let frutas = "Maça;Pera;Uva;Goiaba";
console.log(frutas.split(';'));

// - exemplo 4 com virgula 
// - muito comum em json

let frase3 = "Brasil,um,país,de,todos";
console.log(frase3.split(','));
