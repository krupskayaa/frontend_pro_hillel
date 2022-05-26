var field = ['1', '2', '3', '4', '5', '6', '7', '8', '9'];

var body = document.body;
var game = document.createElement('div');
body.prepend(game);
game.classList.add('game');
var h1 = document.createElement('h1');
game.prepend(h1);
h1.classList.add('game__title');
h1.innerHTML = 'X vs O';
var wrap = document.createElement('div');
game.append(wrap);
wrap.classList.add('game__wrap');
var btnRestart = document.createElement('button');
game.append(btnRestart);
btnRestart.classList.add('game__btn-restart');
btnRestart.innerHTML = 'restart';

function createBtn(tag, clName, text) {
    var btn = document.createElement(tag);
    btn.className = clName;
    btn.setAttribute('data-id', text);
    var wrap = document.querySelector('.game__wrap');
    wrap.append(btn);
}

for (var i = 0; i < field.length; i++) {
    createBtn('button', 'game__btn', field[i])
}

var counter = 1;
var player1 = [];
var player2 = [];
var winCombinations = [
    ['1', '2', '3'],
    ['4', '5', '6'],
    ['7', '8', '9'],
    ['1', '4', '7'],
    ['2', '5', '8'],
    ['3', '6', '9'],
    ['1', '5', '9'],
    ['3', '5', '7']
]

function move(e) {
    e.target.removeEventListener('click', move);

    if (counter % 2 === 0) {
        e.target.innerHTML = '0';
        player2.push(e.target.dataset.id);
    } else {
        e.target.innerHTML = 'x';
        player1.push(e.target.dataset.id);
    }

    counter += 1;
    
    winCombinations.forEach(function(item) {
        if (compare(item, player1)) {
            alert('Победа за х');
            restart();
        } else if (compare(item, player2)) {
            alert('Победа за 0');
            restart()
        }
    });

    if (counter === 10) {
        alert('Ничья');
        restart();
        return;
    }
}

var btns = document.querySelectorAll('.game__btn');
btns.forEach(function(btn) {
    btn.addEventListener('click', move);
})

function compare(item, arr) {
    return item.every(function(elem) {
        return arr.includes(elem);
    });
}

function restart() {
    btns.forEach(function(btn) {
        btn.innerHTML = '';
        btn.addEventListener('click', move);
    })
    counter = 1;
    player1 = [];
    player2 = [];
}

var btn = document.querySelector('.game__btn-restart');
btn.addEventListener('click', restart);