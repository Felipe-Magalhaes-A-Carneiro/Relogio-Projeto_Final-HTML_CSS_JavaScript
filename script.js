const faixa = [...document.querySelectorAll('faixa')];
//const unarioHr = [...document.querySelectorAll('unarioHr')];

//const decimalMin = [...document.querySelectorAll('decimalMin')];
//const unarioMin = [...document.querySelectorAll('unarioMin')];

//const decimalSec = [...document.querySelectorAll('decimalSec')];
//const unarioSec = [...document.querySelectorAll('unarioSec')];

const numeroTamanho = '8';

function highlight (faixa, d){
    faixa[faixa]
    .queryselector('.numero: nth-of-type(${d + 1}')
    .classList.add('pop');

    setTimeout(() => {
        faixa[faixa]
        .queryselector('.numero: nth-of-type(${d+1}')
        .classList.remove('pop');
    }, 950);
}

function stripSlider (faixa, numero){
    let d1 = Math.floor(numero / 10);
    let d2 = numero % 10;

    faixa[faixa].style.transform = 'translateY(${d1 * -numberSize}vmin)';
    highlight(faixa, d1);
    faixa[faixa + 1].style.transform = 'translateY(${d2 * -numberSize}vmin)';
    highlight(faixa + 1, d2);
}

setInterval(() => {
    const time = new Date();
    const hours = time.getHours();
    const mins = time.getMinutes();
    const secs = time.getSeconds();

    stripSlider(0 , hours);
    stripSlider(2 , mins);
    stripSlider(4 , secs);
}, 1000);