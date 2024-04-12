const _velocidade = Symbol("Velocidade atual do Carro");

class Carro {
  constructor(nome, velMax) {
    this.nome = nome;
    this[_velocidade] = 0;
    this.maxVelocidade = velMax;
  }

  get velocidade() {
    return this[_velocidade];
  }

  set velocidade(valor) {
    if (typeof valor !== "number") return;
    if (valor >= this.maxVelocidade || valor <= 0) return;
    this[_velocidade] = valor;
  }

  acelerar() {
    if (this[_velocidade] >= this.maxVelocidade) return;
    this[_velocidade]++;
  }

  freiar() {
    if (this[_velocidade] <= 0) return;
    this[_velocidade]--;
  }
}
const c1 = new Carro("Mercedes", 100);

for (let i = 0; i <= 200; i++) {
  c1.acelerar();
}

c1.velocidade = 1500;
console.log(c1);
