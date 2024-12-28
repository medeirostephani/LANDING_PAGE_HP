document.addEventListener('DOMContentLoaded', function() { //quando o DOM terminou de carregar, executa a função
    const buttons = document.querySelectorAll('[data-tab-button]'); //seleciona todas as tags button
    const questions = document.querySelectorAll('[data-faq-question]') //seleciona todas faqs questions

    const heroSection = document.querySelector('.hero'); //seleciona a classe hero
    const alturaHero = heroSection.clientHeight //pra saber quando a rolagem passou pelo hero

        window.addEventListener('scroll', function() { //durante a rolagem da pagina
            const posicaoAtual = window.scrollY; //posição do eixo vertical

            if (posicaoAtual < alturaHero) { //enquanto a posição atual for menor que a altura do hero
                ocultaElementosHeader(); //chama a função
            } else { //se não for menor
                exibeElementosHeader(); //chama a função
            }
        })


    //SEÇÃO ATRAÇÕES, PROGRAMAÇÃO DAS ABAS
    for (let i = 0; i < buttons.length; i++) //passa por todos os botões selecionados
    buttons[i].addEventListener('click', function(botao) { //quando clicar no botao
        const abaAlvo = botao.target.dataset.tabButton; //obtem o valor do atributo do botao clicado
        const aba = document.querySelector(`[data-tab-id=${abaAlvo}]`); //seleciona a aba correspondente ao valor obtido
        escondeTodasAbas (); //chama a função que esconde todas as abas
        aba.classList.add('shows__list--is-active'); //add classe is--active à aba correspondente
        removeBotaoAtivo(); //chama a função que remove o botão ativo
        botao.target.classList.add('shows__tabs__button--is-active'); //add tag is--active ao botão correspondente
    })

    //SEÇÃO FAQ, ACCORDION
    for (let i = 0; i < questions.length; i++) { //passa por todas as questões da faq
        questions[i].addEventListener('click', abreOuFechaResposta); //quando clicar na pergunta, executa a função abreOuFechaResposta
    }
}) 

function ocultaElementosHeader () {
    const header = document.querySelector('header'); //seleciona a header
    header.classList.add('header--is-hidden'); //add a classe is-hidden
}

function exibeElementosHeader () {
    const header = document.querySelector('header'); //seleciona a header
    header.classList.remove('header--is-hidden'); //remove a classe is-hidden
}

// function abreOuFechaResposta(elemento) {
//     const classe = 'faq__questions__item--is-open'; //constante classe armazena uma string
//     console.log(elemento); //exibe no console o parametro "elemento" passado na função
//     const elementoPai = elemento.target.parentNode; //obtem o elemento pai do alvo (target) e armazena na constante elementoPai

//     elementoPai.classList.toggle(classe); //add ou remove a constante definida na const classe direto no elemento pai
// }

function removeBotaoAtivo() {
    const buttons = document.querySelectorAll('[data-tab-button]'); //seleciona todas as tags button

    for (let i = 0; i < buttons.length; i++) //passa por todos os botões selecionados
        buttons[i].classList.remove('shows__tabs__button--is-active'); //remove a tag is-active
}

function escondeTodasAbas () {
    const tabsContainer = document.querySelectorAll('[data-tab-id]') //seleciona todas os ids

    for (let i = 0; i < tabsContainer.length; i++) { //passa por todas as ids
        tabsContainer[i].classList.remove('shows__list--is-active') //remover tag is-active
    }
}