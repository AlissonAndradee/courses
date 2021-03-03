let pessoa = {
    nome: "Alisson",
    profissao: "Programador",
    idade: 31,
}

console.log(pessoa.nome);
console.log(pessoa.idade);

let cachorro = {
    patas: 4,
    nome:'Shark',
    latir: function(){
        console.log("au au");
    }
};



console.log(cachorro.patas + " patas" + " o nome dele " + cachorro.nome)
cachorro.latir();
