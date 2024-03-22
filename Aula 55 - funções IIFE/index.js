// IIFE -> Immediately invoked function expression
(function (idade, peso, altura) {
    const sobrenome = 'Balbinotti';

    function criaNome(nome) {
        return nome + ' ' + sobrenome;
    }

    function falaNome() {
        console.log(criaNome('Renato'));
    };

    falaNome();
    console.log(idade, peso, altura)
})(23, 95, 1.83);

const nome = 'Qualquer Coisa';
console.log(nome);
