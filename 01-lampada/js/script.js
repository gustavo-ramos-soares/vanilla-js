'use strict';

let boxImagem = document.querySelector('img')

let btnLigar = document.getElementById('btnLigar')
let btnDesligar = document.getElementById('btnDesligar')

btnLigar.addEventListener('click', ligaDesliga)
btnDesligar.addEventListener('click', ligaDesliga)
boxImagem.addEventListener('click', ligaDesliga)

function ligaDesliga(event) {

    if (event.target === btnLigar) {
        boxImagem.src = './assets/ligada.png';
    }

    if (event.target === btnDesligar) {
        boxImagem.src = './assets/desligada.png';
    }
    
    if (event.target === boxImagem) {
        boxImagem.src = './assets/quebrada.png';
    }   
}
