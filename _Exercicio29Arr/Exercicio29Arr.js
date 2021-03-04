// Exercício 29
// Aula 166
// Adicione a propriedade janelas no ônibus, com o valor de 20;
// delete a propriedade rodas;
// imprima a propriedade no console;

// definindo a variavel onibus e seus atributos

let onibus = {
    fabricante: "Mercedez",
    numDeRodas: 8,
    janelas: 20,
}
// imprimindo o atributo janelas
console.log(onibus.janelas);

// deletando o atributo janelas
delete onibus.janelas;

// certificando de que o atributo onibus.janelas foi excluído..
console.log(onibus.janelas);

// adicionando o atributo portas para o objeto.
onibus.portas = 2,

// imprimindo  
console.log(onibus.fabricante);
console.log(onibus);