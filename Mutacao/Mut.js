// Mutação (Mutability)
// Um objeto pode herdar todas
// as caracteristicas do onmsgesturedoubletap,
// virando uma referência ao MediaStreamAudioSourceNode;

let pessoa = {
    nome: "alisson"
};

let pessoa2 = pessoa;

console.log(pessoa == pessoa2);

pessoa2.nome = "Pedro";

console.log(pessoa.nome);

pessoa.nome = "Maria";

console.log(pessoa2.nome);
