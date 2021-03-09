// //  Async functions - Funções Assíncronas
// - Podemos criar funções assíncronas com a palvara reservada async;
// - Elas retornam uma Promise;
// - Se retornar algo, a promessa é resolvida, se der alguma exception 
//   a promessa é rejeitada;

// // Awai  - AULA 260
// - Nas async functions, podemos determinar uma instrução await;
// - Que vai esperar uma promise ser resolvida, 
//   para apresentar os resultados;

// // Generators 
// - Generators funcionam semelhantes as promisses
// - Onde ações podem ser pausadas e continuadas depois;
// - Caracterizados pelo function* e yield, veja:
// - O yield pode salvar o estado da variável;

function* genTest(){
    let id = 0;
    while(true) {
        yield id++;
    }
}

let criarId = genTest();

console.log(criarId.next().value);
console.log(criarId.next().value);
console.log(criarId.next().value);