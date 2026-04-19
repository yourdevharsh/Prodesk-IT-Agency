import "./style.css";

const themeIcon = document.querySelectorAll(".themeIcon");
const cards = document.querySelectorAll(".card");
const footer = document.getElementById("footer");
const menuBtn = document.getElementById("menuBtn");
const menu = document.getElementById("menu");

themeIcon.forEach((icon) => {
  icon.addEventListener("click", () => {
    if (icon.src.includes("sun.svg")) {
      icon.src = "/moon.svg";
    } else {
      icon.src = "/sun.svg";
    }

    document.documentElement.classList.toggle("dark");
  });
});

menuBtn.addEventListener("click", () => {
  menu.classList.toggle("hidden");
  menu.classList.toggle("translate-x-full");
});
