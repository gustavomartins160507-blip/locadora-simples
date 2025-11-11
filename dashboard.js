let slider = document.querySelectorAll('.slider');
let btnprev = document.getElementById('prev');
let btnnext = document.getElementById('next');
let currentslide = 0;

function esconder() {
    slider.forEach(item => item.classList.remove('on'));
}
function mostrar() {
    slider[currentslide].classList.add('on');
}
function next() {
    esconder();
    if (currentslide === slider.length - 1) {
        currentslide = 0;
    } else {
        currentslide++;
    }
    mostrar();
}
function prev() {
    esconder();
    if (currentslide === 0) {
        currentslide = slider.length - 1;
    } else {
        currentslide--;
    }
    mostrar();
}
btnnext.addEventListener('click', next);
btnprev.addEventListener('click', prev);
mostrar();