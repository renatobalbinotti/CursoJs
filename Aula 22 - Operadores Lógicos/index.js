/**
 * Operadores Lógicos
 * && -> AND -> E -> Todas as expressões precisam ser verdadeiras para retornar true
 * || -> OR -> OU -> Uma expressão precisa ser verdadeira para retornar true
 * ! -> NOT -> NÃO
 */

const usuario = 'Renato';
const senha = '123';

//                      True                    False
const vaiLogar = usuario === 'Renato' && senha === '321';
console.log(vaiLogar);