// - REST OPERATOR
// - Aula 152
// - Uma forma de uma função receber indefinidos parâmetros;
// - O operador rest vai virar um array;
// - O parâmetro é definido por: ...nome;


// exemplo 1

let num1 = 1;
let num2 = 3;
let num3 = 7;
let num4 = 5;
let num5 = 9;

function imprimirNumeros1(...args) {
    for(let i = 0; i < args.length; i++){
        console.log(args[i]);
    }
}

imprimirNumeros1(num1,num2,num3,num4);
console.log('pausa');
imprimirNumeros1(num1,num2);
console.log('pausa');
imprimirNumeros1(1,2,3,4,5,6,7,8,9,10,11);

