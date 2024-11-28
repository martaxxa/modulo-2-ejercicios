'use strict'

/* Traer elementos HTML a JS (queryselector) */
const buttonOne = document.querySelector('.js_buttonOne');
const buttonTwo = document.querySelector('.js_buttonTwo');


/* Crear variables de datos de nuestra aplicación (lo que cambia) */


/* Eventos. Cuando la usuaria hace algo -> pasa algo (código) */
buttonOne.addEventListener( 'click' , (ev) => {
    buttonOne.classList.toggle('button');
})

buttonTwo.addEventListener( 'click' , (ev) => {
    buttonTwo.classList.toggle('button');
})