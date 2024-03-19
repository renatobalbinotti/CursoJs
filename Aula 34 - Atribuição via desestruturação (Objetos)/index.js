const pessoa = {
    nome: 'Renato', 
    sobrenome: 'Balbinotti', 
    idade: 23, 
    endereco: {
        rua: 'Munhoz da Rocha',
        nro: 176
    }
};

//Atribuição via desestruturação
const { nome: n = '', sobrenome } = pessoa;
console.log(n, sobrenome);

const { endereco: {rua: r, nro: numero = 'Sem nro'} } = pessoa;
console.log(r, numero);

const {nome, ...resto} = pessoa;
console.log(resto);