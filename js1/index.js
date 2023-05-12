const nav = document.querySelector('.navigation');
const closeMenu = document.querySelector('.closeMenu');
const openMenu = document.querySelector('.openMenu');

openMenu.addEventListener('click',show);
closeMenu.addEventListener('click',close);

function show(){
    nav.style.display = 'flex';
    nav.style.top = '0';
}
function close(){
    nav.style.top = '-100%';
}