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
    }, { threshold: 0.1 }); 
    cars.forEach(car => observer.observe(car));
  });