document.addEventListener("DOMContentLoaded", () => {

    const cards = [
        {
            name: 'android',
            img: 'images/lili1.png',
        },
        {
            name: 'chrome',
            img: 'images/heitor1.png',
        },
        {
            name: 'git',
            img: 'images/biel1.png',
        },
        {
            name: 'stackoverflow',
            img: 'images/davi1.png',
        },
        {
            name: 'linux',
            img: 'images/laine.png',
        },
        {
            name: 'github',
            img: 'images/biel2.png',
        },
        {
            name: 'android',
            img: 'images/lili1.png',
        },
        {
            name: 'chrome',
            img: 'images/heitor1.png',
        },
        {
            name: 'git',
            img: 'images/biel1.png',
        },
        {
            name: 'stackoverflow',
            img: 'images/davi1.png',
        },
        {
            name: 'linux',
            img: 'images/laine.png',
        },
        {
            name: 'github',
            img: 'images/biel2.png',
        },
    ]

    // Randomize cards

    cards.sort(() => 0.5 - Math.random());

    //carregar elementos html no script
    
    const board = document.querySelector('.board');
    const resultView = document.querySelector('#result');
    let cardsChosen = []; //cartas escolhidas
    let cardsChosenId = []; //id das cartas escolhidas
    let cardsWon = []; //cartas combinadas


    //verificar se as cartas são iguais
    function checkForMatch() {
        const cards = document.querySelectorAll('img');
        const optionOneId = cardsChosenId[0];
        const optionTwoId = cardsChosenId[1];

        //verificar clique na mesma imagem

        if (optionOneId == optionTwoId) {
            cards[optionOneId].setAttribute('src', 'images/board.png');
            cards[optionTwoId].setAttribute('src', 'images/board.png');
            alert('Você clicou na mesma imagem!');
        }
        //verificar combinaçoes de cartas
        else if (cardsChosen[0] === cardsChosen[1]) {
            alert('Você encontrou uma combinação!');
            cards[optionOneId].setAttribute('src', 'images/check.png');
            cards[optionTwoId].setAttribute('src', 'images/check.png');
            cards[optionOneId].removeEventListener('click', flipCard);
            cards[optionTwoId].removeEventListener('click', flipCard);
            cardsWon.push(cardsChosen);
        }else{
            cards[optionOneId].setAttribute('src', 'images/board.png');
            cards[optionTwoId].setAttribute('src', 'images/board.png');
            alert('Tente novamente!');
        }
        cardsChosen = [];
        cardsChosenId = [];

        //mostrar resultado
        resultView.textContent = 'Pares encontrados: '+cardsWon.length
        if (cardsWon.length === cards.length/2) {
            resultView.textContent = 'Parabéns! Você encontrou todos os pares!';
        }
    }


    //criar tabuleiro

    function createBoard() {
        for (let i = 0; i < cards.length; i++) {
            const card = document.createElement('img');
            card.setAttribute('src', 'images/board.png');
            card.setAttribute('data-id', i);
            card.addEventListener('click', flipCard)
            board.appendChild(card);
        }
    }

    function flipCard (){
        let cardId = this.getAttribute('data-id');
        cardsChosen.push(cards[cardId].name);
        cardsChosenId.push(cardId);
        this.setAttribute('src', cards[cardId].img);

        if (cardsChosen.length === 2) {
            setTimeout(checkForMatch, 500);
        }

    }
    createBoard();

});
