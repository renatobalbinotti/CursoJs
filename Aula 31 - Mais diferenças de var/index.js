const verdadeira = true;

//Let tem escopo de bloco { ... bloco}
//var só tem escopo de função 

// let nome = 'Renato'; // Criando
// var nome2 = 'Guilherme'; // Criando 

// if (verdadeira) {
//     let nome = 'Balbinotti'; // Criando
//     var nome2 = 'Rogério'; // redeclarando

//     if (verdadeira){
//         var nome2 = 'Jhonathan'; // Redeclarando
//         let nome = 'Outra coisa'; // criando
//     }
// }

// console.log(nome, nome2);

/* /* Escopo de função
var sobrenome = 'Balbinotti'; // Declarada na raiz do fonte, pode ser utilizado em qualquer lugar do fonte
function sayHi() {
    var nome = 'Renato'; // declaravel dentro da função, só pode ser usada dentro dela
    console.log(nome, sobrenome);
} */


/* function sayHi() {
    var sobrenome = 'Balbinotti'; // Declarada na raiz do fonte, pode ser utilizado em qualquer lugar do fonte
    if (verdadeira) {
        let nome = 'Renato';
        console.log(nome, sobrenome);
    }
}  

//sayHi();
*/

console.log(nome, sobrenome);

var sobrenome = 'Balbinotti';
let nome = 'Renato'