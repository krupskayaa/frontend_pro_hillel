while(sign !== '+' && sign !== "-" && sign !== "/" && sign !== "*"){
    var sign = prompt('Что вы хотите сделать (+ - / *) ?');
}

var quantity = 0;
while(quantity <= 1 || isNaN(quantity)){
    quantity = +prompt('Сколько операндов вы хотите использовать?');
}

var operand = 0;
var result = 0;
for(var i = 0; i < quantity; i++) {
    do {
        operand = prompt('Введите операнд ' + (i + 1));
    } while (operand === null || isNaN(+operand) || operand === '')

    if (i === 0) {
        result = +operand;
    } else {
        switch (sign) {
            case '+':
                result += +operand;
                break;
            case '-':
                result -= operand;
                break;
            case '/':
                result /= operand;
                break;
            case '*':
                result *= operand;
                break;
        }
    }
}

alert(result);