const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];

for (let numero of numeros) {
    if (numero === 2) {
        console.log('Pulei o número 2');
        continue;
    }

    if (numero === 8) {
        console.log('Achei o número 8');
        break;
    }

    console.log(numero);
}