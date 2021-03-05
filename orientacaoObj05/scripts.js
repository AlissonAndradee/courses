// // Conceito de Orientação a Objetos
// // AULA 181

// // O que é orientação a objetos 
// // AULA 182
// Uma forma de programar, que utiliza os objetos como o seu principal princípio;
// Além de utilizar conceitos e técnicas que envolvem objetos;
// A maioria dos softwares, na parte de back-end, são desenvolvidos 
// em cima desse paradigma;
// Grandes frameworks se aproveitam desta técnica: Laravel, Django e etc;

// // Metodos
// // AULA 183
// Propriedades que servem como funções;
// Ou seja, as ações dos objetos;
// Invocamos os métodos da mesma maneira que funções;

// // Mais Sobre Métodos 
// // AULA 184
// Normalmente os métodos interagem com os objetos;
// Até mudando os valores da ssuas propriedades para corresponder a 
// lógia do programa desensenvolvido;

// // Protoypes
// // AULA 185
// Um objeto fallback de outro objeto;
// Quando um objeto recebe uma requisição de uma propriedade que 
// não tem, ela é procurada no prototype deste objeto;
// O prototype de um objeto criado do zero é o Object, que tem os 
// métodos nativos da linguagem;

let pessoa = {
    maos: 2
}

console.log(Object.getPrototypeOf(pessoa));
console.log(Object.getPrototypeOf(pessoa) == Object.prototype);

console.log(pessoa.hasOwnProperty('maos'));