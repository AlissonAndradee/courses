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

// // Classes: Construtor/Instanciando por New
// // AULA 189
// Em muitas linguagens temos a possibilidade de instaciar um 
// objeto com new, no Js também;

// // Classes: Construtor/Instanciando com Método
// // AULA 190
// Além de propriedades,podemos criar a classe base já com métodos;
// Basta definir ao prototype o método desejado;

// // Class e Constructor ES
// // AULA 191
// Com a versõa do ES6, uma possibilidade de criar uma classe(objeto)
// com construtor foi adicionada;
// Então não precisamos mais criar por meio de uma função, veja:

// Exemplo 1 

class Cachorro{
    constructor(raca) {
        this.raca = raca;
    }
}

let labrador = new Cachorro ('Labrador');
console.log(labrador.raca);

// Exemplo 2 

class cachorro2{
    constructor(raca, patas, cor) {
        this.raca = raca;
        this.patas = patas;
        this.cor = cor;
    }
}

let husky = new cachorro2('husky', 4, 'Branco');

console.log(husky)
