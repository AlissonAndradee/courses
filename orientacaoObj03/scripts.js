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

// Exemplo 01

 let cachorro = {
     latir: function(){
         console.log("au au");
     }
 }

cachorro.latir();

// Exemplo 02

const cachorro2 = {
    latir2: function() {
        console.log("au au au");
    },
    rosnar: function() {
        console.log("grrrr");
    }
}

cachorro2.latir2();
cachorro2.rosnar();