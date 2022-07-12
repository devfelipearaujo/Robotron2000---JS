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
            

/* -------Troca a imagem do Robô------ */
const robotron = document.querySelector('.robotron')
const botao = document.querySelector('.robo__btn')
const cor = ['preto','branco','azul','amarelo','rosa','vermelho']
const roboImagem = document.getElementById("imagem-robo")
const somTinta = document.querySelector('[data-spraySound]')
localStorage.setItem("imagemIndice", i)
var i = 0

botao.addEventListener("click", ()=>{
    changeImage();
    somTinta.play();
})

function changeImage() { 
    const roboImagem = document.getElementById("imagem-robo") 
    i = i + 1
    console.log(i)
     if (i < 5) {
         roboImagem.src = "img/Robotron 2000 - "+cor[i]+"/robotron.png"
     } else {
         i = i - 5;
         roboImagem.src = "img/Robotron 2000 - "+cor[0]+"/robotron.png";
     }
 }


/* -------Iniciar a produção do Robô------ */
const producao = document.getElementById('producao')

producao.addEventListener("click", (evento)=>{
    evento.preventDefault()
    console.log(evento)
    verificaRequisitos()
})

function verificaRequisitos() {
    const valorForca = document.querySelector('[data-estatistica=forca]').textContent;
    const valorPoder = document.querySelector('[data-estatistica=poder]').textContent;
    const valorEnergia = document.querySelector('[data-estatistica=energia]').textContent;
    const valorVelocidade = document.querySelector('[data-estatistica=velocidade]').textContent;
    const robotronVoz = document.querySelector(`[data-robotronvozx]`)
    const rise = document.querySelector(`[data-rise]`)

    if((valorForca >= minForca)&&(valorPoder >= minPoder)&&(valorEnergia >= minEnergia)&&(valorVelocidade >= minVelocidade)){
        rise.play()  
        setTimeout(function(){
            robotronVoz.play()      
       }, 1100);     
        setTimeout(function(){
            alert("Conseguimos! Robotron saiu para a batalha com os status ideais e derrotou todos os inimigos.");    
       }, 2000);
    } else {
        alert("Para esta batalha precisaremos de Força: 200 Poder: 300 Energia: 100 Velocidade:50")
    }
}
