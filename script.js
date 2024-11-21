// Placeholder for future functionality or interactivity
// Example: Scroll-to-section functionality for smoother transitions

document.querySelectorAll("nav a").forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    const targetId = e.target.getAttribute("href").substring(1);
    document.getElementById(targetId).scrollIntoView({
      behavior: "smooth",
    });
  });
});

// Flip card functionality if needed in the future
function flipCard(card) {
  const cardInner = card.querySelector('.card-inner');
  if (cardInner.style.transform === "rotateY(180deg)") {
    cardInner.style.transform = "rotateY(0deg)";
  } else {
    cardInner.style.transform = "rotateY(180deg)";
  }
}
