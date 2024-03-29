/*
Javascript é baseado em protótipos para passar propriedades e métodos
de um objeto para outro.

Definição de protótipo
Protótipo é o termo usado para se referir ao que foi criado pela
primeira vez, servindo de modelo ou molde para futuras produções.

Todos os objetos tem uma referência interna para um protótipo (__proto__)
que vem da propriedade prototype da função construtora que foi usada para
criá-lo. Quando tentamos acessar um membro de um objeto, primeiro o motor
do JS vai tentar encontrar este membro no próprio objeto e depois a cadeia
de protótipos é usada até o topo (null) até encontrar (ou não) tal membro.
*/

function Pessoa(nome, sobrenome) {
  this.nome = nome;
  this.sobrenome = sobrenome;
  // this.nomeCompleto = () => "ORIGINAL: " + this.nome + " " + this.sobrenome;
}

// Pessoa.prototype === pessoa1.__proto__;

Pessoa.prototype.nomeCompleto = function () {
  return this.nome + " " + this.sobrenome;
};

const p1 = new Pessoa("Renato", "Balbinotti");
const p2 = new Pessoa("Jhonathan", "Guilherme");
const data = new Date();

console.dir(p1);
console.dir(p2);
console.dir(data);

console.log(p1.nomeCompleto());
console.log(p2.nomeCompleto());
