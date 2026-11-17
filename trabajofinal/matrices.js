function validarmatriz(respuesta) {
    if (respuesta === 'correcto') {
        alert("¡Correcto! Chococat te felicita por tu respuesta.");
    } else {
        alert("¡Uh oh! Incorrecto. Intenta de nuevo.");
    }
}

const colores=['purple', 'blue', 'red', 'green', 'yellow'];
function toque(boton){
    const indiceAleatorio = Math.floor(Math.random() * colores.length);

    boton.style.backgroundColor=colores[indiceAleatorio];
}