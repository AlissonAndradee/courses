let nome = prompt ("qual é o seu nome?")
let idade = prompt("qual a sua idade?")

    if(idade >= 18){
        console.log(`Seja Bem Vindo! ${nome}, Dirija-se ao balcão`)
    } else {
        console.log(`Sua idade não é permitida, Lamentamos ${nome}!`)
    }