const btnAddTarefa = document.querySelector('#btnAddTarefa');
const inputTarefa = document.querySelector('#inputTarefa');
const tarefas = document.querySelector('#tarefas');

btnAddTarefa.addEventListener('click', function(e) {
    if (!inputTarefa.value) return;
    
    criaTarefa(inputTarefa.value);
});

inputTarefa.addEventListener('keypress', function(e) {
    if (!(e.keyCode === 13)) return;
    if (!inputTarefa.value) return;

    criaTarefa(inputTarefa.value);
});

function limpaInput() {
    inputTarefa.value = '';
    inputTarefa.focus();
};

function criaTarefa(tarefa) {
    const li = criaLi();
    li.innerText = tarefa;

    criaBtnApagar(li);
    tarefas.appendChild(li);
    limpaInput();
    salvarTarefas();
};

function criaLi() { 
    return document.createElement('li')
};

function criaBtnApagar(li) {
    li.innerHTML += ' ';
    const btnApagar = document.createElement('button');
    btnApagar.innerText = 'Apagar';
    btnApagar.setAttribute('class', 'apagar');
    btnApagar.setAttribute('title', 'Apagar esta tarefa');
    li.appendChild(btnApagar);
};

document.addEventListener('click', function(e){
    const el = e.target;
    if (el.classList.contains('apagar')) {
        el.parentElement.remove()
        salvarTarefas();
    };
});

function salvarTarefas() {
    const liTarefas = tarefas.querySelectorAll('li');
    const listaDeTarefas = [];

    for (let tarefa of liTarefas) {
        let tarefaTexto = tarefa.innerText;
        tarefaTexto = tarefaTexto.replace('Apagar', '').trim();
        listaDeTarefas.push(tarefaTexto);
    }

    const tarefasJSON = JSON.stringify(listaDeTarefas);
    localStorage.setItem('tarefas', tarefasJSON);
}

function carregaTarefas() {
    const tarefas = JSON.parse(localStorage.getItem('tarefas'));
    for (let tarefa of tarefas) criaTarefa(tarefa);
}

carregaTarefas();