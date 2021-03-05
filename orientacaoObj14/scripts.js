// // Symbols
// // AULA 194
// - Propriedades únicas, que não podem ser aletradas e nem criadas
// - duas vezes;
// - Podemos utilizar como uma constante, só que para propriedade de objeto;

// - Exemplo 1

class Cachorro {
    constructor(raca) {
        this.raca = raca;
    }
}

let patas = Symbol();
Cachorro.prototype[patas] = 4;

let golden = new Cachorro ('Golden Retriver');

// acessando symbol 

console.log(Cachorro.prototype[patas]);

