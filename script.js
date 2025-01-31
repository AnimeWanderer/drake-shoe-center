// Hamburger Menu Toggle
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

// Hero Image Slider
const sliderImages = document.querySelectorAll('.slider img');
let currentImage = 0;

function changeImage() {
  sliderImages[currentImage].classList.remove('active');
  currentImage = (currentImage + 1) % sliderImages.length;
  sliderImages[currentImage].classList.add('active');
}

setInterval(changeImage, 5000); // Change image every 5 seconds

// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});