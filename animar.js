const menuDiv = document.getElementById('menu-mobile')
const btnAnimar = document.getElementById('btn-menu') 

menuDiv.addEventListener('click')

function animarMenu(){
    menuDiv.classList.toggle('abrir')
}
