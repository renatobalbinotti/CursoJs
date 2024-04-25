/* const nome = "Renato";
const sobrenome = "Balbinotti";

const falaNome = () => nome + " " + sobrenome;

module.exports.nome = nome;
module.exports.sobrenome = sobrenome;
module.exports.falaNome = falaNome; 

exports.nome = nome;
exports.sobrenome = sobrenome;
exports.falaNome = falaNome;

this.qualquerCoisa = "O que eu quiser exportar"; */

class Pessoa {
  constructor(nome) {
    this.nome = nome;
  }
}

const nome = "Renato";
const sobrenome = "Balbinotti";

module.exports = {
  nome,
  sobrenome,
  Pessoa,
};

console.log(module);
