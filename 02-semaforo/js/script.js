'use strict';

console.log('JavaScript carregou');

let btnVermelho = document.getElementById('btnVermelho')
let btnAmarelo = document.getElementById('btnAmarelo')
let btnVerde = document.getElementById('btnVerde')
let btnAutomatico = document.getElementById('btnAutomatico')


btnVermelho.addEventListener('click', alterarSemaforo)
btnAmarelo.addEventListener('click', alterarSemaforo)
btnVerde.addEventListener('click', alterarSemaforo)
btnAutomatico.addEventListener('click', alterarSemaforo)


let boxImagem = document.getElementById('boxImagem')
let imagem = document.createElement('img')
boxImagem.appendChild(imagem)
imagem.src = './assets/desligado.png'    


let cores = [
    './assets/vermelho.png',
    './assets/amarelo.png',
    './assets/verde.png'
]

let indice = 0

function automatico() {

    imagem.src = cores[indice];

    indice++;

    if (indice === cores.length) {
        indice = 0;
    }
}

function alterarSemaforo (event) {

    if (event.target === btnVermelho) {
        imagem.src = './assets/vermelho.png'
    }

    if (event.target === btnAmarelo) {
        imagem.src = './assets/amarelo.png'
    }

    if (event.target === btnVerde) {
        imagem.src = './assets/verde.png'
    }

    if (event.target === btnAutomatico) {
       setInterval(automatico, 1000)
    }
}