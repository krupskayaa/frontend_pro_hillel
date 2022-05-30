var body = document.body;
var img = document.createElement('img');
img.src = "img/tank.gif";
body.append(img);
img.classList.add('tank');
var imgBullet = document.createElement('img');
imgBullet.src = "img/bullet.png";
body.append(imgBullet)
imgBullet.classList.add('bullet');
imgBullet.hidden = true;
var step = 10;
document.addEventListener('keydown', function (e){
    var tank = document.querySelector('.tank');
    var wTank = tank.getBoundingClientRect().width;
    var lTank = tank.getBoundingClientRect().left;
    var tTank = tank.getBoundingClientRect().top;
    console.log(e.code)
    if(e.code === "KeyD"){
        console.log(window.innerWidth, lTank)
        tank.style.left = lTank >= window.innerWidth - wTank - step
            ? window.innerWidth - wTank + 'px'
            : lTank + step + 'px'
        tank.style.transform = 'rotate(180deg)';
    } else if(e.code === "KeyA"){
        tank.style.left = lTank <= 0 ? 0 + 'px' : lTank - step + 'px'
        tank.style.transform = 'rotate(0deg)';
    } else if(e.code === "KeyW"){
        tank.style.top = tTank <= 0 ? 0 + 'px' : tTank - step + 'px'
        tank.style.transform = 'rotate(90deg)';
    } else if(e.code === "KeyS"){
        tank.style.transform = 'rotate(270deg)';
        console.log(tank.style.top, "-", tTank, "-", step, "-", tTank+step);
        tank.style.top = tTank >= window.innerHeight - wTank - step
            ? window.innerHeight - wTank + 'px'
            : tTank + step + 'px'
    } else if(e.code === "Space") {
        document.querySelector('.bullet').hidden = false;
    }
})

// var alarm = setInterval (function () {

// }, 1000)
