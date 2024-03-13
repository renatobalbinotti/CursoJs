/**
 * Demonstrando como o array pode receber diversos tipos de dados
 * const alunos = ['Luiz,', 'Maria', 'João', 1, true, null] 
 * */

const alunos = ['Luiz', 'Maria', 'Guilherme'];
console.log(alunos);

// Acessando índice do array 0 - Luiz, 1 - Maria, 2 - João
console.log('Index 1:',alunos[1]); 

//Alterando um indice do array
alunos[1] = 'Juliana';
console.log('Index 1:', alunos[1]); 

//Tamanho do Array
console.log('Tamanho do array:', alunos.length);

//Adicionando um elemento ao final do Array
alunos.push('\nJoão');
console.log(alunos);

//Adicionando um elemento ao começo do Array
alunos.unshift('\nJhonathan');
console.log(alunos);

//Removendo um elemento do final do array
let removido = alunos.pop();
console.log('\nRemovido pelo .pop(): ', removido);
console.log(alunos);

//Erro de Undefined - tentando acessar um índice que não existe.
console.log(alunos[50]);