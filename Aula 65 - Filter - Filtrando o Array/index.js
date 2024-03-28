/* Filter -> Sempre retorna um Array, com a mesma quantidade de elementos ou menos */

const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];

/* Retorna os numeros maiores que 10 */
function callbackFilter(valor) {
  return valor > 10;
}

/* Usando uma função declarada para o filter */
const numerosFiltrados = numeros.filter(callbackFilter);
console.log(numerosFiltrados);

/* Usando Arrow Function para o filter */
const Arrowfiltro = numeros.filter((e) => e > 10);
console.log(Arrowfiltro);

/* logando todos os campos do filter
const filtro = numeros.filter((valor, indice, array) => {
  console.log(valor);
  console.log(indice);
  console.log(array);
  return valor > 10;
});
console.log(filtro);
*/

const pessoas = [
  { nome: "Renato Balbinotti", idade: 23 },
  { nome: "Jhony", idade: 23 },
  { nome: "Guilherme", idade: 25 },
  { nome: "Fasola", idade: 20 },
  { nome: "Lucas", idade: 30 },
  { nome: "Geltrude", idade: 55 },
];

const pessoasComNomeGrande = pessoas.filter((e) => e.nome.length >= 7);
console.log(pessoasComNomeGrande);

const pessoasComIdadeAlta = pessoas.filter((e) => e.idade >= 30);
console.log(pessoasComIdadeAlta);

const pessoasTerminaComA = pessoas.filter((e) => e.nome.toLowerCase().endsWith('a'));
console.log(pessoasTerminaComA);