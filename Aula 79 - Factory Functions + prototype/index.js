const falar = {
  falar() {
    console.log(`${this.nome} está falando`);
  },
};
const comer = {
  comer() {
    console.log(`${this.nome} está comendo`);
  },
};
const beber = {
  beber() {
    console.log(`${this.nome} está bebendo`);
  },
};

// const pessoaPrototype = { ...falar, ...beber, ...comer };
const pessoaPrototype = Object.assign({}, falar, beber, comer);

function criaPessoa(nome, sobrenome) {
  return Object.create(pessoaPrototype, {
    nome: { value: nome },
    sobrenome: { value: sobrenome },
  });
}

const p1 = new criaPessoa("Renato", "Balbinotti");
console.log(p1);
p1.falar;
