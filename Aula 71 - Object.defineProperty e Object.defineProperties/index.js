function Produto(nome, preco, estoque) {
  Object.defineProperty(this, "estoque", {
    enumerable: true, // mostrar a chave
    value: function () {
      return estoque;
    }, // valor
    writable: true, // pode alterar
    configurable: true, // configurável
  });

  Object.defineProperties(this, {
    nome: {
      enumerable: true, // mostrar a chave
      value: nome, // valor
      writable: true, // pode alterar
      configurable: true, // configurável
    },
    preco: {
      enumerable: true, // mostrar a chave
      value: preco, // valor
      writable: true, // pode alterar
      configurable: true, // configurável
    },
  });
}

const p1 = new Produto("Camiseta", 20, 3);
p1.estoque = 500;
console.log(p1);

for (let chave in p1) {
  console.log(chave);
}
