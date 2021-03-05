// // Herança [inheritance]
// // AULA 197
// - Podemos verificar quem é o pai do objeto utilizando o instanceof;

// Exemplo 01

class Mamifero {
    constructor(patas) {
        this.patas = patas;
    }
}

class Cachorro extends Mamifero {
    constructor(patas, raca) {
        super(patas, raca);
        this.raca = raca
    }
}

console.log(new Cachorro instanceof Mamifero);


