var swiper = new Swiper(".slide-content", {
  slidesPerView: 1,
  spaceBetween: 10,
  pagination: {
    el: ".pag2",
    clickable: true,
  },
  breakpoints: {
    640: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 4,
      spaceBetween: 40,
    },
    1024: {
      slidesPerView: 4,
      spaceBetween: 50,
    },
  },
});



const carousel = document.querySelector('.carousel1');
const prevButton = document.querySelector('.carousel-prev');
const nextButton = document.querySelector('.carousel-next');
const indicators = document.querySelectorAll('.indicator');

let currentIndex = 0;

function updateCarousel() {
  carousel.style.transform = `translateX(-${currentIndex * 100}%)`;
  indicators.forEach((indicator, index) => {
    indicator.classList.toggle('active', index === currentIndex);
  });
}

prevButton.addEventListener('click', () => {
  currentIndex = Math.max(currentIndex - 1, 0);
  updateCarousel();
});

nextButton.addEventListener('click', () => {
  currentIndex = Math.min(currentIndex + 1, indicators.length - 1);
  updateCarousel();
});

indicators.forEach((indicator, index) => {
  indicator.addEventListener('click', () => {
    currentIndex = index;
    updateCarousel();
  });
});

// Initialize the carousel
updateCarousel();
