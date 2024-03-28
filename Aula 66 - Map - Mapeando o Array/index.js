const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];

const numerosDobrados = numeros.map((e) => e * 2);
// console.log(numeros);
// console.log(numerosDobrados);

const pessoas = [
  { nome: "Renato Balbinotti", idade: 23 },
  { nome: "Jhony", idade: 23 },
  { nome: "Guilherme", idade: 25 },
  { nome: "Fasola", idade: 20 },
  { nome: "Lucas", idade: 30 },
  { nome: "Geltrude", idade: 55 },
];

const nomes = pessoas.map((e) => e.nome);
// console.log(nomes);

const idades = pessoas.map((e) => ({ idade: e.idade }));
// console.log(idades);

const indice = pessoas.map((e, i) => {
  e.id = i + 1;
  return e;
});
console.log(indice);