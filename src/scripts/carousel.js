const track = document.querySelector(".carousel-track");
const slides = Array.from(track.children);
const nextButton = document.querySelector(".next-btn");
const prevButton = document.querySelector(".prev-btn");

let currentIndex = 0;
let autoPlayInterval;

function updateCarousel() {
  const slideWidth = slides[0].getBoundingClientRect().width;
  track.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
}

function nextSlide() {
  currentIndex = (currentIndex + 1) % slides.length;
  updateCarousel();
}

function prevSlide() {
  currentIndex = (currentIndex - 1 + slides.length) % slides.length;
  updateCarousel();
}

// Evento de clique -> próxima foto
nextButton.addEventListener("click", () => {
  nextSlide();
  resetTimer();
});
// Evento de clique ->  foto anterior
prevButton.addEventListener("click", () => {
  prevSlide();
  resetTimer();
});

//temporizador
function startTimer() {
  autoPlayInterval = setInterval(nextSlide, 3000);
}

//função para resetar o tempo
function resetTimer() {
  clearInterval(autoPlayInterval);
  startTimer();
}

const container = document.querySelector(".carousel-container");
container.addEventListener("mouseenter", () => clearInterval(autoPlayInterval));
container.addEventListener("mouseleave", startTimer);

startTimer();

window.addEventListener("resize", updateCarousel);
