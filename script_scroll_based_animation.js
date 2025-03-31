// Código feito por: Arthur Bueno Steinbach

// scroll based animation para divs multiplas

document.addEventListener("DOMContentLoaded", () => {
  const cars = document.querySelectorAll(".car");
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      } else {
        entry.target.classList.remove("show");
      }
    });
  }, { threshold: 0.5 });
  cars.forEach(car => observer.observe(car));
});


document.addEventListener("DOMContentLoaded", () => {
  const elements = document.querySelectorAll("[data-observe]");

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      } else {
        entry.target.classList.remove("show");
      }
    });
  }, { threshold: 0.5 });

  elements.forEach(element => {
    observer.observe(element);
  });
});