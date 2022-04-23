// Задача 1

while(!number1 || !number2) {

    var number1 = +prompt('Введите первое число');

    if (!number1) {
        alert('Первый ввод - не число');
        continue;
    }

    var number2 = +prompt('Введите второе число');

    if (!number2) {
        alert('Второй ввод - не число');
        continue;
    }
}

if(number1 === number2) {
    alert('Числа равны');
} else if (number1 < number2) {
    alert('Первое число меньше');
} else if (number1 > number2) {
    alert('Второе число меньше');
}

// Вариант решения задачи 1 с применением функции, но выполнение скрипта не прекращается, как в условии задачи:

function enterNumber(whichEnter, textNumber) {
    while(!number) {
        var number = +prompt('Введите ' + textNumber);

        if (!number) {
            alert(whichEnter + ' - не число');
            break;
        }
    }
    return number;
}

var number1 = enterNumber('Первый ввод', 'первое число');
var number2 = enterNumber('Второй ввод', 'второе число');

if(number1 === number2) {
    alert('Числа равны');
} else if (number1 < number2) {
    alert('Первое число меньше');
} else if (number1 > number2) {
    alert('Второе число меньше');
}

// Задача 2

function enterQuantity(maxNumber, text) {
    do {
        var result = +prompt('Введите ' + text);
        if(result >= maxNumber || result <= 0 || !result) {
            alert('Некорректно введено ' + text);
        }    
    } while(result >= maxNumber || result <= 0 || !result);

    return result;
}

var floorsQuantity = enterQuantity(26, 'колличество этажей');
var flatsQuantity = enterQuantity(21, 'колличество квартир на лестничной площадке');
var entranceQuantity = enterQuantity(11, 'колличество подъездов');

do {
    var flat = +prompt('Введите номер квартиры');
    if(flat > floorsQuantity * flatsQuantity * entranceQuantity || flat <= 0) {
        alert('В этом доме нет квартиры с таким номером');
    } else if (!flat) {
        alert('Вы ввели некорректные символы.' + '\n' + 'Доступен ввод только числовых символов.');
    }
} while(flat > floorsQuantity * flatsQuantity * entranceQuantity || !flat || flat <= 0);

for (var currentEntrance = 1; currentEntrance <= entranceQuantity; currentEntrance++) {

    var maxFlatNumber = flatsQuantity * floorsQuantity * currentEntrance;

    if (flat <= maxFlatNumber) {
      alert('Ваша квартира в подъезде номер: ' + currentEntrance);
    break;
    }
}

// Задача 3

function checkNumeric(num1, num2) {
    if (num1 % 2 !== 0 && num2 % 2 !== 0) {
        console.log(num1 + num2);
    } else if(typeof num1 === 'string') {
        console.log(num1 + ' Введено не число');
    } else if (num2 % 2 !== 0) {
        console.log(num2);
    } else if (num1 % 2 !== 0) {
        console.log(num1);
    } else {
        console.log(num1 * num2);
    }
}
checkNumeric(3, 3);

// Задача 4

function isRectangle (x1, y1, x2, y2, x3, y3, x4, y4) {
    return y1 === y2 && x2 === x3 && y3 === y4 && x4 === x1;
}

var x1 = +prompt('Введите x1');
var y1 = +prompt('Введите y1');
var x2 = +prompt('Введите x2');
var y2 = +prompt('Введите y2');
var x3 = +prompt('Введите x3');
var y3 = +prompt('Введите y3');
var x4 = +prompt('Введите x4');
var y4 = +prompt('Введите y4');

isRectangle(x1, y1, x2, y2, x3, y3, x4, y4) ? alert('Это прямоугольник') : alert('Это не прямоугольник');

// Задача 5

function getSequence(start = 0, step = 1) {
    var callNumber = start;
    return function() {
        var returnValue = callNumber;
        callNumber += step;
        return returnValue;
    }
}
  
var generator = getSequence(10, 3);
  
console.log(generator());
console.log(generator());

var generator2 = getSequence();

console.log(generator2());
console.log(generator2());
