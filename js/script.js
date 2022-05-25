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

function createBtn(tag, clName) {
    var btn = document.createElement(tag);
    btn.className = clName;
    var wrap = document.querySelector('.game__wrap');
    wrap.append(btn);
}

for (var i = 0; i < field.length; i++) {
    createBtn('button', 'btn')
}

function move(e) {
    var elem = e.target;
    var check = elem.closest('.btn');
    if (check) {
        if (counter % 2 === 0) {
            elem.innerHTML = '0';
        } else {
            elem.innerHTML = 'x';
        }
    }
}

var btns = document.querySelectorAll('.btn');
btns.forEach(function(btn){
    btn.addEventListener('click', move);
})

var counter = 1;

// var btns = document.querySelectorAll('.btn');
// document.addEventListener('click', function (e){
//     var elem = e.target;
//     var check = elem.matches('.btn');
//     if (check) {
//         console.log(elem.dataset.id)
//     }
// })


// function move(e) {
//     var elem = e.target;
//     var check = elem.closest('.btn');
//     if (check) {
//         if (ships.includes(elem.dataset.id)) {
//             alert('Попал!');
//             elem.style.background = "green";
//             elem.removeEventListener('click', move);
//         } else if (check && !ships.includes(elem.dataset.id)) {
//             alert('Мимо!');
//             elem.style.background = "red";
//             elem.removeEventListener('click', move);
//         }     
//     }
// }