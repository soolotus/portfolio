const header = document.querySelector('.header');
const headerHeight = header.getBoundingClientRect().height

document.addEventListener('scroll', () => {
    if (scrollY > headerHeight) {
        header.classList.add('header--dark')
    } else {
        header.classList.remove('header--dark')
    }
})

const home = document.querySelector('.home__contents');
const homeHeight = document.querySelector('#home').offsetHeight

document.addEventListener('scroll', () => {
    home.style.opacity = 1 - scrollY / homeHeight;

});

const arrowUp = document.querySelector('.arrow-up');

document.addEventListener('scroll', () => {
    if (scrollY > homeHeight / 2) {
        arrowUp.style.opacity = 1;
    } else {
        arrowUp.style.opacity = 0;
    }
})

const navbarMenu = document.querySelector(".header__menu");
const navbarToggle = document.querySelector(".header__toggle");
navbarToggle.addEventListener('click', () => {
    navbarMenu.classList.toggle("open");
})

navbarMenu.addEventListener('click', () => {
    navbarMenu.classList.remove("open");
})

