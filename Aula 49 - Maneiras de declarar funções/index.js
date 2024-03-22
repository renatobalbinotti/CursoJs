/* Declaração de função (Function Hoisting)
 
function falaOi(){
    console.log('Oie');
}

falaOi();
*/

/* First-class objects (Objetos de primeira classe) 
 * Function expression */
const souUmDado = function() {
    console.log('Sou um dado');
}

function executaFuncao(funcao) {
    funcao();
}
executaFuncao(souUmDado);

/* Arrow function */
const funcaoArrow = () => {
    console.log('Sou uma arrow function');
};
funcaoArrow();

// Dentro de um objeto eu posso ter uma função
const obj = {
    nome: 'Renato',
    falar() {
        console.log('Falei');
    }
};
obj.falar();