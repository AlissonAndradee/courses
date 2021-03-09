/*
AÇÕES DEFAULT
- Muitos elementos/teclas já tem ações pre-definidas,como clicar
num link nos leva a outra página;
- Podemos para este evento default, e criar uma lógica
diferente para o elemento em questão;
*/
/*
EVENTOS DE TECLA [KEY EVENT]
- Sempre que uma tecla é pressionada,são gerados dois
eventos: keyup e keydown;
- Podemos realizar ações nestes eventos também;
- Keyup é quando soltamos a tecla;
- Keydown é quando apertamos;
*/

window.addEventListener("keydown", function(e) { 
    if(e.key == 't'){
        console.log("apertou a letra t");
    } else if (e.key == "Enter") {
        console.log("Apertou enter");
    }
});

window.addEventListener("keyup", function(e) {
    if(e.key == "Enter") {
        console.log("Soltou o enter");
    }
});
