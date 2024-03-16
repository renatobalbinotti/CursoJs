// function zeroAEsquerda (num) {
//     return num >= 10 ? num : `0${num}`
// }

// function getDiaSemanaTexto(diaSemana){
//     switch (diaSemana) {
//         case 0: return 'Domingo';
//         case 1: return 'Segunda';
//         case 2: return 'Terça-Feira';
//         case 3: return 'Quarta-Feira';
//         case 4: return 'Quinta-Feira';
//         case 5: return 'Sexta-Feira';
//         case 6: return 'Sábado';
//         default: return '';
//     }
// };

// function getNomeMes(mes){
//     switch (mes) {
//         case 0: return 'Janeiro';
//         case 1: return 'Fevereiro';
//         case 2: return 'Março';
//         case 3: return 'Abril';
//         case 4: return 'Maio';
//         case 5: return 'Junho';
//         case 6: return 'Julho';
//         case 7: return 'Agosto';
//         case 8: return 'Setembro';
//         case 9: return 'Outubro';
//         case 10: return 'Novembro';
//         case 11: return 'Dezembro';

//         default: return '';
//     }
// };

// function criaData(data) {
//     const diaSemana = data.getDay();
//     const numeroMes = data.getMonth();
    
//     const nomeDia = getDiaSemanaTexto(diaSemana);
//     const nomeMes = getNomeMes(numeroMes);

//     return `${nomeDia}, ${data.getDate()} de ${nomeMes} de ${data.getFullYear()} ` +
//            `${zeroAEsquerda(data.getHours())}:${zeroAEsquerda(data.getMinutes())}`;
// }

// const h1 = document.querySelector(".container h1");
// const data = new Date();
// h1.innerHTML = criaData(data)

//Versão simplificada
const h1 = document.querySelector(".container h1");
const data = new Date();
h1.innerHTML = data.toLocaleString('pt-BR', { dateStyle: 'full', timeStyle: 'full' });