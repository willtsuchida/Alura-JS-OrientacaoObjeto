import { Cliente } from "./Cliente.js";
import { ContaCorrente } from "./ContaCorrente.js";
const cliente1 = new Cliente();
const cliente2 = new Cliente();

cliente1.nome = "Ricardo";
cliente1.cpf = 111222333309;

cliente2.nome = "Alice";
cliente2.cpf = 888222333309;

const contaCorrenteRicardo = new ContaCorrente();
contaCorrenteRicardo.agencia = 1001;
contaCorrenteRicardo.cliente = cliente1;
contaCorrenteRicardo.depositar(500);

const conta2 = new ContaCorrente();
conta2.cliente = cliente2;
conta2.agencia = 102;

contaCorrenteRicardo.transferir(200, conta2);

console.log(contaCorrenteRicardo);
console.log(conta2);