const a1 = [1, 2, 3];
const a2 = [4, 5, 6];

//const a3 = array1.concat(array2, [7, 8, 9], "Renato");
// ...resto => ... Spread
const a3 = [...a1, ...a2, 'Renato', ...[7, 8, 9]];
console.log(a3);