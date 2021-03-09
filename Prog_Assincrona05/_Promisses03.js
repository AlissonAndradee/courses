/*
PROMISSES
-  As promisses são ações assíncronas que podem produzir um valor 
em algum momento no código;
- Uma forma de dizer a linguagem que um valor pode estar presente 
em um futuro do código;
- O objeto das promisses é Promisse, resolve é o método que resolve 
uma Promise, o then é o que faz ela poder ser 
executada em um ponto futuro;
// */

// // FALHAS NAS PROMISES
// - Uma promise pode falhar, podemos reter esse erro com um método 
//   chamado catch;
// - Com ele podemos exibir o erro no console, por exemplo, e fazer o debug no código;

// // REJEITANDO PROMISES
// - Além do resolve, há o método reject;
// - Que é quando determinada lógica não satisfaz nosso programa,
//   então podemos ir para outra com o reject, em vez do resolve;
// - Resolve e reject terminam a Promise, ou seja, não podemos chamar
//   mais o then, por exemplo:

function verificaAlgo(num) {
    return new Promise((resolve, reject) => {
        if(num == 2) {
            resolve(console.log(`O número é ${num}`));
        } else {
            reject(new Error ("Falhou"));
        }
    })
}

verificaAlgo(3);
verificaAlgo(2);