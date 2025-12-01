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
function verificar2(){
    var pergunta1 = document.getElementById('matricula')
    var pergunta2 = document.getElementById('senha')

    if (pergunta1.value.trim() === '') {
        alert('Campo de email inválido')
        pergunta1.innerHTML=''
        return false
    } 
    else if (pergunta2.value.trim() === '') {
        alert('Insira sua senha')
        pergunta2.innerHTML=''
        return false
    }
    window.location.href = "pagina2.html"
    return true
}