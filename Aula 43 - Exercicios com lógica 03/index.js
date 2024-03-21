/**
 * Escreva uma função que recebe um número e retorne o seguinte:[
 * Se divisível por 3 = Fizz
 * Se divisível por 5 = Buzz
 * Se divisível por 3 e 5 = FizzBuzz
 * NÃO divisível por 3 e 5 retorna o próprio número
 * Checar se o número é realmente um número
 * Use a função com números de 0 a 100
 */


const fizzBuzz = (numero) => {
    if (typeof numero !== 'number') return 'Não é um número';
    if (numero % 3 === 0 && numero % 5 === 0) return 'FizzBuzz';
    if (numero % 3 === 0) return 'Fizz';
    if (numero % 5 === 0) return 'Buzz';

    return numero;
}

console.log(fizzBuzz(2));
console.log(fizzBuzz(3));
console.log(fizzBuzz(5));
console.log(fizzBuzz(15));
console.log(fizzBuzz('oie'));