export default function createElement(tag, className, text, parent) {
  const element = document.createElement(tag);
  element.classList = className;
  element.textContent = text;
  parent.appendChild(element);

  return element;
}
