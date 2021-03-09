// //  Async functions - Funções Assíncronas
// - Podemos criar funções assíncronas com a palvara reservada async;
// - Elas retornam uma Promise;
// - Se retornar algo, a promessa é resolvida, se der alguma exception 
//   a promessa é rejeitada;

// // Awai  - AULA 260
// - Nas async functions, podemos determinar uma instrução await;
// - Que vai esperar uma promise ser resolvida, 
//   para apresentar os resultados;

function somaComDelay(a,b) {
    return new Promise(resolve => {
        setTimeout(function(){
            resolve(a + b);
        }, 2000);
    });
}

async function resSoma(a,b,c){

    let x = somaComDelay(a,b);
    let y = c;
    
    return await x + y;
}

resSoma(1,2,3).then(value => console.log(value));