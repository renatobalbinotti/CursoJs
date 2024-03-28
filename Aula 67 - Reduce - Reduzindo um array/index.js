/* function reduce(acumulador, valor, indice, array) */
const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];

/* Some todos os números (reduce) */
const total = numeros.reduce((a, v, i) => {
  a += v;
  return a;
}, 0);
console.log(total);

/* Retorne um array com os pares (Filter) */
const pares = numeros.reduce((a, v) => {
  if (v % 2 === 0) a.push(v);
  return a;
}, []);
console.log(pares);

/* Retorne um array com o dobro dos valores */
const dobro = numeros.reduce((a, v) => {
  a.push(v * 2);
  return a;
}, []);
console.log(dobro);

/* Somando somente os pares */
const somandoPares = numeros.reduce((a, v) => {
  if (v % 2 === 0) a += v;
  return a;
}, 0);
console.log(somandoPares);

/* -------------------------------------- */
const pessoas = [
  { nome: "Renato Balbinotti", idade: 23 },
  { nome: "Geltrude", idade: 55 },
  { nome: "Jhony", idade: 23 },
  { nome: "Guilherme", idade: 25 },
  { nome: "Fasola", idade: 20 },
  { nome: "Lucas", idade: 30 },
];

/* Retorne a pessoa mais velha */
const maisVelha = pessoas.reduce((a, v) => {
  if (a.idade > v.idade) return a;
  return v;
});
console.log(maisVelha);
