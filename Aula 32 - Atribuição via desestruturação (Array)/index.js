/* let a = 'A'; // B
let b = 'B'; // C
let c = 'C'; // A

[a, b, c] = [b, c, a];

console.log(a, b, c) */

// const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// // Atribuição atráves de desestruturação
// const [primeiroIndex, segundoIndex, terceiroIndex, ...resto] = numeros;

// console.log(primeiroIndex, segundoIndex, terceiroIndex);
// console.log(resto);

//                   0          1          2
//                0  1  2    0  1  2    0  1  2
const numero = [ [1, 2, 3], [4, 5, 6], [7, 8, 9] ];

// Maneira atraves da desestruturação (Forma feia)
// const [,[,,seis]] = numero;
// console.log(seis)

const [lista1, lista2, lista3] = numero;
console.log(lista3[2]);