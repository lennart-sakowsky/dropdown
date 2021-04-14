import createHtmlElement from "../services/createHtmlElement";
import MenuListItem from "./MenuListItem";

export default function MenuList(menu) {
  const menuList = createHtmlElement("ul", "menu__list", "", menu);
  menuList.classList.add("menu__list--hidden");
  MenuListItem(menuList);
}
