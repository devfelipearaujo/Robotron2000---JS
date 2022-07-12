/*------Valor mínimo de cada atributo para iniciar a produção------*/
const minForca = 200;    
const minPoder = 300;
const minEnergia = 100;
const minVelocidade = 50;

/*--------------Atualiza os valores das estatísticas e do contador de peças--------------*/
const controles = document.querySelectorAll('.controle-ajuste')
const estatisticas = document.querySelectorAll('.estatistica-numero')
const pecas = {
    "bracos": {
        "forca": 48,
        "poder": 5,
        "energia": -11,
        "velocidade": -5
    },

    "blindagem": {
        "forca": 35,
        "poder": 30,
        "energia": 0,
        "velocidade": -30
    },
    "nucleos":{
        "forca": 0,
        "poder": 7,
        "energia": 48,
        "velocidade": -24
    },
    "pernas":{
        "forca": 10,
        "poder": 10,
        "energia": -22,
        "velocidade": 92
    },
    "foguetes":{
        "forca": 0,
        "poder": 50,
        "energia": 0,
        "velocidade": -2
    }
}
const somPeca = document.querySelector('[data-pecaSound]')

controles.forEach((arrayElement) =>{
    arrayElement.addEventListener("click", (evento) =>{
        atualizarValores(evento.target.parentNode, evento.target.dataset.controle, evento.target.dataset.peca)
        // console.log(evento)
        somPeca.play();
    })
})

function atualizarValores(contador,operacao, peca) {
    const contadorValor = contador.querySelector('.controle-contador')
    const valorContador = contadorValor.value = parseInt(contadorValor.value)
    const atributoPeca = pecas[peca]

    /* -------Atualiza os valores do contador de peças adicionadas------ */
    if ((operacao === '-') && (valorContador > 0)) {
        contadorValor.value = parseInt(contadorValor.value) - 1;
    } else if((operacao === '+')&&(valorContador < 4)) {
        contadorValor.value = parseInt(contadorValor.value) + 1
    }
    /* -------Atualiza os valores das estatisticas------ */
       estatisticas.forEach((estatisticaElemento) => {
        // const valorElemento = estatisticaElemento.textContent = parseInt(estatisticaElemento.textContent);
        if ((operacao === '+') && (valorContador < 4)) {
            estatisticaElemento.textContent = parseInt(estatisticaElemento.textContent) + atributoPeca[estatisticaElemento.dataset.estatistica]
    } else if ((operacao === '-') && (valorContador > 0) && (valorContador <= 4)) {
        estatisticaElemento.textContent = parseInt(estatisticaElemento.textContent) - atributoPeca[estatisticaElemento.dataset.estatistica]
}
})
   }

   window.onload = setTimeout(function(){
    alert('Olá. Precisamos da sua ajuda para lutar contra o exercíto inimigo. Robotron precisa de 200 de força, 300 de poder, 100 de energia e 50 de velocidade');
}, 400);


