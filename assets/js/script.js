const navContainer = document.querySelector('.nav-container');
const navToggle = document.querySelector('.nav-toggle');
const navClose = document.querySelector('.btn-close');

navToggle.addEventListener('click', () => {
    navContainer.classList.toggle('opened');
    if (navContainer.classList.contains('opened')) {
        navContainer.classList.remove('closed')
    }
})
navClose.addEventListener('click', () => {
    navContainer.classList.remove('opened');
    navContainer.classList.add('closed');
  
})

function resize() {
    if (window.innerWidth > 768) {
        if (navContainer.classList.contains('opened')) {
            navContainer.classList.remove('opened')
        }
    }
}
resize();

AOS.init({
    easing: 'ease-out-back',
    duration: 1000
});