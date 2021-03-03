function soma(a,b) {

    if(a === undefined || b === undefined) {
        console.log("Esta função precisa ter dois argumentos")
    } else {
        return a + b;
    }
}

console.log(soma(1));
console.log(soma(1,2));

function saudacao(nome, idade) {
    if(idade === undefined){
        console.log("Olá " + nome);
    } else {
        console.log("Seu nome é " + nome + " e você tem " + idade + " anos");
    }
}

saudacao("Adriano");
saudacao("Adriano",52);

