// Smooth scrolling for navigation
document.querySelectorAll("nav a").forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth"
    });
  });
});

function flipCard(button) {
  const cardInner = button.previousElementSibling;
  if (cardInner.style.transform === "rotateY(180deg)") {
    cardInner.style.transform = "rotateY(0deg)";
  } else {
    cardInner.style.transform = "rotateY(180deg)";
  }
}
