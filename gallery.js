// Selectors
const images = document.querySelectorAll('img');

// Initial image count
let totalImages = images.length;

// Add event listeners to images
let isLargeActive = false;

images.forEach((image, index) => {
  image.addEventListener('click', () => {
    if (!isLargeActive) {
      image.classList.toggle('large');
      isLargeActive = image.classList.contains('large');
      if (isLargeActive) {
        document.removeEventListener('click', closeLargeImage);
      } else {
        document.addEventListener('click', closeLargeImage);
      }
    } else if (image.classList.contains('large')) {
      image.classList.remove('large');
      isLargeActive = false;
      document.addEventListener('click', closeLargeImage);
    }
  });
  image.classList.add('fade-in-animate');
  image.style.animationDelay = `${0.5 * index}s`;
});

function closeLargeImage(event) {
  if (
    !event.target.classList.contains('image') &&
    !event.target.closest('.large')
  ) {
    images.forEach((image) => {
      if (image.classList.contains('large')) {
        image.classList.remove('large');
        isLargeActive = false;
        document.addEventListener('click', closeLargeImage);
      }
    });
  }
}
