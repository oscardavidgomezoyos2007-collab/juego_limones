let canvas=document.getElementById("areajuego");
let ctx=canvas.getContext("2d");

const ALTURA_SUELO=30;
const ALTURA_PERSONAJE=50;
const ANCHO_PERSONAJE=40;

function iniciar(){
    dibujarSuelo();
    dibujarPersonaje();
}
function dibujarSuelo(){
    ctx.fillStyle="green";
    ctx.fillRect(0,canvas.height-ALTURA_SUELO,canvas.width,ALTURA_SUELO);
}

function dibujarPersonaje(params) {
    ctx.fillStyle="red";
    ctx.fillRect(canvas.width/2,canvas.height-(ALTURA_SUELO+ALTURA_PERSONAJE),ANCHO_PERSONAJE,ALTURA_PERSONAJE);
}
