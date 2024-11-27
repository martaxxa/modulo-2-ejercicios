'use strict'

/* Traer elementos HTML a JS (queryselector) */
const btn = document.querySelector('.js_btn');
const nameInput = document.querySelector('.js_nameInput');
const hola = document.querySelector('.js_hola');

/* Crear variables de datos de nuestra aplicación (lo que cambia) */


/* Eventos. Cuando la usuaria hace algo -> pasa algo (código) */
btn.addEventListener( 'click' , (ev) => {
    ev.preventDefault();

    const name = nameInput.value;

    const html = `<p>${name}</p>`;

    hola.innerHTML += html;
})