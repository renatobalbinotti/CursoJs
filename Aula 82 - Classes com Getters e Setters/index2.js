class Pessoa {
  constructor(nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;
  }

  get nomeCompleto() {
    return this.nome + " " + this.sobrenome;
  }

  set nomeCompleto(valor) {
    valor = valor.split(" ");
    this.nome = valor.shift();
    this.sobrenome = valor.join(" ");
  }
}

const p1 = new Pessoa("Renato", "Balbinotti");
console.log(p1.nomeCompleto);
p1.nomeCompleto = "Renato Balbinotti dos Santos";
console.log(p1.nomeCompleto);