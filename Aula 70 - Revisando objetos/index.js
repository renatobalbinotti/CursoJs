/* Revisando objetos */

/* const pessoa = {
  nome: "Renato",
  sobrenome: "Balbinotti",
};

console.log(pessoa.nome);
console.log(pessoa.sobrenome);

const chave = "nome";
console.log(pessoa[chave]);
console.log(pessoa["sobrenome"]); */

/* Construtor */
const pessoaObject = new Object();
pessoaObject.nome = "Renato";
pessoaObject.sobrenome = "Balbinotti";
pessoaObject.idade = 22;
pessoaObject.falarNome = function () {
  console.log(`${this.nome}`);
};
pessoaObject.getDataNascimento = function () {
  const dataAtual = new Date();
  return dataAtual.getFullYear() - this.idade;
};

delete pessoaObject.sobrenome;
pessoaObject.falarNome();
console.log(pessoaObject.getDataNascimento());

/* Factory functions */
function criaPessoa(nome, sobrenome) {
  return {
    nome,
    sobrenome,
    get nomeCompleto() {
      return `${this.nome} ${this.sobrenome}`;
    },
  };
}

const p1 = criaPessoa("Renato", "Balbinotti");
console.log(p1.nomeCompleto);

/* Constructor functions */
function Pessoa(nome, sobrenome) {
  this.nome = nome;
  this.sobrenome = sobrenome;

  Object.freeze(this);
}

const p2 = new Pessoa("Renato", "Balbinotti");
p2.nome = "Alexandre";
console.log(p2);

/* Classes */
class Person {
  constructor(nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;
  }
}

const p3 = new Person("Renato", "Balbinotti");
console.log(p3);
