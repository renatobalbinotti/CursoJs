function timerRelogio() {
    function criaHoraDosSegundos(seg) {
        const data = new Date(segundos * 1000);
        return data.toLocaleTimeString('pt-BR', {hour12: false, timeZone: 'UTC'});
    }

    const relogio = document.querySelector('#relogio');
    let segundos = 0;
    let timer;

    function iniciarTimer() {
        timer = setInterval(function(){
            segundos++;
            relogio.innerHTML = criaHoraDosSegundos(segundos);
        }, 1000);
    }

    document.addEventListener('click', function(e) {
        const el = e.target;

        if (el.classList.contains('zerarTimer')) {
            console.log('Zerou o Timer');
            clearInterval(timer);
            relogio.innerHTML = '00:00:00';
            relogio.classList.remove('timerParado');
            segundos = 0;
        }

        if (el.classList.contains('iniciaTimer')) {
            console.log('Iniciou o Timer');
            relogio.classList.remove('timerParado');
            clearInterval(timer);
            iniciarTimer();
        }

        if (el.classList.contains('pausarTimer')) {
            console.log('Pausou o Timer');
            clearInterval(timer);
            relogio.classList.add('timerParado');
        }
    })
}

timerRelogio();