class Cliente {
    nome;
    cpf;
}

class ContaCorrente {
    agencia;
    _saldo = 0;

    sacar(valor) {
        if (this._saldo >= valor) {
            this._saldo -= valor;
            return valor;
        }
    }

    depositar(valor) {
        if (valor <= 0) {
            return;
        }
        this._saldo += valor;
    }
}

const cliente1 = new Cliente();
const cliente2 = new Cliente();

cliente1.nome = "Ricardo";
cliente1.cpf = 111222333309;

cliente2.nome = "Alice";
cliente2.cpf = 888222333309;

const contaCorrenteRicardo = new ContaCorrente();
contaCorrenteRicardo.agencia = 1001;

contaCorrenteRicardo.depositar(-100.0)
contaCorrenteRicardo.depositar(100.0)
contaCorrenteRicardo.depositar(100.0)
const valorSacado = contaCorrenteRicardo.sacar(50);

console.log(valorSacado);

console.log(contaCorrenteRicardo);
