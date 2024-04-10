function Conta(agencia, conta, saldo) {
  this.agencia = agencia;
  this.conta = conta;
  this.saldo = saldo;
}

Conta.prototype.sacar = function (valor) {
  if (this.saldo < valor) {
    console.log(`Saldo insuficiente: ${this.saldo}`);
    console.log();
    return;
  }

  this.saldo -= valor;
  this.verSaldo();
};

Conta.prototype.depositar = function (valor) {
  this.saldo += valor;
  this.verSaldo();
};

Conta.prototype.verSaldo = function () {
  console.log(
    `Ag/c: ${this.agencia}/${this.conta} | Saldo: ${this.saldo.toFixed(2)}`
  );
};

/* Conta Corrente */
function CC(agencia, conta, saldo, limite) {
  Conta.call(this, agencia, conta, saldo);
  this.limite = limite;
}

CC.prototype = Object.create(Conta.prototype);
CC.prototype.constructor = CC;

CC.prototype.sacar = function (valor) {
  if (valor > (this.saldo + this.limite)) {
    console.log(`Saldo insuficiente: ${this.saldo}`);
    console.log();
    return;
  }

  this.saldo -= valor;
  this.verSaldo();
};

/* Conta Poupança */
function CP(agencia, conta, saldo) {
  Conta.call(this, agencia, conta, saldo);
}
CP.prototype = Object.create(Conta.prototype);
CP.prototype.constructor = CP;

const conta1 = new Conta("0001", "26", 100);
conta1.depositar(40);
conta1.sacar(150);

const cc = new CC("0001", "14", 0, 100);
cc.sacar(100);

const cp = new CP("0001", "7", 0);
cp.depositar(10);
cp.sacar(10);
cp.sacar(1);