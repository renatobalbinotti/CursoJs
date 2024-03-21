/* try {
    // É executado quando não há erros
    console.log('Abri um arquivo');
    console.log('Manipulei o arquivo');
    throw 'Erro ao manipular o arquivo';
} catch (error) {
    // É executado quando há erros
    console.log(error)
} finally {
    //Sempre executado
    console.log('Fechei o arquivo');
} */

function retornaHora(data) {
    if (data && !(data instanceof Date)) throw new TypeError('Esperando instância de Date.');
    if (!data) data = new Date();
    
    return data.toLocaleTimeString('pt-BR', {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false
    })
};

try {
    const data = new Date('21-03-2024 18:38:25');
    const hora = retornaHora();
    console.log(hora);
} catch (err) {
    console.log('Tratando o erro');
} finally {
    console.log('Tenha um bom dia');
}