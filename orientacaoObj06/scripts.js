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

// Exemplo 01 -

let pessoa = {
    maos: 2
}

console.log(Object.getPrototypeOf(pessoa));
console.log(Object.getPrototypeOf(pessoa) == Object.prototype);

console.log(pessoa.hasOwnProperty('maos'));

// // Mais sobre Prototype
// // AULA 186
// Quando criamos um objeto a partir de um outro, o base será o prototype;
// Ele herdaŕa tanto os métodos e propriedades de Object(o prototype do objeto base);
// Quando os do objeto base para este NavigationPreloadManager;

let pessoa2 = {
    maos2: 2
}

let pessoaNova = Object.create(pessoa2);

console.log(pessoaNova.maos2);
console.log(Object.getPrototypeOf(pessoaNova) == pessoa2);

// exemplo 2

let cachorro ={
    patas: 4
}

let cachorroNovo = Object.create(cachorro);

console.log("- numero 1 -")
console.log(cachorro.patas)

console.log(" - numero 2 -")
console.log(cachorroNovo.patas)

console.log(Object.getPrototypeOf(cachorroNovo) == cachorro);


