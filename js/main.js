$(function(){
    let button = document.querySelector('.menu__btn');
    let menu = document.querySelector('.nav__menu');

    button.onclick = function(){
        button.classList.toggle('btn--active');
        menu.classList.toggle('menu--active');
    }
});