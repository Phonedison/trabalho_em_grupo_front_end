const track = document.querySelector(".carousel-track");
const slides = Array.from(track.children);
let currentIndex = 0;
let autoPlayInterval;

function updateCarousel() {
  if (slides.length === 0) return;
  const slideWidth = slides[0].getBoundingClientRect().width;
  track.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
}

function nextSlide() {
  currentIndex = (currentIndex + 1) % slides.length;
  updateCarousel();
}

function startTimer() {
  autoPlayInterval = setInterval(nextSlide, 5000);
}

const container = document.querySelector(".carousel-container");
if (container) {
  container.addEventListener("mouseenter", () =>
    clearInterval(autoPlayInterval),
  );
  container.addEventListener("mouseleave", startTimer);
}

window.addEventListener("load", () => {
  if (slides.length > 0) {
    startTimer();
  } else {
    console.log("Nenhum slide encontrado no carrossel");
  }
});

window.addEventListener("resize", updateCarousel);
