const form = document.querySelector('#form');

form.addEventListener('submit', function (e) {
    e.preventDefault(); //Não recarrega a página ao dar submit

    const peso = Number(e.target.querySelector('#peso').value);
    const altura = Number(e.target.querySelector('#altura').value);

    if (!peso) {
        setResultado('Peso Inválido!', false);
        return;
    }
    if (!altura) {
        setResultado('Altura Inválido!', false);
        return;
    }

    const valorIMC = getIMC(peso, altura).toFixed(2);
    const nivelIMC = getIndiceIMC(valorIMC);

    const msg = `Seu IMC é ${valorIMC} (${nivelIMC}).`;

    setResultado(msg, true);
});

function criaP() {
    return document.createElement('p');
}

function getIMC(peso = 0, altura = 0) {
    return peso / (altura * altura);
}

function getIndiceIMC(IMC = 0){
    const nivel = ['Abaixo do peso', 'Peso Normal', 'Sobrepeso', 'Obesidade Grau 1', 'Obesidade Grau 2', 'Obesidade Grau 3'] ;

    if (IMC >= 39.9) return nivel[5];
    if (IMC >= 34.9) return nivel[4];
    if (IMC >= 29.9) return nivel[3];
    if (IMC >= 24.9) return nivel[2];
    if (IMC >= 18.5) return nivel[1];
    if (IMC < 18.5) return nivel[0];
}

function setResultado(msg, isValid) {
    const resultado = document.querySelector('#resultado');
    resultado.innerHTML = '';

    const p = criaP();

    if (isValid) {
        p.classList.add('good');
    } else {
        p.classList.add('bad');
    }

    p.innerHTML = msg;
    resultado.appendChild(p);
}