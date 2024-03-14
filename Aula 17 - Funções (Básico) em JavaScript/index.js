//Aula 17 - Funções (Básico) em JavaScript
function saudacao (name) {
    console.log(`Bom dia ${name}!`);
}

const variavel = saudacao('Renato');
console.log(variavel)

//Retornando um valor para ser manipulado em uma variável
function saudacao2 (name) {
    return `Bom dia ${name}!`
}

const retorno = saudacao2('Juliana')
console.log(retorno)

//Função de Soma
function soma (x = 0, y = 0) {
    return x + y;
}
console.log(soma(3, 5));
console.log(soma('Renato', ' Balbinotti'));
console.log(soma());

//Função anônima
const raiz = function (n){
    return n ** 0.5
};

console.log(raiz(16))

//Arrow Function
const raizes = n => n ** 0.5;
console.log(raizes(25));