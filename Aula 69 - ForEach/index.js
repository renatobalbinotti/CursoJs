const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];

/* numeros.forEach((valor, indice, array) => {
  console.log(valor); //
  console.log(indice);
  console.log(array);
}) */
let total = 0;
numeros.forEach((valor) => {
  total += valor;
});

console.log(total);