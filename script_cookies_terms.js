// Mostrar após 5 segundos
setTimeout(() => {
    document.querySelector('.acept-cookies').classList.add('show');
}, 5000);

// Fechar ao clicar nos botões
document.getElementById('accept-cookies').addEventListener('click', () => {
    document.querySelector('.acept-cookies').classList.remove('show');
    document.querySelector('.acept-cookies').classList.add('hide');
    // Lógica para aceitar cookies...
});

document.getElementById('reject-cookies').addEventListener('click', () => {
    document.querySelector('.acept-cookies').classList.remove('show');
    document.querySelector('.acept-cookies').classList.add('hide');
    // Lógica para rejeitar cookies...
});