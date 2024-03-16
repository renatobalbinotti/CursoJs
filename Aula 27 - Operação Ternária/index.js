/**
 * (Condição) ? (Verdadeira) : (Falsa)
 */

const pontuacaoUsuario = 999;

// if (pontuacaoUsuario >= 1000) {
//     console.log('Usuário VIP');
// } else {
//     console.log('Usuário normal')
// }

//Usando Operação ternária para encurtar o código
const nivelUsuario = pontuacaoUsuario >= 1000 ? 'Usuário VIP' : 'Usuário Normal';
console.log(nivelUsuario);

//Maneira de encurtar o código de forma que mantem a linha, porém há a repetição do código console.log();
pontuacaoUsuario >= 1000 ? console.log('Usuário VIP') : console.log('Usuário Normal')

//Alternativa onde é usada a operação ternária para a passagem de parâmetro para o console.log
console.log(pontuacaoUsuario >= 1000 ? 'Usuário VIP' : 'Usuário Normal');