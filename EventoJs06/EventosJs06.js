/*
PROPAGAÇÃO
- Quando não definimos um elemento muito bem (seletor brando)
ou um elemento que está dentro de outro tem um evento;
- Pode acontecer a propagação, ou seja, o outro elemento ativar um 
evento também, aí teremos uma duplicação;
- Por isso temos um método que para esta propagação e resolve
este problema, o stopPropagation;
*/

/*
AÇÕES DEFAULT
- Muitos elementos/teclas já tem ações pre-definidas,como clicar
num link nos leva a outra página;
- Podemos para este evento default, e criar uma lógica
diferente para o elemento em questão;
*/

let btn1 = document.querySelector("#btn1");
let btn2 = document.querySelector("#btn2");
let p = document.querySelector("p");
let a = document.querySelector("a")

function msg(e){
    console.log("Clicou no Button");
    e.stopPropagation();
}

btn1.addEventListener("click", msg);

btn2.addEventListener("click", function(event){
    console.log(event);
});

p.addEventListener("click", function(){
    console.log("clicou no paragrafo");
});

a.addEventListener("click", function(e){
    e.preventDefault();
    console.log("Não vai mudar de link");
});