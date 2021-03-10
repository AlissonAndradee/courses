/*
EVENTO DE CARREGAMENTO - EVENTO LOAD

- Podemos atrelar um evento quando a página carrega,
pelo evento load;
- E antes do usuário fechar a página pelo evento 
beforeunload;

*/

window.addEventListener("load", function() {
    alert("você não pode sair desta pagina");
});

window.addEventListener("beforeunload", function(e) {
    event.returnValue = null;
});
