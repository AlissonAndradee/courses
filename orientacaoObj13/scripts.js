// // Classes
// // AULA 193
// Não podemos adicionar propriedades na classe,
// só via prototype;
// A classe só aceita métodos;

// Exemplo 01 --

class Cachorro {
    constructor(raca) {
        this.raca = raca;
    }
    latir() {
        console.log("au au");
    }
    rosnar() {
        console.log("grrrr");
    }
}

Cachorro.prototype.patas = 4;
Cachorro.prototype.cor = 'Amarelo';

let spyke = new Cachorro('Poodle');

console.log(spyke.patas);
console.log(spyke.raca);
console.log(spyke.cor);
spyke.latir()
spyke.rosnar()

// Exemplo 02 -- 






