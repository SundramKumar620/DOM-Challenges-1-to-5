const images = [
  { url: 'https://plus.unsplash.com/premium_photo-1666863909125-3a01f038e71f?q=80&w=1986', caption: 'Beautiful Mountain Landscape' },
  { url: 'https://plus.unsplash.com/premium_photo-1690576837108-3c8343a1fc83?q=80&w=2070', caption: 'Ocean Sunset View' },
  { url: 'https://images.unsplash.com/photo-1473448912268-2022ce9509d8?q=80&w=2041', caption: 'Autumn Forest Path' },
  { url: 'https://plus.unsplash.com/premium_photo-1680466057202-4aa3c6329758?q=80&w=2138', caption: 'Urban City Skyline' },
];

const carouselTrack = document.getElementById('carouselTrack');
const caption = document.getElementById('caption');
const prevButton = document.getElementById('prevButton');
const nextButton = document.getElementById('nextButton');
const carouselNav = document.getElementById('carouselNav');
const autoPlayButton = document.getElementById('autoPlayButton');
const timerDisplay = document.getElementById('timerDisplay'); // New Timer Element

let currentIndex = 0;
let autoPlayInterval;
let timerInterval;
let timer = 5;

function loadCarousel() {
  images.forEach((image, index) => {
    const img = document.createElement('div');
    img.classList.add('carousel-slide');
    img.style.backgroundImage = `url(${image.url})`;
    carouselTrack.appendChild(img);

    const dot = document.createElement('div');
    dot.classList.add('carousel-indicator');
    dot.addEventListener('click', () => moveToSlide(index));
    carouselNav.appendChild(dot);
  });
  updateCarousel();
}

function updateCarousel() {
  carouselTrack.style.transform = `translateX(-${currentIndex * 100}%)`;
  caption.innerText = images[currentIndex].caption;
  document.querySelectorAll('.carousel-indicator').forEach((dot, index) => {
    dot.classList.toggle("active", index === currentIndex);
  });
}

function moveToSlide(index) {
  currentIndex = (index + images.length) % images.length;
  updateCarousel();
  resetTimer();
}

nextButton.addEventListener('click', () => moveToSlide(currentIndex + 1));
prevButton.addEventListener('click', () => moveToSlide(currentIndex - 1));

function startAutoPlay() {
  autoPlayInterval = setInterval(() => moveToSlide(currentIndex + 1), 5000);
  startTimer();
  autoPlayButton.innerText = "Stop Auto Play";
  autoPlayButton.onclick = stopAutoPlay;
}

function stopAutoPlay() {
  clearInterval(autoPlayInterval);
  clearInterval(timerInterval);
  timerDisplay.innerText = "";
  autoPlayButton.innerText = "Start Auto Play";
  autoPlayButton.onclick = startAutoPlay;
}

function startTimer() {
  timer = 5;
  timerDisplay.innerText = `Next slide in: ${timer}s`;
  timerInterval = setInterval(() => {
    timer--;
    timerDisplay.innerText = `Next slide in: ${timer}s`;
    if (timer === 0) timer = 5; 
  }, 1000);
}

function resetTimer() {
  if (autoPlayInterval) { 
    clearInterval(timerInterval);
    startTimer();
  }
}

window.onload = loadCarousel;
autoPlayButton.onclick = startAutoPlay;

