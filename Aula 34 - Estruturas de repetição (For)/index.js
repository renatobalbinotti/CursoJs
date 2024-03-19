// console.log('Linha 0');
// console.log('Linha 1');
// console.log('Linha 2');
// console.log('Linha 3');
// console.log('Linha 4');
// console.log('Linha 5');


for (let i = 0; i <= 5; i++) {
    console.log(`Linha ${i}`);
}

//Incrementando de 10 em 10 no for
for (let i = 0; i <= 100; i += 10) {
    console.log(`Linha ${i}`);
}

//Decrementando de 10 em 10 no for
for (let i = 100; i >= 0 ; i -= 10) {
    console.log(`Linha ${i}`);
}

for (let i = 0; i <= 10; i++) {
    const ehPar = i % 2 === 0 ? 'Par' : 'Impar';

    console.log(i, ehPar);
}

const frutas = ['Maçã', 'Pêra', 'Uva', 'Melância', 'Laranja', 'Nectarina', 'Vergamota'];
for (let i = 0; i < frutas.length; i++) {
    console.log(`Índice ${i}:`, frutas[i]);
}