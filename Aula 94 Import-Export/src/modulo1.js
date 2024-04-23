const nome = "Renato";
const sobrenome = "Balbinotti";
const idade = 23;
const cpf = "";

export function teste() {
  console.log('Teste')
}

export class Pessoa {
  constructor(nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;
  }
}

export default (a, b) => a + b;

export {nome as default, sobrenome, idade, soma}