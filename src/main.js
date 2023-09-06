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
