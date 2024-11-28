'use strict'

/* Traer elementos HTML a JS (queryselector) */

const button = document.querySelector('.js_button');
const text = document.querySelector('.js_text');
/*const ul = document.querySelector('.js_ul');*/

const inception = 'Inception';
const theButterFlyEffect = 'The butterfly effect';
const eternalSunshineOfTheSM = 'Eternal sunshine of the spotless mind';
const blueVelvet = 'Blue velvet';
const split = 'Split';

const peli1 = document.querySelector('.peli1');
const peli2 = document.querySelector('.peli2');
const peli3 = document.querySelector('.peli3');
const peli4 = document.querySelector('.peli4');
const peli5 = document.querySelector('.peli5');


/* Eventos. Cuando la usuaria hace algo -> pasa algo (código) */

button.addEventListener( 'click' , (ev) => {
    peli1.innerHTML = inception;
    peli2.innerHTML = theButterFlyEffect;
    peli3.innerHTML = eternalSunshineOfTheSM;
    peli4.innerHTML = blueVelvet;
    peli5.innerHTML = split;
});

peli1.addEventListener( 'mouseover' , (ev) => {
    text.innerHTML = 'La peli seleccionada es ' + inception;
})

peli2.addEventListener( 'mouseover' , (ev) => {
    text.innerHTML = 'La peli seleccionada es ' + theButterFlyEffect;
})

peli3.addEventListener( 'mouseover' , (ev) => {
    text.innerHTML = 'La peli seleccionada es ' + eternalSunshineOfTheSM;
})

peli4.addEventListener( 'mouseover' , (ev) => {
    text.innerHTML = 'La peli seleccionada es ' + blueVelvet;
})

peli5.addEventListener( 'mouseover' , (ev) => {
    text.innerHTML = 'La peli seleccionada es ' + split;
})

