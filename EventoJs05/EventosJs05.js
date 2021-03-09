/*
REMOVENDO EVENTOS
- Da mesma forma que podemos adicionar eventos,
podemos remover quando acharmos necessário;
- Para isso utilizamos o método
removeEventListener, onde passamos 
o evento e a função que o evento está escutando;
*/

/*
O OBJETO DO EVENTO
- Quando criamos eventos, temos a opção de utilizar
um argumento opcional, que é chamado de objeto do evento;
- Ele contém propriedades que podem ser utilizadas
a nosso favor;
- O objeto é criado pelo JavaScript automaticamente;
*/

/*
PROPAGAÇÃO
- Quando não definimos um elemento muito bem (seletor brando)
ou um elemento que está dentro de outro tem um evento;
- Pode acontecer a propagação, ou seja, o outro elemento ativar um 
evento também, aí teremos uma duplicação;
- Por isso temos um método que para esta propagação e resolve
este problema, o stopPropagation;
*/

let btn1 = document.querySelector("#btn1");
let btn2 = document.querySelector("#btn2");
let p = document.querySelector("p");

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