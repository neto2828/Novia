function mueveElBoton(){
    const width = window.innerWidth;
    const height = window.innerHeight;

    const newWidth = Math.random() *width;
    const newHeight = Math.random() *height;

    const btnNo = document.getElementById("btnNo");
    btnNo.style.position = "absolute";
    btnNo.style.left = newWidth + "px";
    btnNo.style.top = newHeight + "px";
}




    const button = document.getElementById('accionParaCuandoEllaDigaQuesi');

        // Agrega un evento click al botón
        button.addEventListener('click', () => {
            // Muestra la confirmación y captura la respuesta del usuario
            const result = window.confirm('¡Ahora eres mi novia ❤️!');

            // Si el usuario hace clic en "Aceptar", muestra un mensaje
            if (result) {
                window.location.href = 'aceptada.html';
            } else {
                alert('Podrías volver a considerarlo 😔');
            }
        });
    