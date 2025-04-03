function iniciarCronometro() {
    const agora = new Date().getTime();
    const tempoFinal = agora + (2 * 24 * 60 * 60 * 1000); // 2 daqui em diante
    const cronometroElement = document.getElementById("cronometer");
    const timeLeftElement = document.getElementById("time-left");
    
    function atualizarCronometro() { // função para atualizar o cronometro
        const agoraAtual = new Date().getTime();
        const diferenca = tempoFinal - agoraAtual;
        
        if (diferenca <= 0) {
            clearInterval(intervalo);
            cronometroElement.innerHTML = "Promoção encerrada!";
            return;
        }
        
        const dias = Math.floor(diferenca / (1000 * 60 * 60 * 24));
        const horas = Math.floor((diferenca % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutos = Math.floor((diferenca % (1000 * 60 * 60)) / (1000 * 60));
        const segundos = Math.floor((diferenca % (1000 * 60)) / 1000);
        
        timeLeftElement.innerText = `${dias}:${horas}:${minutos}:${segundos}s`;
    }
    
    const intervalo = setInterval(atualizarCronometro, 1000);
    atualizarCronometro(); // chamando a função inicial
}

// começa quando a página é carregada
window.addEventListener('DOMContentLoaded', iniciarCronometro);