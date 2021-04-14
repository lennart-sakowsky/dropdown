import toggleMenu from "./toggleMenu";

export default function hoverNav(dropdown = document.querySelector(".menu")) {
  dropdown.addEventListener("mouseenter", (e) => toggleMenu(e));
  dropdown.addEventListener("mouseleave", (e) => toggleMenu(e));
}
