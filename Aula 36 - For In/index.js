const pessoa = {
    nome: 'Renato', 
    sobrenome: 'Balbinotti', 
    idade: 23
};

for (let i in pessoa) {
    console.log(i, pessoa[i]);
}