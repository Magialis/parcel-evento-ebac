const dataDoAniversario = new Date("Nov 11, 2024 19:00:00");
const timeStampDoAniversario = dataDoAniversario.getTime();

const contaAsHoras = setInterval(function() {
    const agora = new Date();
    const timeStampAtual = agora.getTime();

    const distanciaAteOAniversario = timeStampDoAniversario - timeStampAtual;

    const diaEmMs = 1000 * 60 * 60 * 24;
    const horasEmMs = 1000 * 60 * 60;
    const minutosEmMs = 1000 * 60;
    const segundosEmMs = 1000;

    const diasAteOAniversario = Math.floor(distanciaAteOAniversario / diaEmMs);
    const horasAteOAniversario = Math.floor((distanciaAteOAniversario % diaEmMs) / horasEmMs);
    const minutosAteOAniversario = Math.floor((distanciaAteOAniversario % horasEmMs) / minutosEmMs);
    const segundosAteOAniversario = Math.floor((distanciaAteOAniversario % minutosEmMs) / segundosEmMs);

    document.getElementById('dias').innerHTML = `${diasAteOAniversario}d`;
    document.getElementById('horas').innerHTML = `${horasAteOAniversario}h`;
    document.getElementById('minutos').innerHTML = `${minutosAteOAniversario}m`;
    document.getElementById('segundos').innerHTML = `${segundosAteOAniversario}s`;

    if (distanciaAteOAniversario < 0) {
        clearInterval(contaAsHoras);
        document.querySelector('.hero__content').innerHTML = `meu aniversário já passou :(`;
    }
}, 1000);

document.getElementById('form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    document.getElementById('message').style.display = 'block';
});