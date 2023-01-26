const changeButton = document.getElementById("change-button");

// Agregamos un evento click al botón
changeButton.addEventListener("click", function() {
  // Obtenemos un color aleatorio
  const randomColor = getRandomColor();
  // Cambiamos el background del body al color aleatorio
  document.body.style.backgroundColor = randomColor;
});

// Esta función genera y devuelve un color hexadecimal aleatorio
function getRandomColor() {
  let letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}
