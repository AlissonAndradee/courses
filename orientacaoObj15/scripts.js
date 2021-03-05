// // Getters e Setters
// // AULA 195
// - Get: serve para resgatar o valor de uma propriedade;
// - Set: serve para alterar o valor de uma propriedade;

// - Exemplo 01

class Cachorro{
    constructor(raca) {
        this.raca = raca;
    }
    get verRaca() {
        return 'A raça é ' + this.raca;
    }
    set novaRaca(value) {
        this.raca = value;
    }
}

let golden = new Cachorro('Pastor Alemão');
console.log(golden.verRaca);
golden.novaRaca = 'golden';

// - Exemplo 02

class cachorro3 {
    constructor(raca, cor) {
        this.raca;
        this.cor;
    }
    latir() {
        console.log("au au");
    }
    get getCor() {
        return this.cor;
    }
    set setCor(cor) {
        this.cor = cor;
    }
}

let pastor = new cachorro3('Pastor Alemão', 'Sem cor');

console.log(pastor);

// mudando a cor do pastor alemao

pastor.setCor = "marrom";
console.log(pastor.getCor);

