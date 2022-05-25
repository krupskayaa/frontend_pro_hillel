var ships = ['1-a', '3-a', '4-a', '6-b', '2-c', '6-c', '2-d', '2-e', '6-f', '7-f', '8-f', '1-h', '2-h', '3-h', '4-h'];
var field = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];

function createBtn(tag, clName, text) {
    var btn = document.createElement(tag);
    btn.className = clName;
    btn.innerHTML = text;
    btn.setAttribute('data-id', text);
    var wrap = document.querySelector('.wrap');
    wrap.append(btn);
}

for (var i = 0; i < field.length; i++) {
    for(var j = 0; j < field.length; j++) {
        createBtn('button', 'btn', i+1 + '-' + field[j])
    }
}

function shot(e) {
    var elem = e.target;
    var check = elem.closest('.btn');
    if (check) {
        if (ships.includes(elem.dataset.id)) {
            alert('Попал!');
            elem.style.background = "green";
            elem.removeEventListener('click', shot);
        } else if (check && !ships.includes(elem.dataset.id)) {
            alert('Мимо!');
            elem.style.background = "red";
            elem.removeEventListener('click', shot);
        }     
    }
}

var btns = document.querySelectorAll('.btn');
btns.forEach(function(btn){
    btn.addEventListener('click', shot);
})
