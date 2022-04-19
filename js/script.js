// вариант 1:

var sign = '';
for(var i = 0; i < 7; i++) {
    sign = sign + '#';
    console.log(sign);
}

// вариант 2: 

var str = '';
var summ = '';
for (var i = 0; i < 7; i++) {
    str = str + '#';
    summ = summ + str + '\n';
}

console.log(summ);

// вариант 3:

var sum = '';
for(var i = 0; i < 7; i++) {

    if(i == 0) {
        sum = sum + '#' + '\n';
    }

    if(i == 1) {
        for(j = 0; j < 2; j++) {
            sum = sum + '#'
        }
        sum = sum + '\n';
    }

    if(i == 2) {
        for(j = 0; j < 3; j++) {
            sum = sum + '#'
        }
        sum = sum + '\n';
    }

    if(i == 3) {
        for(j = 0; j < 4; j++) {
            sum = sum + '#'
        }
        sum = sum + '\n';
    }

    if(i == 4) {
        for(j = 0; j < 5; j++) {
            sum = sum + '#'
        }
        sum = sum + '\n';
    }

    if(i == 5) {
        for(j = 0; j < 6; j++) {
            sum = sum + '#'
        }
        sum = sum + '\n';
    }

    if(i == 6) {
        for(j = 0; j < 7; j++) {
            sum = sum + '#'
        }
        sum = sum + '\n';
    }
}

console.log(sum);