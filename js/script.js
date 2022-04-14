// Задача 1

var min = +prompt('Задача 1. Введите число от 0 до 59');

if (min >= 0 && min <= 15){
    console.log('первая четверть часа')
} else if (min > 15 && min <= 30){
    console.log('вторая четверть часа')
} else if (min > 30 && min <= 45){
    console.log('третья четверть часа')
} else if (min > 45 && min <= 59){
    console.log('четвертая четверть часа')
}

// Задача 2

var a = prompt('Задача 2. Введите 1');

if (a === '1'){
    console.log('Верно')
} else {
    console.log('Неверно')
}

// Задача 3

var test = false;

if (!test){
    console.log('Верно')
} else {
    console.log('Неверно')
}

test = true;

!test ? console.log('Верно') : console.log('Неверно')

// Задача 4

var a = +prompt('Задача 4. Введите число больше 0 и меньше 5');

if (a > 0 && a < 5){
    console.log('Верно')
} else {
    console.log('Неверно')
}

// Задача 5

var num = +prompt('Задача 5. Введите 1, 2, 3 или 4');
var result;

if (num === 1){
    result = 'зима';
} else if (num === 2){
    result = 'весна';
} else if (num === 3){
    result = 'лето';
} else if (num === 4){
    result = 'осень';
}

console.log(result);