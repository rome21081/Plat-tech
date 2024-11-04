// Get the carousel inner container, thumbnails container, and navigation buttons
const carouselInner = document.querySelector('.carousel-in');
const carouselThumbnails = document.querySelector('.carousel-thumbn');
const carouselPrev = document.querySelector('.carousel-prv');
const carouselNext = document.querySelector('.carousel-nxt');

// Get the carousel items (images) and thumbnail items
const carouselItems = document.querySelectorAll('.carousel-itm');
const carouselThumbnailItems = document.querySelectorAll('.carousel-thumbn');

// Set the current slide index
let currentSlide = 0;

// Show the first slide
carouselItems[currentSlide].style.display = 'block';

// Add event listeners to the navigation buttons
carouselPrev.addEventListener('click', () => {
  // Go to the previous slide
  currentSlide--;
  if (currentSlide < 0) {
    currentSlide = carouselItems.length - 1;
  }
  updateCarousel();
});

carouselNext.addEventListener('click', () => {
  // Go to the next slide
  currentSlide++;
  if (currentSlide >= carouselItems.length) {
    currentSlide = 0;
  }
  updateCarousel();
});

// Add event listeners to the thumbnail items
carouselThumbnailItems.forEach((item, index) => {
  item.addEventListener('click', () => {
    // Go to the corresponding slide
    currentSlide = index;
    updateCarousel();
  });
});

// Update the carousel display
function updateCarousel() {
  // Hide all carousel items
  carouselItems.forEach((item) => {
    item.style.display = 'none';
  });
  // Show the current slide
  carouselItems[currentSlide].style.display = 'block';
  // Highlight the corresponding thumbnail
  carouselThumbnailItems.forEach((item, index) => {
    if (index === currentSlide) {
      item.classList.add('active');
    } else {
      item.classList.remove('active');
    }
  });
}