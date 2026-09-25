
function horaAutomatica() {
    
    let pHora = document.getElementById('pHora')

    let pDia = document.getElementById('pDia')

    // Hora
    let data = new Date()

    let hora = String(data.getHours()).padStart(2, '0');
    let minuto = String(data.getMinutes()).padStart(2, '0');
    let segundo = String(data.getSeconds()).padStart(2, '0');

    let horaCompleta = `${hora}:${minuto}:${segundo}`

    // Dias da semana
    let diasSemana = [
        'Domingo',
        'Segunda-feira',
        'Terça-feira',
        'Quarta-feira',
        'Quinta-feira',
        'Sexta-feira',
        'Sábado'
    ];

    // Meses
    let meses = [
        'Janeiro',
        'Fevereiro',
        'Março',
        'Abril',
        'Maio',
        'Junho',
        'Julho',
        'Agosto',
        'Setembro',
        'Outubro',
        'Novembro',
        'Dezembro'
    ];

    let diaSemana = diasSemana[data.getDay()];
    let dia = data.getDate();
    let mes = meses[data.getMonth()];
    let ano = data.getFullYear();

    let diaCompleto = `${diaSemana}, ${dia} de ${mes} de ${ano}`;


    let boxRelogio = document.getElementById('boxRelogio')
    boxRelogio.style.display = 'flex'
    boxRelogio.style.flexDirection = 'column'
    boxRelogio.style.justifyContent = 'center'
    boxRelogio.style.alignItems = 'center'

    pHora.innerHTML = horaCompleta
    pHora.style.fontSize = 'clamp(6rem,13vw,16rem)'
    pHora.style.fontFamily = 'Fjalla One, sans-serif'

    pDia.innerHTML = diaCompleto
    pDia.style.fontSize = 'clamp(0.9rem, 1.5vw, 1.5rem)'
}

horaAutomatica()

setInterval(horaAutomatica, 1000)


let btnTema = document.getElementById('btnTema')
let iconeTema = document.querySelector('i')

btnTema.addEventListener('click', alterarTema)

function alterarTema () {
    
    document.body.classList.toggle('light')

    if (document.body.classList.contains('light')) {
        iconeTema.className = 'fa-solid fa-moon'
    }else {
        iconeTema.className = 'fa-solid fa-sun'
    }
    
}
