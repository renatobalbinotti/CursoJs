//Função definida com "function" tem uma palavra-chave "arguments" que sustenta todos os parâmetros enviados
function funcaoArguments() {
    let total = 0;
    for (let arg of arguments) {
        total += arg;
    }

    console.log(total);
}

funcaoArguments('Renato', 2); 

// Funcao passando menos parâmetros que o esperado pela função
function funcaoMenosParam(a, b, c, d, e, f) {
    console.log(a, b, c, d, e, f);
}
funcaoMenosParam(1, 2, 3);

//Funcao que caso não vier valor nos parâmetros, tem um valor definido para uso.
function funcaoComPadrao(a, b = 2, c = 4){
    console.log(a + b + c);
};
funcaoComPadrao(2, 10, 20); // 32
funcaoComPadrao(2, '', 20); // 220
funcaoComPadrao(2, null, 20); // 22 - Null ele substitui para 0
funcaoComPadrao(2, undefined, 20); // 24  

//Atribuição de parâmetros atraves de desestruturação
function funcaoComDesestruturacao({nome, sobrenome, idade}){
    console.log(nome, sobrenome, idade);
};
let obj = {nome: 'Renato', sobrenome: 'Balbinotti', idade: 23};
funcaoComDesestruturacao({nome: 'Renato', sobrenome: 'Balbinotti', idade: 23})
funcaoComDesestruturacao(obj);

/* Passando Array atraves de desestruturação como parâmetro*/
function funcComArray([valor1, valor2, valor3]){
    console.log(valor1, valor2, valor3);
};
funcComArray(['Renato', 'Balbinotti', 23]);

/*  */
function conta(operador, acumulador, ...numeros) {
    for (let numero of numeros) {
        if(operador === '+') acumulador += numero;
        if(operador === '-') acumulador -= numero;
        if(operador === '*') acumulador *= numero;
        if(operador === '/') acumulador /= numero;
    }
    console.log(acumulador);
}

conta('+', 200, 100, 55, 45, 10);
conta('-', 200, 50, 30, 5);
conta('*', 200, 5, 1, 2);
conta('/', 200, 5, 1, 1);

/* Arrow Function com */
const conta2 = (operador, acumulador, ...numeros) => {
    console.log(operador, acumulador, numeros);
}

conta2('+', 1, 20, 30, 40, 50);