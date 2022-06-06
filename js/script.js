// Задача 1

var str1 = 'ahb acb aeb aeeb adcb axeb';
var reg1 = /\a.b/g;
console.log(reg1.test(str1));
console.log(str1.match(reg1));

// Задача 2

var str2 = '*+ *q+ *qq+ *qqq+ *qqq qqq+';
var reg2 = /\*\q{1,3}\+/g;
console.log(reg2.test(str2));
console.log(str2.match(reg2));

// Задача 3

var str3 = '2012/09/18 12:10';
var reg3 = /(100\d|10[1-9]\d|1[1-9]\d{2}|200\d|201[0-2])\/(0[1-9]|1[0-2])\/(0[1-9]|1\d|2\d|30)\s(0\d|1\d|2[0-4])\:(0\d|[1-5]\d)($|:(0\d|[1-5]\d))/g;
console.log(reg3.test(str3));
console.log(str3.match(reg3));

// Задача 4

var str4 = 'Extra   spaces.';
var str5 = 'Sentence.   Sentence.';

var reg4 = /((\s{2,})|\t)/
console.log(str4.replace(reg4, ' '));

var reg5 = /\.((\s{3,})|\t)/
console.log(str5.replace(reg5, '.  '));

