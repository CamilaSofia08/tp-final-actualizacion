const tarjeta = document.getElementById("tarjeta");
const correctas = document.getElementById("correctas");
const incorrectas = document.getElementById("incorrectas");

let botonesPresionados = [false, false, false, false, false]; 
let respuestasCorrectas = 0;
function validarOrg(boton,respuesta, id) {
    switch (id) {
        case 'Rapida':
            if (botonesPresionados[0]){
                return;
            }
            botonesPresionados[0] = true;
            break;


            case 'Perifericos':
            if (botonesPresionados[1]){
                return;
            }
            botonesPresionados[1] = true;
            break;


            case 'Tangible':
            if (botonesPresionados[2]){
                return;
            }
            botonesPresionados[2] = true;
            break;

            case 'SSD':
            if (botonesPresionados[3]){
                return;
            }
            botonesPresionados[3] = true;
            break;


            case 'ROM':
            if (botonesPresionados[4]){
                return;
            }
            botonesPresionados[4] = true;
            break;
    }

    if (respuesta) {
        
     
        boton.style.backgroundColor = "#4CAF50"; 
        respuestasCorrectas++;
    } else {
        
        boton.style.backgroundColor = "#f44336";
    }
    Validarbotonespresionados();
}

function Validarbotonespresionados() {
    for (let i = 0; i < botonesPresionados.length; i++) {  
        if (!botonesPresionados[i]) {
            return;
        }
    }
    Resultados();
}

function Resultados() {
 tarjeta.style.opacity = 1.0;
 correctas.textContent = "Respuestas correctas: " + respuestasCorrectas;
 incorrectas.textContent = "Respuestas incorrectas: " + (5 - respuestasCorrectas);
}
