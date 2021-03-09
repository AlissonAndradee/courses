/*
EVENTOS DE TECLA [KEY EVENT]
- Sempre que uma tecla é pressionada,são gerados dois
eventos: keyup e keydown;
- Podemos realizar ações nestes eventos também;
- Keyup é quando soltamos a tecla;
- Keydown é quando apertamos;
*/

/*
OUTROS EVENTOS DE MOUSE 
- No mouse temos também eventos como mousedown e mouseup,
semelhante aos das teclas;
- Dblclick para ativar com dois cliques;
*/

let btn1 = document.querySelector("#btn1");
let btn2 = document.querySelector("#btn2")

btn1.addEventListener("mousedown", function() {
    console.log("apertou o botão");
});

btn1.addEventListener("mouseup", function() {
    console.log("Soltou o botão");
});

