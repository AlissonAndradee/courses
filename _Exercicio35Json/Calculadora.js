// Desafio Calculadora
// AULA 179
// Crie um objeto calculadora;
// Os métodos só devem aceitar dois parâmetros;
// Utilize cada um dos métodos e imprima os valores no console;

const calculadora = {
    soma: function(a, b){
        return a + b;
    },
    subtrair: function(a, b){
        return a - b;
    },
    multiplicar: function(a, b){
        return a * b;
    },
    dividir: function(a, b){
        return a / b;
    }
}

console.log(calculadora.soma(3,2));
console.log(calculadora.subtrair(10,5));
console.log(calculadora.multiplicar(5,2));
console.log(calculadora.dividir(30,2));