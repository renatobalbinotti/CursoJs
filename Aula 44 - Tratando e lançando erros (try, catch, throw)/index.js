/* try{
    console.log(variavelNaoExiste);
} catch (err) {
    console.log('Variável que não existe');
} */

function soma(x, y) {
    if (typeof x !== 'number' || typeof y !== 'number') throw ('x e y precisam ser números!');

    return x + y;
}

try {
    console.log(soma(5, 1));
    console.log(soma(5, '5'));
} catch (err) {
    console.log(err);
}