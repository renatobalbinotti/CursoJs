let confirmacao = confirm('Você deseja fazer a soma de dois números?')

if (confirmacao) {

    let num1 = prompt('Digite um número:');
    let num2 = prompt('Digite outro número');

    num1 = Number(num1);
    num2 = Number(num2);

    alert(`O resultado da sua conta foi: ${num1 + num2}`);
};