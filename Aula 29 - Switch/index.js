function getDiaSemanaTexto(diaSemana){
    switch (diaSemana) {
        case 0: return 'Domingo';
        case 1: return 'Segunda';
        case 2: return 'Terça-Feira';
        case 3: return 'Quarta-Feira';
        case 4: return 'Quinta-Feira';
        case 5: return 'Sexta-Feira';
        case 6: return 'Sábado';
        default: return '';
    }
}

const data = new Date('2024-03-16 00:00:00');
const diaSemana = data.getDay(); 
let diaSemanaTexto = getDiaSemanaTexto(diaSemana);

console.log(diaSemana, diaSemanaTexto);