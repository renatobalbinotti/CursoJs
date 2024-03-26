// Função construtora -> objetos
// Função fábrica -> objetos
// Construtora -> new Pessoa

function Pessoa (nome, sobrenome) {

  const ID = 1234;
  
  const metodoInterno = function () {
    console.log('Método interno, não visivel fora do objeto');
  };

  // Atributos publicos
  this.nome = nome;
  this.sobrenome = sobrenome;

  this.metodo = function() {
    console.log(this.nome + ': Eu sou um método');
  }
}

const p1 = new Pessoa('Renato', 'Balbinotti');
const p2 = new Pessoa('Guilherme', 'Perreira');

console.log(p1.nome);
console.log(p2.sobrenome);
p1.metodo();