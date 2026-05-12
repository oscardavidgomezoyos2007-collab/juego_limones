let canvas=document.getElementById("areajuego");
let ctx=canvas.getContext("2d");

const ALTURA_SUELO=30;
const ALTURA_PERSONAJE=50;
const ANCHO_PERSONAJE=40;
const ANCHO_LIMON=20;
const ALTURA_LIMON=20;



let personajeX=canvas.width/2;
let personajeY=canvas.height-(ALTURA_SUELO+ALTURA_PERSONAJE)
let limonX=canvas.width/2;
let limonY=5;
let puntaje=0;
let vidas=3;
let velocidadCaida=100;

function iniciar(){
    setInterval(bajarlimon,velocidadCaida);//primerParametro: funcion segundoParametro: tiempo en milisegundos
    dibujarSuelo();
    dibujarPersonaje();
    aparecerLimon();
}
function dibujarSuelo(){
    ctx.fillStyle="green";
    ctx.fillRect(0,canvas.height-ALTURA_SUELO,canvas.width,ALTURA_SUELO);
}

function dibujarPersonaje(params) {
    ctx.fillStyle="red";
    ctx.fillRect(personajeX,personajeY,ANCHO_PERSONAJE,ALTURA_PERSONAJE);
}

function moverIzquierda(){
    personajeX=personajeX-10;
    actualizarPantalla();
    
}   
//moverDerecha
 function moverDerecha(){
    personajeX=personajeX+10;
    actualizarPantalla();
    
}


function actualizarPantalla(){
    limpiarCanva();
    dibujarSuelo();
    dibujarPersonaje();
    dibujarlimon();
}


function limpiarCanva(){
    ctx.clearRect(0,0,canvas.width,canvas.height);
}

function dibujarlimon(){
     ctx.fillStyle="yellow";
     ctx.fillRect(limonX,limonY,ANCHO_LIMON,ALTURA_LIMON);
}

function bajarlimon() {
    limonY = limonY + 10;
    actualizarPantalla();
    detectarAtrapados();
    detectarPiso();
}

function detectarAtrapados() {
    if (limonX+ANCHO_LIMON>personajeX && 
        limonX < personajeX+ANCHO_PERSONAJE && 
        limonY+ALTURA_LIMON>personajeY && 
        limonY < personajeY+ALTURA_PERSONAJE) {
       //alert("ATRAPADO!!");
       aparecerLimon();
       puntaje=puntaje+1;
      mostrarEnSpan("txtPuntaje",puntaje)
    }
}

function detectarPiso () {
    if (limonY+ALTURA_LIMON==canvas.height-ALTURA_SUELO) {
        aparecerLimon();
        vidas=vidas-1;
       mostrarEnSpan("txtVidas",vidas);
    }
}

function aparecerLimon() {
    limonX=generarAleatorio(0,canvas.width-ANCHO_LIMON);
    limonY=0;
    actualizarPantalla();
}