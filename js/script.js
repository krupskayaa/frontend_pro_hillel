//Задача 1

function makePassword(password){
    return function(){
        var pass = prompt('Введите пароль');
        return password === pass;
    }
}
var check = makePassword('fld3456');

console.log(check())

// Задача 2

function generator(){
    var result = [];
    return function(){
        do{
            number = Math.ceil(Math.random()*100);
        } while (result.includes(number) && result.length < 100)
        result.push(number);
        return number;
    }
}

var generate = generator();

console.log(generate());

// проверка задачи 2

for(var i = 0; i < 105; i++){
    console.log(generate());
}