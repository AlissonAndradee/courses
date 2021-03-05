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

// Exemplo 01 --

function Cachorro(raca) {
    this.raca = raca;
}
Cachorro.prototype.latir = function() {
    console.log('auu au au au au');
}

let pug = new Cachorro('Pug');

console.log(pug.raca);
pug.latir();

// Exemplo 02 --

