// const tresHoras = 60 * 60 * 3 * 1000;
// const umDia = 60 * 60 * 24 * 1000;
// const data = new Date(0 + tresHoras - umDia); // 01/01/1970 Timestamp unix ou época unix - ponto inicial.
//                    ano, mes, dia, hora, minuto, segundo, miliseg
// const data = new Date(2024, 3,  16,   1,    57,     10,      999);
// const data = new Date('2024-03-16 02:03:59:958');

// console.log('Dia', data.getDate());
// console.log('Mês', data.getMonth()); // Mês começa do zero
// console.log('Ano', data.getFullYear());
// console.log('Hora', data.getHours());
// console.log('Minuto', data.getMinutes());
// console.log('Segundo', data.getSeconds());
// console.log('Miliseg', data.getMilliseconds());
// console.log('Dia da Semana', data.getDay()); //0 - Domingo, 6 - Sábado
function zeroAEsquerda (num) {
    return num >= 10 ? num : `0${num}`
}

function formataData(data) {
    const dia = zeroAEsquerda(data.getDate());
    const mes = zeroAEsquerda(data.getMonth() + 1) ;
    const ano = zeroAEsquerda(data.getFullYear());
    const hora = zeroAEsquerda(data.getHours());
    const min = zeroAEsquerda(data.getMinutes());
    const seg = zeroAEsquerda(data.getSeconds());

    return `${dia}/${mes}/${ano} ${hora}:${min}:${seg}`;
}

const data = new Date();
const dataBrasil = formataData(data);

console.log(dataBrasil)