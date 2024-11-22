document.querySelectorAll('nav ul li a').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
          behavior: 'smooth'
      });
  });
});
function flipCard(button) {
  const card = button.closest('.project-card'); // Select the closest project card
  const cardInner = card.querySelector('.card-inner');
  if (cardInner.classList.contains('flipped')) {
    cardInner.classList.remove('flipped');
  } else {
    cardInner.classList.add('flipped');
  }
}
// Toggle Navigation Menu
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');
const navLinksItems = document.querySelectorAll('.nav-links li a');

// Toggle menu visibility on hamburger click
hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

// Hide menu when a link is clicked
navLinksItems.forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('active');
  });
});

// Back to Top Button Logic
const backToTopButton = document.getElementById('backToTop');

// Show button when scrolled down
window.addEventListener('scroll', () => {
  if (window.scrollY > 200) {
    backToTopButton.classList.add('show');
  } else {
    backToTopButton.classList.remove('show');
  }
});

// Scroll to top on button click
backToTopButton.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});
