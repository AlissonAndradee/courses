/* -- Módulo de file system
- Uma dos módulos mais utilizados 
- Ele serve para trabalhar com arquivos e diretórios;
- Já é incluso no node, ou seja, não precisamos instalar
*/


// readFile é o nome da função que lê
// fs - significa file system


/* FILE SYSTEM: ESCREVENDO
- Além de ler arquivo, podemos também 
alterar o mesmo;
- Chamamos isso de escrever no arquivo;
*/

let {readFile, writeFile} = require('fs'); 

readFile("arquivo.txt", "utf8", (error, texto ) => {
    if(error) {
        throw error;
    } else {
        console.log(texto);
    }
});

writeFile("arquivo.txt", "Texto por write file", (error) => {

    if(error) {
        throw error;
    } else {
        console.log("Escreveu com sucesso!");
    }

});


