const menuTog = document.querySelector('.menuTog');
const nav = document.querySelector('.navigation');

menuTog.addEventListener('click', function(){
    nav.classList.toggle('active');
});