import changeTitle from "./changeTitle";

export default function onClickChangeTitle(
  menuList = document.querySelector(".menu__list")
) {
  menuList.addEventListener("click", (e) => {
    if (e.target.className === "menu__list-item") {
      const title = document.querySelector(".menu__title-text").textContent;
      const newTitle = e.target.textContent;
      if (title !== newTitle) {
        changeTitle(newTitle);
      }
    }
  });
}
