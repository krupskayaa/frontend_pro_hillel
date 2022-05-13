var enter = prompt('Введите время в формате (10:20, чч:мм), когда Вас разбудить');
var timeArray = enter.split(':');
var alarm = setInterval (function () {
    var date = new Date();
    var time = date.toLocaleTimeString()
    document.getElementById('block').innerHTML = time
    var hours = date.getHours();
    var minutes = date.getMinutes();
    if (timeArray[0] == hours && timeArray[1] == minutes) {
        alert('Вставайте!');
        clearInterval(alarm);
    }
}, 1000)