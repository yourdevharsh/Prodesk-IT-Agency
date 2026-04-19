import "./style.css";

const themeIcon = document.getElementById("themeIcon");
const cards = document.querySelectorAll(".card");
const footer = document.getElementById('footer');
const menuBtn = document.getElementById("menuBtn");
const menu = document.getElementById("menu");

themeIcon.addEventListener("click", () => {
  if (themeIcon.src.includes("sun.svg")) {
    themeIcon.src = "/src/assets/moon.svg";
  } else {
    themeIcon.src = "/src/assets/sun.svg";
  }

  document.documentElement.classList.toggle("dark");
});

menuBtn.addEventListener("click", () => {
  menu.classList.toggle("hidden");
  menu.classList.toggle("translate-x-full");
});