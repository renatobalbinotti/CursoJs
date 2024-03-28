/* Filter + Map + Reduce 

Filtrar pares
Dobrar os Valores
reduzir (Somar Tudo) */

const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];

const total = numeros
  .filter((e) => e % 2 === 0)
  .map((e) => e * 2)
  .reduce((a, i) => (a += i));

console.log(total);
