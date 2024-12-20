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
