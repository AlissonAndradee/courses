// - Destructuring com objetos 
// - Aula 153
// - Podemos definir variáveis com propriedades do objeto com uma
// - notação diferente, chama destructuring;

// - exemplo 1

let pessoa = {
    nome: 'Alisson',
    sobrenome: 'Andrade'
}

let{nome:fname, sobrenome: lname} = pessoa;

console.log(fname);
console.log(lname);

// - exemplo 2

let obj = {
    rodas: 4,
    portas: 4,
    tetoSolar: true,
    motor:'2.0'
}

let{rodas: vRodas,portas: vPortas, tetoSolar: vTetoSolar, motor: vMotor} = obj;

console.log("este carro possui " + vRodas ,"e ele tem " + vPortas , " portas " + vTetoSolar);
