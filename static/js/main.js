const cardsArray = [
    {
        name: 'penguin',
        img: "/static/img/penguin.jpg"
    },
    {
        name: 'bear',
        img: "/static/img/bear.jpg"
    },
    {
        name: 'bull',
        img: "/static/img/bull.jpg"
    },
    {
        name: 'buffalo',
        img: "/static/img/buffalo.jpg"
    },
    {
        name: 'kangaroo',
        img: "/static/img/kangaroo.jpg"
    },
    {
        name: 'cat',
        img: "/static/img/cat.jpg"
    },
    {
        name: 'cat2',
        img: "/static/img/cat2.jpg"
    },
    {
        name: 'deer',
        img: "/static/img/deer.jpg"
    },
    {
        name: 'dog',
        img: "/static/img/dog.jpg"
    },
    {
        name: 'elephant',
        img: "/static/img/elephant.jpg"
    },
    {
        name: 'giraffe',
        img: "/static/img/giraffe.jpg"
    },
    {
        name: 'hippo',
        img: "/static/img/hippo.jpg"
    },
    {
        name: 'hog',
        img: "/static/img/hog.jpg"
    },
    {
        name: 'panther',
        img: "/static/img/panther.jpg"
    },
    {
        name: 'rabbit',
        img: "/static/img/rabbit.jpg"
    },
    {
        name: 'raccoon',
        img: "/static/img/raccoon.jpg"
    },
    {
        name: 'rhino',
        img: "/static/img/rhino.jpg"
    },
    {
        name: 'sluggard',
        img: "/static/img/sluggard.jpg"
    },
    {
        name: 'tiger',
        img: "/static/img/tiger.jpg"
    },
    {
        name: 'wolf',
        img: "/static/img/wolf.jpg"
    },
];

let sortedCardsArray = cardsArray.sort(function () {return 0.5 - Math.random()});

let newCardsArray = sortedCardsArray.slice(1, parseInt(counter)+1).concat(sortedCardsArray.slice(1, parseInt(counter)+1));

newCardsArray.sort(function () {return 0.5 - Math.random()});

let game = document.getElementById('game');

let grid = document.createElement('div');
grid.setAttribute('class', 'grid');
game.appendChild(grid);

grid.addEventListener('click', clickHandler, true);

let count = 0;

let firstChoice = '';

let secondChoice = '';

let previousChoice = '';

let delay = 1000;


for (let cards of newCardsArray) {

    const card = document.createElement('div');
    card.classList.add('card');
    card.dataset.name = cards.name;

    const cardBody = document.createElement('div');
    cardBody.classList.add('card-body');
    cardBody.style.backgroundImage = `url(${cards.img})`;

    const cardTop = document.createElement('div');
    cardTop.classList.add('card-top');
    cardTop.style.backgroundImage = `url('/static/img/leaf1.jpg')`;

    card.appendChild(cardTop);
    card.appendChild(cardBody);
    grid.appendChild(card);
}


function isMatch() {
    let cards = document.getElementsByClassName('selected');
    console.log(cards);
    if (firstChoice === secondChoice) {
        for (let i = cards.length - 1; i >= 0; --i) {
            let removeCard = cards[i].parentNode;
            removeCard.classList.add('match');
            removeCard.lastChild.classList.remove('selected');
        }

    } else {
        for (let i = cards.length - 1; i >= 0; --i) {
            cards[i].parentNode.firstChild.style.display = 'flex';
            cards[i].parentNode.firstChild.classList.remove('selected');
            cards[i].parentNode.lastChild.style.display = 'none';
            cards[i].parentNode.lastChild.classList.remove('selected');
        }
    }
    count = 0;
}


function clickHandler(event) {

    let selectGrid = document.getElementsByClassName('grid');

    if (event.target === selectGrid[0]) {
        return
    }

    if (previousChoice === event.target.parentElement) {
        return
    }

    count++;

    if (count <=2) {
        let top = event.target.parentNode.firstChild;
        top.style.display = 'none';

        let body = event.target.parentNode.lastChild;
        body.style.display = 'flex';
        body.classList.add('selected');

        if (count === 1) {
            firstChoice = event.target.parentElement.getAttribute('data-name');
            previousChoice = event.target.parentElement;
        }
        if (count === 2) {
            secondChoice = event.target.parentElement.getAttribute('data-name');
            setTimeout(isMatch, delay);
        }
    }
}


