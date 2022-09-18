const button = document.querySelector('.menu-icon');
const nav = document.querySelector('.container-menu');

button.addEventListener('click', ()=> {
    nav.classList.toggle('activo');
})