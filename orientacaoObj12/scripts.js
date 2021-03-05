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

// // Override nas propriedades do Prototype
// // AULA 192 
// Sempre que adicionamos uma propriedade a um objeto, é criada 
// uma idêntica no Prototype;
// Podemos substituir a do prototype;

// Exemplo 1 --

class Cachorro {
    construtor(raca) {
        this.raca = raca;
    }
}

let poodle = new Cachorro('Poodle');
Cachorro.prototype.raca = 'SRD';

console.log(poodle.raca);
console.log(Cachorro.prototype.raca);

// Exemplo 2 --




