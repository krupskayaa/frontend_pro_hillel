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
var imgFire = document.createElement('img');
imgFire.src = "img/fire.png";
body.append(imgFire);
imgFire.classList.add('fire');
imgFire.hidden = true;
var step = 10;
var bulletStep = 10;
var isShooting = false;
var bullet = document.querySelector('.bullet');
var tank = document.querySelector('.tank');
var fire = document.querySelector('.fire');
document.addEventListener('keydown', function (e){
    var wBullet = parseInt(getComputedStyle(bullet).width);
    var hFire = parseInt(getComputedStyle(fire).height);
    var wFire = parseInt(getComputedStyle(fire).width);
    var lTank = tank.getBoundingClientRect().left;
    var wTank = parseInt(getComputedStyle(tank).width);
    var tTank = parseInt(getComputedStyle(tank).top) || 0;
    var checkRightBorderScreen = lTank >= window.innerWidth - wTank - step;
    var checkBottomScreen = tTank >= window.innerHeight - wTank - step;
    if(e.code === "KeyD"){
        tank.style.left = checkRightBorderScreen
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
        tank.style.top = checkBottomScreen
            ? window.innerHeight - wTank + 'px'
            : tTank + step + 'px';
    } else if(e.code === "Space" && !isShooting) {
        isShooting = true;
        bullet.hidden = false;
        fire.hidden = false;
        if(tank.style.transform === 'rotate(180deg)'){
            bullet.style.transform = 'rotate(0deg)';
            bullet.style.left = lTank + wTank + 'px';
            bullet.style.top = tTank + 30 + 'px';
            fire.style.transform = 'rotate(90deg)';
            fire.style.left = lTank + wTank + 'px';
            fire.style.top = tTank + 30 + 'px';
            var shot = setInterval(function() {
                var lBullet = parseInt(getComputedStyle(bullet).left) || 0;
                bullet.style.left = lBullet + bulletStep +'px';
            }, 200);
            resetShot(shot);
        } else if(tank.style.transform === 'rotate(90deg)'){
            bullet.style.transform = 'rotate(270deg)';
            bullet.style.left = lTank + 16 + 'px';
            bullet.style.top = tTank - 50 - wBullet + 'px';
            fire.style.transform = 'rotate(0deg)';
            fire.style.left = lTank + 30 + 'px';
            fire.style.top = tTank - 50 - hFire + 'px';
            var shot = setInterval(function() {
                var tBullet = parseInt(getComputedStyle(bullet).top) || 0;
                bullet.style.top = tBullet - bulletStep +'px';
            }, 200);
            resetShot(shot);
        } else if(tank.style.transform === 'rotate(270deg)'){
            bullet.style.transform = 'rotate(90deg)';
            bullet.style.left = lTank + 13 + 'px';
            bullet.style.top = tTank + (wTank - 55) + 'px';
            fire.style.transform = 'rotate(180deg)';
            fire.style.left = lTank + 30 + 'px';
            fire.style.top = tTank + (wTank - 70) + 'px';
            var shot = setInterval(function() {
                var tBullet = parseInt(getComputedStyle(bullet).top) || 0;
                bullet.style.top = tBullet + bulletStep +'px';
            }, 200);
            resetShot(shot);
        } else if(tank.style.transform === 'rotate(0deg)'){
            bullet.style.transform = 'rotate(180deg)';
            bullet.style.top = tTank + 30 + 'px';
            bullet.style.left = lTank - wBullet + 'px';
            fire.style.transform = 'rotate(270deg)';
            fire.style.left = lTank - wFire + 'px';
            fire.style.top = tTank + 30 + 'px';
            var shot = setInterval(function() {
                var lBullet = parseInt(getComputedStyle(bullet).left) || 0;
                bullet.style.left = lBullet - bulletStep +'px';
            }, 200);
            resetShot(shot);
        }
    }
})

function resetShot(func) {
    setTimeout(function () {
        fire.hidden = true;
    }, 1000);
    setTimeout(function () {
        clearInterval(func);
        isShooting = false;
        bullet.hidden = true;
    }, 3000);
}
