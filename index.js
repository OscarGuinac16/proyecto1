let menu = document.getElementById('menu-bar')
let navbar = document.getElementsByClassName('navbar')
let header = document.querySelector('.header-2')

menu.addEventListener('click', () => {
    menu.classList.toggle('fa-times')
    navbar[0].classList.toggle('active')
})

window.onscroll = () => {
    menu.classList.remove('fa-times')
    navbar[0].classList.remove('active')
    if(window.scrollY > 150) {
        header.classList.add('active')
    }
    else {
        header.classList.remove('active')
    }
}