const burgerBtn = document.getElementById("hamburger");
const hiddenNav = document.getElementById("hidden-nav");
let panel = "hamburger";
burgerBtn.addEventListener("click", () => {
  if (panel === "hamburger") {
    burgerBtn.src = "./images/icon-close.svg";
    panel = "close";
  } else if (panel === "close") {
    burgerBtn.src = "./images/icon-hamburger.svg";
    panel = "hamburger";
  }

  hiddenNav.classList.toggle("show");
});
