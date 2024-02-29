//Professional Development - Swipers
const swiper = new Swiper(".certification-swiper", {
  // Optional parameters
  direction: "horizontal",
  loop: true,

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  // And if we need scrollbar
  scrollbar: {
    el: ".swiper-scrollbar",
  },
});

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
  // reset: true,
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
ScrollReveal().reveal(".home .info .btn", { delay: 700, origin: "bottom" });
ScrollReveal().reveal(".home-img", { delay: 500, origin: "bottom" });

//Scroll to top button

const scrollTopBtn = document.querySelector(".ScrollToTop-btn");

window.addEventListener("scroll", () => {
  scrollTopBtn.classList.toggle("active", window.scrollY > 50);
});

scrollTopBtn.addEventListener("click", () => {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
});

//Navigation menu items active on page scroll
window.addEventListener("scroll", () => {
  const sections = document.querySelectorAll("section");
  const scrollY = window.scrollY;

  sections.forEach((current) => {
    let sectionHeight = current.offsetHeight;
    let sectionTop = current.offsetTop - 50;
    let id = current.getAttribute("id");
    const navItem = document.querySelector(".nav-items a[href='#" + id + "']");

    if (id === "contact") {
      // Check if the section is in the viewport
      if (isInViewport(current)) {
        // Add active class to the navigation item
        navItem.classList.add("active");
        document
          .querySelector(".nav-items a[href='#skills']")
          .classList.remove("active");
      } else {
        // Remove active class from the navigation item
        navItem.classList.remove("active");
      }
    } else {
      if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
        navItem.classList.add("active");
      } else {
        navItem.classList.remove("active");
      }
    }
  });
});

function isInViewport(element) {
  // calculates the size and position of the element relative to the viewport
  const bounding = element.getBoundingClientRect();

  return (
    bounding.top >= 0 &&
    bounding.left >= 0 &&
    bounding.bottom <=
      (window.innerHeight || document.documentElement.clientHeight) &&
    bounding.right <=
      (window.innerWidth || document.documentElement.clientWidth)
  );
}

//Responsive navigation menu toggle
const menuBtn = document.querySelector(".nav-menu-btn");
const closeBtn = document.querySelector(".nav-close-btn");
const navigation = document.querySelector(".navigation");
const navItems = document.querySelectorAll(".nav-items a");

menuBtn.addEventListener("click", () => {
  navigation.classList.add("active");
});

closeBtn.addEventListener("click", () => {
  navigation.classList.remove("active");
});

navItems.forEach((navItem) => {
  navItem.addEventListener("click", () => {
    navigation.classList.remove("active");
  });
});

// JavaScript to toggle aria-hidden attribute based on screen width and set focus
window.addEventListener("DOMContentLoaded", function () {
  if (window.innerWidth <= 768) {
    navigation.setAttribute("aria-hidden", "false"); // Show navigation for mobile devices
    menuBtn.setAttribute("aria-hidden", "false");
    menuBtn.setAttribute("aria-expanded", "true");
    closeBtn.setAttribute("aria-hidden", "false");
  } else {
    navigation.setAttribute("aria-hidden", "true"); // Hide navigation for larger screens
    menuBtn.setAttribute("aria-hidden", "true");
    menuBtn.setAttribute("aria-expanded", "false");
    closeBtn.setAttribute("aria-hidden", "true");
  }
});
