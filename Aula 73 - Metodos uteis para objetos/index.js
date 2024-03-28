/*
Object.values
Object.entries
Object.getOwnPropertyDescriptor(o, 'prop')
Object.assign(des, any)
... (spread)

// Já vimos
Object.keys (retorna as chaves)
Object.freeze (congela o objeto)
Object.defineProperties (define várias propriedades)
Object.defineProperty (define uma propriedade)
*/

const prod = { nome: "Produto", preco: 3.2 };
Object.freeze(prod);
console.log(Object.getOwnPropertyDescriptor(prod, "nome"));

console.log();
const caneca = { nome: prod.nome, preco: prod.preco };
const outraCoisa = { ...prod, material: "vento" };
const lapis = Object.assign({}, prod);

outraCoisa.nome = "Garrafa d'água";
outraCoisa.preco = 2.5;
outraCoisa.material = "Plástico";

caneca.nome = "Caneca";

console.log(prod);
console.log(caneca);
console.log(outraCoisa);
console.log(lapis);
console.log();

for (let [chave, valor] of Object.entries(prod)) {
  console.log(chave, valor);
}
