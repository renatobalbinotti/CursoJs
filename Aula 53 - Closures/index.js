//Closures é a habilidade da função de acessar seu escopo léxico.
function retornaFuncao(nome) {
    return function () {
        return nome;
    }
};

const funcao = retornaFuncao('Renato');
const funcao2 = retornaFuncao('Guilherme');
console.log(funcao);
console.log(funcao2);