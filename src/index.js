import "./components/SocialLink.js";

let blockedToasty = false;
const toasty = new Audio("sounds/toasty.mp3");
const toastyImage = document.querySelector("img.toasty");

const toastyShow = () => {
  if (blockedToasty) return;
  blockedToasty = true;

  toastyImage.classList.add("appears");
  const links = document.querySelectorAll("social-link");
  links.forEach(link => link.classList.add("hover"));
  toasty.currentTime = 0;
  toasty.play();
  setTimeout(() => toastyHide(), 1000);
};

const toastyHide = () => {
  if (!blockedToasty) return;
  const links = document.querySelectorAll("social-link");
  links.forEach(link => link.classList.remove("hover"));
  setTimeout(() => (blockedToasty = false), 4000);
  toastyImage.classList.remove("appears");
};

const manzdev = document.querySelector(".manzdev");
manzdev.addEventListener("click", () => toastyShow());
