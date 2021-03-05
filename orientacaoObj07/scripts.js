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

// // Mais sobre Prototype
// // AULA 186
// Quando criamos um objeto a partir de um outro, o base será o prototype;
// Ele herdaŕa tanto os métodos e propriedades de Object(o prototype do objeto base);
// Quando os do objeto base para este NavigationPreloadManager;

// // Classes
// // AULA 187
// O prototype do JavaScript pode ser chamado de classe;
// Pois nas outras lingugagens uma class  é um molde de um objeto;
// Ou seja, podemos criar diversos objetos em cima de um prototype;

// Exemplo 01 --

let cachorro = {
    raca: 'viraLata',
}

let pastorAlemao = Object.create(cachorro);
pastorAlemao.raca = 'Pastor Alemao';
console.log(pastorAlemao.raca);

// Exemplo 02 --

let estado = {
    cidade: ' Londrina',
}

let cidadeNova = Object.create(estado);
cidadeNova.cidade = 'Maringá';
console.log(cidadeNova.cidade);

// Exemplo 03 --

let cachorro2 = {
    patas: 4,
    raca:'poodle',
    latir: function() {
        console.log("Au Au");
    }
}

let labrador = Object.create(cachorro2);
labrador.latir();
labrador.raca = "Labrador";

console.log(labrador.raca);
console.log(cachorro2.raca);

