// espera carregar a página
document.addEventListener("DOMContentLoaded", () => {

  // pega carrossel
  const carousel = document.querySelector(".pet-carousel");

  if (!carousel) return;

  // pega imagens
  const images = carousel.querySelectorAll("img");

  // botões
  const prev = carousel.querySelector(".prev");
  const next = carousel.querySelector(".next");

  let index = 0;

  // troca imagem
  function showImage(i) {
    images.forEach(img => img.classList.remove("active"));
    images[i].classList.add("active");
  }

  // próximo
  next.addEventListener("click", () => {
    index = (index + 1) % images.length;
    showImage(index);
  });

  // anterior
  prev.addEventListener("click", () => {
    index = (index - 1 + images.length) % images.length;
    showImage(index);
  });

});