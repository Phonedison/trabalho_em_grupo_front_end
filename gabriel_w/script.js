document.addEventListener("DOMContentLoaded", () => {

  // pega o carrossel da página
  const carousel = document.querySelector(".pet-carousel");

  // se não existir, para o script
  if (!carousel) return;

  // pega todas as imagens do carrossel
  const images = carousel.querySelectorAll("img");

  // pega os botões de navegação
  const prev = carousel.querySelector(".prev");
  const next = carousel.querySelector(".next");

  // controla qual imagem está ativa
  let index = 0;

  // função que mostra a imagem atual
  function showImage(i) {
    images.forEach(img => img.classList.remove("active")); // remove de todas
    images[i].classList.add("active"); // ativa a atual
  }

  // botão para próxima imagem
  if (next) {
    next.addEventListener("click", () => {
      index = (index + 1) % images.length; // avança
      showImage(index);
    });
  }

  // botão para imagem anterior
  if (prev) {
    prev.addEventListener("click", () => {
      index = (index - 1 + images.length) % images.length; // volta
      showImage(index);
    });
  }

});