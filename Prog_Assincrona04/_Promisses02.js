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

let promiseErrada = Promise.resolve(new Error("Algo deu Errado"));

promiseErrada.then((value) => console.log(value))
    .catch(reason => console.log("Erro: " + reason));