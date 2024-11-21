// Smooth scrolling for navigation links
document.querySelectorAll("nav a").forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    const targetId = e.target.getAttribute("href").substring(1);
    document.getElementById(targetId).scrollIntoView({
      behavior: "smooth",
    });
  });
});
// Flip card functionality
function flipCard(button) {
  const card = button.closest('.project-card');
  const cardInner = card.querySelector('.card-inner');

  if (card.classList.contains('flipped')) {
    card.classList.remove('flipped');
    cardInner.style.transform = 'rotateY(0deg)';
  } else {
    card.classList.add('flipped');
    cardInner.style.transform = 'rotateY(180deg)';
  }
}
