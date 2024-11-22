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
// Toggle Mobile Menu
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
  navMenu.classList.toggle('active');
});
