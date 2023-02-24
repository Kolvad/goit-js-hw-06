function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const buttonRef = document.querySelector(".widget button");
const widgetRef = document.querySelector("body");
const spanRef = document.querySelector("span.color");

buttonRef.addEventListener("click", (event) => {
  widgetRef.style.backgroundColor = getRandomHexColor();
  spanRef.textContent = widgetRef.style.backgroundColor;
});
