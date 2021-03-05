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

// // Classes: Construtor/Instanciando por Função
// // AULA 188
// Construtores são formas de instaciar uma classe em uma
// linguagem de programação;
// Instanciar = criar um objeto novo;
// No construtor já podemos definir propriedades;

// exemplo 01 --

function criarCachorro(raca) {
    let cachorro = Object.create({});
    cachorro.raca = raca;
    return cachorro;
}

let doberman = criarCachorro('Doberman');

console.log(doberman.raca);

// exemplo 02 -- 

function criarCachorro2(raca, patas, cor) {
    let cachorro = Object.create({});
    cachorro.raca = raca;
    cachorro.patas = patas;
    cachorro.cor = cor;
    cachorro.latir = function() {
        console.log("au au au au")
    }
    return cachorro;
}

let poodle2 = criarCachorro2('poodle', 4,'branco');
console.log(poodle2);
poodle2.latir()

// // Classes: Construtor/Instanciando por New
// // AULA 189
// Em muitas linguagens temos a possibilidade de instaciar um 
// objeto com new, no Js também;

// Exemplo 1 --

function cachorro(raca) {
    this.raca = raca;
}
 let husky = new cachorro('Husky');
 console.log(husky.raca);

// Exemplo 2 --

function Cachorro3(raca,patas,cor) {
    this.raca = raca;
    this.patas = patas;
    this.cor = cor;
    this.latir = function(){
        console.log("au au au au");
    }
}

 let labrador = new Cachorro3('Labrador', 4, 'branco')
 console.log(labrador);
 labrador.latir();

