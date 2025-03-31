const gradientBox = document.querySelector(".background-change-with-options");
const textCar = document.querySelector("#scroll-based")
function colorChanger(color) {
    const colorText = document.getElementById("color-text");

    if (!gradientBox || !colorText) {
        console.error("Elemento não encontrado!");
        return;
    }

    if (color === "white") {
        textCar.style.color = "black"

        colorText.textContent = "Branco Metálico Estelar";
        gradientBox.style.backgroundImage = "linear-gradient(to bottom,#ebeae6,#6d6c6a,#232324)";
    } 
    
    else if (color === "black") {
        textCar.style.color = "#fff"

        colorText.textContent = "Preto Metálico Infinito";
        gradientBox.style.backgroundImage = "linear-gradient(to bottom, #1b1b1b, #141414,black )";
    }
    else if (color === "wine") {
        textCar.style.color = "#1c1c1c"

        colorText.textContent = "Vermelho Metálico Vinho";
        gradientBox.style.backgroundImage = "linear-gradient(to bottom, #a51830, #501819, black)";
    }
   
}