const button = document.getElementById("accionParaCuandoEllaDigaQuesi");
button.addEventListener("click", () => {
  const result = window.confirm("¡Ahora eres mi novia ❤️!");
  if (result) {
    window.location.href = "aceptada.html";
  } else {
    alert("Podrías volver a considerarlo 😔");
  }
});

function mueveElBoton() {
  const width = window.innerWidth;
  const height = window.innerHeight;

  const newWidth = Math.random() * width;
  const newHeight = Math.random() * height;

  const btnNo = document.getElementById("btnNo");
  btnNo.style.position = "absolute";
  btnNo.style.left = newWidth + "px";
  btnNo.style.top = newHeight + "px";
}
