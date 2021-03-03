let idade = prompt("Qual sua idade?")
let cnh = true;

if((idade >= 18) && cnh == true ){
    console.log("Você está apto a dirigir!");
} else if((idade >= 18) && cnh == false){
    console.log("Não pode dirigir, mas pode tirar a CNH");
} else{
    console.log("Não pode dirigir!")
}