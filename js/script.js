let body = document.body;

let wrap = document.createElement('div');
wrap.classList.add('wrap-hands');
body.append(wrap);

let titleYour = document.createElement('h2');
titleYour.innerText = 'Make your choice:';
titleYour.classList.add('title', 'title-your');
body.prepend(titleYour);

generateElem = (name) => {
    let elem = document.createElement('img');
    elem.src = `img/${name}.png`;
    elem.classList.add('hand');
    elem.setAttribute('data-id', `${name}`);
    wrap.append(elem);
}
generateElem('stone');
generateElem('scissors');
generateElem('paper');

let titleComp = document.createElement('h2');
titleComp.innerText = 'Computer:';
titleComp.classList.add('title', 'title-comp');
body.append(titleComp);

let computer = document.createElement('div');
computer.classList.add('computer');
body.append(computer);

let titleScore = document.createElement('h2');
titleScore.innerText = 'Score:';
titleScore.classList.add('title', 'title-score');
body.append(titleScore);

var counter = document.createElement('div');
counter.classList.add('counter');
body.append(counter);

let computerChoice = '';
let imgCompChoice = '';
let scoreComp = 0;
let scoreMine = 0;
let scoreTie = 0;

const choiceComp = () => {
    computerChoice = Math.floor(Math.random() * 3);
    if (computerChoice == 0) {
        computerChoice = 'stone';
    }
    else if (computerChoice == 1) {
        computerChoice = 'scissors';
    }
    else if (computerChoice == 2) {
        computerChoice = 'paper';
    }
    return computerChoice;
}

const appearCompChoice = () => {
    if (!imgCompChoice) {
        imgCompChoice = document.createElement('img');
        computer.append(imgCompChoice);
    }
    imgCompChoice.src = `img/${computerChoice}.png`;
    return imgCompChoice;
}

const choice = (e) => {
    const elem = e.target;
    choiceComp();
    appearCompChoice();
    results(elem);
}

const results = (elem) => {
    if (elem.dataset.id == computerChoice) {
        scoreTie++;
    } else if (elem.dataset.id == 'paper' && computerChoice == 'stone') {
        scoreMine++;
    } else if (elem.dataset.id == 'paper' && computerChoice == 'scissors') {
        scoreComp++;
    } else if (elem.dataset.id == 'stone' && computerChoice == 'scissors') {
        scoreMine++;
    } else if (elem.dataset.id == 'stone' && computerChoice == 'paper') {
        scoreComp++;
    } else if (elem.dataset.id == 'scissors' && computerChoice == 'paper') {
        scoreMine++;
    } else if (elem.dataset.id == 'scissors' && computerChoice == 'stone') {
        scoreComp++;
    }
    counter.innerText = `Your points: ${scoreMine}.\nComputer points: ${scoreComp}.\nTie: ${scoreTie}.`;
}

let pics = document.querySelectorAll('img');
pics.forEach(elem => {
    elem.addEventListener('click', choice);
})