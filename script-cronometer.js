function iniciarCronometro() {
    const agora = new Date().getTime();
    const tempoFinal = agora + (2 * 24 * 60 * 60 * 1000); // 2 days from now
    const cronometroElement = document.getElementById("cronometer");
    const timeLeftElement = document.getElementById("time-left");
    
    function atualizarCronometro() {
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
    atualizarCronometro(); // Initial call
}

// Start the countdown when the page loads
window.addEventListener('DOMContentLoaded', iniciarCronometro);