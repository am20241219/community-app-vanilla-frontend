const sideNav = document.querySelector(".side-nav");
const hamburgerButton = document.querySelector(".hamburger-button");
const closeButton = document.querySelector(".close-button");
const dimmer = document.querySelector(".dimmer");

hamburgerButton.addEventListener("click", () => {
  sideNav.classList.remove("hidden");
  dimmer.classList.add("dimmed");
});

closeButton.addEventListener("click", () => {
  sideNav.classList.add("hidden");
  dimmer.classList.remove("dimmed");
});

dimmer.addEventListener("click", () => {
  sideNav.classList.add("hidden");
  dimmer.classList.remove("dimmed");
});

// Create a media condition that targets viewports at least 768px wide
const mediaQuery = window.matchMedia("(min-width: 768px)");
// Check if the media query is true
if (mediaQuery.matches) {
  sideNav.classList.remove("hidden");
  dimmer.classList.remove("dimmed");
}
