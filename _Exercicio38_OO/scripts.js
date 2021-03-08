// // Exercicio 38
// Crie um objeto que simula um endereço de um cliente;
// Propriedades: Rua, Bairro, Cidade e Estado;
// No construtor o endereço já deve ser definido por completo;
// Crie métodos para atualizar todas as propriedades;

class enderecoCliente {
    constructor(rua, bairro, cidade, estado) {
        this.rua = rua;
        this.bairro = bairro;
        this.cidade = cidade;
        this.estado = estado;
    }
    set novaRua(novaRua) {
        this.rua = novaRua;

    }

    set novoBairro(novoBairro) {
        this.bairro = novoBairro;
    }
    set novaCidade(novaCidade) {
        this.cidade = novaCidade;
    }
    set novoEstado(novoEstado) {
        this.estado = novoEstado;
    }
}

let cliente = new enderecoCliente('Rua vitorio sisti','jardim tokio','Londrina','Parana');
console.log(cliente)

cliente.novaRua = "Rua dos Pardais";
console.log(cliente)

cliente.novoBairro = 'Jardim Maracanã'
console.log(cliente)

cliente.novaCidade = 'Cambé'
console.log(cliente)

cliente.novoEstado = "São Paulo"
console.log(cliente)
