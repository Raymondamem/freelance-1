const menu = document.querySelector('#menu');
const close = document.querySelector('#close');
const aside = document.querySelector('#aside');

menu.addEventListener('click', function() {
    aside.classList.add('active');
    console.log(433)
})
close.addEventListener('click', function() {
    console.log(344)
    aside.classList.remove('active');
})