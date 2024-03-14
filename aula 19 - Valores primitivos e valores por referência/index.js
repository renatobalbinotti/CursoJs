/**
 * Aula 19 - Valores primitivos e valores por referência
 * 
 * Primitivos (Imutáveis) -> string, number, boolean, undefined, null (bigint, syumbol) 
 * 
 * Referência (Mutável) -> Array, object, function
 */

//Primitivos
let name = 'Renato';
name[0] = 'F';
console.log(name[0], name);

let a = 'A';
let b = a; // Cópia

console.log(a, b)

//Variável A e B não tem dependência
a = 'Outra coisa';
console.log(a, b)

//Referência usando array
let arrayA = [1, 2, 3];
let arrayB = [...arrayA];
let arrayC = arrayB;
console.log(arrayA, arrayB); 

arrayA.push(4);
console.log(arrayA, arrayB);

arrayB.pop();
console.log(arrayA, arrayB);

arrayA.push('Renato');
console.log(arrayC);

//Referência usando Objeto
const pessoaA = {
    nome: 'Renato',
    sobrenome: 'Balbinotti'
};

const pessoaB = pessoaA;

pessoaA.nome = 'João';
console.log(pessoaA)
console.log(pessoaB)