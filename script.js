document.addEventListener("DOMContentLoaded", () => {
  const fadeInElements = document.querySelectorAll(".fade-in");

  const observer = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
          // Adiciona um atraso de tempo para cada elemento
          setTimeout(() => {
            entry.target.classList.add("active");
          }, index * 400); // Atraso de 300ms para cada elemento
          observer.unobserve(entry.target); // Para observar apenas uma vez
        }
      });
    },
    { threshold: 0.2 } // Ativa quando 30% do elemento está visível
  );

  fadeInElements.forEach((element) => {
    observer.observe(element); // Observa cada elemento com a classe .fade-in
  });

  document.addEventListener("DOMContentLoaded", () => {
    const elements = document.querySelectorAll(".fade-in");
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("active");
            }
        });
    });

    elements.forEach(el => observer.observe(el));
});

});
