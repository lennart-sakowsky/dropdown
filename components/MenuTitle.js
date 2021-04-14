import createHtmlElement from "../services/createHtmlElement";
import MenuIcon from "./MenuIcon";

export default function MenuTitle(menu) {
  const menuTitle = createHtmlElement("div", "menu__title", "", menu);
  const menuTitleText = createHtmlElement(
    "span",
    "menu__title-text",
    "Menü",
    menuTitle
  );
  MenuIcon(menuTitle);
}
