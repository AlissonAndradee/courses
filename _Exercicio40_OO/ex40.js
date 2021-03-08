class Conta {
    constructor(saldoCC, saldoCP, juros){
        this.saldoCC = saldoCC;
        this.saldoCP = saldoCP;
        this.juros = juros;
    }
    deposito(valor) {
        this.saldoCC += valor;
    }
    saque(valor) {
        this.saldoCC -= valor;
    }
    transferenciaCP(valor) {
        this.saldoCC -= valor;
        this.saldoCP += valor;
    }
    transferenciaCC(valor) {
        this.saldoCC += valor;
        this.saldoCP -= valor;
    }
    jurosDeAniversario(){
        let juros = (this.saldoCP * this.juros) / 100;
        this.saldoCP += juros;
    }
};

class contaEspecial extends Conta {
    constructor(saldoCC, saldoCP, juros){
        super(saldoCC, saldoCP, juros*2)
    }
}

// ------------------------------------------
let conta = new Conta (1000, 3000, 2) 
console.log(conta)

// ---------- //
conta.saque(50);
console.log(conta);

// ---------- //
conta.deposito(300);
console.log(conta);

// ---------- //
conta.transferenciaCP(1000);
console.log(conta);

// ---------- //
conta.transferenciaCC(1500);
console.log(conta);

// ---------- //
conta.jurosDeAniversario();
console.log(conta);

// ------------------------------------------
let conta2 = new contaEspecial(10000, 50000, 1);
console.log(conta2);

// ---------- //
conta2.saque(5000);
console.log(conta2);

// ---------- //
conta2.jurosDeAniversario();
console.log(conta2);