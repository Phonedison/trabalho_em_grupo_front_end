const imagens = document.querySelectorAll(".pet-carousel img");

window.addEventListener("load", () => {
  if (imagens.length === 0) {
    console.log("Nenhuma imagem encontrada no banner");
    return;
  }

  let index = 0;
  imagens[0].classList.add("active");

  setInterval(() => {
    imagens[index].classList.remove("active");
    index = (index + 1) % imagens.length;
    imagens[index].classList.add("active");
  }, 3000);
});
