const nome = 'Renato Balbinotti';
const nomes = ['Renato', 'Guilherme', 'Jhonathan'];

console.log('For padrão com variavel string')
for (let i = 0; i < nome.length; i++) {
    console.log(nome[i]);
}

console.log('\nFor in com variavel string')
for (let i in nome) {
    console.log(nome[i]);
}

console.log('\nFor of com variavel string')
for(let valor of nome) {
    console.log(valor);
}

console.log('\nFor Of com Array')
for (let valor of nomes) {
    console.log(valor);
}

console.log('\nForEach')
nomes.forEach( (valor, indice) => {console.log(valor, indice)});