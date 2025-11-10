// FORMULARIO: Selección de elementos del DOM para usar en los eventos
const nameForm = document.getElementById("nameForm");
const nameInput = document.getElementById("nameInput");
const greeting = document.getElementById("greeting");
const charCount = document.getElementById("charCount");
const clearGreetingBtn = document.getElementById("clearGreetingBtn");

// Evita que el formulario recargue la página y muestra un saludo personalizado
nameForm.addEventListener("submit", (e) => {
  e.preventDefault();
  greeting.textContent = `¡Hola, ${nameInput.value}!`;
});

// Actualiza el contador de letras cada vez que el usuario suelta una tecla
nameInput.addEventListener("keyup", () => {
  charCount.textContent = `Letras escritas: ${nameInput.value.length}`;
});

// Destaca el campo mientras está enfocado
nameInput.addEventListener("focus", () => {
  nameInput.style.backgroundColor = "#e0f7fa";
});
nameInput.addEventListener("blur", () => {
  nameInput.style.backgroundColor = "white";
});

// Muestra en consola el texto que va introduciendo el usuario
nameInput.addEventListener("input", () => {
  console.log("Escribiendo:", nameInput.value);
});

// Limpia saludo, campo de texto y contador con un solo botón
clearGreetingBtn.addEventListener("click", () => {
  nameInput.value = "";
  greeting.textContent = "";
  charCount.textContent = "Letras escritas: 0";
  nameInput.focus();
});

// CAJA DE COLOR: elementos controlados por eventos de mouse y selección
const colorBox = document.getElementById("colorBox");
const colorSelector = document.getElementById("colorSelector");

// Cambia el color de fondo cuando el mouse entra y sale
colorBox.addEventListener("mouseover", () => {
  colorBox.style.backgroundColor = "#ffd";
});
colorBox.addEventListener("mouseout", () => {
  colorBox.style.backgroundColor = "lightgray";
});
// Permite establecer el color elegido en el select
colorSelector.addEventListener("change", () => {
  colorBox.style.backgroundColor = colorSelector.value;
});

// BOTÓN CLIC / DOBLE CLIC: reutiliza el mismo botón con dos comportamientos
const actionButton = document.getElementById("actionButton");
const clickMessage = document.getElementById("clickMessage");

// Click simple: muestra mensaje y aplica tachado
actionButton.addEventListener("click", () => {
  clickMessage.textContent = "¡Hiciste un clic!";
  clickMessage.style.textDecoration = "line-through";
});
// Doble clic: restaura mensaje y quita el tachado
actionButton.addEventListener("dblclick", () => {
  clickMessage.textContent = "¡Hiciste doble clic!";
  clickMessage.style.textDecoration = "none";
});

// MOVIMIENTO DEL MOUSE: muestra las coordenadas del cursor en todo momento
const mouseCoords = document.getElementById("mouseCoords");

document.addEventListener("mousemove", (e) => {
  mouseCoords.textContent = `Coordenadas: X=${e.clientX}, Y=${e.clientY}`;
});

// TECLAS: detecta la última tecla presionada en el documento
const keyDisplay = document.getElementById("keyDisplay");

document.addEventListener("keydown", (e) => {
  keyDisplay.textContent = `Tecla presionada: ${e.key}`;
});

// VISIBILIDAD DE LA PÁGINA: informa si la pestaña está activa u oculta
const visibilityStatus = document.getElementById("visibilityStatus");

document.addEventListener("visibilitychange", () => {
  if (document.hidden) {
    visibilityStatus.textContent = "La pestaña está OCULTA.";
  } else {
    visibilityStatus.textContent = "La pestaña está ACTIVA.";
  }
});

// TAMAÑO VENTANA Y SCROLL: actualiza tamaño actual y detecta desplazamiento
const windowSize = document.getElementById("windowSize");

function updateWindowSize() {
  windowSize.textContent = `Tamaño ventana: ${window.innerWidth} x ${window.innerHeight}`;
}
window.addEventListener("resize", updateWindowSize);
window.addEventListener("scroll", () => {
  console.log("Scroll detectado");
});
updateWindowSize(); // llamada inicial
