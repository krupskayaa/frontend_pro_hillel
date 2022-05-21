// Задача 1

var elems = document.getElementsByClassName('zzz');

for(var i = 0; i < elems.length; i++) {
    elems[i].innerHTML = i;
}

// // Задача 2

var elems = document.body.childNodes;

for(var elem of elems) {
    if (elem.textContent.includes('www')) {
        elem.style.color = "blue";
    }
}

// Задача 3

var elems = document.getElementsByClassName('zzz');
var body = document.body;
var ul = document.createElement('ul');
body.prepend(ul);

for (var i = 0; i < elems.length; i++) {
    var li = document.createElement('li');
    ul.append(li);
    var content = elems[i].innerHTML;
    li.append(content);
}
