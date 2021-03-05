// // Herança [inheritance]
// // AULA 196
// Uma classe pode herdar propriedades de outra classe por herança;
// Para isso utilizaremos extends;

// Exemplo 01 -- extends - herança - super

class Mamifero {
    constructor(patas) {
        this.patas = patas;
    }
}
class Cachorro extends Mamifero {
    constructor(patas, raca) {
        super(patas, patas);
        this.raca = raca;
    }

}
let pug = new Cachorro(4, 'Pug');
console.log(pug);



