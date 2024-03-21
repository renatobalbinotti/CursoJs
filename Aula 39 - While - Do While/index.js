let i = 0;
const nome = 'Renato';

//While valida a condição para executar o bloco
console.log('While');
while (i < nome.length) {
    console.log(nome[i]);
    i++;
}

// Do/While executa e após o bloco valida a condição para repetir
i = 0;
console.log('\nDo While');
do {
    console.log(i);
    i++;
} while (i <= 10);


function random(min, max) {
    return Math.floor(Math.random() * (max - min) + min); 
}

console.log('While');
let rand = random(1, 50);
let count = 1;
while (rand !== 10) {
    count++;
    rand = random(1, 50);
    console.log(`${count} - ${rand}`);
}

console.log('Do/While');
count = 1;
//Executa só uma vez pq a variável "rand" está com o valor de 10
do {
    count++;
    console.log(`${count} - ${rand}`);
} while (rand !== 10);