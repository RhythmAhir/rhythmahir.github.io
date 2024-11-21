// Smooth Scrolling for Navigation
document.querySelectorAll("nav a").forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth"
    });
  });
});

// Entry Animations for Sections
const observer = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  },
  {
    threshold: 0.1
  }
);

document.querySelectorAll("section").forEach(section => {
  observer.observe(section);
  section.classList.add("hidden");
});

// Add "visible" and "hidden" styles in CSS
