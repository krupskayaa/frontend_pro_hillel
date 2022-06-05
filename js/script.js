var body = document.body;
var div = document.createElement('div');
body.append(div);
div.classList.add('wrapper');

//1
var title = createLabelInput('Название ');

//2
var price = createLabelInput('Цена ');

//3
var unit = createLabelInput('Единица измерения ');

//4
var description = createLabelInput('Описание ');

//5
var link = createLabelInput('Ссылка ');

function createLabelInput(title) {
    var label = document.createElement('label');
    var input = document.createElement('input');
    label.innerHTML = title;
    div.append(label);
    label.append(input);
    return input;
}

var inputSubmit = document.createElement('input');
inputSubmit.setAttribute('type', 'submit');
body.append(inputSubmit);
inputSubmit.innerHTML = 'Отправить';

inputSubmit.addEventListener('click', check);
function check() {
    var errors = '';

    var regTitle = /^.{0,25}$/;
    if(!regTitle.test(title.value)) {
        errors += 'Название не корректное\n';
    }
    title.value = checkCaps(title.value);
    
    var regPrice = /^\d{0,}($|[\.\,]{1}\d{1,2}$)/;
    if(!regPrice.test(price.value)) {
        errors += 'Цена не корректная\n';
    }

    var regUnit = /^(шт|кг|л|ед)$/;
    if(!regUnit.test(unit.value)) {
        errors += 'Единица измерения не корректная\n';
    }

    var regDescription = /^.{0,150}$/;
    if(!regDescription.test(description.value)) {
        errors += 'Описание не корректное\n';
    }
    description.value = checkCaps(description.value);

    var regLink = /^https:\/\//;
    if(!regLink.test(link.value)){
        link.value = 'https://' + link.value;
    }

    if(errors) {
        alert(errors);
    }
}

function checkCaps(sentence) {
    return sentence.replace(/([A-ZA-Я][A-ZA-Я]+|[A-ZA-Я])/g, function(match) {
        return match[0] + match.slice(1).toLowerCase();
    });
}