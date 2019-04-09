 'use strict';

// //Hay un botón de play
// //Cuando se pulsa
// //Se genera un número aleatorio entre 1 y 4
// //Se añade al array currentplay
// //Se ejecutan las piezas del array en este caso 1
// //ahora juega el usuario
// //validar las teclas del usuario
// //Si no es correcto se acaba el juego
// //Si es correcto se genera número aleatorio 2
// // Se añade al array 
// //Se ejecuta la secuencia
// //Se valida la secuencia del usuario

// // Hacer 4 botones con cuatro sonidos y cuando pulses con el ratón se tiene que oir e iluminar el botón

// const btnRedEl = document.getElementById('1');
// const btnGreenEl = document.getElementById('2');
// const btnBlueEl = document.getElementById('3');
// const btnYellowEl = document.getElementById('4');
// const btnPlayEl = document.querySelector('.play');

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
// function getRandomNumber(max) {
//     return Math.ceil(Math.random() * max);
//   }
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
// // btnPlayEl.addEventListener('click',Secuencia);

 const btnRedEl = document.getElementById('1');
 const btnGreenEl = document.getElementById('2');
 const btnBlueEl = document.getElementById('3');
 const btnYellowEl = document.getElementById('4');
  const arrayButtons=[0,btnRedEl,btnGreenEl,btnBlueEl,btnYellowEl];



 

 function iluminatedOn(number){
  const current = arrayButtons[number];
  current.classList.add('iluminated');

 }

 function iluminatedOff(number){
  const current = arrayButtons[number];
  current.classList.remove('iluminated');
 }

 function iluminated(number){
   setTimeout(function(){iluminatedOn(number);},1000);
   setTimeout(function(){iluminatedOff(number);},2000); 
 }
 

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

const buttonsSecuence=[1,1,4,2,3,3,1];

for (let i=0;i<buttonsSecuence.length;i++){
  setTimeout(function(){iluminated(buttonsSecuence[i])},(i-1)*2000);

}

