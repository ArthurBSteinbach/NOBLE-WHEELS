// Configurações
const totalImages = 36; // Total de imagens para 360°
let currentAngle = 0;
let currentColor = 'white';
let isDragging = false;
let startX = 0;

// Elementos DOM
const carImage = document.querySelector('.viewer-img');
const angleDisplay = document.getElementById('angle');
const colorOptions = document.querySelectorAll('.color-option');

// Pré-carrega imagens para todas as cores
function preloadImages() {
    const colors = ['white', 'black', 'wine'];
    colors.forEach(color => {
        for (let i = 0; i < totalImages; i++) {
            new Image().src = `images/cars/lucids/lucid_${color}/car_${i}.png`;
        }
    });
}
preloadImages();

// Atualiza a imagem exibida
function loadImage() {
    const normalizedAngle = ((currentAngle % 360) + 360) % 360;
    const imageIndex = Math.floor(normalizedAngle / (360 / totalImages)) % totalImages;
    
    carImage.src = `images/cars/lucids/lucid_${currentColor}/car_${imageIndex}.png`;
    carImage.alt = `Lucid ${currentColor} em ângulo ${Math.round(normalizedAngle)}°`;
    angleDisplay.textContent = Math.round(normalizedAngle);
}


// Seleção de cor
colorOptions.forEach(option => {
    option.addEventListener('click', () => {
        currentColor = option.dataset.color;
        loadImage();
        
        // Atualiza visual da seleção
        colorOptions.forEach(opt => opt.classList.remove('selected'));
        option.classList.add('selected');
    });
});

// Controle por arraste
const viewer = document.getElementById('viewer');

viewer.addEventListener('mousedown', (e) => {
    isDragging = true;
    startX = e.clientX;
    e.preventDefault();
});

viewer.addEventListener('mousemove', (e) => {
    if (!isDragging) return;
    const diffX = e.clientX - startX;
    currentAngle += diffX * 0.5;
    startX = e.clientX;
    loadImage();
});

viewer.addEventListener('mouseup', () => isDragging = false);
viewer.addEventListener('mouseleave', () => isDragging = false);

// Controle por teclado
document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowLeft') {
        currentAngle -= 10;
        loadImage();
    } else if (e.key === 'ArrowRight') {
        currentAngle += 10;
        loadImage();
    }
});

// Inicializa
loadImage();