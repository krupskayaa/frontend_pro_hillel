var body = document.body;

var wrapperElements = document.createElement('div');
body.prepend(wrapperElements);
wrapperElements.classList.add('wrapper-elements');

var cat = document.createElement('img');
cat.src = "img/cat.png";
wrapperElements.append(cat);
cat.classList.add('cat');

var mouse = document.createElement('img');
mouse.src = "img/mouse.png";
wrapperElements.prepend(mouse);
mouse.classList.add('mouse');

var square = document.createElement('div');
wrapperElements.prepend(square);
square.classList.add('square');

var timer = document.createElement('div');
wrapperElements.prepend(timer);
timer.classList.add('stop-watch');

var gameOver = document.createElement('div');
body.append(gameOver);
gameOver.classList.add('game-over');
gameOver.hidden = true;

var initialDate = new Date();

var stopWatch = setInterval (function () {
    var currentDate = new Date();
    var difference = new Date(currentDate - initialDate);
    var seconds = difference.getSeconds();
    var minutes = difference.getMinutes();
    if(minutes < 10) {
        minutes = '0' + minutes;
    }
    if(seconds < 10) {
        seconds = '0' + seconds;
    }
    timer.innerHTML = minutes + ':' + seconds;
}, 1000)

function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

body.addEventListener('mousemove', setCoordinates);

function setCoordinates (e){
    setObjectCoordinates(mouse, e.clientX, e.clientY, 'fixed');

    setTimeout(function() {
        setObjectCoordinates(cat, e.clientX, e.clientY, 'fixed');
    }, 2000)

    if(isMouseInSquare(e.clientX, e.clientY)) {
        body.removeEventListener('mousemove', setCoordinates);
    }
}

function setObjectCoordinates(object, l, t, position) {
    object.style.left = l - (object.offsetWidth / 2) + 'px';
    object.style.top = t - (object.offsetHeight / 2) + 'px';
    object.style.position = position;
}

var check = setInterval(function() {
    if(checkCoordination(mouse, cat)) {
        finishGame();
    }
}, 1000);

function finishGame() {
    clearInterval(makeSquare);
    clearInterval(check);
    clearInterval(stopWatch);
    wrapperElements.hidden = true;
    gameOver.innerHTML = 'Игра окончена!' + '\n' + 'Ваш результат: ' + timer.innerHTML;
    gameOver.hidden = false;
}

function checkCoordination(obj1, obj2) {
    return parseInt(obj1.style.top) + obj1.offsetHeight / 2
        === parseInt(obj2.style.top) + obj2.offsetHeight / 2
        && parseInt(obj1.style.left) + obj1.offsetWidth / 2
        === parseInt(obj2.style.left) + obj2.offsetWidth / 2;
}

var makeSquare = setInterval(function() {
    square.style.width = getRandomIntInclusive(50, 150) + 'px';
    square.style.height = getRandomIntInclusive(50, 150) + 'px';
    square.style.top = getRandomIntInclusive(0, window.innerHeight - parseInt(square.style.height)) + 'px';
    square.style.left = getRandomIntInclusive(0, window.innerWidth - parseInt(square.style.width)) + 'px';
}, 5000)

function isMouseInSquare (x, y) {
    return x >= parseInt(square.style.left)
        && x <= parseInt(square.style.left) + parseInt(square.style.width) 
        && (y >= parseInt(square.style.top) 
        && y <= parseInt(square.style.top) + parseInt(square.style.height));
}
