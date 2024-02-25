//Website dark/light theme

const themeBtn = document.querySelector(".theme-btn");

themeBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark-theme");
  themeBtn.classList.toggle("sun");

  localStorage.setItem("saved-theme", getCurrentTheme());
  localStorage.setItem("saved-icon", getCurrentIcon());
});

const getCurrentTheme = () =>
  document.body.classList.contains("dark-theme") ? "dark" : "light";
const getCurrentIcon = () =>
  themeBtn.classList.contains("sun") ? "sun" : "moon";

const savedTheme = localStorage.getItem("saved-theme");
const savedIcon = localStorage.getItem("saved-icon");

if (savedTheme) {
  document.body.classList[savedTheme === "dark" ? "add" : "remove"](
    "dark-theme"
  );

  themeBtn.classList[savedIcon === "sun" ? "add" : "remove"]("sun");
}

//Scroll reveal animations
//Common reveal options to create reveal animations
ScrollReveal({
  reset: true,
  distance: "60px",
  duration: 2500,
  delay: 100,
});

//Target elements, and specify options to create reveal animations
ScrollReveal().reveal(".home .info h2", { delay: 500, origin: "right" });
ScrollReveal().reveal(".home .info h3, .home .info p", {
  delay: 600,
  origin: "left",
});
ScrollReveal().reveal(".media-icons i", {
  delay: 500,
  origin: "right",
  interval: 200,
});
ScrollReveal().reveal(".home-img", { delay: 500, origin: "bottom" });
