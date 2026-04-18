import "./style.css";

const themeIcon = document.getElementById("themeIcon");
themeIcon.addEventListener("click", () => {
  document.body.classList.toggle("darkTheme");
  if (themeIcon.src.includes('sun.svg')) {
    themeIcon.src = '/src/assets/moon.svg'
  } else {
    themeIcon.src = '/src/assets/sun.svg'
  }
});
