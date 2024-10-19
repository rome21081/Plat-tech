let currentIndex = 0; // Track the current slide

function moveCarousel(direction) {
  const carouselContainer = document.querySelector('.carousel-container');
  const carouselItems = document.querySelectorAll('.carousel-item');
  const totalItems = carouselItems.length;

  // Update the current index based on the direction
  currentIndex += direction;

  // Loop back to first item if exceeding the last, or go to last if moving from first
  if (currentIndex >= totalItems) {
    currentIndex = 0;
  } else if (currentIndex < 0) {
    currentIndex = totalItems - 1;
  }

  // Calculate the new translate value for the carousel container
  const translateXValue = -currentIndex * 100; // Moves by 100% width each time
  carouselContainer.style.transform = `translateX(${translateXValue}%)`;
}
