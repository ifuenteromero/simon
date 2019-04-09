 'use strict';
/*Tenemos un botón de play
Cuando lo pulsamos, la máquina genera un 1 color aleatorio entre Rojo, Verde, Azul o Amarillo. Identificamos estos colores con los números 1,2,3 y 4 respectivamente, esto es
Rojo =1
Verde=2
Azul=3
Amarillo = 4
En la práctica la máquina genera un número aleatorio entre 1 y 4 y lo identificamos con un color.
Este número lo guardamos en la variable randomNumber.
Este número lo pusheamos o añadimos al array secuenceMachine que empieza siendo vacío.
Ahora la máquina genera la animación de los colores y sonidos correspondiente

Es el turno de la usuaria. Ella debe reproducir esta secuencia, pulsando los botones correspondientes. 

Si la usuaria falla se acaba el juego
Si acierta esta secuencia, hablamos de una secuencia de 1 color, le devolvemos el turno a la máquina.

La máquina genera un segundo número aleatorio entre 1 y 4, lo pushea al array 
secuenceMachine que ahora tiene dos elementos. 
Genera la animación de los dos elementos, y le devuelve el turno a la usuaria.
El juego acaba cuando la usuaria falla.
*/ 

//Recogemos en variables todos los elementos del juego, tienen un id adecuado

const btnRedEl = document.getElementById('1');
const btnGreenEl = document.getElementById('2');
const btnBlueEl = document.getElementById('3');
const btnYellowEl = document.getElementById('4');
const btnPlayEl = document.querySelector('.play');

//Este array convierte un número en el botón correspondiente al que añadir la animación y el sonido, esto es, convertToButton[1], convierte el 1 en el botón rojo, y así con los demás. Lo del 0 es para no complicarme la vida con los índices
const convertToButton=[0,btnRedEl,btnGreenEl,btnBlueEl,btnYellowEl];

//Array donde guardamos la secuencia de números o colores
let secuenceMachine =[];
//Cuando hacemos click en el butón play, añadimos número aleatorio a la secuencia

btnPlayEl.addEventListener('click',addElementSecuence);

//Esta función genera números aleatorios enteros entre 1 y el parámetro max
function getRandomNumber(max) {
       return Math.ceil(Math.random() * max);
  }
//Esta función además de añadir el número a la secuencia, llama a las funciones de sonido y animación del botón
  function addElementSecuence(){
       let randomNumber =getRandomNumber(4);
       secuenceMachine.push(randomNumber);
       animation();
       
            }

//Animación auxiliar para encender botón
    function iluminatedOn(number){
      const current = convertToButton[number];
      current.classList.add('iluminated');
     
     }
    
 //Animación auxiliar para apagar el botón    
     function iluminatedOff(number){
      const current = convertToButton[number];
      current.classList.remove('iluminated');
     }
//Animación que enciende y apaga el botón
     function iluminated(number){
       setTimeout(function(){iluminatedOn(number);},1000);
       setTimeout(function(){iluminatedOff(number);},2000); 
     }
     //animación de la secuencia completa
     function animation(){
     for (let i=0;i<secuenceMachine.length;i++){
      setTimeout(function(){iluminated(secuenceMachine[i])},i*2000);}}



      

// const Sonidos= [261,329,392,440];
// let SoundsMachine =[];
// var context = new (window.AudioContext || window.webkitAudioContext)();
// function auxSound(event) {
//     let keyPressed = parseInt(event.currentTarget.id);
//     let keyPressedArray=keyPressed-1;
//     const iluminatedEl = event.currentTarget;
//     iluminatedEl.classList.add('iluminated');
//     console.log(iluminatedEl);
//     // Sonido(keyPressedArray);
// }




// function Sonido(number){
//      //creamos oscilador
    
    


//     var osc = context.createOscillator();
    
//     // admite: sine, square, sawtooth, triangle
//     osc.type = 'sawtooth'; 
 
//     osc.frequency.value=Sonidos[number];
 
//     //asignamos el destino para el sonido
//     // osc.connect(context.destination);
//     // //iniciamos la nota
//     // osc.start();
//     // // //detenemos la nota medio segundo despues
//     // osc.stop(context.currentTime + .1);
 
// }
// 
// function Secuencia(){
//    let randomNumber =getRandomNumber(4);
//    SoundsMachine.push(randomNumber);
//    for (let i=0;i<SoundsMachine.length;i++){
// //    Sonido(SoundsMachine[1]);
//    console.log(SoundsMachine.length);
// }

   

// }



// btnRedEl.addEventListener('click',auxSound);
// btnGreenEl.addEventListener('click',auxSound);
// btnBlueEl.addEventListener('click',auxSound);
// btnYellowEl.addEventListener('click',auxSound);


//  const btnRedEl = document.getElementById('1');
//  const btnGreenEl = document.getElementById('2');
//  const btnBlueEl = document.getElementById('3');
//  const btnYellowEl = document.getElementById('4');
  



 

//  function iluminatedOn(number){
//   const current = arrayButtons[number];
//   current.classList.add('iluminated');

//  }

//  function iluminatedOff(number){
//   const current = arrayButtons[number];
//   current.classList.remove('iluminated');
//  }

//  function iluminated(number){
//    setTimeout(function(){iluminatedOn(number);},1000);
//    setTimeout(function(){iluminatedOff(number);},2000); 
//  }
// setTimeout(function(){iluminated(1)},0);
// setTimeout(function(){iluminated(2)},2000);
// setTimeout(function(){iluminated(3)},4000);
// setTimeout(function(){iluminated(4)},6000);


//for que enciende de 1 a 4

// for (let i=1;i<arrayButtons.length;i++){
//   setTimeout(function(){iluminated(i)},(i-1)*2000);

// }

//rojo,rojo,amarillo,verde
//1,1,4,2

// const arrayButtons=[0,btnRedEl,btnGreenEl,btnBlueEl,btnYellowEl];

// const buttonsSecuence=[1,4,3];

// for (let i=0;i<buttonsSecuence.length;i++){
//   setTimeout(function(){iluminated(buttonsSecuence[i])},i*2000);

// }

// setTimeout(function(){iluminated(buttonsSecuence[0])},0);
// setTimeout(function(){iluminated(buttonsSecuence[1])},2000);
// setTimeout(function(){iluminated(buttonsSecuence[2])},4000);