/*
DEBOUNCE
-  Um evento que dispara múltiplas vezes pode ser um problema 
para o computador do cliente;
-  Por isso podemos fazer debounce, que é um suavizador de evento,
para não chamar o mesmo tantas vezes;
*/

let timeout;

window.addEventListener("mousemove", function(e) {
    
    clearTimeout(timeout);
    timeout = setTimeout(function() {
        console.log(e.x);
    }, 500);
});