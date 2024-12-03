'use strict'

const nombre = document.querySelector('.js_nombre');
const btn = document.querySelector('.js_btn');
const message = document.querySelector('.js_message');

btn.addEventListener('click' , (ev) => {
    ev.preventDefault();

    const usuaria = nombre.value;

    if( usuaria === 'Maria' || usuaria === 'Luisa' ) {
        message.innerHTML = `Bienvenida, ${usuaria}!`;
    }

    else {
        message.innerHTML = 'Lo siento pero el usuario que has introducido no está registrado.';
    }
});