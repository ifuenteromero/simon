'use strict';

//Hay un botón de play
//Cuando se pulsa
//Se genera un número aleatorio entre 1 y 4
//Se añade al array currentplay
//Se ejecutan las piezas del array en este caso 1
//ahora juega el usuario
//validar las teclas del usuario
//Si no es correcto se acaba el juego
//Si es correcto se genera número aleatorio 2
// Se añade al array 
//Se ejecuta la secuencia
//Se valida la secuencia del usuario

// Hacer 4 botones con cuatro sonidos y cuando pulses con el ratón se tiene que oir e iluminar el botón

const btnRedEl = document.getElementById('1');
const btnGreenEl = document.getElementById('2');
const btnBlueEl = document.getElementById('3');
const btnYellowEl = document.getElementById('4');
const btnPlayEl = document.querySelector('.play');

const Sonidos= [261,329,392,440];
let SoundsMachine =[];
var context = new (window.AudioContext || window.webkitAudioContext)();
 
function Sonido(event){
     //creamos oscilador
    let keyPressed = parseInt(event.currentTarget.id)
     console.log(keyPressed);

    var osc = context.createOscillator();
    let keyPressedArray=keyPressed-1;
    // admite: sine, square, sawtooth, triangle
    osc.type = 'sawtooth'; 
 
    osc.frequency.value=Sonidos[keyPressedArray];
 
    //asignamos el destino para el sonido
    osc.connect(context.destination);
    //iniciamos la nota
    // osc.start();
    // //detenemos la nota medio segundo despues
    // osc.stop(context.currentTime + .1);
 
}
function Secuencia(){
    

}


console.log(btnPlayEl);
btnRedEl.addEventListener('click',Sonido);
btnGreenEl.addEventListener('click',Sonido);
btnBlueEl.addEventListener('click',Sonido);
btnYellowEl.addEventListener('click',Sonido);
btnPlayEl.addEventListener('click',Secuencia)


