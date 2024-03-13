let varA = 'A'; // B   Check
let varB = 'B'; // C
let varC = 'C'; // A

console.log('Valores antes da mudança.')
console.log('Valor de varA:', varA);
console.log('Valor de varB:', varB);
console.log('Valor de varC:', varC);

[varA, varB, varC] = [varB, varC, varA]

console.log('Valores após à mudança.')
console.log('Valor de varA:', varA);
console.log('Valor de varB:', varB);
console.log('Valor de varC:', varC);