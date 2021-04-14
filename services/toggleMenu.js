export default function toggleMenu(event) {
  const menu = event.target.querySelector(".menu__list");
  menu.classList.toggle("menu__list--hidden");
}
