/*
PROMISSES
-  As promisses são ações assíncronas que podem produzir um valor 
em algum momento no código;
- Uma forma de dizer a linguagem que um valor pode estar presente 
em um futuro do código;
- O objeto das promisses é Promisse, resolve é o método que resolve 
uma Promise, o then é o que faz ela poder ser 
executada em um ponto futuro;
*/

let promessa = Promise.resolve(4 + 8);
console.log('Algum código');

promessa.then((value) => console.log(`A somana é ${value}`));
