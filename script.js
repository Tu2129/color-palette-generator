const generateColor = document.getElementById("generateColor");
const colors = document.querySelector(".colors");
const randomColor = () =>
  "#" +
  Math.floor(Math.random() * 0xffffff)
    .toString(16)
    .padStart(6, "0");

function generate() {
    colors.innerHTML = "";
  for (let i = 0; i < 6; i++) {
    const color = randomColor();
    colors.innerHTML += `<div class="box">
    <div class="color-bg" style="background: ${color}"></div>
    <p class="color-text">${color}</p>
    </div>
    `;
    console.log(color);
  }
}
generate();

generateColor.addEventListener("click", () => {
  generate();
});
