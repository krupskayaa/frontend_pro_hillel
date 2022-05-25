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



function createBtn(tag, clName, text) {
    var btn = document.createElement(tag);
    btn.className = clName;
    btn.innerHTML = text;
    btn.setAttribute('data-id', text);
    var wrap = document.querySelector('.game__wrap');
    wrap.append(btn);
}

for (var i = 0; i < field.length; i++) {
    createBtn('button', 'btn', field[i])
}

