const elementos = [
    {tag: 'p', texto: 'Frase 1'},
    {tag: 'div', texto: 'Frase 2'},
    {tag: 'footer', texto: 'Frase 3'},
    {tag: 'section', texto: 'Frase 4'},
]

const container = document.querySelector('.container');
/* Versão que o instrutor usou
for (i = 0; i < elementos.length; i++){
    let {tag, texto} = elementos[i];
    const tagCreated = document.createElement(tag);
    tagCreated.innerText = texto;

    container.appendChild(tagCreated);
} */

//Versão por mim
elementos.forEach( a => {
    const elem = document.createElement(a.tag);
    elem.innerHTML = a.texto
    container.append(elem);
}) 


// elementos.forEach(a => container.append(document.createElement(a.tag).innerText = a.texto))
