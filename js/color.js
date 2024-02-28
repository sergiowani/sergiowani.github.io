function getRandomColorRGB() {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  return `rgb(${r}, ${g}, ${b})`;
}

function changeColor(element) {
  const randomColor = getRandomColorRGB();
  element.style.color = randomColor;
}

function resetColor(element) {
  element.style.color = '';
}