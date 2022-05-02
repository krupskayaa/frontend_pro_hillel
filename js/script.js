// Задача 1

var arr = [{name: 'Vasya', age: 24}, {name: 'Petya', age: 12}, {name: 'Fedya', age: 6}, {name: 'Ann', age: 18}, {name: 'Nastya', age: 40}];
arr.sort(function(a,b){
    return a.age - b.age
})
console.log(arr)


// Задача 2

var arr = [NaN, 0, 77, false, -17, '', undefined, 99, null];
function filterFalse(arr) {
    return arr.filter(function(item) {
        return item;
    })
}

console.log(filterFalse(arr));

// Задача 3

var arr = [0, 5, null, 10, 5];
function find(arr, value) {
    var result = [];
    for(var i = 0; i < arr.length; i++) {
        if(arr[i] === value) {
            result.push(i);
        }
    }
    return result;
}

console.log(find(arr, 5));

// Задача 4 

function createMatrix(row, col){
    var result = [];
    for(var i = 0; i < row; i++) {
        result.push([]);
        for(var j = 0; j < col; j++) {
            result[i].push(Math.ceil(Math.random()*100));
        }
    }
    return result;
}

console.log(createMatrix(5, 3));