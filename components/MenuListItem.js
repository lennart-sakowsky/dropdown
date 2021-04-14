import createHtmlElement from "../services/createHtmlElement";

export default function MenuListItem(menuList) {
  const menuListItems = ["Home", "Mein Konto", "Meine Wunschliste", "Kontakt"];
  menuListItems.forEach((textContent) => {
    const menuListItem = createHtmlElement(
      "li",
      "menu__list-item",
      textContent,
      menuList
    );
  });
}
