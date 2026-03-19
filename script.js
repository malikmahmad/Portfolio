// Typing Animation for Hero Description
function typeWriter(element, text, speed = 50) {
  let index = 0;
  element.textContent = "";

  function type() {
    if (index < text.length) {
      element.textContent += text.charAt(index);
      index++;
      setTimeout(type, speed);
    }
  }

  type();
}

// Initialize typing animation when page loads
window.addEventListener("load", () => {
  const heroDescription = document.querySelector(".hero-description");
  if (heroDescription) {
    const originalText = heroDescription.textContent;
    typeWriter(heroDescription, originalText, 50);
  }
});

// Project Hover Overlay
const projects = document.querySelectorAll(".project");

projects.forEach((project) => {
  project.addEventListener("mouseenter", () => {
    project.querySelector(".overlay").classList.add("visible");
  });

  project.addEventListener("mouseleave", () => {
    project.querySelector(".overlay").classList.remove("visible");
  });
});
