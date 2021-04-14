import createHtmlElement from "../services/createHtmlElement";
import MenuTitle from "./MenuTitle";
import MenuList from "./MenuList";

export default function Menu() {
  const dropdownDemo = createHtmlElement(
    "section",
    "dropdown-demo",
    "",
    document.body
  );
  const menu = createHtmlElement("nav", "menu", "", dropdownDemo);
  MenuTitle(menu);
  MenuList(menu);
}
