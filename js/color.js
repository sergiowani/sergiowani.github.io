function getRandomColor() {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

function changeColor(element) {
  const randomColor = getRandomColor();
  element.style.color = randomColor;
}

function resetColor(element) {
  element.style.color = ''; // Restaura el color original al dejar de hacer hover
}