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

let btn = document.querySelector("button");

btn.addEventListener("click",() => {
    console.log("Clicou em mim ");
});