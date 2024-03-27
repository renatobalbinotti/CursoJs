/**
 * Exemplo usando um construtor
 * const nomesConstrutor = new Array('Renato', 'Jhony', 'Guilherme');
 */

const nomes = ["Renato", "Jhony", "Guilherme", "Lucas", "Fasola"];
const novo = [...nomes]; //Spread operator
const novo2 = nomes;

const primeiro = nomes.shift(); // Remove o primeiro
const ultimo = nomes.pop(); // Remove o ultimo
nomes.unshift("Luiz"); // Adiciona no início
nomes.push("Carlos"); // Adiciona no final
const slice = nomes.slice(1, 3);

console.log("Primeiro: " + primeiro);
console.log("Ultimo: " + ultimo);
console.log("Slice:");
console.log(slice);
console.log(nomes);

//////////
const nome = "Renato Balbinotti dos Santos";
const nomeSep = ["Renato", "Balbinotti", "dos", "Santos"];
const nomeSplit = nome.split(" ");
const nomeJoin = nomeSep.join(" ");
console.log(nomeSplit);
console.log(nomeJoin);
