const slides = ['https://picsum.photos/500/500', 'https://picsum.photos/600/600', 'https://picsum.photos/700/700'];

let body = document.body;
let slider = document.createElement('div');
slider.classList.add('slider');
slider.style.cssText = `position: relative;`;
body.append(slider);

let wrapItems = document.createElement('div');
wrapItems.classList.add('slider__items');
slider.append(wrapItems);

let divDots = document.createElement('div');
divDots.classList.add('slider__dots');
slider.append(divDots);

let ulItems = document.createElement('ul');
ulItems.classList.add('slider__list');
wrapItems.append(ulItems);

let arrowRight = document.createElement('button');
arrowRight.classList.add('slider__arrow', 'slider__arrow-next');
slider.append(arrowRight);

let imgR = document.createElement('img');
imgR.src = "img/arrow_right.svg";
arrowRight.append(imgR);

let arrowLeft = document.createElement('button');
arrowLeft.classList.add('slider__arrow', 'slider__arrow-prev');
slider.prepend(arrowLeft);

let imgL = document.createElement('img');
imgL.src = "img/arrow_left.svg";
arrowLeft.append(imgL);

for (let i = 0; i < slides.length; i++) {
    let dot = document.createElement('button');
    dot.classList.add('slider__button-dot');
    dot.setAttribute('data-id', i);
    divDots.append(dot);
    
    let liItems = document.createElement('li');
    ulItems.append(liItems);

    let item = document.createElement('img');
    item.classList.add('slider__img');
    item.src = slides[i];
    liItems.append(item);
}

const btnArrows = document.querySelectorAll('.slider__arrow');
const mover = document.querySelector('.slider__items ul');
const items = mover.querySelectorAll('li');
let count = 0;
items[count].classList.add('active');

const btnDots = document.querySelectorAll('.slider__button-dot');
btnDots[0].classList.add('active-dot');

const onMoveL = () => {
    const active = mover.querySelector('.active')
    const prev = active.previousElementSibling;
    const width = getComputedStyle(active).width;
    btnDots[count].classList.remove('active-dot');
    if(prev) {
        count--;
        active.classList.remove('active');
        prev.classList.add('active');
    } else {
        count = slides.length - 1;
        active.classList.remove('active');
        items[count].classList.add('active');
    }
    btnDots[count].classList.add('active-dot');
    mover.style.transform = `translateX(${-parseInt(width) * count}px)`;
}

const onMoveR = () => {
    const active = mover.querySelector('.active')
    const next = active.nextElementSibling;
    let width = 0;
    btnDots[count].classList.remove('active-dot');
    if(next) {
        width = getComputedStyle(next).width;
        count++;
        active.classList.remove('active');
        next.classList.add('active');
    } else {
        count = 0;
        active.classList.remove('active');
        items[count].classList.add('active');
    }
    btnDots[count].classList.add('active-dot');
    mover.style.transform = `translateX(${-parseInt(width) * count}px)`;
}

btnArrows.forEach(elem => {
    if(elem.classList.contains('slider__arrow-next')){
        elem.addEventListener('click', onMoveR);
    } else {
        elem.addEventListener('click', onMoveL);
    }
})

const onMoveDots = (e) => {
    const elem = e.target;
    check = elem.closest('.active-dot')
    if(!check){
        const activeDot = divDots.querySelector('.active-dot');
        elem.classList.add('active-dot');
        activeDot.classList.remove('active-dot');
        count = elem.dataset.id;
        const active = mover.querySelector('.active');
        active.classList.remove('active');
        items[count].classList.add('active');
        let width = getComputedStyle(active).width;
        mover.style.transform = `translateX(${-parseInt(width) * count}px)`;
    } 
}

btnDots.forEach(elem => {
    elem.addEventListener('click', onMoveDots);
})
