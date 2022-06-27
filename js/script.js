let body = document.body;

let container = document.createElement('div');
container.classList.add('container');
body.append(container);

let wrapperFields = document.createElement('div');
wrapperFields.classList.add('wrapper-fields');
container.append(wrapperFields);

for (let i = 0; i < 8; i++) {
    let field = document.createElement('div');
    field.classList.add('field');
    wrapperFields.append(field);
}

let fishka = document.createElement('img');
fishka.src = "img/fishka.png";
fishka.classList.add('fishka');
wrapperFields.append(fishka);

let cube = document.createElement('img');
cube.src = "img/1.png";
cube.classList.add('cube');
container.append(cube);

let btn = document.createElement('button');
btn.classList.add('btn-go');
btn.innerHTML = 'GO'
container.append(btn);

let randomInt = 1;
let fishkaPosition = 0;
let step = 110;
var style = parseInt(getComputedStyle(fishka).left);

console.log(style)
const setCubeNumber = () => {
    cube.src = `img/${randomInt}.png`;
}

let getRandomInt = (min, max) => {
    randomInt = Math.floor(Math.random() * (max - min + 1) + min);
    setCubeNumber()
}

const click = () => {
    getRandomInt(1, 6);
    console.log(style + randomInt * step + 'px');
    fishka.style.left = style + randomInt * step + 'px'};
    console.log(fishka.style.left)

btn.addEventListener('click', click);