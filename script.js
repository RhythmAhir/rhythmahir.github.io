// Smooth scrolling for navigation
document.querySelectorAll("nav a").forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth"
    });
  });
});
// Optional: Ensure smooth transitions when hovering over flip cards
document.querySelectorAll('.project-card').forEach(card => {
  card.addEventListener('mouseenter', () => {
    card.querySelector('.card-front').style.transform = 'rotateY(180deg)';
    card.querySelector('.card-back').style.transform = 'rotateY(0deg)';
  });

  card.addEventListener('mouseleave', () => {
    card.querySelector('.card-front').style.transform = 'rotateY(0deg)';
    card.querySelector('.card-back').style.transform = 'rotateY(180deg)';
  });
});
function flipCard(button) {
  const card = button.previousElementSibling; // Get the .card-inner element
  if (card.style.transform === "rotateY(180deg)") {
    card.style.transform = "rotateY(0deg)";
  } else {
    card.style.transform = "rotateY(180deg)";
  }
}
