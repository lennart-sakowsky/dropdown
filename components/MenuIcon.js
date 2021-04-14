import createHtmlElement from "../services/createHtmlElement";

export default function MenuIcon(menuTitle) {
  const menuIcon = createHtmlElement("i", "menu__icon", "", menuTitle);
  menuIcon.innerHTML = `
  <svg
              fill="none"
              style="display: inline-block; vertical-align: middle"
              height="32"
              width="32"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <polyline points="6 9 12 15 18 9"></polyline></svg
          >
  `;
}
