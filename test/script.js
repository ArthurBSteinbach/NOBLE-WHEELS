document.addEventListener("DOMContentLoaded", () => {
    const cars = document.querySelectorAll(".car");
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("show");
            } else {
                entry.target.classList.remove("show"); // Reseta para animar novamente
            }
        });
    }, { threshold: 0.1 }); // Ativa quando 10% do card estiver visível

    cars.forEach(car => observer.observe(car));
});