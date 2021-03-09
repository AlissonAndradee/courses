/*
O QUE SÃO EVENTOS?
- Ações condicionadas a algum tipo de 
resposta feita pelo usuário;
- Por exemplo: clicks, apertar alguma tecla ou 
até movimento do mouse;
- Podemos atrelar lógica a essas ações do usuário;
- Por meio de handlers;
*/
 
/*
COMO ACIONAR UM EVENTO
- Devemos atrelar o evento a um elemento, por exemplo um botão;
- Depois inserir um listerner e o tipo de evento
como argumento;
- Aí o elemento responderá por este evento e, obviamente,
os outros da página não;
*/

/*
REMOVENDO EVENTOS
- Da mesma forma que podemos adicionar eventos,
podemos remover quando acharmos necessário;
- Para isso utilizamos o método
removeEventListener, onde passamos 
o evento e a função que o evento está escutando;
*/

let btn = document.querySelector("button");

function msg() {
    console.log("Clicou");
}

btn.addEventListener("click", msg);

setTimeout(function(){
    btn.removeEventListener("click", msg);
}, 3000);