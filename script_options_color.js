const gradientBox = document.querySelector(".background-change-with-options");
const textCar = document.querySelector("#scroll-based")
function colorChanger(color) {
    const colorText = document.getElementById("color-text");

    if (color === "white") { // se o botão branco for clicado
        textCar.style.color = "#fff"

        colorText.textContent = "Branco Metálico Estelar";
        gradientBox.style.backgroundImage = "linear-gradient(to bottom,#1f1f1f 1%,#ebeae6,#6d6c6a,#232324,#1f1f1f)";
    } 
    
    else if (color === "black") {
        textCar.style.color = "#fff"

        colorText.textContent = "Preto Metálico Infinito";
        gradientBox.style.backgroundImage = "linear-gradient(to bottom,#1f1f1f 1%, #1b1b1b, #141414, black, #1f1f1f )";
    }
    else if (color === "wine") {
        textCar.style.color = "#fff"

        colorText.textContent = "Vermelho Metálico Vinho";
        gradientBox.style.backgroundImage = "linear-gradient(to bottom,#1f1f1f 1%, #a51830, #501819, black, #1f1f1f)";
    }
   
}