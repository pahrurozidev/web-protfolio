const img = document.querySelector(".nav-item img");
const nav = document.querySelector("nav");

img.addEventListener("click", () => {
  nav.classList.toggle("slide");

  if (nav.getAttribute("class") == "slide") {
    img.src = "img/arrow-left-circle.svg";
  } else {
    img.src = "img/list.svg";
  }
});