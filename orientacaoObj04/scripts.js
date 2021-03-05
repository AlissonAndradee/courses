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

// Exemplo 01

let cidade = {
    bairro: ' ',
    setBairro: function(bairro){
        this.bairro = bairro;
    }
}

cidade.setBairro("Jardim Tokio");
console.log(cidade.bairro)

// Exemplo 02

let pessoa = {
    nome:' ',
    setNome: function(novoNome) {
        this.nome = novoNome;
    },
    getNome: function() {
        return this.nome;
    }
}

pessoa.setNome("Matheus");
console.log(pessoa.getNome());