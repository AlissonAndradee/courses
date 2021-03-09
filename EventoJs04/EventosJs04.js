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

/*
O OBJETO DO EVENTO
- Quando criamos eventos, temos a opção de utilizar
um argumento opcional, que é chamado de objeto do evento;
- Ele contém propriedades que podem ser utilizadas
a nosso favor;
- O objeto é criado pelo JavaScript automaticamente;
*/

let btn1 = document.querySelector("#btn1");
let btn2 = document.querySelector("#btn2");

function msg(e){
    console.log(e);
}

btn1.addEventListener("click", msg);

btn2.addEventListener("click", function(event){
    console.log(event);
});

