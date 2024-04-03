/* new Object -> Object.prototype */

const objetoA = {
  chaveA: "A",
  // __proto__ === Object.prototype
};

const objetoB = {
  chaveB: "B",
  // __proto__ === objA
};

console.log(objetoB.chaveB);

const objetoC = new Object();
objetoC.chaveC = "C";

Object.setPrototypeOf(objetoB, objetoA);
Object.setPrototypeOf(objetoC, objetoB);

/* ------------- */

function Produto(nome, preco) {
  this.nome = nome;
  this.preco = preco;
}

Produto.prototype.desconto = function (percDesconto) {
  if (percDesconto > 100) return;
  this.preco = this.preco - this.preco * (percDesconto / 100);
};

const p1 = new Produto("Laranja", 100);
p1.desconto(50);
console.log(p1);

const p2 = {
  nome: "Caneca",
  preco: 10,
};

Object.setPrototypeOf(p2, p1);

p2.desconto(50);
console.log(p2);

const p3 = Object.create(Produto.prototype, {
  preco: {
    writable: true,
    configurable: true,
    enumerable: true,
    value: 100
  },
  outraConfig: {
    writable: true,
    configurable: true,
    enumerable: true
  }
});

p3.desconto(10);
console.log(p3);
