function meuEscopo() {
    const form = document.querySelector('.form');
    const resultado = document.querySelector('.resultado');

    const people = [];

    function eventForm (evento) {
        evento.preventDefault(); //Não recarrega a página ao dar submit

        const name = form.querySelector('.name');
        const surname = form.querySelector('.surname');
        const weight = form.querySelector('.weight');
        const height = form.querySelector('.height');

        people.push({
            name: name.value,
            surname: surname.value,
            weight: weight.value,
            height: height.value
        });

        resultado.innerHTML += `<p>${name.value} ${surname.value}, ${weight.value}kg, ${height.value}cm</p>`;

        console.log(people)
    }

    form.addEventListener('submit', eventForm);
};

meuEscopo();